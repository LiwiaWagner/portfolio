import desktopImgCard1 from "../src/assets/d_card_picture_p1.png";
import mobileImgCard1 from "../src/assets/m_card_picture_p1.png";
import desktopImgCard2 from "../src/assets/d_card_picture_p2.png";
import mobileImgCard2 from "../src/assets/m_card_picture_p2.png";
import desktopImgCard3 from "../src/assets/d_card_picture_p3.png";
import mobileImgCard3 from "../src/assets/m_card_picture_p3.png";
import desktopImgCard4 from "../src/assets/d_card_picture_p4.png";
import mobileImgCard4 from "../src/assets/m_card_picture_p4.png";
import desktopImgProject1 from "../src/assets/d_project_picture_p1.png";

export const cards = [
  {
    id: 1,
    order: 4,
    title:
      "Enhancing Efficiency: Business Application for Supply Chain Optimization",
    description: `I used Figma to design a digital solution that addressed a client’s data experience challenges, focusing on optimizing their supply chain network. Over an eight-week period, I conducted extensive Data Experience (DX) research, which informed the design and prototyping of a business application aimed at streamlining and enhancing the efficiency of their operations.`,
    tools:
      "Figma + DX Research + Data Viz Design + Product Design + UX/UI Design",
    backgroundColor: "var(--bc-project-id1)",
    btn: {
      text: "GO TO PROJECT",
      color: "var(--btn-project-id1)",
      refLink: "https://observablehq.com/d/40e11c389ce691ef",
    },
    images: {
      desktop: {
        src: desktopImgCard1,
        alt: "Sample pictures of data visualization project.",
      },
      mobile: {
        src: mobileImgCard1,
        alt: "Sample pictures of data visualization project.",
      },
    },
  },
  {
    id: 2,
    order: 1,
    title:
      "Sustainable Business Travel: A Data-Driven Carbon Emission Analysis",
    description: `I designed and developed a Tableau dashboard that enables companies to track and analyze carbon emissions generated by business air travel. The dashboard helps organizations pinpoint the areas contributing the most to their emissions, providing actionable insights to guide the development of targeted carbon reduction strategies for more sustainable operations.`,
    tools: "Tableau + SQL + Data Viz Design + Data Modelling + Data Processing",
    backgroundColor: "var(--bc-project-id2)",
    btn: {
      text: "GO TO PROJECT",
      color: "var(--btn-project-id2)",
      refLink: "https://observablehq.com/d/40e11c389ce691ef",
    },
    images: {
      desktop: {
        src: desktopImgCard2,
        alt: "Sample pictures of data visualization project.",
      },
      mobile: {
        src: mobileImgCard2,
        alt: "Sample pictures of data visualization project.",
      },
    },
  },
  {
    id: 3,
    order: 3,
    title:
      "Visualizing Iris Species: A Comparative Analysis of Multiple Measures",
    description: `In this private project, I focused on visualizing the Iris Species dataset by utilizing scatterplot matrix and parallel coordinates charts to analyze key metrics. Although these visualizations are not typically used in business reporting, they are widely applied in statistical analysis for their ability to reveal complex patterns and relationships within the data.`,
    tools: "d3.js + Data Viz Design",
    backgroundColor: "var(--bc-project-id3)",
    btn: {
      text: "GO TO OBSERVABLE NOTEBOOK",
      color: "var(--btn-project-id3)",
      refLink: "https://observablehq.com/d/40e11c389ce691ef",
    },
    images: {
      desktop: {
        src: desktopImgCard3,
        alt: "Sample pictures of data visualization project.",
      },
      mobile: {
        src: mobileImgCard3,
        alt: "Sample pictures of data visualization project.",
      },
    },
  },
  {
    id: 4,
    order: 2,
    title: `Cyclistic Case Study: A Capstone Project for Google BI Certification`,
    description: `The capstone project, focused on preparing Cyclistic’s customer analysis, serves as the final assignment for the Google Business Intelligence Professional Certification, demonstrating the application of advanced BI skills in a real-world business context.`,
    tools: "Tableau + Mapbox + SQL + Data Analysis + Data Viz Design",
    backgroundColor: "var(--bc-project-id4)",
    btn: {
      text: "GO TO PROJECT",
      color: "var(--btn-project-id4)",
      refLink: "https://observablehq.com/d/40e11c389ce691ef",
    },
    images: {
      desktop: {
        src: desktopImgCard4,
        alt: "Sample pictures of data visualization project.",
      },
      mobile: {
        src: mobileImgCard4,
        alt: "Sample pictures of data visualization project.",
      },
    },
  },
];

export const projects = [
  {
    id: 1,
    title:
      "Enhancing Efficiency: Business Application for Supply Chain Optimization",
    introType1: {
      title: "THE PRODUCT",
      paragraph:
        "I conducted Data Experience (DX) research, designed and prototyped business application aimed at optimizing clients’ supply chain network.",
    },
    introType1: {
      title: "THE PROBLEM",
      paragraph:
        "Client’s design of current reporting solution has not been updated or analyzed in terms of user experience, since its launch, over two years ago.",
    },
    introType1: {
      title: "THE GOAL",
      paragraph:
        "The main goal of the project was to understand the user experience and redesign the current reporting solution based on the user feedback.",
    },
    deliveryDate: { title: "DELIVERY DATE", content: "March 2022" },
    areasOfExpertise: {
      title: "AREAS OF EXPERTISE",
      content: "Product Design + Data Viz Design + UX/UI Design + DX Research",
    },
    tools: { title: "TOOLS & PROGRAMMING LANGUAGES", content: "Figma" },
    image: {
      src: desktopImgProject1,
      alt: "Sample pictures of data visualization project.",
    },
    mainSectionTitle: "DESIGN PROCESS",
    sectionNumber: "01",
    sectionTitle: "POST LAUNCH RESEARCH",
    sectionContent: {
      sectionType1: {
        paragraph:
          "I conducted six in-depth interviews with business users. Research questions were framed around Data Experience (DX) Design Pillars i.e. purpose, information architecture, data presentation, visual hierarchy, interactivity, and context.",
      },
      sectionType1: {
        title: "PURPOSE",
        paragraph:
          "Are you able to answer your key business questions or complete analytical tasks with the current design? Are the outcomes actionable or related to a specific decision or job task?",
      },
      sectionType1: {
        title: "INFORMATION ARCHITECTURE",
        paragraph:
          "Information flow: what steps do you need to take to answer the key questions or complete analytical tasks? Does navigation provide you the flexibility to move between different levels of overview, and zoom, in a way that fits well with your analytical flow? Can you easily understand where you are, and what information is and isn’t available? Can you easily scan the page and locate information elements?",
      },
      sectionType1: {
        title: "DATA PRESENTATION",
        paragraph:
          "Data presentation What are the strengths and weaknesses of visual encoding in answering the key questions? Is any unnecessary visual detail included that competes for attention without adding significant value? How are new users supported in understanding how to decode the data representation?",
      },
      sectionType1: {
        title: "VISUAL HIERARCHY",
        paragraph:
          "Is the relative importance of each text element visually clear? Which sections, charts, or other elements of the viz draw your attention most and least? Do these correspond to the elements of the viz that should draw your most or least attention? Are there any elements that could be de-emphasized to reduce visual clutter?",
      },
      sectionType1: {
        title: "INTERACTIVITY",
        paragraph:
          "Can you easily discover and understand what interactive functionality and options are available? What are the strengths and weaknesses of the available interactive features? Are selections or other actions easy for you to reverse?",
      },
      sectionType1: {
        title: "CONTEXT",
        paragraph:
          "Is there meaningful context provided for accurate comparisons? For understanding scale & magnitude? For understanding complex KPIs or underlying business logic?",
      },
      sectionType1: {
        paragraph:
          "Based on the research findings I prepared insights which indicated problematic areas within user experience, data experience and overall communication with users. To each insight I provided recommendations and how those would translate into both, product design and data design. Once I reviewed the recommendations together with product owner I moved to the next step which was preparation of low fidelity mock-up.",
      },
    },
    sectionNumber: "02",
    sectionTitle: "LOW FIDELITY PROTOTYPE",
    sectionContent: {
      sectionType1: {
        paragraph:
          "I prepared the low-fidelity interactive prototype using Figma. The main goal was to translate user needs and frustrations uncovered during the research phase to the data design that addresses and resolve them. I did few iterations of the prototyping with product owner before moving to the next step of usability testing.",
      },
    },
    sectionNumber: "03",
    sectionTitle: "USABILITY TESTING",
    sectionContent: {
      sectionType1: {
        paragraph:
          "I conducted usability testing with two groups of users. Those who were familiar with the product and already had a high understanding of the data, and those who never worked with the product before and didn’t understand the data at all.",
      },
      sectionType1: {
        paragraph:
          "The goal was to test weather a new user will be able to gather same data insights from the product as the experienced one within similar time frame. Based on the test results I did refine the design to address the issues users had with the initial product mockup.",
      },
    },
    sectionNumber: "04",
    sectionTitle: "HIGH FIDELITY PROTOTYPE",
    sectionContent: {
      sectionType1: {
        paragraph:
          "In this last phase I prepared the final design using Figma. At this step I was mostly focused on the design itself i.e. selecting typography, color and contrast with an intention to drive user attention, assuring all visual elements are scaled and correctly aligned, assuring correct amount of white space, and finally using visual hierarchy to mimic user’s information flow.",
      },
    },
  },
];
