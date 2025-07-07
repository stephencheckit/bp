export type Language = 'en' | 'de';

export interface Translations {
  // Navigation
  nav: {
    overview: string;
    partnership: string;
    futureVision: string;
    ecosystem: string;
    stakeholders: string;
    roi: string;
    contact: string;
    language: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    save: string;
    cancel: string;
    submit: string;
    email: string;
    phone: string;
    name: string;
    company: string;
    message: string;
    location: string;
  };

  // Overview page
  overview: {
    title: string;
    subtitle: string;
    welcomeMessage: string;
    badges: {
      partnershipFocus: string;
      globalReach: string;
      strategicAlignment: string;
    };
    metrics: {
      ukLocations: string;
      ukLocationsDesc: string;
      germanyOpportunity: string;
      germanyOpportunityDesc: string;
      germanSites: string;
      germanSitesDesc: string;
      roiGrowth: string;
      roiGrowthDesc: string;
    };
    sections: {
      partnershipTitle: string;
      partnershipDesc: string;
      partnershipContent: string;
      futureVisionTitle: string;
      futureVisionDesc: string;
      futureVisionContent: string;
    };
    updates: {
      title: string;
      desc: string;
      review: string;
      reviewDesc: string;
      expansion: string;
      expansionDesc: string;
      alignment: string;
      alignmentDesc: string;
    };
  };

  // Partnership page
  partnership: {
    title: string;
    subtitle: string;
    badges: {
      ukSites: string;
      provenSuccess: string;
      growingPartnership: string;
    };
    metrics: {
      activeLocations: string;
      activeLocationsDesc: string;
      systemUptime: string;
      systemUptimeDesc: string;
      staffTrained: string;
      staffTrainedDesc: string;
    };
    technology: {
      title: string;
      desc: string;
      temperatureMonitoring: string;
      temperatureDesc: string;
      assetTracking: string;
      assetDesc: string;
      predictiveAnalytics: string;
      predictiveDesc: string;
      complianceReporting: string;
      complianceDesc: string;
    };
    successStories: {
      title: string;
      desc: string;
      manchester: string;
      manchesterDesc: string;
      m25: string;
      m25Desc: string;
      highlands: string;
      highliandsDesc: string;
    };
    performanceMetrics: {
      annualSavings: string;
      downtimeReduction: string;
      complianceRate: string;
      monitoring: string;
    };
  };

  // Future Vision page
  futureVision: {
    title: string;
    subtitle: string;
    badges: {
      opportunity: string;
      sites: string;
      strategicGrowth: string;
    };
    opportunity: {
      revenueOpportunity: string;
      revenueDesc: string;
      targetLocations: string;
      locationsDesc: string;
      monthRollout: string;
      rolloutDesc: string;
    };
    marketAnalysis: {
      title: string;
      desc: string;
      characteristics: string;
      advantages: string;
      largestMarket: string;
      strictRegulations: string;
      digitalDemand: string;
      operationalFocus: string;
      provenTrackRecord: string;
      existingPartnership: string;
      scalableTechnology: string;
      germanSupport: string;
    };
    roadmap: {
      title: string;
      desc: string;
      phase1: string;
      phase1Desc: string;
      phase2: string;
      phase2Desc: string;
      phase3: string;
      phase3Desc: string;
    };
    projections: {
      revenueTitle: string;
      revenueDesc: string;
      teamTitle: string;
      teamDesc: string;
      year1: string;
      year2: string;
      year3: string;
      threeYearTotal: string;
      customerSuccess: string;
      technicalSupport: string;
      technicians: string;
      regionalManager: string;
      totalHires: string;
    };
    successMetrics: {
      title: string;
      desc: string;
      uptimeTarget: string;
      customerSatisfaction: string;
      costReduction: string;
      monthDeployment: string;
    };
    cta: {
      title: string;
      desc: string;
      viewBusinessCase: string;
      scheduleReview: string;
    };
  };

  // Ecosystem page
  ecosystem: {
    title: string;
    subtitle: string;
    badges: {
      comprehensive: string;
      scalable: string;
      innovative: string;
    };
    stats: {
      uptime: string;
      sensors: string;
      data: string;
      sites: string;
    };
    platform: {
      title: string;
      desc: string;
      sensors: string;
      sensorsDesc: string;
      cloud: string;
      cloudDesc: string;
      mobile: string;
      mobileDesc: string;
    };
    features: {
      title: string;
      desc: string;
      monitoring: string;
      analytics: string;
      automation: string;
      reporting: string;
    };
    integrations: {
      title: string;
      desc: string;
      sap: string;
      microsoft: string;
      salesforce: string;
      slack: string;
    };
  };

  // Stakeholders page
  stakeholders: {
    title: string;
    subtitle: string;
    bp: {
      title: string;
      sarah: string;
      sarahRole: string;
      marcus: string;
      marcusRole: string;
      david: string;
      davidRole: string;
    };
    checkit: {
      title: string;
      april: string;
      aprilRole: string;
      tom: string;
      tomRole: string;
      lisa: string;
      lisaRole: string;
    };
    governance: {
      title: string;
      structure: string;
      meetings: string;
      escalation: string;
      communication: string;
    };
    contact: {
      title: string;
      emergency: string;
      business: string;
      technical: string;
    };
  };

  // ROI page
  roi: {
    title: string;
    subtitle: string;
    current: {
      title: string;
      roi: string;
      savings: string;
      breakdown: string;
    };
    calculator: {
      title: string;
      desc: string;
      investment: string;
      returns: string;
      netRoi: string;
    };
    benefits: {
      title: string;
      operational: string;
      financial: string;
      strategic: string;
    };
    projections: {
      title: string;
      fiveYear: string;
      totalValue: string;
    };
  };

  // Contact page
  contact: {
    title: string;
    subtitle: string;
    form: {
      title: string;
      desc: string;
      success: string;
      error: string;
    };
    team: {
      title: string;
      april: string;
      aprilRole: string;
      tom: string;
      tomRole: string;
    };
    feedback: {
      title: string;
      desc: string;
      strategic: string;
      operational: string;
      technical: string;
    };
    offices: {
      title: string;
      london: string;
      berlin: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      overview: "Overview",
      partnership: "Partnership",
      futureVision: "Future Vision",
      ecosystem: "Ecosystem",
      stakeholders: "Stakeholders",
      roi: "ROI & Value",
      contact: "Contact",
      language: "Language",
    },
    common: {
      loading: "Loading...",
      error: "Error",
      save: "Save",
      cancel: "Cancel",
      submit: "Submit",
      email: "Email",
      phone: "Phone",
      name: "Name",
      company: "Company",
      message: "Message",
      location: "Location",
    },
    overview: {
      title: "Welcome to the Checkit & BP Private Microsite",
      subtitle: "Explore our strategic partnership through shared knowledge, radical transparency, and strategic alignment.",
      welcomeMessage: "Hello, {email}! Explore our strategic partnership through shared knowledge, radical transparency, and strategic alignment.",
      badges: {
        partnershipFocus: "Partnership Focus",
        globalReach: "Global Reach",
        strategicAlignment: "Strategic Alignment",
      },
      metrics: {
        ukLocations: "UK Locations",
        ukLocationsDesc: "Active BP locations",
        roiGrowth: "ROI Growth",
        roiGrowthDesc: "Projected increase",
      },
      sections: {
        partnershipTitle: "Partnership Highlights",
        partnershipDesc: "Explore our current UK partnership success and proven track record",
        partnershipContent: "Discover how Checkit has transformed BP&apos;s operations across 840 UK locations with cutting-edge IoT technology.",
        futureVisionTitle: "Future Vision",
        futureVisionDesc: "Germany expansion opportunity and strategic roadmap",
        futureVisionContent: "Explore the €2.4M opportunity across 1,200 German sites and our strategic expansion plan.",
      },
      updates: {
        title: "Recent Updates",
        desc: "Latest developments in our partnership",
        review: "Partnership Review Complete",
        reviewDesc: "Q4 2024 performance metrics exceeded expectations",
        expansion: "Germany Expansion Planning",
        expansionDesc: "Strategic roadmap development in progress",
        alignment: "Stakeholder Alignment",
        alignmentDesc: "Regular check-ins scheduled for January 2025",
      },
    },
    partnership: {
      title: "Partnership Highlights",
      subtitle: "Discover how Checkit has transformed BP&apos;s UK operations with innovative IoT solutions across 840 locations",
      badges: {
        ukSites: "840 UK Sites",
        provenSuccess: "Proven Success",
        growingPartnership: "Growing Partnership",
      },
      metrics: {
        activeLocations: "Active UK Locations",
        activeLocationsDesc: "BP sites actively monitored with Checkit IoT solutions",
      },
      technology: {
        title: "Technology Solutions",
        desc: "Cutting-edge IoT technologies powering BP&apos;s UK operations",
        temperatureMonitoring: "Temperature Monitoring",
        temperatureDesc: "Real-time temperature tracking across all refrigeration units",
        assetTracking: "Asset Tracking",
        assetDesc: "Location-based monitoring and maintenance scheduling",
        predictiveAnalytics: "Predictive Analytics",
        predictiveDesc: "AI-powered insights for proactive maintenance",
        complianceReporting: "Compliance Reporting",
        complianceDesc: "Automated compliance documentation and reporting",
      },
      successStories: {
        title: "Success Stories",
        desc: "Real-world impact across BP&apos;s UK network",
        manchester: "Regional Distribution Center - Manchester",
        manchesterDesc: "Reduced equipment downtime by 35% through predictive maintenance, saving over £50,000 annually in emergency repairs.",
        m25: "M25 Service Stations Network",
        m25Desc: "Improved food safety compliance from 87% to 99.8% across 45 locations, eliminating regulatory violations.",
        highlands: "Scottish Highlands Operations",
        highliandsDesc: "Enabled remote monitoring of 60 remote locations, reducing site visits by 60% while improving response times.",
      },
      performanceMetrics: {
        monitoring: "Monitoring",
      },
    },
    futureVision: {
      title: "Future Vision: Germany Expansion",
      subtitle: "Unlock the €2.4M annual opportunity across 1,200 German BP locations with proven Checkit technology",
      badges: {
        opportunity: "€2.4M Opportunity",
        sites: "1,200 Sites",
        strategicGrowth: "Strategic Growth",
      },
      opportunity: {
        revenueOpportunity: "Annual Revenue Opportunity",
        revenueDesc: "Projected annual revenue from German market expansion",
        targetLocations: "Target Locations",
        locationsDesc: "BP sites across Germany ready for Checkit deployment",
        monthRollout: "Month Rollout",
        rolloutDesc: "Phased deployment across all German locations",
      },
      marketAnalysis: {
        title: "German Market Analysis",
        desc: "Understanding the German energy retail landscape and opportunities",
        characteristics: "Market Characteristics",
        advantages: "Competitive Advantages",
        largestMarket: "Largest fuel retail market in Europe",
        strictRegulations: "Strict environmental and safety regulations",
        digitalDemand: "High demand for digital transformation",
        operationalFocus: "Growing focus on operational efficiency",
        provenTrackRecord: "Proven track record with BP UK",
        existingPartnership: "Existing partnership and trust",
        scalableTechnology: "Scalable technology platform",
        germanSupport: "German language support ready",
      },
      roadmap: {
        title: "Implementation Roadmap",
        desc: "18-month phased rollout strategy for German expansion",
        phase1: "Phase 1: Foundation",
        phase1Desc: "Pilot deployment at 50 high-priority German locations. Establish local support infrastructure and German-language platform.",
        phase2: "Phase 2: Scale",
        phase2Desc: "Expand to 400 additional locations. Full training program rollout and local team establishment in key German cities.",
        phase3: "Phase 3: Complete",
        phase3Desc: "Full deployment across remaining 750 locations. Advanced analytics and AI features activation for all German sites.",
      },

      cta: {
        title: "Ready to Expand?",
        desc: "Join us in bringing proven Checkit technology to German BP locations",
        viewBusinessCase: "View Detailed Business Case",
        scheduleReview: "Schedule Strategic Review",
      },
    },
    ecosystem: {
      title: "Checkit Ecosystem",
      subtitle: "Discover our comprehensive IoT platform that powers BP's operations with advanced sensors, cloud technology, and intelligent analytics",
      badges: {
        comprehensive: "Comprehensive",
        scalable: "Scalable",
        innovative: "Innovative",
      },
      stats: {
        sites: "Monitored Sites",
      },
      platform: {
        title: "Platform Architecture",
        desc: "Three-tier architecture for comprehensive IoT solutions",
        sensors: "IoT Sensors",
        sensorsDesc: "Wireless sensors for temperature, humidity, and asset tracking",
        cloud: "Cloud Platform",
        cloudDesc: "Secure, scalable cloud infrastructure for data processing",
        mobile: "Mobile Apps",
        mobileDesc: "Intuitive mobile applications for real-time monitoring",
      },
      features: {
        title: "Key Features",
        desc: "Comprehensive features for modern asset management",
        monitoring: "Real-time Monitoring",
        analytics: "Predictive Analytics",
        automation: "Automated Alerts",
        reporting: "Compliance Reporting",
      },

    },
    stakeholders: {
      title: "Stakeholder Map",
      subtitle: "Meet the key people driving our strategic partnership between BP and Checkit",
      checkit: {
        title: "Checkit Team",
        april: "April Watts",
        aprilRole: "Partnership Manager",
      },
    },
    roi: {
      title: "Calculate Your Asset Intelligence ROI",
      subtitle: "Gain insight into the true cost of your assets and uncover significant savings opportunities with Checkit Asset Intelligence.",
      calculator: {
        title: "Calculate Your Asset Intelligence ROI",
        subtitle: "Gain insight into the true cost of your assets and uncover significant savings opportunities with Checkit Asset Intelligence.",
        startCalculator: "Start Calculator",
      },
      hiddenCosts: {
        title: "The Hidden Costs of Unhealthy Assets",
        subtitle: "Aging equipment and maintenance issues create operational challenges that directly affect your bottom line across all locations.",
        additionalAlerts: "Additional Alerts",
        additionalAlertsDesc: "Temperature fluctuations from ageing equipment generate more alerts, disrupting operations and requiring immediate attention.",
        higherMaintenance: "Higher Maintenance",
        higherMaintenanceDesc: "Older assets require more frequent repairs and servicing, increasing both planned and emergency maintenance costs.",
        foregoneSales: "Foregone Sales",
        foregoneSalesDesc: "Products outside optimal temperature ranges lead to lost sales - warm drinks that should be chilled, spoiled food, and dissatisfied customers.",
        operatorTime: "Operator Time",
        operatorTimeDesc: "Store staff spend valuable time responding to alerts and coordinating maintenance instead of serving customers.",
        energyImpact: "Energy & Sustainability Impact",
        energyImpactDesc: "Inefficient ageing equipment consumes significantly more energy to maintain required temperatures, increasing both utility costs and environmental impact.",
        foodSafety: "Food Safety Risk",
        foodSafetyDesc: "Assets in poor health elevate the risk of food safety issues and subsequent food waste.",
      },
      partnership: {
        title: "Our Partnership",
        desc: "Discover how our partnership delivers value to Wild Bean Cafe's across a variety of global markets.",
        videoPlaceholder: "Partnership Video",
      },
      calculatorForm: {
        title: "Calculate Your Asset Intelligence ROI",
        subtitle: "Input your site information to see the annual cost impact of ageing assets and potential savings with our solution.",
        siteInfo: "Site Information",
        modelBased: "This calculator is modelled based on Drinks Fridges",
        agingAssets: "Number of Ageing Assets per Site",
        agingAssetsDesc: "Average assets requiring attention per location",
        kwhCost: "kWh Cost (£)",
        kwhCostDesc: "Your current electricity rate per kWh",
        numberOfSites: "Number of Sites",
        numberOfSitesDesc: "Total number of locations to calculate",
        drinkPrice: "Average Drink Price (£)",
        drinkPriceDesc: "Average price of drinks affected by equipment issues",
        skipPurchase: "Number of Customers that Skip Drink Purchase",
        skipPurchaseDesc: "Daily customers who skip purchasing drinks due equipment problems",
      },
      annualCost: {
        title: "Annual Cost Impact",
        additionalAlerts: "Additional Alerts",
        higherMaintenance: "Higher Maintenance",
        foregoneSales: "Foregone Sales",
        additionalEnergy: "Additional Energy",
        totalPerSite: "Total Annual Cost Per Site",
        totalAllSites: "Total Cost Across All Sites",
        savingsPerSite: "Potential Savings Per Site",
        savingsAllSites: "Potential Savings Across All Sites",
        withAssetIntelligence: "With Asset Intelligence (30% reduction)",
      },
      calculations: {
        title: "How These Costs Are Calculated",
        alertsCalc: "36 alerts per asset × 10 minutes staff response time × £10/hour staff rate",
        maintenanceCalc: "2 additional callouts per asset × £300 average callout cost",
        salesCalc: "Customers skipping drink purchases during 6 hottest months per year (25% factor applied)",
        energyCalc: "Extra consumption (2,000 kWh) + Too cold operation (1,300 kWh) × your kWh rate",
      },
      predictive: {
        title: "Predictive Maintenance",
        desc: "Asset Intelligence uses existing data to predict serious issues before they occur",
        pocResults: "During a PoC in the UK, Checkit identified 70% of all units that had serious issues were not in good health 2 weeks before incident was reported",
        opportunity: "Opportunity to prevent 2 out of 3.3 serious issues / location / year on average",
        implementation: "Checkit Asset intelligence can successfully surface this information using existing data and can be enabled as an additional module as needed.",
        availability: "Asset Intelligence can be enabled immediately within your existing Checkit Control Centre anywhere Checkit sensors are installed.",
      },
      transform: {
        title: "Transform Your Operations with Asset Intelligence",
        desc: "Asset Intelligence combines proprietary data models, artificial intelligence (AI), and machine learning (ML) to predict future outcomes. Asset Intelligence is a premium platform capability exclusively available to Checkit customers, and designed to provide tangible benefits such as cost savings, energy savings, and predictability within your operations as it related to your freezers, fridges, and other frontline problems.",
        predictiveMaintenance: "Predictive Maintenance",
        predictiveDesc: "Prevent failures before they impact operations",
        intelligentMonitoring: "Intelligent Monitoring",
        intelligentDesc: "Real-time insights, leveraging your existing Checkit ecosystem",
        energyOptimisation: "Energy Optimisation",
        energyDesc: "Reduce consumption whilst maintaining performance",
        potentialRoi: "Potential ROI",
        roiDesc: "Up to 30% cost reduction",
      },
      cta: {
        title: "Ready to Reduce Your Asset Costs?",
        desc: "Contact our Intelligent Operations team to discuss how Asset Intelligence can transform your business operations and deliver significant cost savings.",
        currentCost: "Current Annual Cost",
        currentCostDesc: "Per site with ageing assets",
        potentialSavings: "Potential Annual Savings",
        potentialSavingsDesc: "With Asset Intelligence",
      },
    },
    contact: {
      title: "Contact & Engagement",
      subtitle: "Connect with our team for partnership inquiries, feedback, and strategic discussions",
      form: {
        title: "Contact Form",
        desc: "Send us your inquiries and we'll get back to you as soon as possible",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again later.",
      },
      team: {
        title: "Direct Team Contact",
        april: "April Watts",
        aprilRole: "Partnership Manager",
      },
      feedback: {
        title: "Partnership Feedback",
        desc: "Share your feedback on the partnership",
        strategic: "Strategic Alignment",
        operational: "Operational Performance",
        technical: "Technical Implementation",
      },
      offices: {
        title: "Our Offices",
        london: "London HQ",
        berlin: "Berlin Office",
      },
    },
  },
  de: {
    nav: {
      overview: "Übersicht",
      partnership: "Partnerschaft",
      futureVision: "Zukunftsvision",
      ecosystem: "Ökosystem",
      stakeholders: "Stakeholder",
      roi: "ROI & Wert",
      contact: "Kontakt",
      language: "Sprache",
    },
    common: {
      loading: "Laden...",
      error: "Fehler",
      save: "Speichern",
      cancel: "Abbrechen",
      submit: "Absenden",
      email: "E-Mail",
      phone: "Telefon",
      name: "Name",
      company: "Unternehmen",
      message: "Nachricht",
      location: "Standort",
    },
    overview: {
      title: "Willkommen auf der privaten Checkit & BP Microsite",
      subtitle: "Entdecken Sie unsere strategische Partnerschaft durch gemeinsames Wissen, radikale Transparenz und strategische Ausrichtung.",
      welcomeMessage: "Hallo, {email}! Entdecken Sie unsere strategische Partnerschaft durch gemeinsames Wissen, radikale Transparenz und strategische Ausrichtung.",
      badges: {
        partnershipFocus: "Partnerschaftsfokus",
        globalReach: "Globale Reichweite",
        strategicAlignment: "Strategische Ausrichtung",
      },
      metrics: {
        ukLocations: "UK Standorte",
        ukLocationsDesc: "Aktive BP Standorte",
        roiGrowth: "ROI Wachstum",
        roiGrowthDesc: "Prognostizierte Steigerung",
      },
      sections: {
        partnershipTitle: "Partnerschafts-Highlights",
        partnershipDesc: "Entdecken Sie unseren aktuellen UK-Partnerschaftserfolg und bewährten Track Record",
        partnershipContent: "Entdecken Sie, wie Checkit BP&apos;s Betrieb in 840 UK-Standorten mit modernster IoT-Technologie transformiert hat.",
        futureVisionTitle: "Zukunftsvision",
        futureVisionDesc: "Deutschland Expansionschance und strategischer Fahrplan",
        futureVisionContent: "Erkunden Sie die €2,4M Chance in 1.200 deutschen Standorten und unseren strategischen Expansionsplan.",
      },
      updates: {
        title: "Aktuelle Updates",
        desc: "Neueste Entwicklungen in unserer Partnerschaft",
        review: "Partnerschaftsüberprüfung abgeschlossen",
        reviewDesc: "Q4 2024 Leistungskennzahlen übertrafen die Erwartungen",
        expansion: "Deutschland Expansionsplanung",
        expansionDesc: "Strategische Fahrplanentwicklung im Gange",
        alignment: "Stakeholder-Abstimmung",
        alignmentDesc: "Regelmäßige Check-ins für Januar 2025 geplant",
      },
    },
    partnership: {
      title: "Partnerschafts-Highlights",
      subtitle: "Entdecken Sie, wie Checkit BP&apos;s UK-Betrieb mit innovativen IoT-Lösungen in 840 Standorten transformiert hat",
      badges: {
        ukSites: "840 UK Standorte",
        provenSuccess: "Bewährter Erfolg",
        growingPartnership: "Wachsende Partnerschaft",
      },
      metrics: {
        activeLocations: "Aktive UK Standorte",
        activeLocationsDesc: "BP Standorte aktiv überwacht mit Checkit IoT-Lösungen",
      },
      technology: {
        title: "Technologie-Lösungen",
        desc: "Modernste IoT-Technologien für BP&apos;s UK-Betrieb",
        temperatureMonitoring: "Temperaturüberwachung",
        temperatureDesc: "Echtzeit-Temperaturverfolgung in allen Kühlgeräten",
        assetTracking: "Asset-Tracking",
        assetDesc: "Standortbasierte Überwachung und Wartungsplanung",
        predictiveAnalytics: "Prädiktive Analytik",
        predictiveDesc: "KI-gestützte Einblicke für proaktive Wartung",
        complianceReporting: "Compliance-Reporting",
        complianceDesc: "Automatisierte Compliance-Dokumentation und Berichterstattung",
      },
      successStories: {
        title: "Erfolgsgeschichten",
        desc: "Reale Auswirkungen in BP&apos;s UK-Netzwerk",
        manchester: "Regionales Verteilzentrum - Manchester",
        manchesterDesc: "Reduzierte Geräte-Ausfallzeit um 35% durch prädiktive Wartung, Einsparung von über £50.000 jährlich bei Notreparaturen.",
        m25: "M25 Service-Stationen Netzwerk",
        m25Desc: "Verbesserte Lebensmittelsicherheits-Compliance von 87% auf 99,8% in 45 Standorten, Eliminierung von Regelverstößen.",
        highlands: "Scottish Highlands Betrieb",
        highliandsDesc: "Ermöglichte Fernüberwachung von 60 abgelegenen Standorten, reduzierte Standortbesuche um 60% bei verbesserter Reaktionszeit.",
      },
      performanceMetrics: {
        monitoring: "Überwachung",
      },
    },
    futureVision: {
      title: "Zukunftsvision: Deutschland Expansion",
      subtitle: "Erschließen Sie die €2,4M jährliche Chance in 1.200 deutschen BP-Standorten mit bewährter Checkit-Technologie",
      badges: {
        opportunity: "€2,4M Chance",
        sites: "1.200 Standorte",
        strategicGrowth: "Strategisches Wachstum",
      },
      opportunity: {
        revenueOpportunity: "Jährliche Umsatzchance",
        revenueDesc: "Prognostizierter jährlicher Umsatz aus deutscher Marktexpansion",
        targetLocations: "Ziel-Standorte",
        locationsDesc: "BP Standorte in Deutschland bereit für Checkit-Einführung",
        monthRollout: "Monats-Einführung",
        rolloutDesc: "Phasenweise Einführung in allen deutschen Standorten",
      },
      marketAnalysis: {
        title: "Deutsche Marktanalyse",
        desc: "Verstehen der deutschen Energieeinzelhandels-Landschaft und Chancen",
        characteristics: "Marktmerkmale",
        advantages: "Wettbewerbsvorteile",
        largestMarket: "Größter Kraftstoffeinzelhandelsmarkt in Europa",
        strictRegulations: "Strenge Umwelt- und Sicherheitsvorschriften",
        digitalDemand: "Hohe Nachfrage nach digitaler Transformation",
        operationalFocus: "Wachsender Fokus auf operative Effizienz",
        provenTrackRecord: "Bewährter Track Record mit BP UK",
        existingPartnership: "Bestehende Partnerschaft und Vertrauen",
        scalableTechnology: "Skalierbare Technologie-Plattform",
        germanSupport: "Deutsche Sprachunterstützung bereit",
      },
      roadmap: {
        title: "Implementierungs-Fahrplan",
        desc: "18-monatige phasenweise Einführungsstrategie für deutsche Expansion",
        phase1: "Phase 1: Fundament",
        phase1Desc: "Pilot-Einführung in 50 prioritären deutschen Standorten. Aufbau lokaler Support-Infrastruktur und deutschsprachiger Plattform.",
        phase2: "Phase 2: Skalierung",
        phase2Desc: "Expansion auf 400 zusätzliche Standorte. Vollständige Schulungsprogramm-Einführung und lokale Teambildung in deutschen Schlüsselstädten.",
        phase3: "Phase 3: Vollendung",
        phase3Desc: "Vollständige Einführung in verbleibenden 750 Standorten. Aktivierung fortgeschrittener Analytics und KI-Features für alle deutschen Standorte.",
      },

      cta: {
        title: "Bereit zur Expansion?",
        desc: "Begleiten Sie uns dabei, bewährte Checkit-Technologie zu deutschen BP-Standorten zu bringen",
        viewBusinessCase: "Detaillierten Business Case ansehen",
        scheduleReview: "Strategische Überprüfung planen",
      },
    },
    ecosystem: {
      title: "Checkit Ökosystem",
      subtitle: "Entdecken Sie unsere umfassende IoT-Plattform, die BP's Betrieb mit fortschrittlichen Sensoren, Cloud-Technologie und intelligenten Analysen ermöglicht",
      badges: {
        comprehensive: "Umfassend",
        scalable: "Skalierbar",
        innovative: "Innovativ",
      },
      stats: {
        sites: "Überwachte Standorte",
      },
      platform: {
        title: "Plattform-Architektur",
        desc: "Drei-Schichten-Architektur für umfassende IoT-Lösungen",
        sensors: "IoT-Sensoren",
        sensorsDesc: "Drahtlose Sensoren für Temperatur, Luftfeuchtigkeit und Asset-Tracking",
        cloud: "Cloud-Plattform",
        cloudDesc: "Sichere, skalierbare Cloud-Infrastruktur für Datenverarbeitung",
        mobile: "Mobile Apps",
        mobileDesc: "Intuitive mobile Anwendungen für Echtzeit-Monitoring",
      },
      features: {
        title: "Wichtige Funktionen",
        desc: "Umfassende Funktionen für modernes Asset-Management",
        monitoring: "Echtzeit-Überwachung",
        analytics: "Prädiktive Analytik",
        automation: "Automatisierte Warnungen",
        reporting: "Compliance-Reporting",
      },

    },
    stakeholders: {
      title: "Stakeholder-Karte",
      subtitle: "Lernen Sie die Schlüsselpersonen kennen, die unsere strategische Partnerschaft zwischen BP und Checkit vorantreiben",
      checkit: {
        title: "Checkit Team",
        april: "April Watts",
        aprilRole: "Partnership Manager",
      },
    },
    roi: {
      title: "Berechnen Sie Ihren Asset Intelligence ROI",
      subtitle: "Gewinnen Sie Einblicke in die wahren Kosten Ihrer Assets und entdecken Sie erhebliche Einsparungsmöglichkeiten mit Checkit Asset Intelligence.",
      calculator: {
        title: "Berechnen Sie Ihren Asset Intelligence ROI",
        subtitle: "Gewinnen Sie Einblicke in die wahren Kosten Ihrer Assets und entdecken Sie erhebliche Einsparungsmöglichkeiten mit Checkit Asset Intelligence.",
        startCalculator: "Rechner starten",
      },
      hiddenCosts: {
        title: "Die versteckten Kosten ungesunder Assets",
        subtitle: "Alternde Ausrüstung und Wartungsprobleme schaffen betriebliche Herausforderungen, die sich direkt auf Ihren Gewinn in allen Standorten auswirken.",
        additionalAlerts: "Zusätzliche Warnmeldungen",
        additionalAlertsDesc: "Temperaturschwankungen von alternder Ausrüstung erzeugen mehr Warnmeldungen, stören den Betrieb und erfordern sofortige Aufmerksamkeit.",
        higherMaintenance: "Höhere Wartungskosten",
        higherMaintenanceDesc: "Ältere Assets erfordern häufigere Reparaturen und Wartung, was sowohl geplante als auch Notfallwartungskosten erhöht.",
        foregoneSales: "Entgangene Verkäufe",
        foregoneSalesDesc: "Produkte außerhalb optimaler Temperaturbereiche führen zu verlorenen Verkäufen - warme Getränke, die gekühlt sein sollten, verdorbene Lebensmittel und unzufriedene Kunden.",
        operatorTime: "Operator-Zeit",
        operatorTimeDesc: "Ladenpersonal verbringt wertvolle Zeit mit der Reaktion auf Warnmeldungen und Koordination der Wartung, anstatt Kunden zu bedienen.",
        energyImpact: "Energie- und Nachhaltigkeitsauswirkungen",
        energyImpactDesc: "Ineffiziente alternde Ausrüstung verbraucht erheblich mehr Energie zur Aufrechterhaltung der erforderlichen Temperaturen und erhöht sowohl Betriebskosten als auch Umweltbelastung.",
        foodSafety: "Lebensmittelsicherheitsrisiko",
        foodSafetyDesc: "Assets in schlechtem Zustand erhöhen das Risiko von Lebensmittelsicherheitsproblemen und nachfolgender Lebensmittelverschwendung.",
      },
      partnership: {
        title: "Unsere Partnerschaft",
        desc: "Entdecken Sie, wie unsere Partnerschaft Wild Bean Cafés in einer Vielzahl globaler Märkte Mehrwert bietet.",
        videoPlaceholder: "Partnerschafts-Video",
      },
      calculatorForm: {
        title: "Berechnen Sie Ihren Asset Intelligence ROI",
        subtitle: "Geben Sie Ihre Standortinformationen ein, um die jährlichen Kostenauswirkungen alternder Assets und potenzielle Einsparungen mit unserer Lösung zu sehen.",
        siteInfo: "Standortinformationen",
        modelBased: "Dieser Rechner basiert auf einem Modell für Getränkekühlschränke",
        agingAssets: "Anzahl alternder Assets pro Standort",
        agingAssetsDesc: "Durchschnittliche Assets, die Aufmerksamkeit pro Standort benötigen",
        kwhCost: "kWh-Kosten (£)",
        kwhCostDesc: "Ihr aktueller Strompreis pro kWh",
        numberOfSites: "Anzahl Standorte",
        numberOfSitesDesc: "Gesamtzahl der Standorte zur Berechnung",
        drinkPrice: "Durchschnittlicher Getränkepreis (£)",
        drinkPriceDesc: "Durchschnittspreis von Getränken, die von Geräteproblemen betroffen sind",
        skipPurchase: "Anzahl Kunden, die Getränkekauf überspringen",
        skipPurchaseDesc: "Tägliche Kunden, die aufgrund von Geräteproblemen auf Getränkekäufe verzichten",
      },
      annualCost: {
        title: "Jährliche Kostenauswirkungen",
        additionalAlerts: "Zusätzliche Warnmeldungen",
        higherMaintenance: "Höhere Wartung",
        foregoneSales: "Entgangene Verkäufe",
        additionalEnergy: "Zusätzliche Energie",
        totalPerSite: "Gesamte jährliche Kosten pro Standort",
        totalAllSites: "Gesamtkosten über alle Standorte",
        savingsPerSite: "Potenzielle Einsparungen pro Standort",
        savingsAllSites: "Potenzielle Einsparungen über alle Standorte",
        withAssetIntelligence: "Mit Asset Intelligence (30% Reduktion)",
      },
      calculations: {
        title: "Wie diese Kosten berechnet werden",
        alertsCalc: "36 Warnmeldungen pro Asset × 10 Minuten Personalreaktionszeit × £10/Stunde Personalkostenrate",
        maintenanceCalc: "2 zusätzliche Anrufe pro Asset × £300 durchschnittliche Anrufkosten",
        salesCalc: "Kunden, die Getränkekäufe während der 6 heißesten Monate pro Jahr überspringen (25% Faktor angewendet)",
        energyCalc: "Zusätzlicher Verbrauch (2.000 kWh) + Zu kalter Betrieb (1.300 kWh) × Ihr kWh-Preis",
      },
      predictive: {
        title: "Prädiktive Wartung",
        desc: "Asset Intelligence nutzt vorhandene Daten, um ernsthafte Probleme vorherzusagen, bevor sie auftreten",
        pocResults: "Während eines PoC in Großbritannien identifizierte Checkit 70% aller Einheiten mit ernsthaften Problemen, die 2 Wochen vor der gemeldeten Störung nicht in gutem Zustand waren",
        opportunity: "Möglichkeit, 2 von 3,3 ernsthaften Problemen / Standort / Jahr im Durchschnitt zu verhindern",
        implementation: "Checkit Asset Intelligence kann diese Informationen erfolgreich unter Verwendung vorhandener Daten bereitstellen und kann bei Bedarf als zusätzliches Modul aktiviert werden.",
        availability: "Asset Intelligence kann sofort in Ihrem bestehenden Checkit Control Centre überall dort aktiviert werden, wo Checkit-Sensoren installiert sind.",
      },
      transform: {
        title: "Transformieren Sie Ihren Betrieb mit Asset Intelligence",
        desc: "Asset Intelligence kombiniert proprietäre Datenmodelle, künstliche Intelligenz (KI) und maschinelles Lernen (ML), um zukünftige Ergebnisse vorherzusagen. Asset Intelligence ist eine Premium-Plattformfunktion, die ausschließlich Checkit-Kunden zur Verfügung steht und darauf ausgelegt ist, greifbare Vorteile wie Kosteneinsparungen, Energieeinsparungen und Vorhersagbarkeit in Ihrem Betrieb in Bezug auf Ihre Gefrierschränke, Kühlschränke und andere Frontline-Probleme zu bieten.",
        predictiveMaintenance: "Prädiktive Wartung",
        predictiveDesc: "Verhindern Sie Ausfälle, bevor sie den Betrieb beeinträchtigen",
        intelligentMonitoring: "Intelligente Überwachung",
        intelligentDesc: "Echtzeiteinblicke unter Nutzung Ihres bestehenden Checkit-Ökosystems",
        energyOptimisation: "Energieoptimierung",
        energyDesc: "Reduzieren Sie den Verbrauch bei Aufrechterhaltung der Leistung",
        potentialRoi: "Potenzieller ROI",
        roiDesc: "Bis zu 30% Kostenreduzierung",
      },
      cta: {
        title: "Bereit, Ihre Asset-Kosten zu reduzieren?",
        desc: "Kontaktieren Sie unser Intelligent Operations Team, um zu besprechen, wie Asset Intelligence Ihre Geschäftsabläufe transformieren und erhebliche Kosteneinsparungen liefern kann.",
        currentCost: "Aktuelle jährliche Kosten",
        currentCostDesc: "Pro Standort mit alternden Assets",
        potentialSavings: "Potenzielle jährliche Einsparungen",
        potentialSavingsDesc: "Mit Asset Intelligence",
      },
    },
    contact: {
      title: "Kontakt & Engagement",
      subtitle: "Verbinden Sie sich mit unserem Team für Partnerschaftsanfragen, Feedback und strategische Diskussionen",
      form: {
        title: "Kontaktformular",
        desc: "Senden Sie uns Ihre Anfragen und wir werden uns schnellstmöglich bei Ihnen melden",
        success: "Nachricht erfolgreich gesendet!",
        error: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.",
      },
      team: {
        title: "Direkter Team-Kontakt",
        april: "April Watts",
        aprilRole: "Partnership Manager",
      },
      feedback: {
        title: "Partnerschafts-Feedback",
        desc: "Teilen Sie Ihr Feedback zur Partnerschaft mit",
        strategic: "Strategische Ausrichtung",
        operational: "Betriebliche Leistung",
        technical: "Technische Implementierung",
      },
      offices: {
        title: "Unsere Büros",
        london: "London HQ",
        berlin: "Berlin Büro",
      },
    },
  },
};

export function getTranslation(language: Language): Translations {
  return translations[language];
} 