import type { APIRoute } from 'astro';

export const prerender = false;

function badRequest(message: string) {
  return new Response(JSON.stringify({ ok: false, message }), {
    status: 400,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const webhook = "https://open.feishu.cn/open-apis/bot/v2/hook/ba6f551a-6828-4db0-b512-479ae2eab1b4";

  if (!webhook) {
    return new Response(JSON.stringify({ ok: false, message: 'missing_webhook' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  let body: {
    locale?: string;
    name?: string;
    phone?: string;
    company?: string;
    message?: string;
    website?: string;
  };

  try {
    body = await request.json();
  } catch {
    return badRequest('invalid_json');
  }

  const locale = (body.locale || 'zh').toLowerCase() === 'en' ? 'en' : 'zh';
  const name = String(body.name || '').trim();
  const phone = String(body.phone || '').trim();
  const company = String(body.company || '').trim();
  const message = String(body.message || '').trim();
  const website = String(body.website || '').trim();

  if (website) {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  if (!name || !phone || !message) {
    return badRequest('missing_required_fields');
  }

  const title = locale === 'en' ? 'Website Inquiry' : '官网咨询提交';
  const companyText = company || (locale === 'en' ? 'N/A' : '未填写');
  const ipText = clientAddress || (locale === 'en' ? 'Unknown' : '未知');

  const text = [
    `${title}`,
    `----------------`,
    `${locale === 'en' ? 'Name' : '姓名'}: ${name}`,
    `${locale === 'en' ? 'Phone' : '电话'}: ${phone}`,
    `${locale === 'en' ? 'Company' : '公司'}: ${companyText}`,
    `${locale === 'en' ? 'Message' : '需求'}: ${message}`,
    `IP: ${ipText}`,
    `${locale === 'en' ? 'Time' : '时间'}: ${new Date().toISOString()}`,
  ].join('\n');

  const feishuResponse = await fetch(webhook, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      msg_type: 'text',
      content: {
        text,
      },
    }),
  });

  if (!feishuResponse.ok) {
    return new Response(JSON.stringify({ ok: false, message: 'feishu_push_failed' }), {
      status: 502,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
