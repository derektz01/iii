// Centralized badge color configuration
export const badgeColors = {
  issuer: {
    "HR": "bg-blue-100 text-blue-800",
    "IT": "bg-purple-100 text-purple-800", 
    "Operations": "bg-green-100 text-green-800",
    "Finance": "bg-yellow-100 text-yellow-800",
    "Security": "bg-red-100 text-red-800",
    "Marketing": "bg-pink-100 text-pink-800",
    "Business Development": "bg-indigo-100 text-indigo-800",
    "Sustainability": "bg-emerald-100 text-emerald-800",
    "International Business": "bg-cyan-100 text-cyan-800",
    "Innovation Lab": "bg-violet-100 text-violet-800",
    "Strategy": "bg-orange-100 text-orange-800",
    "HR Research": "bg-teal-100 text-teal-800",
    "HR Benefits": "bg-sky-100 text-sky-800",
    "Learning & Development": "bg-lime-100 text-lime-800",
    "Corporate Social Responsibility": "bg-rose-100 text-rose-800",
    "Facilities": "bg-amber-100 text-amber-800",
    "Procurement": "bg-stone-100 text-stone-800",
    "Administration": "bg-slate-100 text-slate-800",
    "IT Support": "bg-fuchsia-100 text-fuchsia-800",
    "Safety Department": "bg-red-100 text-red-800",
    "Occupational Health": "bg-green-100 text-green-800",
    "Fleet Management": "bg-blue-100 text-blue-800",
    "Environmental Safety": "bg-emerald-100 text-emerald-800",
    "Executive": "bg-gray-100 text-gray-800"
  },
  category: {
    // Policies
    "Ethics": "bg-blue-100 text-blue-800",
    "Privacy": "bg-purple-100 text-purple-800",
    "HR": "bg-green-100 text-green-800",
    "Safety": "bg-red-100 text-red-800",
    "IT": "bg-cyan-100 text-cyan-800",
    
    // Notices
    "Company Policy": "bg-blue-100 text-blue-800",
    "General Notice": "bg-gray-100 text-gray-800",
    "Employee Benefits": "bg-green-100 text-green-800",
    "Meeting Records": "bg-purple-100 text-purple-800",
    "Job Opportunities": "bg-orange-100 text-orange-800",
    "Security Update": "bg-red-100 text-red-800",
    
    // Press Releases
    "Financial Results": "bg-yellow-100 text-yellow-800",
    "Business Partnership": "bg-indigo-100 text-indigo-800",
    "Environmental": "bg-emerald-100 text-emerald-800",
    "Business Expansion": "bg-pink-100 text-pink-800",
    
    // Publications
    "Technology": "bg-cyan-100 text-cyan-800",
    "Market Research": "bg-orange-100 text-orange-800",
    "Human Resources": "bg-green-100 text-green-800",
    
    // Benefits
    "Medical & Insurance": "bg-red-100 text-red-800",
    "Financial Planning": "bg-yellow-100 text-yellow-800",
    "Career Development": "bg-purple-100 text-purple-800",
    "Community Engagement": "bg-emerald-100 text-emerald-800",
    "Dining Services": "bg-orange-100 text-orange-800",
    
    // Forms
    "Finance": "bg-yellow-100 text-yellow-800",
    "Information Technology": "bg-cyan-100 text-cyan-800",
    "Administrative": "bg-gray-100 text-gray-800",
    
    // Handbooks and Videos
    "Company Handbook": "bg-blue-100 text-blue-800",
    "Departmental Handbook": "bg-purple-100 text-purple-800",
    "System Manual": "bg-cyan-100 text-cyan-800",
    "Training Videos": "bg-green-100 text-green-800",
    "Operational Procedures": "bg-orange-100 text-orange-800",
    
    // Risk Assessments
    "Route Safety": "bg-red-100 text-red-800",
    "Transportation": "bg-blue-100 text-blue-800",
    
    // Safety Tips
    "Emergency Procedures": "bg-red-100 text-red-800",
    "Health and Wellness": "bg-green-100 text-green-800",
    "Transportation Safety": "bg-blue-100 text-blue-800",
    "Hazardous Materials": "bg-orange-100 text-orange-800",
    "Security": "bg-purple-100 text-purple-800"
  }
};

export const mockData = {
  en: {
    policies: [
      {
        id: 1,
        title: "Code of Conduct and Professional Ethics Standards for All Employee Categories",
        description: "Guidelines for ethical behavior and professional standards",
        date: "2024-01-15",
        category: "Ethics",
        referenceCode: "POL-HR-001-2024",
        issuer: "HR",
        serialNumber: "HR-2024-001",
        hasAttachment: true,
        attachmentCount: 3,
        content: "This comprehensive policy document outlines the fundamental principles of ethical conduct that all employees are expected to follow. It covers areas including professional integrity, conflict of interest, confidentiality, and compliance with legal and regulatory requirements.",
        attachments: [
          { id: 1, name: "Code_of_Conduct_2024.pdf", type: "PDF", size: "2.1 MB" },
          { id: 2, name: "Ethics_Guidelines_Quick_Reference.pdf", type: "PDF", size: "856 KB" },
          { id: 3, name: "Code_of_Conduct_Training_Slides.pptx", type: "PowerPoint", size: "4.3 MB" }
        ]
      },
      {
        id: 2,
        title: "Data Privacy Policy and Information Security Management Framework",
        description: "Comprehensive data protection and privacy guidelines",
        date: "2024-02-01",
        category: "Privacy",
        referenceCode: "POL-IT-002-2024",
        issuer: "IT",
        serialNumber: "IT-2024-002",
        hasAttachment: true,
        attachmentCount: 5,
        content: "This policy establishes the framework for data protection and information security management within the organization. It details procedures for data collection, processing, storage, and disposal while ensuring compliance with applicable privacy laws and regulations.",
        attachments: [
          { id: 1, name: "Data_Privacy_Policy_2024.pdf", type: "PDF", size: "3.2 MB" },
          { id: 2, name: "GDPR_Compliance_Guide.pdf", type: "PDF", size: "1.8 MB" },
          { id: 3, name: "Data_Breach_Response_Plan.pdf", type: "PDF", size: "1.2 MB" },
          { id: 4, name: "Security_Incident_Form.docx", type: "Word", size: "245 KB" },
          { id: 5, name: "Privacy_Impact_Assessment_Template.xlsx", type: "Excel", size: "412 KB" }
        ]
      },
      {
        id: 3,
        title: "Remote Work Policy and Hybrid Working Arrangements Guidelines",
        description: "Guidelines and procedures for remote work arrangements",
        date: "2024-01-20",
        category: "HR",
        referenceCode: "POL-HR-003-2024",
        issuer: "HR",
        serialNumber: "HR-2024-003",
        hasAttachment: true,
        attachmentCount: 2,
        content: "This policy provides comprehensive guidelines for remote and hybrid work arrangements, including eligibility criteria, equipment requirements, communication protocols, and performance management for distributed teams.",
        attachments: [
          { id: 1, name: "Remote_Work_Policy_2024.pdf", type: "PDF", size: "1.9 MB" },
          { id: 2, name: "Home_Office_Setup_Checklist.pdf", type: "PDF", size: "687 KB" }
        ]
      },
      {
        id: 4,
        title: "Health and Safety Protocols for Workplace Operations",
        description: "Comprehensive safety guidelines and emergency procedures",
        date: "2024-03-10",
        category: "Safety",
        referenceCode: "POL-OPS-004-2024",
        issuer: "Operations",
        serialNumber: "OPS-2024-004",
        hasAttachment: true,
        attachmentCount: 4,
        content: "This policy establishes comprehensive health and safety protocols for all workplace operations, including risk assessment procedures, emergency response plans, and employee training requirements to ensure a safe working environment.",
        attachments: [
          { id: 1, name: "Health_Safety_Manual_2024.pdf", type: "PDF", size: "5.2 MB" },
          { id: 2, name: "Emergency_Evacuation_Plan.pdf", type: "PDF", size: "2.1 MB" },
          { id: 3, name: "Incident_Report_Form.docx", type: "Word", size: "156 KB" },
          { id: 4, name: "Safety_Training_Record_Template.xlsx", type: "Excel", size: "298 KB" }
        ]
      },
      {
        id: 5,
        title: "Equipment Usage and Maintenance Policy for IT Assets",
        description: "Guidelines for proper use and maintenance of company IT equipment",
        date: "2024-02-28",
        category: "IT",
        referenceCode: "POL-IT-005-2024",
        issuer: "IT",
        serialNumber: "IT-2024-005",
        hasAttachment: true,
        attachmentCount: 1,
        content: "This policy outlines the proper use, care, and maintenance of company IT equipment including computers, mobile devices, software, and network resources. It includes user responsibilities, security requirements, and procedures for equipment requests and returns.",
        attachments: [
          { id: 1, name: "IT_Equipment_Policy_2024.pdf", type: "PDF", size: "1.4 MB" }
        ]
      }
    ],
    notices: [
      {
        id: 1,
        title: "New Company Policy on Flexible Working Hours Implementation",
        content: "Effective January 1, 2025, all employees will have access to flexible working hour arrangements. Please review the attached guidelines and submit your preferred schedule by December 20th.",
        description: "Guidelines for implementing flexible working hours across all departments",
        date: "2024-12-01",
        priority: "high",
        category: "Company Policy",
        type: "公司政策",
        issuer: "HR",
        serialNumber: "NOT-HR-012-2024",
        hasAttachment: true,
        attachmentCount: 2,
        attachments: [
          { id: 1, name: "Flexible_Hours_Guidelines.pdf", type: "PDF", size: "1.2 MB" },
          { id: 2, name: "Schedule_Request_Form.docx", type: "Word", size: "245 KB" }
        ]
      },
      {
        id: 2,
        title: "Holiday Season Office Closure and System Maintenance Schedule",
        content: "Please note that our offices will be closed from December 23rd to January 2nd. Essential IT maintenance will be performed during this period.",
        description: "Official notice regarding holiday closure and planned maintenance activities",
        date: "2024-12-01",
        priority: "high",
        category: "General Notice",
        type: "公司政策",
        issuer: "Operations",
        serialNumber: "NOT-OPS-013-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Holiday_Schedule_2024.pdf", type: "PDF", size: "456 KB" },
          { id: 2, name: "System_Maintenance_Details.pdf", type: "PDF", size: "789 KB" },
          { id: 3, name: "Emergency_Contacts_Holiday.pdf", type: "PDF", size: "321 KB" }
        ]
      },
      {
        id: 3,
        title: "Employee Wellness Program Launch and Enrollment Information",
        content: "We're excited to announce the launch of our comprehensive wellness program starting January 2025. Enrollment opens December 15th with various health and fitness benefits.",
        description: "Information about the new employee wellness program and enrollment process",
        date: "2024-11-28",
        priority: "medium",
        category: "Employee Benefits",
        type: "員工活動或優惠",
        issuer: "HR",
        serialNumber: "NOT-HR-014-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Wellness_Program_Overview.pdf", type: "PDF", size: "2.1 MB" },
          { id: 2, name: "Enrollment_Instructions.pdf", type: "PDF", size: "892 KB" },
          { id: 3, name: "Health_Assessment_Form.pdf", type: "PDF", size: "567 KB" },
          { id: 4, name: "Fitness_Center_Membership_Info.pdf", type: "PDF", size: "1.3 MB" }
        ]
      },
      {
        id: 4,
        title: "Q4 Board Meeting Minutes and Strategic Planning Outcomes",
        content: "The quarterly board meeting was held on November 15th. Key decisions include budget allocation for 2025 and new market expansion strategies.",
        description: "Summary of Q4 board meeting discussions and strategic decisions",
        date: "2024-11-20",
        priority: "medium",
        category: "Meeting Records",
        type: "會議紀錄",
        issuer: "Executive",
        serialNumber: "NOT-EXE-015-2024",
        hasAttachment: true,
        attachmentCount: 2,
        attachments: [
          { id: 1, name: "Q4_Board_Meeting_Minutes.pdf", type: "PDF", size: "3.4 MB" },
          { id: 2, name: "Strategic_Plan_2025_Summary.pdf", type: "PDF", size: "1.8 MB" }
        ]
      },
      {
        id: 5,
        title: "Internal Job Opening: Senior Marketing Manager Position",
        content: "We have an exciting opportunity for a Senior Marketing Manager position in our Digital Marketing team. Internal applications are welcome until December 10th.",
        description: "Internal job posting for senior marketing manager role",
        date: "2024-11-15",
        priority: "medium",
        category: "Job Opportunities",
        type: "內部職位空缺",
        issuer: "HR",
        serialNumber: "NOT-HR-016-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Marketing_Manager_Job_Description.pdf", type: "PDF", size: "987 KB" },
          { id: 2, name: "Internal_Application_Form.docx", type: "Word", size: "234 KB" },
          { id: 3, name: "Career_Progression_Guidelines.pdf", type: "PDF", size: "1.1 MB" }
        ]
      },
      {
        id: 6,
        title: "Updated Security Protocols and Access Card Replacement Process",
        content: "New security measures will be implemented starting January 2025. All employees must update their access cards and complete security training.",
        description: "Information about enhanced security protocols and access card updates",
        date: "2024-11-10",
        priority: "high",
        category: "Security Update",
        type: "其他通告",
        issuer: "Security",
        serialNumber: "NOT-SEC-017-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Security_Protocol_Update.pdf", type: "PDF", size: "1.6 MB" },
          { id: 2, name: "Access_Card_Replacement_Process.pdf", type: "PDF", size: "743 KB" },
          { id: 3, name: "Security_Training_Schedule.pdf", type: "PDF", size: "521 KB" }
        ]
      }
    ],
    presses: [
      {
        id: 1,
        title: "Company Announces Record Q3 Financial Results and Growth Projections",
        summary: "Strong performance across all business units drives unprecedented growth with revenue increase of 34% year-over-year",
        description: "Comprehensive financial results announcement with detailed performance metrics and future outlook",
        date: "2024-10-15",
        category: "Financial Results",
        type: "Financial",
        issuer: "Finance",
        serialNumber: "PR-FIN-008-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Q3_Financial_Results_Full_Report.pdf", type: "PDF", size: "4.2 MB" },
          { id: 2, name: "Q3_Executive_Summary.pdf", type: "PDF", size: "1.3 MB" },
          { id: 3, name: "Financial_Charts_and_Graphs.pdf", type: "PDF", size: "2.1 MB" },
          { id: 4, name: "Investor_Presentation_Q3.pptx", type: "PowerPoint", size: "5.7 MB" }
        ]
      },
      {
        id: 2,
        title: "Strategic Partnership with Leading Technology Innovation Company Announced",
        summary: "Multi-year alliance to enhance digital transformation capabilities and accelerate market expansion into emerging technologies",
        description: "Announcement of strategic partnership agreement with detailed collaboration framework and expected outcomes",
        date: "2024-11-01",
        category: "Business Partnership",
        type: "Business",
        issuer: "Business Development",
        serialNumber: "PR-BD-009-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Partnership_Agreement_Summary.pdf", type: "PDF", size: "2.8 MB" },
          { id: 2, name: "Technology_Integration_Roadmap.pdf", type: "PDF", size: "1.9 MB" },
          { id: 3, name: "Joint_Press_Release.pdf", type: "PDF", size: "867 KB" }
        ]
      },
      {
        id: 3,
        title: "Sustainability Initiative Launch: Carbon Neutral Operations by 2026",
        summary: "Comprehensive environmental program targeting zero carbon emissions with renewable energy adoption and sustainable practices",
        description: "Major sustainability announcement outlining environmental commitment and implementation timeline",
        date: "2024-09-22",
        category: "Environmental",
        type: "Corporate Social Responsibility",
        issuer: "Sustainability",
        serialNumber: "PR-SUS-010-2024",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "Sustainability_Strategy_2024-2026.pdf", type: "PDF", size: "3.6 MB" },
          { id: 2, name: "Carbon_Footprint_Assessment.pdf", type: "PDF", size: "2.2 MB" },
          { id: 3, name: "Renewable_Energy_Plan.pdf", type: "PDF", size: "1.8 MB" },
          { id: 4, name: "Environmental_Impact_Goals.pdf", type: "PDF", size: "1.4 MB" },
          { id: 5, name: "Sustainability_Timeline_Infographic.pdf", type: "PDF", size: "923 KB" }
        ]
      },
      {
        id: 4,
        title: "Global Expansion: New International Offices Opening in Three Markets",
        summary: "Strategic expansion into Asian and European markets with new office locations in Singapore, London, and Frankfurt",
        description: "International expansion announcement with market analysis and growth strategy details",
        date: "2024-08-14",
        category: "Business Expansion",
        type: "Business",
        issuer: "International Business",
        serialNumber: "PR-IB-011-2024",
        hasAttachment: true,
        attachmentCount: 6,
        attachments: [
          { id: 1, name: "Global_Expansion_Strategy.pdf", type: "PDF", size: "4.1 MB" },
          { id: 2, name: "Market_Analysis_Asia_Pacific.pdf", type: "PDF", size: "2.7 MB" },
          { id: 3, name: "European_Market_Entry_Plan.pdf", type: "PDF", size: "2.3 MB" },
          { id: 4, name: "Office_Location_Details.pdf", type: "PDF", size: "1.5 MB" },
          { id: 5, name: "Hiring_Plans_International.pdf", type: "PDF", size: "1.2 MB" },
          { id: 6, name: "Timeline_and_Milestones.pdf", type: "PDF", size: "891 KB" }
        ]
      }
    ],
    publications: [
      {
        id: 1,
        title: "Annual Sustainability and Environmental Impact Report 2024",
        description: "Comprehensive analysis of environmental initiatives, carbon footprint reduction, and sustainability achievements throughout 2024",
        type: "Annual Report",
        pages: 45,
        date: "2024-03-15",
        category: "Environmental",
        issuer: "Sustainability",
        serialNumber: "PUB-SUS-003-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Sustainability_Report_2024_Full.pdf", type: "PDF", size: "8.3 MB" },
          { id: 2, name: "Executive_Summary_Sustainability.pdf", type: "PDF", size: "2.1 MB" },
          { id: 3, name: "Environmental_Data_Appendix.xlsx", type: "Excel", size: "1.7 MB" }
        ]
      },
      {
        id: 2,
        title: "Innovation in Practice: Digital Transformation Case Studies and Best Practices",
        description: "Collection of real-world case studies showcasing successful digital transformation initiatives and implementation strategies",
        type: "Whitepaper",
        pages: 28,
        date: "2024-05-20",
        category: "Technology",
        issuer: "Innovation Lab",
        serialNumber: "PUB-IL-004-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Digital_Transformation_Whitepaper.pdf", type: "PDF", size: "3.9 MB" },
          { id: 2, name: "Case_Study_Collection.pdf", type: "PDF", size: "2.8 MB" },
          { id: 3, name: "Implementation_Framework.pdf", type: "PDF", size: "1.6 MB" },
          { id: 4, name: "Best_Practices_Checklist.docx", type: "Word", size: "567 KB" }
        ]
      },
      {
        id: 3,
        title: "Industry Trends and Market Analysis Report: Future of Business Technology",
        description: "In-depth analysis of emerging technology trends, market opportunities, and strategic recommendations for business adaptation",
        type: "Market Research",
        pages: 52,
        date: "2024-07-10",
        category: "Market Research",
        issuer: "Strategy",
        serialNumber: "PUB-STR-005-2024",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "Industry_Trends_Report_2024.pdf", type: "PDF", size: "6.4 MB" },
          { id: 2, name: "Technology_Roadmap_Analysis.pdf", type: "PDF", size: "3.2 MB" },
          { id: 3, name: "Market_Opportunities_Summary.pdf", type: "PDF", size: "2.1 MB" },
          { id: 4, name: "Strategic_Recommendations.pdf", type: "PDF", size: "1.8 MB" },
          { id: 5, name: "Data_Charts_and_Metrics.xlsx", type: "Excel", size: "2.3 MB" }
        ]
      },
      {
        id: 4,
        title: "Employee Engagement and Workplace Culture Study 2024",
        description: "Comprehensive research on employee satisfaction, workplace culture effectiveness, and recommendations for organizational improvement",
        type: "Research Study",
        pages: 36,
        date: "2024-09-05",
        category: "Human Resources",
        issuer: "HR Research",
        serialNumber: "PUB-HR-006-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Employee_Engagement_Study_2024.pdf", type: "PDF", size: "4.7 MB" },
          { id: 2, name: "Survey_Results_Analysis.pdf", type: "PDF", size: "2.9 MB" },
          { id: 3, name: "Culture_Improvement_Recommendations.pdf", type: "PDF", size: "1.9 MB" },
          { id: 4, name: "Engagement_Metrics_Dashboard.xlsx", type: "Excel", size: "1.4 MB" }
        ]
      }
    ],
    benefits: [
      {
        id: 1,
        title: "Comprehensive Health Insurance and Medical Coverage Program",
        description: "Full medical, dental, and vision coverage with family options and preventive care benefits",
        category: "Medical & Insurance",
        type: "醫療及保險",
        eligibility: "All full-time employees after 30 days",
        issuer: "HR Benefits",
        serialNumber: "BEN-HR-007-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Health_Insurance_Benefits_Guide_2024.pdf", type: "PDF", size: "3.1 MB" },
          { id: 2, name: "Provider_Network_Directory.pdf", type: "PDF", size: "2.4 MB" },
          { id: 3, name: "Claims_Process_Instructions.pdf", type: "PDF", size: "1.2 MB" },
          { id: 4, name: "Enrollment_Forms_Package.pdf", type: "PDF", size: "987 KB" }
        ]
      },
      {
        id: 2,
        title: "401(k) Retirement Savings Plan with Company Matching",
        description: "Comprehensive retirement savings program with up to 6% company matching and investment options",
        category: "Financial Planning",
        type: "醫療及保險",
        eligibility: "Employees after 90 days of employment",
        issuer: "Finance",
        serialNumber: "BEN-FIN-008-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "401k_Plan_Summary.pdf", type: "PDF", size: "2.3 MB" },
          { id: 2, name: "Investment_Options_Guide.pdf", type: "PDF", size: "1.8 MB" },
          { id: 3, name: "Enrollment_Instructions.pdf", type: "PDF", size: "756 KB" }
        ]
      },
      {
        id: 3,
        title: "Professional Development and Training Budget Program",
        description: "Annual budget allocation for skills development, certification programs, and professional growth opportunities",
        category: "Career Development",
        type: "員工活動及購物優惠",
        eligibility: "All employees with manager approval",
        issuer: "Learning & Development",
        serialNumber: "BEN-LD-009-2024",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "Professional_Development_Guidelines.pdf", type: "PDF", size: "2.1 MB" },
          { id: 2, name: "Approved_Training_Providers.pdf", type: "PDF", size: "1.4 MB" },
          { id: 3, name: "Budget_Request_Form.docx", type: "Word", size: "234 KB" },
          { id: 4, name: "Certification_Reimbursement_Policy.pdf", type: "PDF", size: "892 KB" },
          { id: 5, name: "Career_Path_Planning_Template.xlsx", type: "Excel", size: "445 KB" }
        ]
      },
      {
        id: 4,
        title: "Employee Volunteer Program and Community Service Opportunities",
        description: "Paid volunteer time, community service projects, and charitable contribution matching program",
        category: "Community Engagement",
        type: "義工活動",
        eligibility: "All employees in good standing",
        issuer: "Corporate Social Responsibility",
        serialNumber: "BEN-CSR-010-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Volunteer_Program_Overview.pdf", type: "PDF", size: "1.7 MB" },
          { id: 2, name: "Community_Partners_List.pdf", type: "PDF", size: "1.1 MB" },
          { id: 3, name: "Volunteer_Time_Request_Form.docx", type: "Word", size: "198 KB" }
        ]
      },
      {
        id: 5,
        title: "Employee Cafeteria and Dining Services Information",
        description: "On-site dining options, meal plans, nutritional information, and special dietary accommodations",
        category: "Dining Services",
        type: "食堂菜單",
        eligibility: "All employees and authorized visitors",
        issuer: "Facilities",
        serialNumber: "BEN-FAC-011-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Cafeteria_Menu_December_2024.pdf", type: "PDF", size: "2.2 MB" },
          { id: 2, name: "Meal_Plan_Options.pdf", type: "PDF", size: "834 KB" },
          { id: 3, name: "Nutritional_Information_Guide.pdf", type: "PDF", size: "1.5 MB" },
          { id: 4, name: "Special_Dietary_Request_Form.pdf", type: "PDF", size: "267 KB" }
        ]
      }
    ],
    forms: [
      {
        id: 1,
        title: "Business Expense Report and Reimbursement Form",
        description: "Submit detailed business expenses for reimbursement including travel, meals, and office supplies",
        category: "Finance",
        type: "常用表格",
        format: "PDF Form",
        issuer: "Finance",
        serialNumber: "FORM-FIN-012-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Expense_Report_Form_2024.pdf", type: "PDF", size: "678 KB" },
          { id: 2, name: "Receipt_Submission_Guidelines.pdf", type: "PDF", size: "445 KB" },
          { id: 3, name: "Expense_Policy_Reference.pdf", type: "PDF", size: "1.2 MB" }
        ]
      },
      {
        id: 2,
        title: "Time Off Request and Leave Application System",
        description: "Request vacation days, sick leave, personal time, or extended leave arrangements",
        category: "Human Resources",
        type: "人力資源",
        format: "Online Form",
        issuer: "HR",
        serialNumber: "FORM-HR-013-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Time_Off_Request_Form.pdf", type: "PDF", size: "523 KB" },
          { id: 2, name: "Leave_Policy_Summary.pdf", type: "PDF", size: "987 KB" },
          { id: 3, name: "Medical_Leave_Documentation.pdf", type: "PDF", size: "756 KB" },
          { id: 4, name: "Manager_Approval_Workflow.pdf", type: "PDF", size: "334 KB" }
        ]
      },
      {
        id: 3,
        title: "IT Support Ticket and Technical Assistance Request",
        description: "Report technical issues, request IT equipment, or seek assistance with software and hardware problems",
        category: "Information Technology",
        type: "資訊科技",
        format: "Online Form",
        issuer: "IT Support",
        serialNumber: "FORM-IT-014-2024",
        hasAttachment: true,
        attachmentCount: 2,
        attachments: [
          { id: 1, name: "IT_Support_Request_Guide.pdf", type: "PDF", size: "891 KB" },
          { id: 2, name: "Common_Issues_Troubleshooting.pdf", type: "PDF", size: "1.3 MB" }
        ]
      },
      {
        id: 4,
        title: "Procurement and Vendor Request Authorization Form",
        description: "Request approval for purchasing goods, services, or establishing new vendor relationships",
        category: "Procurement",
        type: "採購",
        format: "PDF Form",
        issuer: "Procurement",
        serialNumber: "FORM-PROC-015-2024",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "Procurement_Request_Form.pdf", type: "PDF", size: "734 KB" },
          { id: 2, name: "Vendor_Evaluation_Criteria.pdf", type: "PDF", size: "1.1 MB" },
          { id: 3, name: "Budget_Approval_Matrix.pdf", type: "PDF", size: "567 KB" },
          { id: 4, name: "Preferred_Vendor_List.xlsx", type: "Excel", size: "823 KB" },
          { id: 5, name: "Procurement_Policy_Guidelines.pdf", type: "PDF", size: "1.8 MB" }
        ]
      },
      {
        id: 5,
        title: "Administrative Services and Facility Request Form",
        description: "Request administrative support, facility modifications, office supplies, or space allocation",
        category: "Administrative",
        type: "行政",
        format: "Online Form",
        issuer: "Administration",
        serialNumber: "FORM-ADM-016-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Administrative_Services_Request.pdf", type: "PDF", size: "612 KB" },
          { id: 2, name: "Facility_Modification_Guidelines.pdf", type: "PDF", size: "1.4 MB" },
          { id: 3, name: "Office_Supply_Catalog.pdf", type: "PDF", size: "2.1 MB" }
        ]
      }
    ],
    jobs: [
      {
        id: 1,
        title: "Senior Software Engineer - Full Stack Development",
        description: "Lead development of scalable web applications using modern technologies and cloud platforms",
        department: "Technology",
        location: "New York, NY / Remote",
        type: "Full-time",
        posted: "2024-11-01",
        issuer: "HR",
        serialNumber: "JOB-TECH-017-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Software_Engineer_Job_Description.pdf", type: "PDF", size: "1.2 MB" },
          { id: 2, name: "Technical_Requirements_Checklist.pdf", type: "PDF", size: "678 KB" },
          { id: 3, name: "Interview_Process_Overview.pdf", type: "PDF", size: "445 KB" },
          { id: 4, name: "Compensation_and_Benefits_Package.pdf", type: "PDF", size: "823 KB" }
        ]
      },
      {
        id: 2,
        title: "Digital Marketing Specialist - Growth and Analytics",
        description: "Drive digital marketing campaigns, analyze performance metrics, and optimize customer acquisition strategies",
        department: "Marketing",
        location: "Chicago, IL",
        type: "Full-time",
        posted: "2024-10-28",
        issuer: "HR",
        serialNumber: "JOB-MKT-018-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Marketing_Specialist_Role_Details.pdf", type: "PDF", size: "987 KB" },
          { id: 2, name: "Required_Skills_and_Experience.pdf", type: "PDF", size: "534 KB" },
          { id: 3, name: "Marketing_Team_Structure.pdf", type: "PDF", size: "712 KB" }
        ]
      },
      {
        id: 3,
        title: "Financial Analyst - Corporate Finance and Planning",
        description: "Support financial planning, budgeting processes, and provide analytical insights for strategic decision making",
        department: "Finance",
        location: "Remote / Hybrid",
        type: "Full-time",
        posted: "2024-11-05",
        issuer: "HR",
        serialNumber: "JOB-FIN-019-2024",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "Financial_Analyst_Position_Description.pdf", type: "PDF", size: "1.1 MB" },
          { id: 2, name: "Financial_Modeling_Requirements.pdf", type: "PDF", size: "867 KB" },
          { id: 3, name: "Career_Progression_Path.pdf", type: "PDF", size: "645 KB" },
          { id: 4, name: "Remote_Work_Guidelines.pdf", type: "PDF", size: "456 KB" },
          { id: 5, name: "Application_Instructions.pdf", type: "PDF", size: "234 KB" }
        ]
      },
      {
        id: 4,
        title: "UX/UI Designer - Product Design and User Experience",
        description: "Design intuitive user interfaces and enhance user experience across web and mobile applications",
        department: "Design",
        location: "San Francisco, CA",
        type: "Full-time",
        posted: "2024-10-15",
        issuer: "HR",
        serialNumber: "JOB-DES-020-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "UX_Designer_Job_Specification.pdf", type: "PDF", size: "1.3 MB" },
          { id: 2, name: "Portfolio_Requirements.pdf", type: "PDF", size: "723 KB" },
          { id: 3, name: "Design_Team_Overview.pdf", type: "PDF", size: "891 KB" },
          { id: 4, name: "Design_Tools_and_Software.pdf", type: "PDF", size: "567 KB" }
        ]
      }
    ],
    handbooks: [
      {
        id: 1,
        title: "Employee Handbook and Company Policies Guide",
        description: "Comprehensive guide covering company policies, procedures, benefits, and organizational structure",
        type: "Handbook",
        pages: 156,
        size: "12.3 MB",
        category: "Company Handbook",
        issuer: "HR",
        serialNumber: "HB-HR-027-2024",
        date: "2024-11-15",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Employee_Handbook_2024_Complete.pdf", type: "PDF", size: "12.3 MB" },
          { id: 2, name: "Quick_Reference_Guide.pdf", type: "PDF", size: "2.1 MB" },
          { id: 3, name: "Policy_Updates_Summary.pdf", type: "PDF", size: "1.4 MB" }
        ]
      },
      {
        id: 2,
        title: "IT Department Operational Handbook",
        description: "Departmental procedures, system administration guidelines, and technical support protocols",
        type: "Handbook",
        pages: 89,
        size: "8.7 MB",
        category: "Departmental Handbook",
        issuer: "IT",
        serialNumber: "HB-IT-028-2024",
        date: "2024-10-20",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "IT_Department_Handbook.pdf", type: "PDF", size: "8.7 MB" },
          { id: 2, name: "System_Administration_Guide.pdf", type: "PDF", size: "3.2 MB" },
          { id: 3, name: "Technical_Support_Procedures.pdf", type: "PDF", size: "2.8 MB" },
          { id: 4, name: "Emergency_Response_IT.pdf", type: "PDF", size: "1.1 MB" }
        ]
      },
      {
        id: 3,
        title: "Internal ERP System User Manual",
        description: "Complete user guide for the enterprise resource planning system including modules and workflows",
        type: "System Manual",
        pages: 245,
        size: "15.2 MB",
        category: "System Manual",
        issuer: "IT",
        serialNumber: "HB-SYS-029-2024",
        date: "2024-09-30",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "ERP_System_User_Manual.pdf", type: "PDF", size: "15.2 MB" },
          { id: 2, name: "Module_Reference_Guide.pdf", type: "PDF", size: "4.6 MB" },
          { id: 3, name: "Workflow_Diagrams.pdf", type: "PDF", size: "3.1 MB" },
          { id: 4, name: "Troubleshooting_Guide.pdf", type: "PDF", size: "2.3 MB" },
          { id: 5, name: "System_Updates_Log.xlsx", type: "Excel", size: "891 KB" }
        ]
      },
      {
        id: 4,
        title: "System Tutorial and Training Video Series",
        description: "Comprehensive video tutorials covering internal system operations and best practices",
        type: "Training Videos",
        duration: "3:45:20",
        size: "580 MB",
        category: "Training Videos",
        issuer: "IT",
        serialNumber: "HB-VID-030-2024",
        date: "2024-08-15",
        hasAttachment: true,
        attachmentCount: 6,
        attachments: [
          { id: 1, name: "ERP_System_Basics_Tutorial.mp4", type: "Video", size: "145 MB" },
          { id: 2, name: "Advanced_Features_Training.mp4", type: "Video", size: "178 MB" },
          { id: 3, name: "Reporting_Module_Guide.mp4", type: "Video", size: "123 MB" },
          { id: 4, name: "Data_Management_Tutorial.mp4", type: "Video", size: "134 MB" },
          { id: 5, name: "System_Shortcuts_Tips.mp4", type: "Video", size: "67 MB" },
          { id: 6, name: "Tutorial_Reference_Manual.pdf", type: "PDF", size: "3.4 MB" }
        ]
      },
      {
        id: 5,
        title: "Operational Procedures Manual",
        description: "Standard operating procedures for daily operations, quality control, and process management",
        type: "Procedures Manual",
        pages: 134,
        size: "9.8 MB",
        category: "Operational Procedures",
        issuer: "Operations",
        serialNumber: "HB-OPS-031-2024",
        date: "2024-07-10",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Operational_Procedures_Manual.pdf", type: "PDF", size: "9.8 MB" },
          { id: 2, name: "Quality_Control_Checklist.pdf", type: "PDF", size: "2.3 MB" },
          { id: 3, name: "Process_Flow_Charts.pdf", type: "PDF", size: "3.1 MB" },
          { id: 4, name: "Performance_Metrics_Guide.xlsx", type: "Excel", size: "1.2 MB" }
        ]
      },
      {
        id: 6,
        title: "Finance Department Procedures Video Guide",
        description: "Video tutorials for financial processes, budgeting procedures, and expense management",
        type: "Training Videos",
        duration: "2:12:15",
        size: "420 MB",
        category: "Training Videos",
        issuer: "Finance",
        serialNumber: "HB-FIN-032-2024",
        date: "2024-06-25",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "Budgeting_Process_Tutorial.mp4", type: "Video", size: "112 MB" },
          { id: 2, name: "Expense_Management_Guide.mp4", type: "Video", size: "98 MB" },
          { id: 3, name: "Financial_Reporting_Video.mp4", type: "Video", size: "134 MB" },
          { id: 4, name: "Audit_Preparation_Guide.mp4", type: "Video", size: "76 MB" },
          { id: 5, name: "Finance_Procedures_Summary.pdf", type: "PDF", size: "2.7 MB" }
        ]
      }
    ],
    risk: [
      {
        id: 1,
        title: "Downtown Commercial District Route Safety Assessment",
        route: "Route A-1 (Downtown Corridor)",
        riskLevel: "Medium Risk",
        lastUpdate: "2024-10-15",
        status: "Active Monitoring",
        description: "Comprehensive safety evaluation of downtown commercial route including traffic patterns and pedestrian safety",
        type: "OD1",
        issuer: "Safety Department",
        serialNumber: "RISK-SAF-021-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Downtown_Route_Assessment_Report.pdf", type: "PDF", size: "3.2 MB" },
          { id: 2, name: "Traffic_Analysis_Data.xlsx", type: "Excel", size: "1.8 MB" },
          { id: 3, name: "Safety_Improvement_Recommendations.pdf", type: "PDF", size: "1.1 MB" },
          { id: 4, name: "Route_Map_with_Risk_Zones.pdf", type: "PDF", size: "2.4 MB" }
        ]
      },
      {
        id: 2,
        title: "Highway Corridor Risk Analysis and Mitigation Strategies",
        route: "Route B-3 (Interstate Highway Section)",
        riskLevel: "Low Risk",
        lastUpdate: "2024-11-01",
        status: "Regular Monitoring",
        description: "Detailed analysis of highway route safety including weather conditions and traffic flow patterns",
        type: "OD2",
        issuer: "Safety Department",
        serialNumber: "RISK-SAF-022-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Highway_Corridor_Risk_Analysis.pdf", type: "PDF", size: "2.7 MB" },
          { id: 2, name: "Weather_Impact_Assessment.pdf", type: "PDF", size: "1.5 MB" },
          { id: 3, name: "Mitigation_Strategy_Plan.pdf", type: "PDF", size: "1.9 MB" }
        ]
      },
      {
        id: 3,
        title: "Industrial Zone Transportation Risk Evaluation",
        route: "Route C-2 (Industrial Complex Access)",
        riskLevel: "High Risk",
        lastUpdate: "2024-09-20",
        status: "Under Review for Enhanced Safety Measures",
        description: "Critical assessment of industrial zone route with focus on heavy vehicle traffic and hazardous material considerations",
        type: "ODN",
        issuer: "Safety Department",
        serialNumber: "RISK-SAF-023-2024",
        hasAttachment: true,
        attachmentCount: 6,
        attachments: [
          { id: 1, name: "Industrial_Zone_Risk_Evaluation.pdf", type: "PDF", size: "4.1 MB" },
          { id: 2, name: "Heavy_Vehicle_Traffic_Analysis.pdf", type: "PDF", size: "2.3 MB" },
          { id: 3, name: "Hazardous_Material_Assessment.pdf", type: "PDF", size: "1.8 MB" },
          { id: 4, name: "Emergency_Response_Procedures.pdf", type: "PDF", size: "1.4 MB" },
          { id: 5, name: "Safety_Equipment_Requirements.pdf", type: "PDF", size: "987 KB" },
          { id: 6, name: "Enhanced_Safety_Proposal.pdf", type: "PDF", size: "2.1 MB" }
        ]
      },
      {
        id: 4,
        title: "School Zone and Residential Area Safety Assessment",
        route: "Route D-4 (Residential and School Districts)",
        riskLevel: "Medium Risk",
        lastUpdate: "2024-10-30",
        status: "Seasonal Monitoring Required",
        description: "Safety evaluation focusing on school zones, residential areas, and child pedestrian safety measures",
        type: "OD1",
        issuer: "Safety Department",
        serialNumber: "RISK-SAF-024-2024",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "School_Zone_Safety_Assessment.pdf", type: "PDF", size: "2.9 MB" },
          { id: 2, name: "Residential_Traffic_Patterns.pdf", type: "PDF", size: "1.7 MB" },
          { id: 3, name: "Child_Safety_Measures_Review.pdf", type: "PDF", size: "1.3 MB" },
          { id: 4, name: "Seasonal_Risk_Factors.pdf", type: "PDF", size: "1.1 MB" },
          { id: 5, name: "Community_Feedback_Summary.pdf", type: "PDF", size: "834 KB" }
        ]
      }
    ],
    safety: [
      {
        id: 1,
        title: "Fire Emergency Procedures and Evacuation Protocol Update",
        category: "Emergency Procedures",
        type: "通告",
        content: "Updated fire safety procedures including new evacuation routes, assembly points, and emergency contact protocols effective December 2024",
        description: "Comprehensive fire safety information with updated procedures and training requirements",
        priority: "high",
        issuer: "Safety Department",
        serialNumber: "SAF-EMR-025-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Fire_Emergency_Procedures_2024.pdf", type: "PDF", size: "2.1 MB" },
          { id: 2, name: "Evacuation_Route_Maps.pdf", type: "PDF", size: "1.8 MB" },
          { id: 3, name: "Emergency_Contact_Directory.pdf", type: "PDF", size: "567 KB" },
          { id: 4, name: "Fire_Safety_Training_Schedule.pdf", type: "PDF", size: "734 KB" }
        ]
      },
      {
        id: 2,
        title: "Workplace Ergonomics and Health Safety Training Video Series",
        category: "Health and Wellness",
        type: "影片",
        content: "Comprehensive video training series covering proper workstation setup, posture guidelines, and injury prevention techniques",
        description: "Video content for ergonomic workplace setup and health maintenance",
        priority: "medium",
        issuer: "Occupational Health",
        serialNumber: "SAF-ERG-026-2024",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "Ergonomics_Training_Series_Part1.mp4", type: "Video", size: "85 MB" },
          { id: 2, name: "Ergonomics_Training_Series_Part2.mp4", type: "Video", size: "78 MB" },
          { id: 3, name: "Workstation_Setup_Checklist.pdf", type: "PDF", size: "1.2 MB" },
          { id: 4, name: "Ergonomic_Equipment_Guide.pdf", type: "PDF", size: "1.7 MB" },
          { id: 5, name: "Health_Assessment_Form.pdf", type: "PDF", size: "456 KB" }
        ]
      },
      {
        id: 3,
        title: "Vehicle Safety Inspection and Maintenance Guidelines",
        category: "Transportation Safety",
        type: "海報及其他資料",
        content: "Essential pre-trip inspection procedures, maintenance schedules, and safety checklists for all company vehicles",
        description: "Comprehensive vehicle safety information including inspection procedures and maintenance requirements",
        priority: "high",
        issuer: "Fleet Management",
        serialNumber: "SAF-VEH-027-2024",
        hasAttachment: true,
        attachmentCount: 6,
        attachments: [
          { id: 1, name: "Vehicle_Safety_Guidelines_Complete.pdf", type: "PDF", size: "3.4 MB" },
          { id: 2, name: "Pre_Trip_Inspection_Checklist.pdf", type: "PDF", size: "789 KB" },
          { id: 3, name: "Maintenance_Schedule_Template.xlsx", type: "Excel", size: "567 KB" },
          { id: 4, name: "Safety_Inspection_Poster.pdf", type: "PDF", size: "1.1 MB" },
          { id: 5, name: "Emergency_Procedures_Vehicle.pdf", type: "PDF", size: "923 KB" },
          { id: 6, name: "Fleet_Contact_Information.pdf", type: "PDF", size: "334 KB" }
        ]
      },
      {
        id: 4,
        title: "Chemical Handling and Hazardous Materials Safety Protocol",
        category: "Hazardous Materials",
        type: "通告",
        content: "Updated protocols for safe handling, storage, and disposal of chemicals and hazardous materials in workplace environments",
        description: "Critical safety information for handling hazardous materials and chemicals",
        priority: "high",
        issuer: "Environmental Safety",
        serialNumber: "SAF-HAZ-028-2024",
        hasAttachment: true,
        attachmentCount: 7,
        attachments: [
          { id: 1, name: "Chemical_Handling_Protocol_2024.pdf", type: "PDF", size: "4.2 MB" },
          { id: 2, name: "Hazardous_Materials_List.xlsx", type: "Excel", size: "1.3 MB" },
          { id: 3, name: "Safety_Data_Sheets_Collection.pdf", type: "PDF", size: "6.7 MB" },
          { id: 4, name: "Personal_Protective_Equipment_Guide.pdf", type: "PDF", size: "2.1 MB" },
          { id: 5, name: "Spill_Response_Procedures.pdf", type: "PDF", size: "1.5 MB" },
          { id: 6, name: "Emergency_Contact_Hazmat.pdf", type: "PDF", size: "456 KB" },
          { id: 7, name: "Training_Certification_Requirements.pdf", type: "PDF", size: "892 KB" }
        ]
      },
      {
        id: 5,
        title: "Workplace Violence Prevention and Security Awareness",
        category: "Security",
        type: "海報及其他資料",
        content: "Comprehensive information on recognizing, preventing, and responding to workplace violence and security threats",
        description: "Security awareness and violence prevention information with response procedures",
        priority: "high",
        issuer: "Security Department",
        serialNumber: "SAF-SEC-029-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "Workplace_Violence_Prevention_Guide.pdf", type: "PDF", size: "2.8 MB" },
          { id: 2, name: "Security_Awareness_Poster_Set.pdf", type: "PDF", size: "1.9 MB" },
          { id: 3, name: "Threat_Assessment_Procedures.pdf", type: "PDF", size: "1.4 MB" },
          { id: 4, name: "Emergency_Response_Security.pdf", type: "PDF", size: "1.1 MB" }
        ]
      }
    ],
    gallery: [
      {
        id: 1,
        title: "Annual Company Meeting 2024",
        description: "Strategic planning session with leadership team",
        date: "2024-11-15",
        event: "Company Meeting",
        photographer: "Corporate Communications",
        tags: ["meeting", "leadership", "strategy"],
        imageUrl: "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTg2ODkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 2,
        title: "Q3 All Hands Meeting",
        description: "Quarterly results presentation and team celebrations",
        date: "2024-10-08",
        event: "Quarterly Meeting",
        photographer: "HR Department",
        tags: ["quarterly", "results", "celebration"],
        imageUrl: "https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBldmVudHxlbnwxfHx8fDE3NTg2ODkzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 3,
        title: "Innovation Summit 2024",
        description: "Technology showcase and innovation presentations",
        date: "2024-09-22",
        event: "Innovation Summit",
        photographer: "Marketing Team",
        tags: ["innovation", "technology", "presentation"],
        imageUrl: "https://images.unsplash.com/photo-1568983268695-74a04650c8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU4NTk1Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 4,
        title: "Holiday Party 2024",
        description: "Annual holiday celebration with the entire team",
        date: "2024-12-15",
        event: "Holiday Party",
        photographer: "Events Committee",
        tags: ["holiday", "celebration", "party"],
        imageUrl: "https://images.unsplash.com/photo-1758520144658-c87be518b87e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwYXJ0eSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc1ODY4OTMyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 5,
        title: "Leadership Development Workshop",
        description: "Professional development session for management team",
        date: "2024-08-30",
        event: "Training Workshop",
        photographer: "L&D Department",
        tags: ["training", "leadership", "development"],
        imageUrl: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc1ODY4OTMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 6,
        title: "Industry Networking Event",
        description: "Networking mixer with industry partners and clients",
        date: "2024-07-18",
        event: "Networking Event",
        photographer: "Business Development",
        tags: ["networking", "partners", "clients"],
        imageUrl: "https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NTg2NDExMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 7,
        title: "Employee Excellence Awards",
        description: "Recognition ceremony for outstanding achievements",
        date: "2024-06-12",
        event: "Awards Ceremony",
        photographer: "HR Department",
        tags: ["awards", "recognition", "excellence"],
        imageUrl: "https://images.unsplash.com/photo-1716703742352-0bbdb45f505b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBhd2FyZCUyMGNlcmVtb255fGVufDF8fHx8MTc1ODY4OTMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 8,
        title: "Client Appreciation Lunch",
        description: "Thank you lunch for key clients and stakeholders",
        date: "2024-05-24",
        event: "Client Event",
        photographer: "Account Management",
        tags: ["clients", "appreciation", "lunch"],
        imageUrl: "https://images.unsplash.com/photo-1719046057021-3f27a15bffec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGx1bmNoJTIwbWVldGluZ3xlbnwxfHx8fDE3NTg2ODkzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 9,
        title: "New Product Launch Event",
        description: "Launch celebration for our latest product line",
        date: "2024-04-15",
        event: "Product Launch",
        photographer: "Marketing Team",
        tags: ["product", "launch", "celebration"],
        imageUrl: "https://images.unsplash.com/photo-1623169274520-36235a547737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9kdWN0JTIwbGF1bmNofGVufDF8fHx8MTc1ODY4OTMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 10,
        title: "Annual Company Retreat",
        description: "Team building activities and strategic planning retreat",
        date: "2024-03-08",
        event: "Company Retreat",
        photographer: "Events Committee",
        tags: ["retreat", "teambuilding", "outdoor"],
        imageUrl: "https://images.unsplash.com/photo-1746021425981-5f55202a826d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwcmV0cmVhdCUyMG91dGRvb3J8ZW58MXx8fHwxNzU4Njg5MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 11,
        title: "Team Building Workshop",
        description: "Interactive workshop focused on collaboration and communication",
        date: "2024-02-20",
        event: "Team Building",
        photographer: "HR Department",
        tags: ["teambuilding", "workshop", "collaboration"],
        imageUrl: "https://images.unsplash.com/photo-1676277758786-c2ce791b7a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4Njg5MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 12,
        title: "Innovation Showcase",
        description: "Demonstration of cutting-edge projects and prototypes",
        date: "2024-01-25",
        event: "Innovation Showcase",
        photographer: "R&D Department",
        tags: ["innovation", "showcase", "technology"],
        imageUrl: "https://images.unsplash.com/photo-1561489411-c0ce86e994bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBpbm5vdmF0aW9uJTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzU4Njg5MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ]
  },
  es: {
    // Spanish translations with same structure as English
    policies: [
      {
        id: 1,
        title: "Código de Conducta y Estándares de Ética Profesional para Todas las Categorías de Empleados",
        description: "Directrices para el comportamiento ético y estándares profesionales",
        date: "2024-01-15",
        category: "Ética",
        referenceCode: "POL-HR-001-2024",
        issuer: "HR",
        serialNumber: "HR-2024-001",
        hasAttachment: true,
        attachmentCount: 3,
        content: "Este documento de política integral describe los principios fundamentales de conducta ética que se espera que sigan todos los empleados. Cubre áreas que incluyen integridad profesional, conflicto de intereses, confidencialidad y cumplimiento de requisitos legales y regulatorios.",
        attachments: [
          { id: 1, name: "Codigo_de_Conducta_2024.pdf", type: "PDF", size: "2.1 MB" },
          { id: 2, name: "Directrices_Etica_Referencia_Rapida.pdf", type: "PDF", size: "856 KB" },
          { id: 3, name: "Capacitacion_Codigo_Conducta_Diapositivas.pptx", type: "PowerPoint", size: "4.3 MB" }
        ]
      },
      // Additional Spanish data following same pattern...
    ],
    notices: [
      // Spanish notices with attachment functionality...
    ],
    // Other Spanish sections...
  },
  zh: {
    // Chinese translations with same structure as English
    policies: [
      {
        id: 1,
        title: "行為準則和所有員工類別的專業道德標準",
        description: "道德行為和專業標準指引",
        date: "2024-01-15",
        category: "道德",
        referenceCode: "POL-HR-001-2024",
        issuer: "HR",
        serialNumber: "HR-2024-001",
        hasAttachment: true,
        attachmentCount: 3,
        content: "這份綜合政策文件概述了所有員工都應遵循的道德行為基本原則。涵蓋包括職業誠信、利益衝突、保密性和遵守法律法規要求等領域。",
        attachments: [
          { id: 1, name: "行為準則_2024.pdf", type: "PDF", size: "2.1 MB" },
          { id: 2, name: "道德指引_快速參考.pdf", type: "PDF", size: "856 KB" },
          { id: 3, name: "行為準則_培訓簡報.pptx", type: "PowerPoint", size: "4.3 MB" }
        ]
      }
    ],
    notices: [
      {
        id: 1,
        title: "彈性工作時間實施的新公司政策",
        content: "自2025年1月1日起，所有員工都可以使用彈性工作時間安排。請查看附件指引並在12月20日前提交您的首選時間表。",
        description: "在所有部門實施彈性工作時間的指引",
        date: "2024-12-01",
        priority: "high",
        category: "公司政策",
        type: "公司政策",
        issuer: "HR",
        serialNumber: "NOT-HR-012-2024",
        hasAttachment: true,
        attachmentCount: 2,
        attachments: [
          { id: 1, name: "彈性時間指引.pdf", type: "PDF", size: "1.2 MB" },
          { id: 2, name: "時間表申請表.docx", type: "Word", size: "245 KB" }
        ]
      }
    ],
    presses: [
      {
        id: 1,
        title: "公司宣布創紀錄的第三季度財務業績和成長預測",
        summary: "所有業務部門的強勁表現推動史無前例的成長，年度收入增長34%",
        description: "詳細的財務業績公告包含績效指標和未來展望",
        date: "2024-10-15",
        category: "財務業績",
        type: "財務",
        issuer: "財務",
        serialNumber: "PR-FIN-008-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "第三季度財務業績完整報告.pdf", type: "PDF", size: "4.2 MB" },
          { id: 2, name: "第三季度執行摘要.pdf", type: "PDF", size: "1.3 MB" },
          { id: 3, name: "財務圖表和圖形.pdf", type: "PDF", size: "2.1 MB" },
          { id: 4, name: "投資者簡報第三季度.pptx", type: "PowerPoint", size: "5.7 MB" }
        ]
      }
    ],
    publications: [
      {
        id: 1,
        title: "2024年度可持續發展和環境影響報告",
        description: "2024年全年環境倡議、碳足跡減少和可持續發展成就的綜合分析",
        type: "年度報告",
        pages: 45,
        date: "2024-03-15",
        category: "環境",
        issuer: "可持續發展",
        serialNumber: "PUB-SUS-003-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "可持續發展報告_2024_完整版.pdf", type: "PDF", size: "8.3 MB" },
          { id: 2, name: "可持續發展執行摘要.pdf", type: "PDF", size: "2.1 MB" },
          { id: 3, name: "環境數據附錄.xlsx", type: "Excel", size: "1.7 MB" }
        ]
      }
    ],
    benefits: [
      {
        id: 1,
        title: "全面健康保險和醫療保障計劃",
        description: "包含家庭選項和預防保健福利的完整醫療、牙科和視力保障",
        category: "醫療及保險",
        type: "醫療及保險",
        eligibility: "入職30天後的所有全職員工",
        issuer: "HR福利",
        serialNumber: "BEN-HR-007-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "健康保險福利指南_2024.pdf", type: "PDF", size: "3.1 MB" },
          { id: 2, name: "醫療網絡目錄.pdf", type: "PDF", size: "2.4 MB" },
          { id: 3, name: "理賠流程說明.pdf", type: "PDF", size: "1.2 MB" },
          { id: 4, name: "註冊表格包.pdf", type: "PDF", size: "987 KB" }
        ]
      }
    ],
    forms: [
      {
        id: 1,
        title: "業務費用報告和報銷表格",
        description: "提交詳細的業務費用以進行報銷，包括差旅、餐飲和辦公用品",
        category: "財務",
        type: "常用表格",
        format: "PDF表格",
        issuer: "財務",
        serialNumber: "FORM-FIN-012-2024",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "費用報告表格_2024.pdf", type: "PDF", size: "678 KB" },
          { id: 2, name: "收據提交指引.pdf", type: "PDF", size: "445 KB" },
          { id: 3, name: "費用政策參考.pdf", type: "PDF", size: "1.2 MB" }
        ]
      }
    ],
    jobs: [
      {
        id: 1,
        title: "高級軟體工程師 - 全棧開發",
        description: "使用現代技術和雲平台領導可擴展網絡應用程式的開發",
        department: "技術",
        location: "紐約，NY / 遠程",
        type: "全職",
        posted: "2024-11-01",
        issuer: "HR",
        serialNumber: "JOB-TECH-017-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "軟體工程師職位描述.pdf", type: "PDF", size: "1.2 MB" },
          { id: 2, name: "技術要求檢查表.pdf", type: "PDF", size: "678 KB" },
          { id: 3, name: "面試流程概述.pdf", type: "PDF", size: "445 KB" },
          { id: 4, name: "薪酬和福利包.pdf", type: "PDF", size: "823 KB" }
        ]
      }
    ],
    handbooks: [
      {
        id: 1,
        title: "員工手冊和公司政策指南",
        description: "涵蓋公司政策、程序、福利和組織結構的綜合指南",
        type: "手冊",
        pages: 156,
        size: "12.3 MB",
        category: "公司手冊",
        issuer: "HR",
        serialNumber: "HB-HR-027-2024",
        date: "2024-11-15",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "員工手冊_2024_完整版.pdf", type: "PDF", size: "12.3 MB" },
          { id: 2, name: "快速參考指南.pdf", type: "PDF", size: "2.1 MB" },
          { id: 3, name: "政策更新摘要.pdf", type: "PDF", size: "1.4 MB" }
        ]
      },
      {
        id: 2,
        title: "IT部門操作手冊",
        description: "部門程序、系統管理指引和技術支援協議",
        type: "手冊",
        pages: 89,
        size: "8.7 MB",
        category: "部門手冊",
        issuer: "IT",
        serialNumber: "HB-IT-028-2024",
        date: "2024-10-20",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "IT部門手冊.pdf", type: "PDF", size: "8.7 MB" },
          { id: 2, name: "系統管理指南.pdf", type: "PDF", size: "3.2 MB" },
          { id: 3, name: "技術支援程序.pdf", type: "PDF", size: "2.8 MB" },
          { id: 4, name: "IT緊急回應.pdf", type: "PDF", size: "1.1 MB" }
        ]
      },
      {
        id: 3,
        title: "內部ERP系統使用手冊",
        description: "企業資源規劃系統的完整使用指南，包括模組和工作流程",
        type: "系統手冊",
        pages: 245,
        size: "15.2 MB",
        category: "系統手冊",
        issuer: "IT",
        serialNumber: "HB-SYS-029-2024",
        date: "2024-09-30",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "ERP系統使用手冊.pdf", type: "PDF", size: "15.2 MB" },
          { id: 2, name: "模組參考指南.pdf", type: "PDF", size: "4.6 MB" },
          { id: 3, name: "工作流程圖.pdf", type: "PDF", size: "3.1 MB" },
          { id: 4, name: "故障排除指南.pdf", type: "PDF", size: "2.3 MB" },
          { id: 5, name: "系統更新日誌.xlsx", type: "Excel", size: "891 KB" }
        ]
      },
      {
        id: 4,
        title: "系統教學和培訓影片系列",
        description: "涵蓋內部系統操作和最佳實踐的綜合影片教學",
        type: "培訓影片",
        duration: "3:45:20",
        size: "580 MB",
        category: "培訓影片",
        issuer: "IT",
        serialNumber: "HB-VID-030-2024",
        date: "2024-08-15",
        hasAttachment: true,
        attachmentCount: 6,
        attachments: [
          { id: 1, name: "ERP系統基礎教學.mp4", type: "Video", size: "145 MB" },
          { id: 2, name: "進階功能培訓.mp4", type: "Video", size: "178 MB" },
          { id: 3, name: "報告模組指南.mp4", type: "Video", size: "123 MB" },
          { id: 4, name: "數據管理教學.mp4", type: "Video", size: "134 MB" },
          { id: 5, name: "系統快捷鍵技巧.mp4", type: "Video", size: "67 MB" },
          { id: 6, name: "教學參考手冊.pdf", type: "PDF", size: "3.4 MB" }
        ]
      },
      {
        id: 5,
        title: "營運程序手冊",
        description: "日常營運、品質控制和流程管理的標準操作程序",
        type: "程序手冊",
        pages: 134,
        size: "9.8 MB",
        category: "營運程序",
        issuer: "營運部",
        serialNumber: "HB-OPS-031-2024",
        date: "2024-07-10",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "營運程序手冊.pdf", type: "PDF", size: "9.8 MB" },
          { id: 2, name: "品質控制檢查表.pdf", type: "PDF", size: "2.3 MB" },
          { id: 3, name: "流程圖表.pdf", type: "PDF", size: "3.1 MB" },
          { id: 4, name: "績效指標指南.xlsx", type: "Excel", size: "1.2 MB" }
        ]
      },
      {
        id: 6,
        title: "財務部門程序影片指南",
        description: "財務流程、預算程序和費用管理的影片教學",
        type: "培訓影片",
        duration: "2:12:15",
        size: "420 MB",
        category: "培訓影片",
        issuer: "財務",
        serialNumber: "HB-FIN-032-2024",
        date: "2024-06-25",
        hasAttachment: true,
        attachmentCount: 5,
        attachments: [
          { id: 1, name: "預算流程教學.mp4", type: "Video", size: "112 MB" },
          { id: 2, name: "費用管理指南.mp4", type: "Video", size: "98 MB" },
          { id: 3, name: "財務報告影片.mp4", type: "Video", size: "134 MB" },
          { id: 4, name: "審計準備指南.mp4", type: "Video", size: "76 MB" },
          { id: 5, name: "財務程序摘要.pdf", type: "PDF", size: "2.7 MB" }
        ]
      }
    ],
    risk: [
      {
        id: 1,
        title: "市中心商業區路線安全評估",
        route: "路線A-1（市中心走廊）",
        riskLevel: "中等風險",
        lastUpdate: "2024-10-15",
        status: "積極監控",
        description: "市中心商業路線的綜合安全評估，包括交通模式和行人安全",
        type: "OD1",
        issuer: "安全部",
        serialNumber: "RISK-SAF-021-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "市中心路線評估報告.pdf", type: "PDF", size: "3.2 MB" },
          { id: 2, name: "交通分析數據.xlsx", type: "Excel", size: "1.8 MB" },
          { id: 3, name: "安全改善建議.pdf", type: "PDF", size: "1.1 MB" },
          { id: 4, name: "風險區域路線圖.pdf", type: "PDF", size: "2.4 MB" }
        ]
      }
    ],
    safety: [
      {
        id: 1,
        title: "火災緊急程序和疏散協議更新",
        category: "緊急程序",
        type: "通告",
        content: "更新的火災安全程序，包括新的疏散路線、集合點和2024年12月生效的緊急聯絡協議",
        description: "包含更新程序和培訓要求的綜合火災安全資訊",
        priority: "high",
        issuer: "安全部",
        serialNumber: "SAF-EMR-025-2024",
        hasAttachment: true,
        attachmentCount: 4,
        attachments: [
          { id: 1, name: "火災緊急程序_2024.pdf", type: "PDF", size: "2.1 MB" },
          { id: 2, name: "疏散路線圖.pdf", type: "PDF", size: "1.8 MB" },
          { id: 3, name: "緊急聯絡目錄.pdf", type: "PDF", size: "567 KB" },
          { id: 4, name: "火災安全培訓時間表.pdf", type: "PDF", size: "734 KB" }
        ]
      }
    ],
    gallery: [
      {
        id: 1,
        title: "新員工歡迎會 2024",
        description: "歡迎新加入的團隊成員",
        date: "2024-11-15",
        event: "新員工歡迎會",
        photographer: "HR部門",
        tags: ["歡迎會", "新員工", "團隊"],
        imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWxjb21lJTIwZXZlbnR8ZW58MXx8fHwxNzU4Njg5MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ]
  }
};