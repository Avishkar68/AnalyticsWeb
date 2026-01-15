// export const services = [
//   {
//     id: "consulting",
//     title: "Consulting & Strategic Advisory",
//     shortDescription: "From shaping business strategy to guiding implementation, our consulting services support leaders...",
//     detailedDescription: "From shaping business strategy to guiding implementation, our consulting services support leaders in navigating change, improving decision-making processes, and achieving long-term growth objectives.",
//     bulletPointers: [
//   "Business transformation strategy",
//   "Operational performance improvement",
//   "Change management guidance",
//   "Analytics-driven strategic planning"
// ], 
//     subServices: [
      
//       {
//         id: "banking",
//         title: "Banking",
//         description: "The banking industry is undergoing rapid change due to digital transformation, increasing regulations, and rising customer expectations. At SevenIsles Consulting, we help banks and financial institutions use data and analytics to improve decision-making and business performance.",
//         points: ["Credit Scoring Models", "Real-time Fraud Detection", "Customer Lifetime Value (CLV)", "Liquidity Risk Analytics", "Regulatory Compliance Automation"],
//         benefits: ["Lower default rates", "Personalized marketing", "Regulatory safety"]
//       },
//       {
//         id: "Pharmaceutical",
//         title: "Pharmaceutical",
//         description: "The pharmaceutical industry operates in a highly regulated and data-intensive environment where timely insights are critical. SevenIsles Consulting supports pharmaceutical companies in using data and analytics to improve research, operations, and commercial performance.  We work with organizations across the pharmaceutical value chain to turn complex data into meaningful insights that support better planning and execution.",
//         points: ["Sample Size Calculation", "Statistical Input in Protocol Development", "Develop detailed and tailored Statistical Analysis Plans (SAPs)", "Interim Analysis for Informed Decision-Making", "Deliver Comprehensive Tables, Listings, and Figures (TLFs)","Create Statistical Reports & CDISC-Compliant Data Submissions"],
//         benefits: [ "", ""],
//         additionalDesc:"With a practical and structured approach, SevenIsles Consulting helps pharma teams use analytics effectively while ensuring accuracy, compliance, and business relevance."
//       }
//     ]
//   },
//   {
//     id: "training",
//     title: "Training and Upskilling",
//     shortDescription: "At SevenIsles Consulting, we provide practical and industry-focused training programs in analytics and data skills...",
//     detailedDescription: "At SevenIsles Consulting, we provide practical and industry-focused training programs in analytics and data skills for professionals and teams. Our courses are designed to build capability from basic data understanding to advanced analytics helping you make informed decisions, solve real business problems, and drive measurable impact.Our training can be delivered online, on-site at your workplace, or in a blended format that fits your schedule and learning goals. We focus on hands-on learning with examples and exercises that reflect real business scenarios.",
//     subServices: [
//       {
        
//       }
//     ]
//   },
//   {
//     id: "products",
//     title: "Products",
//     shortDescription: "We build custom analytics products that transform complex algorithms into intuitive business interfaces.",
//     detailedDescription: "SevenIslands develops proprietary 'Analytics-as-a-Product' solutions that integrate directly into your IT ecosystem.",
//     subServices: [
//       {
//         id: "island-insight",
//         title: "IslandInsight™",
//         description: "A unified business intelligence portal that aggregates data from siloed sources into a single source of truth.",
//         points: ["Real-time ingestion", "Customizable KPI widgets", "Automated executive reporting"],
//         benefits: ["Silo breakdown", "Instant visibility"]
//       }
//     ]
//   }
// ];

export const services = [
  /* -------------------------------------------------------------------------- */
  /* CONSULTING & STRATEGIC ADVISORY                                            */
  /* -------------------------------------------------------------------------- */
  {
    id: "consulting",
    title: "Consulting & Advisory",
    shortDescription:
      "From shaping business strategy to guiding implementation, our consulting services support leaders in navigating change and driving long-term growth.",
    detailedDescription:
      "From shaping business strategy to guiding implementation, our consulting services support leaders in navigating change, improving decision-making processes, and achieving long-term growth objectives.",
    bulletPointers: [
      "Business transformation strategy",
      "Operational performance improvement",
      "Change management guidance",
      "Analytics-driven strategic planning",
    ],

    /* ----------------------------- INDUSTRIES -------------------------------- */
    industries: [
      /* ------------------------------- BANKING -------------------------------- */
      {
        id: "banking",
        title: "Banking",
        imageUrl: "https://images.unsplash.com/photo-1631216166880-9e9b51577962?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description:
          "The banking industry is undergoing rapid change due to digital transformation, increasing regulations, and rising customer expectations. At SevenIsles Consultancy, we help banks and financial institutions use data and analytics to improve decision-making and business performance.",

        offerings: [
          {
            id: "risk-analytics",
            title: "Risk Analytics",
            imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
            description:
              "Risk management is a critical part of the banking industry. Banks deal with different types of risks such as credit risk, market risk, operational risk, and fraud risk. Risk analytics uses data, statistics, and models to measure, monitor, and manage these risks effectively.",
            points: [
              "Identify credit, market, operational, fraud, and liquidity risks",
              "Descriptive and predictive statistics",
              "Probability and regression techniques",
              "Credit scoring and risk classification",
              "Model performance and validation metrics",
              "Risk dashboards and reporting",
            ],
            additionalDesc:
              "SevenIsles Consultancy combines deep domain understanding with strong analytical expertise to help banking teams make informed, reliable, and timely risk decisions.",
          },

          {
            id: "marketing-analytics",
            title: "Marketing Analytics",
            description:
              "Marketing analytics helps banks understand customer behavior, improve campaign performance, and increase customer value using data and statistics. It enables smarter targeting, personalization, and better return on marketing spend. At SevenIsles Consultancy, we apply statistical techniques to support data-driven marketing decisions in banking.",
            points: [
              "Descriptive statistics to understand customer profiles and behavior",
              "Segmentation techniques to group customers based on needs and value",
              "Correlation and regression analysis to measure campaign impact",
              "Response and propensity modeling for targeted marketing",
              "Customer lifetime value (CLV) estimation",
              "Churn and retention analysis",
              "A/B testing and campaign performance measurement",
              "Uplift and effectiveness analysis",
            ],
            additionalDesc:
              "Our approach enables banks to design focused marketing strategies, improve customer engagement, and maximize return on marketing investments using data-driven insights.",
          },
        ],
      },

      /* --------------------------- PHARMACEUTICAL ------------------------------ */
      {
  id: "pharmaceutical",
  title: "Pharmaceutical",
  imageUrl: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  description: `The pharmaceutical industry operates in a highly regulated and data-intensive environment where timely insights are critical. SevenIsles Consultancy supports pharmaceutical companies in using data and analytics to improve research, operations, and commercial performance. We work with organizations across the pharmaceutical value chain to turn complex data into meaningful insights that support better planning and execution.`,
  services: [
    "Sample Size Calculation",
    "Statistical Input in Protocol Development",
    "Develop detailed and tailored Statistical Analysis Plans (SAPs)",
    "Interim Analysis for Informed Decision-Making",
    "Deliver Comprehensive Tables, Listings, and Figures (TLFs)",
    "Create Statistical Reports & CDISC-Compliant Data Submissions",
  ],
  approach:
    "With a practical and structured approach, SevenIsles Consultancy helps pharma teams use analytics effectively while ensuring accuracy, compliance, and business relevance.",
},
    ],
  },

  /* -------------------------------------------------------------------------- */
  /* TRAINING & UPSKILLING (CUSTOM LAYOUT PAGE)                                  */
  /* -------------------------------------------------------------------------- */
  {
  id: "training",
  title: "Training & Upskilling",
  shortDescription:
    "Practical and industry-focused training programs in analytics and data skills for professionals and students.",
  detailedDescription:
    "At SevenIsles Consultancy, we provide practical and industry-focused training programs in analytics and data skills for professionals and teams. Our courses are designed to build capability from basic data understanding to advanced analytics helping you make informed decisions, solve real business problems, and drive measurable impact. Training can be delivered online, on-site, or in a blended format with hands-on learning based on real business scenarios.",

  modules: [
    {
      title: "Predictive Modeling",
      topics: [
        "Linear Regression",
        "Logistic Regression",
        "Poisson / Gamma Regression",
        "Model Validation",
      ],
    },
    {
      title: "Multivariate Analysis",
      topics: [
        "Principal Component Analysis",
        "Factor Analysis",
        "Cluster Analysis",
      ],
    },
    {
      title: "Time Series Analysis",
      topics: [
        "Testing for Stationarity",
        "ARIMA Modeling",
        "Time Series Regression",
      ],
    },
    {
      title: "Machine Learning",
      topics: [
        "Decision Trees",
        "Random Forest Method",
        "Neural Networks",
        "Support Vector Machine Algorithm",
      ],
    },
    {
      title: "Biostatistics",
      topics: [
        "Summary Statistics",
        "Parametric Tests",
        "Non-Parametric Tests",
        "Analysis of Variance",
        "Survival Analysis",
      ],
    },
    {
      title: "R / Python Programming",
      topics: [
        "Introduction to R / Python",
        "Data Management",
        "Statistical Analysis using R / Python",
      ],
    },
  ],
},

  /* -------------------------------------------------------------------------- */
  /* PRODUCTS                                                                   */
  /* -------------------------------------------------------------------------- */
  {
    id: "products",
    title: "Products",
    shortDescription:
      "We build custom analytics products that transform complex algorithms into intuitive business interfaces.",
    detailedDescription:
      "SevenIsles Consultancy develops proprietary Analytics-as-a-Product solutions that integrate directly into your IT ecosystem.",

    subServices: [
      {
        id: "island-insight",
        title: "BAES",
        description:
          "App for fast data analysis to investigate Bioequivalence",
        points: [
          "Sample Size Estimation",
          "PK parameters Estimation",
          "Statistical Analysis",
          "Data Visualization",
          "Impact Analysis with subject exclusion",
          "Reports for Regulatory Submission",

        ],
        benefits: ["Easy to Use", "Economical","Nimble"],
      },
    ],
  },
];
