import f1 from "@/assets/faculty-1.jpg";
import f2 from "@/assets/faculty-2.jpg";
import f3 from "@/assets/faculty-3.jpg";

export const PROGRAMS_DATA = {
  bba: {
    title: "BBA — Bachelor of Business Administration",
    shortName: "BBA",
    type: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2, any stream (minimum 50%)",
    overview: "Our Bachelor of Business Administration (BBA) is engineered to shape future-ready business leaders. The curriculum blends foundational management theory with cutting-edge industry training, live project simulations, and digital operations. It is designed for students aspiring to lead in entry-level corporate and entrepreneurial ventures with a strong foundation in modern business practices.",
    highlights: [
      "Optional integration with CMA USA / CMA India professional tracks.",
      "Includes Lean Six Sigma, Digital Marketing, and BI tool workshops.",
      "Two structured corporate internships built directly into the graduation timeline.",
      "Cambridge Business English Certificate (BEC) intensive communication coaching."
    ],
    curriculum: [
      {
        semester: "Semester I & II",
        courses: ["Principles of Management", "Financial Accounting", "Microeconomics", "Business Communication", "Organizational Behavior", "Business Mathematics"]
      },
      {
        semester: "Semester III & IV",
        courses: ["Marketing Management", "Human Resource Management", "Corporate Finance", "Macroeconomics", "Business Statistics", "Information Technology for Business"]
      },
      {
        semester: "Semester V & VI",
        courses: ["Strategic Management", "Operations Management", "Consumer Behavior", "Business Law & Ethics", "Entrepreneurship Development", "Major Research Project & Internship Defense"]
      }
    ],
    outcomes: [
      "Demonstrate thorough knowledge of core business administration concepts.",
      "Exhibit strong strategic analytical skills for data-backed decision-making.",
      "Develop executive-level communication and presentation capabilities.",
      "Apply digital marketing and operational efficiency methodologies (Lean Six Sigma) in corporate setups."
    ],
    careers: [
      "Business Analyst",
      "Management Trainee",
      "Marketing Associate",
      "Financial Analyst",
      "HR Associate",
      "Operations Coordinator"
    ],
    benefits: [
      "Access to MSB Placement Portal from Day One",
      "1:1 Mentorship from Senior Corporate Leaders",
      "Guest Lectures from Industry CXOs and Cost Auditors",
      "Personality Development & Mock Interview Workshops"
    ],
    collaboration: "Aligned with leading corporations for internship placement and joint certification delivery.",
    admissionProcess: [
      "Submit online enquiry or application form.",
      "Participate in the MSB Counseling session.",
      "Document verification and eligibility check.",
      "Seat reservation and fee clearance."
    ],
    faculty: [
      {
        name: "Ms. S Gayatri",
        role: "Vice-Principal",
        qualification: "MSc, MCA, MPhil",
        specialization: "Business IT & Academic Delivery",
        experience: "15+ Years",
        bio: "Specializes in digital education and integrating technology tools into standard business training.",
        img: f1
      },
      {
        name: "Ms. Lavanya Kanduri",
        role: "Dean & Chairperson",
        qualification: "M.Com, MBA, FCMA, DGBM",
        specialization: "Financial Management & Accounting",
        experience: "15+ Years",
        bio: "Founder and visionary of MSB, cost accountant, and pioneer in management training.",
        img: f2
      },
      {
        name: "Mr. C Jagadish Reddy",
        role: "Senior Faculty",
        qualification: "B.E [MECH], LLM, MBA [FIN], Grad.CS, MSC [PSY]",
        specialization: "Business Law & Strategic Management",
        experience: "18+ Years",
        bio: "Expert in corporate law, industrial operations, and business strategy.",
        img: null
      }
    ]
  },
  bcom: {
    title: "B.Com — Bachelor of Commerce",
    shortName: "B.Com",
    type: "Undergraduate Degree",
    duration: "3 Years (6 Semesters)",
    eligibility: "10+2, Commerce stream preferred",
    overview: "The Bachelor of Commerce (B.Com) program provides specialized commerce knowledge with an emphasis on corporate auditing, tax compliance, financial planning, and financial analytics. It equips students with the technical and strategic skills needed for fast-track careers in consulting, auditing firms, corporate banking, and financial analysis.",
    highlights: [
      "Deeply integrated with professional CMA (India / USA) credentials.",
      "Hands-on training in Tally ERP, GST tax compliance, and financial visualization.",
      "Intensive auditing labs and live corporate tax filling project case studies.",
      "Final year placement drive and dedicated corporate internship program."
    ],
    curriculum: [
      {
        semester: "Semester I & II",
        courses: ["Financial Accounting", "Business Law", "Business Economics", "Business Communication", "Tally ERP Fundamentals", "Corporate Governance"]
      },
      {
        semester: "Semester III & IV",
        courses: ["Advanced Accounting", "Income Tax Law & Practice", "Cost Accounting", "Corporate Law", "GST & Indirect Taxes", "Quantitative Techniques"]
      },
      {
        semester: "Semester V & VI",
        courses: ["Management Accounting", "Auditing & Assurance", "Financial Markets & Services", "Indirect Tax Compliance Project", "Portfolio Management", "Internship Viva & Project Submission"]
      }
    ],
    outcomes: [
      "Acquire deep proficiency in financial accounting and corporate auditing.",
      "Understand and apply direct and indirect tax compliance laws (GST, Income Tax).",
      "Operate Tally ERP and financial data visualization software with ease.",
      "Draft financial statements and present analytical audit reports."
    ],
    careers: [
      "Tax Consultant",
      "Corporate Auditor",
      "Financial Analyst",
      "Accounts Manager",
      "Investment Advisor",
      "Risk Analyst"
    ],
    benefits: [
      "Direct exposure to corporate accounting leadership",
      "Free access to CMA USA study materials and webinars",
      "Corporate networking opportunities through local commerce chapters",
      "Specialized soft skills and grooming workshops"
    ],
    collaboration: "Collaboration with professional accounting chapters and local auditing firms.",
    admissionProcess: [
      "Online Application Submission.",
      "Personal Interview with commerce faculty.",
      "Verification of 10+2 academic credentials.",
      "Admissions clearance and registration."
    ],
    faculty: [
      {
        name: "Ms. Lavanya Kanduri",
        role: "Dean & Chairperson",
        qualification: "M.Com, MBA, FCMA, DGBM",
        specialization: "Corporate Auditing & Management Accounting",
        experience: "15+ Years",
        bio: "Founder and visionary of MSB, cost accountant, and pioneer in management training.",
        img: f2
      },
      {
        name: "Mr. Vijay Kiran Agastya",
        role: "Visiting Professor",
        qualification: "MBA, FCMA, ACCA, CIMA (UK)",
        specialization: "Cost Planning & Strategic Finance",
        experience: "20+ Years",
        bio: "Financial planner bringing global accounting standards and cost control methodologies to classes.",
        img: f3
      },
      {
        name: "Mr. Dakshina Murthy C",
        role: "Visiting Professor",
        qualification: "M.Com, MBA, FCMA, ACMA (UK), CGMA",
        specialization: "Advanced Auditing & Financial Reporting",
        experience: "22+ Years",
        bio: "Distinguished financial advisor and Cost and Management Accountant with global expertise.",
        img: null
      }
    ]
  },
  mba: {
    title: "MBA — Master of Business Administration",
    shortName: "MBA",
    type: "Postgraduate Degree",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduate in any stream (minimum 50% marks)",
    overview: "Our flagship Master of Business Administration (MBA) is a transformational leadership program. It offers cutting-edge specializations, weekly executive speaker panels, structured corporate mentorship, and real-world case simulations. The program is designed to catapult professionals into managerial and executive roles in multinational corporations.",
    highlights: [
      "Specializations: Marketing, Finance, Human Resource Management, and Business Analytics.",
      "Integrated analytics certifications (Marketing, HR, and Financial Analytics tools).",
      "Weekly executive leadership speaker series & individual corporate mentoring.",
      "Direct recruitment assistance with leading multinational corporate partners."
    ],
    curriculum: [
      {
        semester: "Semester I & II",
        courses: ["Managerial Economics", "Organizational Behavior", "Financial Management", "Marketing Management", "Human Resource Management", "Quantitative Methods for Managers", "Business Communication Lab"]
      },
      {
        semester: "Semester III",
        courses: ["Strategic Management", "Business Analytics", "Elective I (Specialization)", "Elective II (Specialization)", "Summer Internship Project & Presentation"]
      },
      {
        semester: "Semester IV",
        courses: ["International Business", "Corporate Ethics & Governance", "Elective III (Specialization)", "Elective IV (Specialization)", "Grand Viva & Corporate Placement Drive"]
      }
    ],
    outcomes: [
      "Demonstrate professional strategic leadership and team management capabilities.",
      "Evaluate complex global business opportunities using advanced analytics tools.",
      "Develop innovative marketing, financial, and organizational strategies.",
      "Communicate complex corporate strategies effectively to diverse audiences."
    ],
    careers: [
      "Brand Manager",
      "Investment Banker",
      "Management Consultant",
      "HR Business Partner",
      "Data Analytics Manager",
      "Operations Director"
    ],
    benefits: [
      "Personal Corporate Mentor assigned to each scholar",
      "Access to premium networking circles and alumni panels",
      "Mock interviews led by corporate HR Directors",
      "Global case study seminars and corporate residency weeks"
    ],
    collaboration: "Collaborative mentorship and speaker sessions delivered by corporate CXOs from MNCs.",
    admissionProcess: [
      "Submit online MBA application form.",
      "Participate in the MSB Management Aptitude and Interview round.",
      "Verify undergraduate transcripts.",
      "Admissions confirmation and enrollment."
    ],
    faculty: [
      {
        name: "Ms. Lavanya Kanduri",
        role: "Dean & Chairperson",
        qualification: "M.Com, MBA, FCMA, DGBM",
        specialization: "Corporate Auditing & Management Accounting",
        experience: "15+ Years",
        bio: "Founder and visionary of MSB, cost accountant, and pioneer in management training.",
        img: f2
      },
      {
        name: "Ms. S Gayatri",
        role: "Vice-Principal",
        qualification: "MSc, MCA, MPhil",
        specialization: "Business IT & Academic Delivery",
        experience: "15+ Years",
        bio: "Specializes in digital education and integrating technology tools into standard business training.",
        img: f1
      },
      {
        name: "Mr. Vijay Kiran Agastya",
        role: "Visiting Professor",
        qualification: "MBA, FCMA, ACCA, CIMA (UK)",
        specialization: "Cost Planning & Strategic Finance",
        experience: "20+ Years",
        bio: "Financial planner bringing global accounting standards and cost control methodologies to classes.",
        img: f3
      }
    ]
  },
  "cma-india": {
    title: "CMA (India) Certification Course",
    shortName: "CMA (India)",
    type: "Professional Certification",
    duration: "Integrated with B.Com / BBA (or standalone)",
    eligibility: "10+2 or Graduate in any stream",
    overview: "The Cost and Management Accountant (CMA) India program, awarded by ICMAI, is a highly respected professional qualification. It covers cost accounting, budgeting, auditing, and corporate taxation. Our integrated academic framework prepares students to crack the ICMAI exams while completing their degrees, enabling immediate placement in finance leadership tracks.",
    highlights: [
      "In-depth focus on Cost Auditing, Direct & Indirect Taxes, and Financial Strategy.",
      "Mock exams and intensive preparation modules guided by practicing FCMAs.",
      "High pass rates through specialized conceptual lecturing and solved paper cycles.",
      "Exemption and path assistance for graduates wanting fast-track certifications."
    ],
    curriculum: [
      {
        semester: "Foundation Level",
        courses: ["Fundamentals of Economics and Management", "Fundamentals of Accounting", "Fundamentals of Laws and Ethics", "Fundamentals of Business Mathematics and Statistics"]
      },
      {
        semester: "Intermediate Level",
        courses: ["Financial Accounting", "Laws & Ethics", "Direct Taxation", "Cost Accounting", "Operations Management & Strategic Management", "Cost & Management Accounting and Financial Management", "Indirect Taxation", "Company Accounts & Audit"]
      },
      {
        semester: "Final Level",
        courses: ["Corporate Laws & Compliance", "Strategic Financial Management", "Strategic Cost Management - Decision Making", "Direct Tax Laws & International Taxation", "Corporate Financial Reporting", "Indirect Tax Laws & Practice", "Cost & Management Audit", "Strategic Performance Management and Business Valuation"]
      }
    ],
    outcomes: [
      "Master cost audit protocols and corporate compliance rules in India.",
      "Apply strategic cost management strategies to optimize manufacturing and service operations.",
      "Evaluate corporate financial reports and provide strategic board recommendations.",
      "Advise corporations on direct and indirect tax structures."
    ],
    careers: [
      "Cost Auditor",
      "Management Accountant",
      "Financial Analyst",
      "Taxation Specialist",
      "Chief Financial Officer (CFO)",
      "Internal Auditor"
    ],
    benefits: [
      "Rigorous preparation with practicing Fellow Cost Accountants (FCMAs)",
      "Access to extensive library resources and past exam answer keys",
      "Exemption support guidance for degree graduates",
      "Direct cost auditing internship matching"
    ],
    collaboration: "Aligned with ICMAI professional standards and curriculum benchmarks.",
    admissionProcess: [
      "Fill out the professional training application form.",
      "Attend the CMA counselor orientation.",
      "Register with the ICMAI portal (with MSB assistance).",
      "Commence structured weekly lecture modules."
    ],
    faculty: [
      {
        name: "Ms. Lavanya Kanduri",
        role: "Dean & Chairperson",
        qualification: "M.Com, MBA, FCMA, DGBM",
        specialization: "Cost Auditing & Cost Control",
        experience: "15+ Years",
        bio: "Practicing cost accountant driving MSB's professional CMA program with specialized audit insights.",
        img: f2
      },
      {
        name: "Mr. Vijay Kiran Agastya",
        role: "Visiting Professor",
        qualification: "MBA, FCMA, ACCA, CIMA (UK)",
        specialization: "Cost Planning & Strategic Finance",
        experience: "20+ Years",
        bio: "Financial planner bringing global accounting standards and cost control methodologies to classes.",
        img: f3
      },
      {
        name: "Mr. Dakshina Murthy C",
        role: "Visiting Professor",
        qualification: "M.Com, MBA, FCMA, ACMA (UK), CGMA",
        specialization: "Advanced Auditing & Financial Reporting",
        experience: "22+ Years",
        bio: "Distinguished financial advisor and Cost and Management Accountant with global expertise.",
        img: null
      }
    ]
  },
  "cma-usa": {
    title: "CMA (USA) Certification Course",
    shortName: "CMA (USA)",
    type: "Professional Certification",
    duration: "Integrated with B.Com / BBA (or standalone)",
    eligibility: "10+2 (for exams) & Bachelor's Degree (for credential)",
    overview: "The Certified Management Accountant (CMA) USA, awarded by the Institute of Management Accountants (IMA), is a globally recognized credential. It validates expertise in financial planning, analysis, control, and decision support. MSB is an official preparation center, enabling students to gain global accounting capabilities and lock in international placements in MNCs.",
    highlights: [
      "Dual-part exam curriculum fully covered in two academic semesters.",
      "Access to IMA official study materials, test banks, and expert webinar recordings.",
      "Substantial student scholarship discounts on IMA membership and exam fees.",
      "Global network of corporate recruiters hiring USA CMA candidates directly."
    ],
    curriculum: [
      {
        semester: "Part 1: Financial Planning, Performance, and Analytics",
        courses: ["External Financial Reporting Decisions", "Planning, Budgeting, and Forecasting", "Performance Management", "Cost Management", "Internal Controls", "Technology and Analytics"]
      },
      {
        semester: "Part 2: Strategic Financial Management",
        courses: ["Financial Statement Analysis", "Corporate Finance", "Decision Analysis", "Risk Management", "Investment Decisions", "Professional Ethics"]
      }
    ],
    outcomes: [
      "Analyze external financial statements and formulate corporate strategy.",
      "Set up global budget forecasts and internal compliance controls.",
      "Evaluate financial risk profiles and corporate investment portfolios.",
      "Apply business analytics tools to financial decision-making."
    ],
    careers: [
      "Financial Analyst",
      "Finance Manager",
      "Budget Analyst",
      "Cost Accountant",
      "Risk Manager",
      "Controller"
    ],
    benefits: [
      "Official preparation support with certified USA CMA instructors",
      "IMA USA Student Scholarship discounts available for high-achievers",
      "Access to elite international alumni networks",
      "Intensive resume-crafting workshops for multinational hires"
    ],
    collaboration: "Aligned with IMA USA framework and curriculum recommendations.",
    admissionProcess: [
      "Consultation with the MSB USA CMA program counselor.",
      "Course admission registration.",
      "IMA USA Student Portal enrollment.",
      "Commencement of interactive training sessions."
    ],
    faculty: [
      {
        name: "Mr. Vijay Kiran Agastya",
        role: "Visiting Professor",
        qualification: "MBA, FCMA, ACCA, CIMA (UK)",
        specialization: "Global Finance & Management Accounting",
        experience: "20+ Years",
        bio: "Fellow Cost Accountant with deep international certifications experience guiding global aspirants.",
        img: f3
      },
      {
        name: "Ms. Lavanya Kanduri",
        role: "Dean & Chairperson",
        qualification: "M.Com, MBA, FCMA, DGBM",
        specialization: "Cost Planning & Analysis",
        experience: "15+ Years",
        bio: "Founder and visionary of MSB, cost accountant, and pioneer in management training.",
        img: f2
      },
      {
        name: "Mr. Dakshina Murthy C",
        role: "Visiting Professor",
        qualification: "M.Com, MBA, FCMA, ACMA (UK), CGMA",
        specialization: "Advanced Auditing & Financial Reporting",
        experience: "22+ Years",
        bio: "Distinguished financial advisor and Cost and Management Accountant with global expertise.",
        img: null
      }
    ]
  },
  "digital-marketing": {
    title: "Specialized Certification in Digital Marketing",
    shortName: "Digital Marketing",
    type: "Industry Certification",
    duration: "3-6 Months",
    eligibility: "Enrolled in BBA, MBA, or B.Com",
    overview: "This specialized program equips students with modern digital marketing strategies. It covers Search Engine Optimization (SEO), Search Engine Marketing (SEM), paid advertising campaigns on Google and social media platforms, video content creation, and analytics tools to trace user acquisition.",
    highlights: [
      "Hands-on campaign setups with real marketing budgets.",
      "Focus on Google Analytics, SEO tools, and social ad managers.",
      "Practical capstone project building a digital launch strategy.",
      "Joint certificate with leading digital marketing authorities."
    ],
    curriculum: [
      {
        semester: "Module 1",
        courses: ["Introduction to Digital Marketing", "Website Planning & SEO Fundamentals", "Search Engine Marketing (SEM) & PPC Ads"]
      },
      {
        semester: "Module 2",
        courses: ["Social Media Marketing (SMM)", "Content Strategy & Video Production", "Google Analytics & Data Tracking"]
      }
    ],
    outcomes: [
      "Set up, manage, and optimize Google Ads and social media campaigns.",
      "Audit and improve search engine optimization ranking for any corporate portal.",
      "Analyze online user behavior using digital web analytics.",
      "Formulate growth-oriented digital acquisition plans."
    ],
    careers: [
      "Digital Marketing Specialist",
      "SEO Consultant",
      "Social Media Coordinator",
      "PPC Campaign Manager",
      "Growth Hacker"
    ],
    benefits: [
      "Hands-on industry projects",
      "Accredited certifications",
      "Direct mentorship from digital agency experts",
      "Portfolio creation support"
    ],
    collaboration: "Co-delivered with industry experts from digital agencies.",
    admissionProcess: ["Automatic enrollment option for BBA/MBA/B.Com scholars, or standalone query submission."],
    faculty: [
      {
        name: "Ms. S Gayatri",
        role: "Vice-Principal",
        qualification: "MSc, MCA, MPhil",
        specialization: "Business IT & Digital Systems",
        experience: "15+ Years",
        bio: "Academic leader coordinating MSB's digital certifications framework.",
        img: f1
      },
      {
        name: "Ms. Sonal Goyal",
        role: "Lecturer",
        qualification: "M.B.A",
        specialization: "Marketing Management",
        experience: "10+ Years",
        bio: "Passionate marketing educator training students in advertising and branding strategies.",
        img: null
      }
    ]
  },
  "lean-six-sigma": {
    title: "Specialized Certification in Lean Six Sigma",
    shortName: "Lean Six Sigma",
    type: "Industry Certification",
    duration: "3 Months",
    eligibility: "Enrolled in BBA, MBA, or B.Com",
    overview: "Our Lean Six Sigma Green Belt program teaches process improvement methodology. It combines Lean waste reduction principles with Six Sigma statistical techniques to eliminate process defects and improve operational efficiency across any business industry.",
    highlights: [
      "DMAIC process structure (Define, Measure, Analyze, Improve, Control) project.",
      "Training in statistical tools and operational analysis.",
      "Case study workshops evaluating real-world supply chain and operations problems.",
      "Globally recognized Green Belt credential."
    ],
    curriculum: [
      {
        semester: "Phase 1: Define & Measure",
        courses: ["Project Charter & Process Mapping", "Data Collection & Basic Statistics"]
      },
      {
        semester: "Phase 2: Analyze, Improve & Control",
        courses: ["Root Cause Analysis", "Implementation Strategies", "Statistical Process Control (SPC)"]
      }
    ],
    outcomes: [
      "Identify waste and process bottlenecks in corporate systems.",
      "Collect and analyze statistical process data to find defects.",
      "Formulate implementation plans to boost employee productivity.",
      "Sustain long-term quality control systems."
    ],
    careers: [
      "Quality Analyst",
      "Process Improvement Consultant",
      "Operations Coordinator",
      "Project Manager"
    ],
    benefits: [
      "Direct competitive advantage in operations recruiting",
      "Accredited Green Belt certification",
      "Hands-on statistical software training",
      "Expert-led QA workshops"
    ],
    collaboration: "Certified framework aligned with international Six Sigma standards.",
    admissionProcess: ["Enrolled through the academic portal as an optional value-add program."],
    faculty: [
      {
        name: "Mr. Gurumurthy",
        role: "Senior Lecturer",
        qualification: "MSc, MCA, MPhil",
        specialization: "Operations Research & Quantitative Techniques",
        experience: "16+ Years",
        bio: "Guides operational excellence classes with deep knowledge in statistical analysis.",
        img: null
      },
      {
        name: "Ms. Lavanya Kanduri",
        role: "Dean & Chairperson",
        qualification: "M.Com, MBA, FCMA, DGBM",
        specialization: "Operations Analysis & Cost Planning",
        experience: "15+ Years",
        bio: "Founder and visionary of MSB, cost accountant, and pioneer in management training.",
        img: f2
      }
    ]
  },
  "bi-data-visualization": {
    title: "Specialized Certification in BI & Data Visualization",
    shortName: "BI & Data Visualization",
    type: "Industry Certification",
    duration: "3 Months",
    eligibility: "Enrolled in BBA, MBA, or B.Com",
    overview: "This program focuses on Business Intelligence (BI) tools. It teaches students how to represent corporate data patterns visually using charts, dashboard maps, and pivot plots, translating complex data into insights.",
    highlights: [
      "Hands-on training in Microsoft Power BI and Tableau.",
      "Building interactive corporate financial/sales dashboards.",
      "Lessons in dataset prep and cleaning practices.",
      "Portfolio preparation showcasing business dashboards."
    ],
    curriculum: [
      {
        semester: "Module 1",
        courses: ["Data Cleaning & Shaping", "Introduction to Power BI & Tableau", "Creating Key KPI Visuals"]
      },
      {
        semester: "Module 2",
        courses: ["Advanced Dashboard Interactivity", "Publishing Dashboards", "Final Reporting Capstone"]
      }
    ],
    outcomes: [
      "Design and publish executive dashboards.",
      "Clean raw data using ETL processes.",
      "Interpret KPI changes using data charts.",
      "Recommend business solutions using data insights."
    ],
    careers: [
      "BI Developer",
      "Data Visualizer",
      "Reporting Analyst",
      "Business Intelligence Consultant"
    ],
    benefits: [
      "Access to MSB analytics labs",
      "Interactive data projects portfolio",
      "Prepares for Microsoft Power BI exams",
      "Weekly analytics guest seminars"
    ],
    collaboration: "Collaboration with tech training professionals.",
    admissionProcess: ["Enrolment confirmation through MSB tech hub."],
    faculty: [
      {
        name: "Ms. S Gayatri",
        role: "Vice-Principal",
        qualification: "MSc, MCA, MPhil",
        specialization: "Computer Applications & Data Systems",
        experience: "15+ Years",
        bio: "Coordinates advanced technology certifications and analytics systems.",
        img: f1
      },
      {
        name: "Ms. Kunchala Varalaxmi",
        role: "Lecturer",
        qualification: "M.Sc. (Statistics)",
        specialization: "Statistical Methods & Analytical Tools",
        experience: "11+ Years",
        bio: "Guides students in data organization and quantitative analysis techniques.",
        img: null
      }
    ]
  },
  "business-analytics": {
    title: "Specialized Certification in Business Analytics",
    shortName: "Business Analytics",
    type: "Industry Certification",
    duration: "4 Months",
    eligibility: "Enrolled in BBA, MBA, or B.Com",
    overview: "This program transforms raw datasets into business intelligence. It teaches students how to apply data mining, predictive modeling, and optimization tools to solve commercial challenges and identify corporate growth pathways.",
    highlights: [
      "Practical project work using Excel and statistical software.",
      "Predictive modeling exercises for market and sales forecasting.",
      "Case study workshops examining data-driven corporate decisions.",
      "Direct matching with data analyst recruiters."
    ],
    curriculum: [
      {
        semester: "Module 1",
        courses: ["Foundations of Analytics", "Data Mining & Wrangling", "Predictive Modeling Basics"]
      },
      {
        semester: "Module 2",
        courses: ["Optimization Simulations", "Forecasting Methods", "Final Capstone Project"]
      }
    ],
    outcomes: [
      "Apply quantitative analytics models to business problems.",
      "Mine and structure big datasets.",
      "Predict corporate demand and sales trends.",
      "Produce strategic growth analytics reports."
    ],
    careers: [
      "Business Analyst",
      "Analytics Specialist",
      "Growth Consultant",
      "Strategy Associate"
    ],
    benefits: [
      "Hands-on predictive modeling training",
      "Analytics industry guest lectures",
      "Advanced stats tools licenses",
      "Exclusive mock interview prep"
    ],
    collaboration: "Joint certification format with analytics training institutes.",
    admissionProcess: ["Online registration option for MSB business stream students."],
    faculty: [
      {
        name: "Ms. S Gayatri",
        role: "Vice-Principal",
        qualification: "MSc, MCA, MPhil",
        specialization: "Information Systems",
        experience: "15+ Years",
        bio: "Guides tech integrations and analytics training across MSB programs.",
        img: f1
      },
      {
        name: "Ms. Kunchala Varalaxmi",
        role: "Lecturer",
        qualification: "M.Sc. (Statistics)",
        specialization: "Probability & Predictive Models",
        experience: "11+ Years",
        bio: "Passionate stats teacher guiding data modeling and statistical studies.",
        img: null
      }
    ]
  },
  "financial-analytics": {
    title: "Specialized Certification in Financial Analytics",
    shortName: "Financial Analytics",
    type: "Industry Certification",
    duration: "3 Months",
    eligibility: "Enrolled in BBA, MBA, or B.Com",
    overview: "This course utilizes data analytics tools to evaluate organization performance. It covers balance sheet data analysis, portfolio modeling, and using indicators to predict future corporate financial health.",
    highlights: [
      "Financial data analysis using Excel and analytics toolkits.",
      "Risk assessment and stock portfolio optimization workshops.",
      "Corporate valuation projects evaluating listed firms.",
      "Prepares for finance analyst positions."
    ],
    curriculum: [
      {
        semester: "Module 1",
        courses: ["Financial Ratios & Metrics Analytics", "Portfolio Modeling & Valuation Tools"]
      },
      {
        semester: "Module 2",
        courses: ["Corporate Risk Evaluation", "Strategic Financial Projections Project"]
      }
    ],
    outcomes: [
      "Analyze balance sheet and corporate cash flow details.",
      "Design quantitative corporate valuation plans.",
      "Assess market risk and optimize financial portfolios.",
      "Synthesize investor relations financial briefings."
    ],
    careers: [
      "Financial Analyst",
      "Portfolio Associate",
      "Investment Risk Manager",
      "Treasury Analyst"
    ],
    benefits: [
      "Access to real-world financial database case files",
      "Financial valuation project portfolio",
      "Mentored by senior cost auditors",
      "Resume validation for finance sector"
    ],
    collaboration: "Designed with accounting professionals and CMA experts.",
    admissionProcess: ["Registered through MSB finance department."],
    faculty: [
      {
        name: "Ms. Lavanya Kanduri",
        role: "Dean & Chairperson",
        qualification: "M.Com, MBA, FCMA, DGBM",
        specialization: "Corporate Valuation & Accounting Systems",
        experience: "15+ Years",
        bio: "Founder and visionary of MSB, cost accountant, and pioneer in management training.",
        img: f2
      },
      {
        name: "Mr. Vijay Kiran Agastya",
        role: "Visiting Professor",
        qualification: "MBA, FCMA, ACCA, CIMA (UK)",
        specialization: "Investment Planning & Finance Analytics",
        experience: "20+ Years",
        bio: "Global financial management expert delivering advanced corporate finance modules.",
        img: f3
      }
    ]
  },
  "hr-analytics": {
    title: "Specialized Certification in HR Analytics",
    shortName: "HR Analytics",
    type: "Industry Certification",
    duration: "3 Months",
    eligibility: "Enrolled in BBA, MBA, or B.Com",
    overview: "Our HR Analytics program teaches data-driven HR strategies. It covers analyzing employee performance data, tracking attrition markers, and using statistics to boost recruiting and retain top talent.",
    highlights: [
      "Formulating retention predictive tools.",
      "Designing corporate staffing models and KPIs.",
      "Evaluating recruiting sources using conversion data.",
      "Hands-on projects with HR database dashboards."
    ],
    curriculum: [
      {
        semester: "Module 1",
        courses: ["Introduction to Workforce Analytics", "Recruitment Conversion Metrics", "KPI Design"]
      },
      {
        semester: "Module 2",
        courses: ["Employee Attrition Prediction Models", "Workforce Dashboard Design"]
      }
    ],
    outcomes: [
      "Analyze staffing KPIs and employee retention markers.",
      "Design and deploy employee dashboard platforms.",
      "Solve workforce attrition challenges with statistical insight.",
      "Optimize recruiter conversion paths."
    ],
    careers: [
      "HR Analyst",
      "Workforce Planner",
      "HR Operations Specialist",
      "Talent Consultant"
    ],
    benefits: [
      "Competitive edge in corporate HR recruiting",
      "Workforce dashboard portfolio",
      "Training in HR statistical tools",
      "Soft skills integration coaching"
    ],
    collaboration: "Developed with corporate HR partners.",
    admissionProcess: ["Enrolled via MSB admissions desk."],
    faculty: [
      {
        name: "Ms. Sonal Goyal",
        role: "Lecturer",
        qualification: "M.B.A",
        specialization: "Human Resource Management",
        experience: "10+ Years",
        bio: "Dedicated HR educator teaching student staffing models and workspace psychology.",
        img: null
      },
      {
        name: "Mr. Deepak Biradar",
        role: "Lecturer",
        qualification: "MBA",
        specialization: "Organizational Behavior & HR Strategy",
        experience: "9+ Years",
        bio: "Specialist lecturer guiding student management projects and HR case study evaluations.",
        img: null
      }
    ]
  },
  "data-science-tally-gst": {
    title: "Integrated Program in Data Science, Tally & GST",
    shortName: "Data Science, Tally & GST",
    type: "Industry Certification",
    duration: "6 Months",
    eligibility: "Enrolled in BBA, MBA, or B.Com",
    overview: "This program combines data-driven insights with hands-on proficiency in corporate financial accounting and taxation. It covers Python/SQL for data science, Tally Prime ERP, and practical GST filings.",
    highlights: [
      "Hands-on Tally Prime accounting operations.",
      "Python/SQL data analysis exercises.",
      "Mock GST portal filing and corporate compliance projects.",
      "Double certification (Tech & Commerce)."
    ],
    curriculum: [
      {
        semester: "Module 1: Accounting & Taxation",
        courses: ["Double Entry Bookkeeping on Tally", "GST Laws & Direct Taxes", "Corporate Audit Compliance Project"]
      },
      {
        semester: "Module 2: Tech & Data Science",
        courses: ["Introduction to Python & SQL", "Data Wrangling & Analysis Tools", "Integrated Financial Reporting Dashboard"]
      }
    ],
    outcomes: [
      "Generate tax and auditing reports using Tally ERP.",
      "Prepare and file mock GST tax returns.",
      "Write SQL queries to fetch and analyze corporate records.",
      "Recommend business growth moves using SQL/Python models."
    ],
    careers: [
      "Tax Consultant",
      "Accounts Executive",
      "Financial Analyst",
      "Auditor Consultant",
      "Data Scientist Associate"
    ],
    benefits: [
      "Dual focus (Accounting & Data Analytics)",
      "Hands-on Tally Prime certification preparation",
      "Practical corporate tax projects portfolio",
      "MNC finance placements eligibility support"
    ],
    collaboration: "Designed with commerce chapters and software training agencies.",
    admissionProcess: ["Open for all MSB commerce and business management cohorts."],
    faculty: [
      {
        name: "Ms. Lavanya Kanduri",
        role: "Dean & Chairperson",
        qualification: "M.Com, MBA, FCMA, DGBM",
        specialization: "Financial Reporting & Accounting Control",
        experience: "15+ Years",
        bio: "Founder and visionary of MSB, cost accountant, and pioneer in management training.",
        img: f2
      },
      {
        name: "Ms. S Gayatri",
        role: "Vice-Principal",
        qualification: "MSc, MCA, MPhil",
        specialization: "Business IT & Software Applications",
        experience: "15+ Years",
        bio: "Specializes in digital education and integrating technology tools into standard business training.",
        img: f1
      },
      {
        name: "Ms. Saritha Guvala",
        role: "Lecturer",
        qualification: "M.Com",
        specialization: "GST & Taxation",
        experience: "12+ Years",
        bio: "Passionate educator guiding students in auditing and Indian taxation filings.",
        img: null
      }
    ]
  },
  bec: {
    title: "Business English Certificate (BEC) Program",
    shortName: "BEC Program",
    type: "Language & Communication Program",
    duration: "Integrated (Throughout the Degree)",
    eligibility: "All enrolled BBA, B.Com, and MBA students",
    overview: "The Business English Certificate (BEC) program improves student work-readiness by reinforcing communication skills in business, corporate drafting, mock interview interaction, and professional presentation capability. It is designed to match international corporate hiring standards.",
    highlights: [
      "Preparation for globally accepted Cambridge BEC certification exams.",
      "Practice in corporate reporting and business letter drafting.",
      "Weekly mock interview simulations and public speaking labs.",
      "Group discussions and corporate presentation coaching."
    ],
    curriculum: [
      {
        semester: "Phase 1: Foundation Skills",
        courses: ["Business Vocabulary", "Email & Memo Writing", "Telephone Communication Basics"]
      },
      {
        semester: "Phase 2: Professional Mastery",
        courses: ["Corporate Proposal & Report Drafting", "Mock Interview Strategy", "Effective Boardroom Presentations"]
      }
    ],
    outcomes: [
      "Draft concise, professional business emails, proposals, and reports.",
      "Communicate with confidence during corporate meetings and interviews.",
      "Interpret and present data accurately in business contexts.",
      "Collaborate effectively in cross-cultural corporate teams."
    ],
    careers: [
      "Client Relations Executive",
      "Corporate Communicator",
      "Business Coordinator",
      "Consulting Trainee"
    ],
    benefits: [
      "Cambridge BEC preparation framework",
      "Access to MSB communication labs",
      "1:1 feedback on presentation and speaking style",
      "Direct inclusion in placement prep portfolios"
    ],
    collaboration: "Aligned with international business communication benchmarks.",
    admissionProcess: ["Core module taken by all first-year MSB management and commerce cohorts."],
    faculty: [
      {
        name: "Ms. Sarvani Ravuluri",
        role: "Lecturer & Mentor",
        qualification: "Masters in Communication & Journalism (MCJ)",
        specialization: "Business Communication & Public Relations",
        experience: "8+ Years",
        bio: "Guides students in corporate drafting, boardroom presence, and verbal interactions.",
        img: null
      },
      {
        name: "Ms Prabhavathi",
        role: "Lecturer",
        qualification: "M.A.",
        specialization: "English Language & Literature",
        experience: "14+ Years",
        bio: "Experienced language teacher training students in grammar, business vocabulary, and writing style.",
        img: null
      }
    ]
  }
};
