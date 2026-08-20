export type Locale = 'zh' | 'en';

export type ProductKey = 'pl8000' | 'energyStorage' | 'batterySwap';

export type ProductDetail = {
  name: string;
  eyebrow: string;
  code: string;
  category: string;
  summary: string;
  specs: Array<{ label: string; value: string }>;
  sections: Array<{
    title: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
};

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
    items: Array<{
      name: string;
      desc: string;
      imageAlt: string;
    }>;
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
    companyLabel: string;
    companyName: string;
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
      'Linked Power 提供 PL8000 电能质量监测与能源管理解决方案，支持电能数据采集、质量分析与智能诊断。',
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
        '依托 PL8000 电能质量监测仪，将配电系统数据、能耗趋势与异常情况实时转化为可执行的运营洞察，帮助企业提升供电可靠性、降低能源成本并推动智能运维升级。',
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
      title: '产品系列',
      items: [
        {
          name: 'PL8000 智能电力监测终端',
          desc: '让每一次异常无处遁形，让每一个事件可追溯。',
          imageAlt: 'PL8000 智能电力监测终端临时图片',
        },
        {
          name: '智能微电网储能EMS',
          desc: '让每一度电用得最经济、最绿色。',
          imageAlt: '智能微电网储能EMS临时图片',
        },
        {
          name: '智能移动设备换电系统',
          desc: '让每一秒都创造效益，让每一次换电都无缝接力。',
          imageAlt: '智能移动设备换电系统临时图片',
        },
      ],
    },
    cases: {
      tag: '案例',
      title: '食品包装产线升级项目（示例）',
      desc:
        '某制造企业在多条生产线并联运行时，持续出现电压波动与谐波扰动，影响设备稳定性与能耗管理。通过 PL8000 的实时监测与诊断能力，客户实现了异常定位效率提升和能效管理的可视化。',
      kpi1Label: '异常定位时间',
      kpi2Label: '电能质量风险识别',
      kpi3Label: '能耗管理透明度',
      kpi3Value: '显著提升',
    },
    downloads: {
      tag: '资料下载',
      title: '产品与技术资料',
      item1: 'PL8000 产品手册（PDF）',
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
      companyLabel: '公司名称：',
      companyName: '上海链能科技有限公司',
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
      'Linked Power provides PL8000 power quality monitoring and energy management solutions with data acquisition, quality analytics, and intelligent diagnostics.',
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
        'With PL8000 power quality monitoring, we transform distribution data, energy trends, and anomalies into actionable insights to improve power reliability, reduce energy cost, and accelerate smart O&M.',
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
      title: 'Product Line',
      items: [
        {
          name: 'PL8000 Smart Power Monitoring Terminal',
          desc: 'Make every anomaly visible and every event traceable.',
          imageAlt: 'Temporary image for PL8000 smart power monitoring terminal',
        },
        {
          name: 'Smart Microgrid Energy Storage EMS',
          desc: 'Make every kilowatt-hour more economical and greener.',
          imageAlt: 'Temporary image for smart microgrid energy storage EMS',
        },
        {
          name: 'Smart Mobile Equipment Battery-Swapping System',
          desc: 'Create value every second with seamless battery swapping.',
          imageAlt: 'Temporary image for smart mobile equipment battery-swapping system',
        },
      ],
    },
    cases: {
      tag: 'Case Study',
      title: 'Food Packaging Line Upgrade (Sample)',
      desc:
        'A manufacturer running multiple parallel production lines faced recurring voltage fluctuation and harmonic interference. With PL8000 real-time monitoring and diagnostics, they improved troubleshooting speed and gained clearer energy visibility.',
      kpi1Label: 'Issue Location Time',
      kpi2Label: 'Power Risk Detection',
      kpi3Label: 'Energy Transparency',
      kpi3Value: 'Significantly Improved',
    },
    downloads: {
      tag: 'Downloads',
      title: 'Product and Technical Materials',
      item1: 'PL8000 Product Brochure (PDF)',
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
      companyLabel: 'Company: ',
      companyName: 'Shanghai Linked Power Technology Co., Ltd.',
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

export const productDetails: Record<Locale, Record<ProductKey, ProductDetail>> = {
  zh: {
    energyStorage: {
      name: 'PaiLogicTM 智能微网储能EMS（能源管理系统）',
      eyebrow: '智能微电网储能 EMS',
      code: 'PL-EMS',
      category: '能源管理系统',
      summary:
        '面向工商业场景，覆盖“源—网—荷—储”全链路的智能能量管理与优化调度系统，帮助企业提升能源利用效率、降低用能成本。',
      specs: [
        { label: '适用场景', value: '零碳园区、数字工厂、智慧楼宇' },
        { label: '管理范围', value: '源—网—荷—储协同' },
        { label: '系统能力', value: '预测调控、动态优化、云边协同' },
      ],
      sections: [
        {
          title: '系统概述',
          paragraphs: [
            '在全球能源结构加速转型与“双碳”目标纵深推进的背景下，PaiLogicTM 智能微网储能EMS系统应运而生。系统深度融合物联网、大数据与先进控制算法，专为工商业场景打造。',
            '作为面向零碳园区、数字工厂及智慧楼宇的新一代 EMS 解决方案，系统支持光伏、储能、充电桩及可调负载等多类分布式资源的协同管控，通过预测性调控与动态策略优化平抑负荷波动、提升绿电消纳比例，并保障关键负载的供电可靠性。',
            '系统原生支持与企业现有 ERP、CRM 及工业 IoT 平台无缝集成，构建统一的企业能源与运营数字底座，并通过机器学习与智能分析引擎赋能生产排程、需求响应和碳资产管理。',
          ],
        },
        {
          title: '产品特征',
          bullets: ['全兼容，易扩展：支持微电网 EMS 与储能柜 EMS 模式，可适配任意品牌设备。', '多场景运营：支持多重运营场景和完整运维功能，覆盖手机端与 Web 端配置。', '云边协同：物模型快速适配需求，AI 云策略与本地控制无缝同步，并支持 OTA 升级。'],
        },
        {
          title: '核心功能',
          bullets: [
            '风光柴储多种设备协作：风光发电过剩时储能自动吸纳，负荷高峰时智能联调柴发补电，同时支持防逆流、负荷跟踪和实时最优调度。',
            '峰谷套利运行机制：融合实时电价与光伏、负荷预测，优先协同光伏消纳，实现储能收益最大化并降低弃光率。',
            'AI 加持：云端生成智能策略并下发本地安全验证执行，本地 AI 功率分配算法根据电柜 SOC、效率和设备使用时长进行实时优化与预测性维护。',
          ],
        },
      ],
    },
    pl8000: {
      name: 'PaiLogicTM PL8000 智能电力监测终端',
      eyebrow: 'PL8000 智能电力监测终端',
      code: 'PL8000',
      category: '电力监测终端',
      summary: '面向新型电力系统打造的高端电力监测终端，兼顾实时测控与多样化应用需求。',
      specs: [
        { label: '操作系统', value: 'Linux + RTOS' },
        { label: '显示屏', value: '640 × 480 彩色触摸屏' },
        { label: '数据存储', value: '8GB' },
        { label: '通信接口', value: 'RS485、Ethernet' },
      ],
      sections: [
        {
          title: '产品概述',
          paragraphs: [
            'PL8000 按照国际大公司产品标准精心打造，内嵌 Linux 和 RTOS 两套系统，同时满足实时测控和应用多样性的双重需求。',
          ],
        },
        {
          title: '基础功能',
          bullets: [
            '全电力参数测量，电力参数更新速率达到半波（10ms@50Hz）。',
            '对电能质量持续无间隙监测，记录电能质量事件发生的精确时间和数据。',
            '高分辨率彩色触摸显示屏，分辨率 640×480 像素。',
            '8GB 数据存储，可长周期存储细时间颗粒度历史数据。',
            '支持历史趋势、分时电能累计、电能质量事件等多种可配置参数记录。',
            '支持多达 20 个阈值比较器单元和 40 个布尔运算单元，可配置任意报警和保护逻辑。',
            '支持 RS485 和 Ethernet 通讯网络及多种通讯协议。',
          ],
        },
        {
          title: '可选增强功能',
          bullets: [
            '可配置扩展数字和模拟 I/O 模块，例如温度监测。',
            '支持 PTP（IEEE 588）微秒级精确时间同步。',
            '支持电能质量事件、外部数字信号、用户指令及同步录波等多种录波触发模式。',
            '支持 PMU（Phasor Measurement Unit）同步相量测量单元。',
            '支持嵌入式软 PLC，按现场需求编写测控逻辑，实现实时本地测控。',
            '支持 AI 模型预测与控制，由终端内置 GPU 提供增强算力。',
          ],
        },
        { title: '定制功能', paragraphs: ['可根据用户现场需求定制功能。'] },
      ],
    },
    batterySwap: {
      name: '移动设备换电站系统',
      eyebrow: '智能移动设备换电系统',
      code: 'PL-BSS',
      category: '移动设备能源系统',
      summary: '集智能充电与快速换电于一体，为移动机器人、AGV、电动叉车等设备提供 7×24 小时不间断能源保障。',
      specs: [
        { label: '适用设备', value: '移动机器人、AGV、电动叉车' },
        { label: '核心能力', value: '智能充电、快速换电、远程运维' },
        { label: '系统协同', value: '支持与微电网 EMS 联动' },
      ],
      sections: [
        {
          title: '系统概述',
          paragraphs: [
            '在移动设备高频运转的今天，动力中断意味着效率折损、运维成本攀升，甚至业务中断。移动设备电池站控制系统正是为解决这一痛点而生，通过高度协同的软硬件架构，为各类移动设备持续供能。',
            '系统以电池管理系统（BMS）为核心感知层，实时采集每块电池的电压、电流、温度及剩余容量，结合功率分配器与主控板实现充电过程的毫秒级动态调控，避免过充过放，并根据电池老化特性自适应调整充放电曲线，延长电池循环寿命。',
            '主控板与云端服务器保持双向数据同步，电池健康状态（SOH）、充电记录和故障预警均可远程可视化管理，运维人员无需到场即可掌握全局。',
          ],
        },
        {
          title: '系统协同与应用',
          paragraphs: [
            '移动设备电池站系统可通过标准通信协议与微电网能源管理系统（EMS）深度联动，根据电网负荷、电价时段或光伏出力智能调度充电功率与换电节奏，削峰填谷并降低用能成本。',
            '无论是单站独立部署还是多站集群管理，系统都能以稳定、精准、经济的表现，成为移动设备车队可靠的能源大脑。',
          ],
        },
      ],
    },
  },
  en: {
    energyStorage: {
      name: 'PaiLogic Smart Microgrid Energy Storage EMS',
      eyebrow: 'Smart Microgrid Energy Storage EMS',
      code: 'PL-EMS',
      category: 'Energy Management System',
      summary: 'An intelligent energy management and dispatching system for commercial and industrial sites, covering the complete source-grid-load-storage chain.',
      specs: [
        { label: 'Applications', value: 'Zero-carbon parks, digital factories, smart buildings' },
        { label: 'Management scope', value: 'Source-grid-load-storage coordination' },
        { label: 'Capabilities', value: 'Predictive control, optimization, cloud-edge collaboration' },
      ],
      sections: [
        { title: 'Overview', paragraphs: ['PaiLogic Smart Microgrid Energy Storage EMS combines IoT, big data, and advanced control algorithms for commercial and industrial energy management.', 'Designed for zero-carbon parks, digital factories, and smart buildings, it coordinates PV, storage, chargers, and flexible loads through predictive control and dynamic strategy optimization.', 'Native ERP, CRM, and industrial IoT integration breaks data silos and supports AI-driven production scheduling, demand response, and carbon asset management.'] },
        { title: 'Product Features', bullets: ['Full compatibility and extensibility for microgrid EMS and storage cabinet EMS modes.', 'Multi-scenario operation with complete O&M functions across mobile and Web interfaces.', 'Cloud-edge collaboration with fast asset-model adaptation, synchronized AI strategies, and OTA upgrades.'] },
        { title: 'Core Functions', bullets: ['Coordinates wind, solar, diesel, storage, loads, and chargers with anti-backflow, load following, and optimal dispatch.', 'Uses time-of-use arbitrage with real-time price, PV, and load forecasts to maximize storage returns and PV consumption.', 'Applies cloud-edge AI for secure strategy execution, power allocation optimization, and predictive maintenance.'] },
      ],
    },
    pl8000: {
      name: 'PaiLogic PL8000 Smart Power Monitoring Terminal',
      eyebrow: 'PL8000 Smart Power Monitoring Terminal',
      code: 'PL8000',
      category: 'Power Monitoring Terminal',
      summary: 'A premium power monitoring terminal designed for modern power systems, combining real-time control with flexible application capabilities.',
      specs: [
        { label: 'Operating system', value: 'Linux + RTOS' },
        { label: 'Display', value: '640 × 480 color touch display' },
        { label: 'Storage', value: '8 GB' },
        { label: 'Communication', value: 'RS485, Ethernet' },
      ],
      sections: [
        { title: 'Overview', paragraphs: ['Built to international product standards, PL8000 embeds both Linux and RTOS to support real-time measurement and diverse applications.'] },
        { title: 'Base Functions', bullets: ['Full electrical parameter measurement with half-wave updates (10 ms at 50 Hz).', 'Continuous power quality monitoring with precise event timestamps and data recording.', 'High-resolution 640×480 color touch display.', '8 GB storage for long-term, fine-grained historical data.', 'Configurable historical trends, time-of-use energy totals, and power quality events.', 'Up to 20 threshold comparators and 40 Boolean operators for alarm and protection logic.', 'RS485 and Ethernet networking with multiple communication protocols.'] },
        { title: 'Optional Enhancements', bullets: ['Expandable digital and analog I/O modules, including temperature monitoring.', 'Microsecond-accurate PTP time synchronization (IEEE 588).', 'Multiple waveform-recording triggers, including power quality events, digital signals, user commands, and synchronized recording.', 'PMU synchronous phasor measurement unit.', 'Embedded soft PLC for real-time local control logic.', 'AI model prediction and control powered by the terminal GPU.'] },
        { title: 'Customization', paragraphs: ['Functions can be customized for specific site requirements.'] },
      ],
    },
    batterySwap: {
      name: 'Mobile Equipment Battery-Swapping Station System',
      eyebrow: 'Smart Mobile Equipment Battery-Swapping System',
      code: 'PL-BSS',
      category: 'Mobile Equipment Energy System',
      summary: 'An integrated smart charging and rapid battery-swapping system providing uninterrupted 24/7 energy support for mobile robots, AGVs, and electric forklifts.',
      specs: [
        { label: 'Applications', value: 'Mobile robots, AGVs, electric forklifts' },
        { label: 'Core capabilities', value: 'Smart charging, rapid swapping, remote O&M' },
        { label: 'Integration', value: 'Microgrid EMS integration supported' },
      ],
      sections: [
        { title: 'Overview', paragraphs: ['For high-frequency mobile equipment, power interruption means lost efficiency, rising O&M costs, and possible business interruption. This battery-station control system solves that problem through coordinated hardware and software.', 'The BMS continuously collects voltage, current, temperature, and remaining capacity for every battery. A power distributor and main controller dynamically regulate charging in milliseconds, prevent overcharge and over-discharge, and adapt charging curves to battery aging.', 'The controller synchronizes two-way data with the cloud. Battery SOH, charging records, and fault warnings are visualized remotely, allowing operators to manage the station without being on site.'] },
        { title: 'System Integration and Applications', paragraphs: ['Through standard protocols, the station integrates with microgrid EMS to schedule charging power and swapping cycles according to grid load, time-of-use prices, and PV output.', 'Whether deployed as a standalone station or a multi-station cluster, it becomes a stable, precise, and economical energy brain for mobile equipment fleets.'] },
      ],
    },
  },
};
