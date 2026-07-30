export type Locale = 'zh' | 'en';

export type HomeContent = {
  htmlLang: string;
  metaDescription: string;
  nav: {
    home: string;
    about: string;
    products: string;
    cases: string;
    downloads: string;
    contact: string;
    cta: string;
  };
  about: {
    title: string;
    desc: string;
    ctaConsult: string;
    ctaProduct: string;
    videoTag: string;
    videoFallback: string;
    kpiCoverageLabel: string;
    kpiCoverageValue: string;
    kpiTroubleshootLabel: string;
    kpiTroubleshootValue: string;
    kpiInsightLabel: string;
    kpiInsightValue: string;
  };
  products: {
    tag: string;
    title: string;
    name: string;
    desc: string;
    feature1: string;
    feature2: string;
    feature3: string;
    imageAlt: string;
  };
  cases: {
    tag: string;
    title: string;
    desc: string;
    kpi1Label: string;
    kpi2Label: string;
    kpi3Label: string;
    kpi3Value: string;
  };
  downloads: {
    tag: string;
    title: string;
    item1: string;
    meta1: string;
    item2: string;
    meta2: string;
    item3: string;
    meta3: string;
  };
  contact: {
    tag: string;
    titleLine1: string;
    titleLine2: string;
    salesLabel: string;
    supportLabel: string;
    emailLabel: string;
    addressLabel: string;
    addressValue: string;
    formTitle: string;
    formNameLabel: string;
    formPhoneLabel: string;
    formCompanyLabel: string;
    formMessageLabel: string;
    formSubmit: string;
    formCancel: string;
    formSubmitting: string;
    formSuccess: string;
    formError: string;
  };
  footer: {
    copyright: string;
  };
};

export const homeContent: Record<Locale, HomeContent> = {
  zh: {
    htmlLang: 'zh-CN',
    metaDescription:
      'Linked Power 提供 PM8000 电能质量监测与能源管理解决方案，支持电能数据采集、质量分析与智能诊断。',
    nav: {
      home: '首页',
      about: '关于我们',
      products: '产品系列',
      cases: '案例',
      downloads: '资料下载',
      contact: '联系我们',
      cta: '立即咨询',
    },
    about: {
      title: '我们交付的不只是监测数据，而是可衡量的能源管理价值',
      desc:
        '依托 PM8000 电能质量监测仪，将配电系统数据、能耗趋势与异常情况实时转化为可执行的运营洞察，帮助企业提升供电可靠性、降低能源成本并推动智能运维升级。',
      ctaConsult: '立即咨询',
      ctaProduct: '查看产品',
      videoTag: '宣传视频',
      videoFallback: '您的浏览器不支持视频播放。',
      kpiCoverageLabel: '电能数据覆盖',
      kpiCoverageValue: '100%',
      kpiTroubleshootLabel: '异常定位效率',
      kpiTroubleshootValue: '2x',
      kpiInsightLabel: '能源洞察实时性',
      kpiInsightValue: '实时',
    },
    products: {
      tag: '产品系列',
      title: '核心产品：PM8000 电能质量监测仪',
      name: 'PM8000 电能质量监测仪',
      desc:
        '面向关键配电系统与高耗能生产环境，PM8000 提供从设备级数据采集到系统级质量分析的一体化监测能力，帮助企业建立可追溯、可优化的能源管理闭环。',
      feature1: '覆盖电压、电流、频率、谐波等关键参数，提升能源使用透明度',
      feature2: '实时识别电压波动、谐波风险与异常工况，快速定位潜在隐患',
      feature3: '开放式通信接口，便于与能源管理系统、SCADA 与运维平台联动',
      imageAlt: 'PM8000 电能质量监测仪',
    },
    cases: {
      tag: '案例',
      title: '食品包装产线升级项目（示例）',
      desc:
        '某制造企业在多条生产线并联运行时，持续出现电压波动与谐波扰动，影响设备稳定性与能耗管理。通过 PM8000 的实时监测与诊断能力，客户实现了异常定位效率提升和能效管理的可视化。',
      kpi1Label: '异常定位时间',
      kpi2Label: '电能质量风险识别',
      kpi3Label: '能耗管理透明度',
      kpi3Value: '显著提升',
    },
    downloads: {
      tag: '资料下载',
      title: '产品与技术资料',
      item1: 'PM8000 产品手册（PDF）',
      meta1: '版本 2026.07 · 12MB',
      item2: '电能质量诊断与应用白皮书（PDF）',
      meta2: '版本 2026.04 · 8MB',
      item3: '系统接入与部署指南（PDF）',
      meta3: '版本 2026.06 · 15MB',
    },
    contact: {
      tag: '联系我们',
      titleLine1: '从配电需求到能源优化，',
      titleLine2: '我们为您提供专业技术支持与解决方案',
      salesLabel: '销售咨询：',
      supportLabel: '技术支持：',
      emailLabel: '邮箱：',
      addressLabel: '地址：',
      addressValue: '上海市临港南桥科技城 29栋 505 室',
      formTitle: '提交需求，我们将尽快联系您',
      formNameLabel: '姓名',
      formPhoneLabel: '电话',
      formCompanyLabel: '公司（可选）',
      formMessageLabel: '需求说明',
      formSubmit: '提交咨询',
      formCancel: '取消',
      formSubmitting: '提交中...',
      formSuccess: '提交成功，我们会尽快与您联系。',
      formError: '提交失败，请稍后重试。',
    },
    footer: {
      copyright: '© 2026 Linked Power. All Rights Reserved.',
    },
  },
  en: {
    htmlLang: 'en',
    metaDescription:
      'Linked Power provides PM8000 power quality monitoring and energy management solutions with data acquisition, quality analytics, and intelligent diagnostics.',
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      cases: 'Cases',
      downloads: 'Downloads',
      contact: 'Contact',
      cta: 'Consult Now',
    },
    about: {
      title: 'We Deliver More Than Monitoring Data, We Deliver Measurable Energy Value',
      desc:
        'With PM8000 power quality monitoring, we transform distribution data, energy trends, and anomalies into actionable insights to improve power reliability, reduce energy cost, and accelerate smart O&M.',
      ctaConsult: 'Consult Now',
      ctaProduct: 'View Product',
      videoTag: 'Promo Video',
      videoFallback: 'Your browser does not support video playback.',
      kpiCoverageLabel: 'Power Data Coverage',
      kpiCoverageValue: '100%',
      kpiTroubleshootLabel: 'Troubleshooting Efficiency',
      kpiTroubleshootValue: '2x',
      kpiInsightLabel: 'Insight Latency',
      kpiInsightValue: 'Real-time',
    },
    products: {
      tag: 'Product Line',
      title: 'Flagship Product: PM8000 Power Quality Monitor',
      name: 'PM8000 Power Quality Monitor',
      desc:
        'Designed for mission-critical distribution systems and energy-intensive operations, PM8000 offers integrated monitoring from device-level acquisition to system-level quality analytics, enabling a traceable and optimizable energy management loop.',
      feature1: 'Covers voltage, current, frequency, harmonics, and more to increase energy transparency',
      feature2: 'Detects voltage fluctuations, harmonic risks, and abnormal conditions in real time',
      feature3: 'Open communication interfaces for EMS, SCADA, and O&M platform integration',
      imageAlt: 'PM8000 power quality monitor',
    },
    cases: {
      tag: 'Case Study',
      title: 'Food Packaging Line Upgrade (Sample)',
      desc:
        'A manufacturer running multiple parallel production lines faced recurring voltage fluctuation and harmonic interference. With PM8000 real-time monitoring and diagnostics, they improved troubleshooting speed and gained clearer energy visibility.',
      kpi1Label: 'Issue Location Time',
      kpi2Label: 'Power Risk Detection',
      kpi3Label: 'Energy Transparency',
      kpi3Value: 'Significantly Improved',
    },
    downloads: {
      tag: 'Downloads',
      title: 'Product and Technical Materials',
      item1: 'PM8000 Product Brochure (PDF)',
      meta1: 'Version 2026.07 · 12MB',
      item2: 'Power Quality Diagnostic White Paper (PDF)',
      meta2: 'Version 2026.04 · 8MB',
      item3: 'System Integration and Deployment Guide (PDF)',
      meta3: 'Version 2026.06 · 15MB',
    },
    contact: {
      tag: 'Contact Us',
      titleLine1: 'From Distribution Requirements to Energy Optimization,',
      titleLine2: 'We Provide Professional Technical Support and Solutions',
      salesLabel: 'Sales: ',
      supportLabel: 'Support: ',
      emailLabel: 'Email: ',
      addressLabel: 'Address: ',
      addressValue: 'Room 505, Building 29, Lingang Nanqiao Tech City, Shanghai',
      formTitle: 'Tell us your requirements and we will contact you soon',
      formNameLabel: 'Name',
      formPhoneLabel: 'Phone',
      formCompanyLabel: 'Company (Optional)',
      formMessageLabel: 'Message',
      formSubmit: 'Submit Inquiry',
      formCancel: 'Cancel',
      formSubmitting: 'Submitting...',
      formSuccess: 'Submitted successfully. We will contact you soon.',
      formError: 'Submission failed. Please try again later.',
    },
    footer: {
      copyright: '© 2026 Linked Power. All Rights Reserved.',
    },
  },
};
