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
    media: [
      {
        id: 1,
        title: "Company Overview and Brand Introduction Video",
        type: "Video",
        duration: "3:45",
        size: "125 MB",
        hasAttachment: true,
        attachmentCount: 1,
        attachments: [
          { id: 1, name: "Company_Overview_Video_HD.mp4", type: "Video", size: "125 MB" }
        ]
      },
      {
        id: 2,
        title: "Corporate Logo and Brand Identity Package",
        type: "Images",
        count: "12 files",
        size: "8.5 MB",
        hasAttachment: true,
        attachmentCount: 3,
        attachments: [
          { id: 1, name: "Logo_Package_Complete.zip", type: "Archive", size: "8.5 MB" },
          { id: 2, name: "Brand_Guidelines.pdf", type: "PDF", size: "2.1 MB" },
          { id: 3, name: "Logo_Usage_Examples.pdf", type: "PDF", size: "1.4 MB" }
        ]
      },
      {
        id: 3,
        title: "Product Demonstration and Feature Showcase Presentation",
        type: "Presentation",
        slides: "24 slides",
        size: "15.2 MB",
        hasAttachment: true,
        attachmentCount: 2,
        attachments: [
          { id: 1, name: "Product_Demo_Presentation.pptx", type: "PowerPoint", size: "15.2 MB" },
          { id: 2, name: "Demo_Script_and_Notes.docx", type: "Word", size: "456 KB" }
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
  zh: {
    // Chinese translations with same structure as English
    policies: [
      {
        "id": 1,
        "title": "所有員工類別的行為準則與職業倫理標準",
        "description": "道德行為與職業標準的指導方針",
        "date": "2024-01-15",
        "category": "倫理",
        "referenceCode": "POL-HR-001-2024",
        "issuer": "人力資源部",
        "serialNumber": "HR-2024-001",
        "hasAttachment": true,
        "attachmentCount": 3,
        "content": "本全面政策文件概述了所有員工應遵循的道德行為基本原則，涵蓋職業誠信、利益衝突、機密性和遵守法律與監管要求等領域。",
        "attachments": [
          { "id": 1, "name": "行為準則_2024.pdf", "type": "PDF", "size": "2.1 MB" },
          { "id": 2, "name": "倫理指南快速參考.pdf", "type": "PDF", "size": "856 KB" },
          { "id": 3, "name": "行為準則培訓投影片.pptx", "type": "PowerPoint", "size": "4.3 MB" }
        ]
      },
      {
        "id": 2,
        "title": "數據隱私政策與資訊安全管理框架",
        "description": "全面的數據保護與隱私指南",
        "date": "2024-02-01",
        "category": "隱私",
        "referenceCode": "POL-IT-002-2024",
        "issuer": "資訊科技部",
        "serialNumber": "IT-2024-002",
        "hasAttachment": true,
        "attachmentCount": 5,
        "content": "本政策建立了組織內數據保護與資訊安全管理的框架，詳細說明了數據收集、處理、存儲和處置的程序，同時確保符合適用隱私法律和法規。",
        "attachments": [
          { "id": 1, "name": "數據隱私政策_2024.pdf", "type": "PDF", "size": "3.2 MB" },
          { "id": 2, "name": "GDPR合規指南.pdf", "type": "PDF", "size": "1.8 MB" },
          { "id": 3, "name": "數據洩露應對計劃.pdf", "type": "PDF", "size": "1.2 MB" },
          { "id": 4, "name": "安全事件表單.docx", "type": "Word", "size": "245 KB" },
          { "id": 5, "name": "隱私影響評估模板.xlsx", "type": "Excel", "size": "412 KB" }
        ]
      },
      {
        "id": 3,
        "title": "遠程工作政策與混合工作安排指南",
        "description": "遠程工作安排的指導方針與程序",
        "date": "2024-01-20",
        "category": "人力資源",
        "referenceCode": "POL-HR-003-2024",
        "issuer": "人力資源部",
        "serialNumber": "HR-2024-003",
        "hasAttachment": true,
        "attachmentCount": 2,
        "content": "本政策提供遠程與混合工作安排的全面指導方針，包括資格標準、設備要求、溝通協議和分散團隊的績效管理。",
        "attachments": [
          { "id": 1, "name": "遠程工作政策_2024.pdf", "type": "PDF", "size": "1.9 MB" },
          { "id": 2, "name": "家庭辦公室設置清單.pdf", "type": "PDF", "size": "687 KB" }
        ]
      },
      {
        "id": 4,
        "title": "工作場所運營的健康與安全協議",
        "description": "全面的安全指導方針與緊急程序",
        "date": "2024-03-10",
        "category": "安全",
        "referenceCode": "POL-OPS-004-2024",
        "issuer": "運營部",
        "serialNumber": "OPS-2024-004",
        "hasAttachment": true,
        "attachmentCount": 4,
        "content": "本政策為所有工作場所運營建立了全面的健康與安全協議，包括風險評估程序、緊急應對計劃和員工培訓要求，以確保安全的工作環境。",
        "attachments": [
          { "id": 1, "name": "健康安全手冊_2024.pdf", "type": "PDF", "size": "5.2 MB" },
          { "id": 2, "name": "緊急疏散計劃.pdf", "type": "PDF", "size": "2.1 MB" },
          { "id": 3, "name": "事件報告表單.docx", "type": "Word", "size": "156 KB" },
          { "id": 4, "name": "安全培訓記錄模板.xlsx", "type": "Excel", "size": "298 KB" }
        ]
      },
      {
        "id": 5,
        "title": "資訊科技資產使用與維護政策",
        "description": "公司資訊科技設備的正確使用與維護指南",
        "date": "2024-02-28",
        "category": "資訊科技",
        "referenceCode": "POL-IT-005-2024",
        "issuer": "資訊科技部",
        "serialNumber": "IT-2024-005",
        "hasAttachment": true,
        "attachmentCount": 1,
        "content": "本政策概述了公司資訊科技設備（包括電腦、移動設備、軟體和網絡資源）的正確使用、維護和保養，涵蓋用戶責任、安全要求以及設備申請和歸還的程序。",
        "attachments": [
          { "id": 1, "name": "資訊科技設備政策_2024.pdf", "type": "PDF", "size": "1.4 MB" }
        ]
      }
    ],
    notices: [
      {
        "id": 1,
        "title": "新公司靈活工作時間實施政策",
        "content": "自2025年1月1日起，所有員工將可享有靈活工作時間安排。請審閱附件中的指導方針，並於12月20日前提交您偏好的工作時間表。",
        "description": "跨部門實施靈活工作時間的指導方針",
        "date": "2024-12-01",
        "priority": "高",
        "category": "公司政策",
        "type": "公司政策",
        "issuer": "人力資源部",
        "serialNumber": "NOT-HR-012-2024",
        "hasAttachment": true,
        "attachmentCount": 2,
        "attachments": [
          { "id": 1, "name": "靈活工作時間指南.pdf", "type": "PDF", "size": "1.2 MB" },
          { "id": 2, "name": "工作時間申請表.docx", "type": "Word", "size": "245 KB" }
        ]
      },
      {
        "id": 2,
        "title": "假期辦公室關閉及系統維護計劃",
        "content": "請注意，我們的辦公室將於12月23日至1月2日關閉。在此期間將進行必要的資訊科技維護。",
        "description": "關於假期關閉及計劃維護活動的正式通知",
        "date": "2024-12-01",
        "priority": "高",
        "category": "一般通知",
        "type": "公司政策",
        "issuer": "運營部",
        "serialNumber": "NOT-OPS-013-2024",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "2024年假期安排.pdf", "type": "PDF", "size": "456 KB" },
          { "id": 2, "name": "系統維護詳情.pdf", "type": "PDF", "size": "789 KB" },
          { "id": 3, "name": "假期緊急聯繫方式.pdf", "type": "PDF", "size": "321 KB" }
        ]
      },
      {
        "id": 3,
        "title": "員工健康計劃啟動及註冊資訊",
        "content": "我們很高興宣布將於2025年1月啟動全面的員工健康計劃。註冊將於12月15日開始，提供多種健康與健身福利。",
        "description": "關於新員工健康計劃及註冊流程的資訊",
        "date": "2024-11-28",
        "priority": "中",
        "category": "員工福利",
        "type": "員工活動或優惠",
        "issuer": "人力資源部",
        "serialNumber": "NOT-HR-014-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "健康計劃概述.pdf", "type": "PDF", "size": "2.1 MB" },
          { "id": 2, "name": "註冊指南.pdf", "type": "PDF", "size": "892 KB" },
          { "id": 3, "name": "健康評估表單.pdf", "type": "PDF", "size": "567 KB" },
          { "id": 4, "name": "健身中心會員資訊.pdf", "type": "PDF", "size": "1.3 MB" }
        ]
      },
      {
        "id": 4,
        "title": "第四季度董事會會議紀錄與策略規劃成果",
        "content": "第四季度董事會會議於11月15日舉行。關鍵決策包括2025年預算分配及新市場擴張策略。",
        "description": "第四季度董事會會議討論與策略決策的總結",
        "date": "2024-11-20",
        "priority": "中",
        "category": "會議紀錄",
        "type": "會議紀錄",
        "issuer": "高階管理層",
        "serialNumber": "NOT-EXE-015-2024",
        "hasAttachment": true,
        "attachmentCount": 2,
        "attachments": [
          { "id": 1, "name": "第四季度董事會會議紀錄.pdf", "type": "PDF", "size": "3.4 MB" },
          { "id": 2, "name": "2025年策略計劃摘要.pdf", "type": "PDF", "size": "1.8 MB" }
        ]
      },
      {
        "id": 5,
        "title": "內部職位空缺：高級行銷經理職位",
        "content": "我們的數位行銷團隊現有高級行銷經理職位的絕佳機會。歡迎內部申請，截止日期為12月10日。",
        "description": "高級行銷經理職位的內部招聘公告",
        "date": "2024-11-15",
        "priority": "中",
        "category": "工作機會",
        "type": "內部職位空缺",
        "issuer": "人力資源部",
        "serialNumber": "NOT-HR-016-2024",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "行銷經理職位描述.pdf", "type": "PDF", "size": "987 KB" },
          { "id": 2, "name": "內部申請表單.docx", "type": "Word", "size": "234 KB" },
          { "id": 3, "name": "職業發展指南.pdf", "type": "PDF", "size": "1.1 MB" }
        ]
      },
      {
        "id": 6,
        "title": "更新安全協議與門禁卡更換流程",
        "content": "自2025年1月起將實施新的安全措施。所有員工必須更新門禁卡並完成安全培訓。",
        "description": "關於增強安全協議與門禁卡更新的資訊",
        "date": "2024-11-10",
        "priority": "高",
        "category": "安全更新",
        "type": "其他通告",
        "issuer": "安全部門",
        "serialNumber": "NOT-SEC-017-2024",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "安全協議更新.pdf", "type": "PDF", "size": "1.6 MB" },
          { "id": 2, "name": "門禁卡更換流程.pdf", "type": "PDF", "size": "743 KB" },
          { "id": 3, "name": "安全培訓計劃.pdf", "type": "PDF", "size": "521 KB" }
        ]
      }
    ],
    presses: [
        {
          "id": 1,
          "title": "公司宣布創紀錄的第三季度財務表現與成長預測",
          "summary": "所有業務單位表現強勁，推動年比增長34%的空前增長",
          "description": "詳細的財務表現公告，包括績效指標與未來展望",
          "date": "2024-10-15",
          "category": "財務表現",
          "type": "財務",
          "issuer": "財務部",
          "serialNumber": "PR-FIN-008-2024",
          "hasAttachment": true,
          "attachmentCount": 4,
          "attachments": [
            { "id": 1, "name": "第三季度財務報告完整版.pdf", "type": "PDF", "size": "4.2 MB" },
            { "id": 2, "name": "第三季度執行摘要.pdf", "type": "PDF", "size": "1.3 MB" },
            { "id": 3, "name": "財務圖表與數據.pdf", "type": "PDF", "size": "2.1 MB" },
            { "id": 4, "name": "第三季度投資者簡報.pptx", "type": "PowerPoint", "size": "5.7 MB" }
          ]
        },
        {
          "id": 2,
          "title": "宣布與領先科技創新公司建立策略聯盟",
          "summary": "多年聯盟，旨在提升數位轉型能力並加速新興科技市場的擴張",
          "description": "策略聯盟協議的公告，包含詳細的合作框架與預期成果",
          "date": "2024-11-01",
          "category": "商業合作",
          "type": "商業",
          "issuer": "業務發展部",
          "serialNumber": "PR-BD-009-2024",
          "hasAttachment": true,
          "attachmentCount": 3,
          "attachments": [
            { "id": 1, "name": "聯盟協議摘要.pdf", "type": "PDF", "size": "2.8 MB" },
            { "id": 2, "name": "技術整合路線圖.pdf", "type": "PDF", "size": "1.9 MB" },
            { "id": 3, "name": "聯合新聞發布.pdf", "type": "PDF", "size": "867 KB" }
          ]
        },
        {
          "id": 3,
          "title": "永續發展計劃啟動：2026年實現碳中和運營",
          "summary": "全面的環境計劃，目標為零碳排放，採用可再生能源與永續實踐",
          "description": "重大永續發展公告，概述環境承諾與實施時間表",
          "date": "2024-09-22",
          "category": "環境",
          "type": "企業社會責任",
          "issuer": "永續發展部",
          "serialNumber": "PR-SUS-010-2024",
          "hasAttachment": true,
          "attachmentCount": 5,
          "attachments": [
            { "id": 1, "name": "2024-2026年永續發展策略.pdf", "type": "PDF", "size": "3.6 MB" },
            { "id": 2, "name": "碳足跡評估.pdf", "type": "PDF", "size": "2.2 MB" },
            { "id": 3, "name": "可再生能源計劃.pdf", "type": "PDF", "size": "1.8 MB" },
            { "id": 4, "name": "環境影響目標.pdf", "type": "PDF", "size": "1.4 MB" },
            { "id": 5, "name": "永續發展時間表資訊圖.pdf", "type": "PDF", "size": "923 KB" }
          ]
        },
        {
          "id": 4,
          "title": "全球擴張：於三個市場開設新國際辦公室",
          "summary": "策略性擴張至亞洲與歐洲市場，新加坡、倫敦與法蘭克福設立新辦公地點",
          "description": "國際擴張公告，包含市場分析與成長策略詳情",
          "date": "2024-08-14",
          "category": "業務擴張",
          "type": "商業",
          "issuer": "國際業務部",
          "serialNumber": "PR-IB-011-2024",
          "hasAttachment": true,
          "attachmentCount": 6,
          "attachments": [
            { "id": 1, "name": "全球擴張策略.pdf", "type": "PDF", "size": "4.1 MB" },
            { "id": 2, "name": "亞太市場分析.pdf", "type": "PDF", "size": "2.7 MB" },
            { "id": 3, "name": "歐洲市場進入計劃.pdf", "type": "PDF", "size": "2.3 MB" },
            { "id": 4, "name": "辦公地點詳情.pdf", "type": "PDF", "size": "1.5 MB" },
            { "id": 5, "name": "國際招聘計劃.pdf", "type": "PDF", "size": "1.2 MB" },
            { "id": 6, "name": "時間表與里程碑.pdf", "type": "PDF", "size": "891 KB" }
          ]
        }
    ],
    publications: [
      {
        "id": 1,
        "title": "2024年永續發展與環境影響年度報告",
        "description": "2024年環境計劃、碳足跡減量及永續發展成就的全面分析",
        "type": "年度報告",
        "pages": 45,
        "date": "2024-03-15",
        "category": "環境",
        "issuer": "永續發展部",
        "serialNumber": "PUB-SUS-003-2024",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "2024年永續發展報告完整版.pdf", "type": "PDF", "size": "8.3 MB" },
          { "id": 2, "name": "永續發展執行摘要.pdf", "type": "PDF", "size": "2.1 MB" },
          { "id": 3, "name": "環境數據附錄.xlsx", "type": "Excel", "size": "1.7 MB" }
        ]
      },
      {
        "id": 2,
        "title": "實踐中的創新：數位轉型案例研究與最佳實踐",
        "description": "展示成功數位轉型計劃與實施策略的真實案例研究集合",
        "type": "白皮書",
        "pages": 28,
        "date": "2024-05-20",
        "category": "技術",
        "issuer": "創新實驗室",
        "serialNumber": "PUB-IL-004-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "數位轉型白皮書.pdf", "type": "PDF", "size": "3.9 MB" },
          { "id": 2, "name": "案例研究集合.pdf", "type": "PDF", "size": "2.8 MB" },
          { "id": 3, "name": "實施框架.pdf", "type": "PDF", "size": "1.6 MB" },
          { "id": 4, "name": "最佳實踐清單.docx", "type": "Word", "size": "567 KB" }
        ]
      },
      {
        "id": 3,
        "title": "產業趨勢與市場分析報告：商業技術的未來",
        "description": "新興技術趨勢、市場機遇及商業適應策略建議的深入分析",
        "type": "市場研究",
        "pages": 52,
        "date": "2024-07-10",
        "category": "市場研究",
        "issuer": "策略部",
        "serialNumber": "PUB-STR-005-2024",
        "hasAttachment": true,
        "attachmentCount": 5,
        "attachments": [
          { "id": 1, "name": "2024年產業趨勢報告.pdf", "type": "PDF", "size": "6.4 MB" },
          { "id": 2, "name": "技術路線圖分析.pdf", "type": "PDF", "size": "3.2 MB" },
          { "id": 3, "name": "市場機遇摘要.pdf", "type": "PDF", "size": "2.1 MB" },
          { "id": 4, "name": "策略建議.pdf", "type": "PDF", "size": "1.8 MB" },
          { "id": 5, "name": "數據圖表與指標.xlsx", "type": "Excel", "size": "2.3 MB" }
        ]
      },
      {
        "id": 4,
        "title": "2024年員工參與與職場文化研究",
        "description": "員工滿意度、職場文化有效性及組織改進建議的全面研究",
        "type": "研究報告",
        "pages": 36,
        "date": "2024-09-05",
        "category": "人力資源",
        "issuer": "人力資源研究部",
        "serialNumber": "PUB-HR-006-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "2024年員工參與研究.pdf", "type": "PDF", "size": "4.7 MB" },
          { "id": 2, "name": "調查結果分析.pdf", "type": "PDF", "size": "2.9 MB" },
          { "id": 3, "name": "文化改進建議.pdf", "type": "PDF", "size": "1.9 MB" },
          { "id": 4, "name": "參與度指標儀表板.xlsx", "type": "Excel", "size": "1.4 MB" }
        ]
      }
    ],
    benefits: [
      {
        "id": 1,
        "title": "全面健康保險與醫療保障計劃",
        "description": "提供全面的醫療、牙科和視力保險，包含家庭選項及預防保健福利",
        "category": "醫療與保險",
        "type": "醫療及保險",
        "eligibility": "全職員工入職30天後",
        "issuer": "人力資源福利部",
        "serialNumber": "BEN-HR-007-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "2024年健康保險福利指南.pdf", "type": "PDF", "size": "3.1 MB" },
          { "id": 2, "name": "醫療提供者網絡目錄.pdf", "type": "PDF", "size": "2.4 MB" },
          { "id": 3, "name": "理賠流程說明.pdf", "type": "PDF", "size": "1.2 MB" },
          { "id": 4, "name": "註冊表單套裝.pdf", "type": "PDF", "size": "987 KB" }
        ]
      },
      {
        "id": 2,
        "title": "401(k)退休儲蓄計劃與公司匹配",
        "description": "全面的退休儲蓄計劃，提供最高6%的公司匹配及投資選擇",
        "category": "財務規劃",
        "type": "醫療及保險",
        "eligibility": "員工入職90天後",
        "issuer": "財務部",
        "serialNumber": "BEN-FIN-008-2024",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "401k計劃摘要.pdf", "type": "PDF", "size": "2.3 MB" },
          { "id": 2, "name": "投資選擇指南.pdf", "type": "PDF", "size": "1.8 MB" },
          { "id": 3, "name": "註冊指南.pdf", "type": "PDF", "size": "756 KB" }
        ]
      },
      {
        "id": 3,
        "title": "專業發展與培訓預算計劃",
        "description": "為技能發展、認證課程和專業成長機會提供年度預算分配",
        "category": "職業發展",
        "type": "員工活動及購物優惠",
        "eligibility": "所有員工經經理批准",
        "issuer": "學習與發展部",
        "serialNumber": "BEN-LD-009-2024",
        "hasAttachment": true,
        "attachmentCount": 5,
        "attachments": [
          { "id": 1, "name": "專業發展指南.pdf", "type": "PDF", "size": "2.1 MB" },
          { "id": 2, "name": "批准培訓提供者清單.pdf", "type": "PDF", "size": "1.4 MB" },
          { "id": 3, "name": "預算申請表.docx", "type": "Word", "size": "234 KB" },
          { "id": 4, "name": "認證報銷政策.pdf", "type": "PDF", "size": "892 KB" },
          { "id": 5, "name": "職業規劃模板.xlsx", "type": "Excel", "size": "445 KB" }
        ]
      },
      {
        "id": 4,
        "title": "員工志願者計劃與社區服務機會",
        "description": "提供帶薪志願者時間、社區服務項目及慈善捐款匹配計劃",
        "category": "社區參與",
        "type": "義工活動",
        "eligibility": "表現良好的所有員工",
        "issuer": "企業社會責任部",
        "serialNumber": "BEN-CSR-010-2024",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "志願者計劃概述.pdf", "type": "PDF", "size": "1.7 MB" },
          { "id": 2, "name": "社區合作夥伴清單.pdf", "type": "PDF", "size": "1.1 MB" },
          { "id": 3, "name": "志願者時間申請表.docx", "type": "Word", "size": "198 KB" }
        ]
      },
      {
        "id": 5,
        "title": "員工食堂與餐飲服務資訊",
        "description": "現場餐飲選擇、餐食計劃、營養資訊及特殊飲食需求安排",
        "category": "餐飲服務",
        "type": "食堂菜單",
        "eligibility": "所有員工及授權訪客",
        "issuer": "設施管理部",
        "serialNumber": "BEN-FAC-011-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "2024年12月食堂菜單.pdf", "type": "PDF", "size": "2.2 MB" },
          { "id": 2, "name": "餐食計劃選項.pdf", "type": "PDF", "size": "834 KB" },
          { "id": 3, "name": "營養資訊指南.pdf", "type": "PDF", "size": "1.5 MB" },
          { "id": 4, "name": "特殊飲食需求申請表.pdf", "type": "PDF", "size": "267 KB" }
        ]
      }
    ],
    forms: [
      {
        "id": 1,
        "title": "業務費用報告與報銷表單",
        "description": "提交詳細的業務費用報銷申請，包括差旅、餐飲和辦公用品",
        "category": "財務",
        "type": "常用表格",
        "format": "PDF表單",
        "issuer": "財務部",
        "serialNumber": "FORM-FIN-012-2024",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "2024年費用報告表單.pdf", "type": "PDF", "size": "678 KB" },
          { "id": 2, "name": "收據提交指南.pdf", "type": "PDF", "size": "445 KB" },
          { "id": 3, "name": "費用政策參考.pdf", "type": "PDF", "size": "1.2 MB" }
        ]
      },
      {
        "id": 2,
        "title": "休假申請與請假系統",
        "description": "申請假期、病假、個人休假或長期休假安排",
        "category": "人力資源",
        "type": "人力資源",
        "format": "線上表單",
        "issuer": "人力資源部",
        "serialNumber": "FORM-HR-013-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "休假申請表單.pdf", "type": "PDF", "size": "523 KB" },
          { "id": 2, "name": "休假政策摘要.pdf", "type": "PDF", "size": "987 KB" },
          { "id": 3, "name": "醫療休假文件.pdf", "type": "PDF", "size": "756 KB" },
          { "id": 4, "name": "經理審批流程.pdf", "type": "PDF", "size": "334 KB" }
        ]
      },
      {
        "id": 3,
        "title": "資訊科技支援申請與技術協助請求",
        "description": "報告技術問題、申請資訊科技設備或尋求軟硬體問題協助",
        "category": "資訊科技",
        "type": "資訊科技",
        "format": "線上表單",
        "issuer": "資訊科技支援部",
        "serialNumber": "FORM-IT-014-2024",
        "hasAttachment": true,
        "attachmentCount": 2,
        "attachments": [
          { "id": 1, "name": "資訊科技支援申請指南.pdf", "type": "PDF", "size": "891 KB" },
          { "id": 2, "name": "常見問題排查指南.pdf", "type": "PDF", "size": "1.3 MB" }
        ]
      },
      {
        "id": 4,
        "title": "採購與供應商申請授權表單",
        "description": "申請採購商品、服務或建立新供應商關係的批准",
        "category": "採購",
        "type": "採購",
        "format": "PDF表單",
        "issuer": "採購部",
        "serialNumber": "FORM-PROC-015-2024",
        "hasAttachment": true,
        "attachmentCount": 5,
        "attachments": [
          { "id": 1, "name": "採購申請表單.pdf", "type": "PDF", "size": "734 KB" },
          { "id": 2, "name": "供應商評估標準.pdf", "type": "PDF", "size": "1.1 MB" },
          { "id": 3, "name": "預算審批矩陣.pdf", "type": "PDF", "size": "567 KB" },
          { "id": 4, "name": "優先供應商清單.xlsx", "type": "Excel", "size": "823 KB" },
          { "id": 5, "name": "採購政策指南.pdf", "type": "PDF", "size": "1.8 MB" }
        ]
      },
      {
        "id": 5,
        "title": "行政服務與設施申請表單",
        "description": "申請行政支援、設施改造、辦公用品或空間分配",
        "category": "行政",
        "type": "行政",
        "format": "線上表單",
        "issuer": "行政部",
        "serialNumber": "FORM-ADM-016-2024",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "行政服務申請表單.pdf", "type": "PDF", "size": "612 KB" },
          { "id": 2, "name": "設施改造指南.pdf", "type": "PDF", "size": "1.4 MB" },
          { "id": 3, "name": "辦公用品目錄.pdf", "type": "PDF", "size": "2.1 MB" }
        ]
      }
    ],
    jobs: [
      {
        "id": 1,
        "title": "高級軟體工程師 - 全端開發",
        "description": "領導使用現代技術與雲端平台開發可擴展的網頁應用程式",
        "department": "技術部",
        "location": "紐約，紐約 / 遠程",
        "type": "全職",
        "posted": "2024-11-01",
        "issuer": "人力資源部",
        "serialNumber": "JOB-TECH-017-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "軟體工程師職位描述.pdf", "type": "PDF", "size": "1.2 MB" },
          { "id": 2, "name": "技術要求清單.pdf", "type": "PDF", "size": "678 KB" },
          { "id": 3, "name": "面試流程概述.pdf", "type": "PDF", "size": "445 KB" },
          { "id": 4, "name": "薪酬與福利套裝.pdf", "type": "PDF", "size": "823 KB" }
        ]
      },
      {
        "id": 2,
        "title": "數位行銷專家 - 成長與分析",
        "description": "推動數位行銷活動，分析績效指標，並優化客戶獲取策略",
        "department": "行銷部",
        "location": "芝加哥，伊利諾伊",
        "type": "全職",
        "posted": "2024-10-28",
        "issuer": "人力資源部",
        "serialNumber": "JOB-MKT-018-2024",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "行銷專家角色詳情.pdf", "type": "PDF", "size": "987 KB" },
          { "id": 2, "name": "所需技能與經驗.pdf", "type": "PDF", "size": "534 KB" },
          { "id": 3, "name": "行銷團隊結構.pdf", "type": "PDF", "size": "712 KB" }
        ]
      },
      {
        "id": 3,
        "title": "財務分析師 - 企業財務與規劃",
        "description": "支援財務規劃、預算流程，並為策略決策提供分析洞察",
        "department": "財務部",
        "location": "遠程 / 混合",
        "type": "全職",
        "posted": "2024-11-05",
        "issuer": "人力資源部",
        "serialNumber": "JOB-FIN-019-2024",
        "hasAttachment": true,
        "attachmentCount": 5,
        "attachments": [
          { "id": 1, "name": "財務分析師職位描述.pdf", "type": "PDF", "size": "1.1 MB" },
          { "id": 2, "name": "財務建模要求.pdf", "type": "PDF", "size": "867 KB" },
          { "id": 3, "name": "職業進展路徑.pdf", "type": "PDF", "size": "645 KB" },
          { "id": 4, "name": "遠程工作指南.pdf", "type": "PDF", "size": "456 KB" },
          { "id": 5, "name": "申請指南.pdf", "type": "PDF", "size": "234 KB" }
        ]
      },
      {
        "id": 4,
        "title": "使用者體驗/介面設計師 - 產品設計與使用者體驗",
        "description": "設計直觀的使用者介面，提升網頁與行動應用程式的使用者體驗",
        "department": "設計部",
        "location": "舊金山，加利福尼亞",
        "type": "全職",
        "posted": "2024-10-15",
        "issuer": "人力資源部",
        "serialNumber": "JOB-DES-020-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "使用者體驗設計師職位規格.pdf", "type": "PDF", "size": "1.3 MB" },
          { "id": 2, "name": "作品集要求.pdf", "type": "PDF", "size": "723 KB" },
          { "id": 3, "name": "設計團隊概述.pdf", "type": "PDF", "size": "891 KB" },
          { "id": 4, "name": "設計工具與軟體.pdf", "type": "PDF", "size": "567 KB" }
        ]
      }
    ],
    media: [
      {
        "id": 1,
        "title": "公司概述與品牌介紹影片",
        "type": "影片",
        "duration": "3:45",
        "size": "125 MB",
        "hasAttachment": true,
        "attachmentCount": 1,
        "attachments": [
          { "id": 1, "name": "公司概述影片高清版.mp4", "type": "影片", "size": "125 MB" }
        ]
      },
      {
        "id": 2,
        "title": "企業標誌與品牌識別套裝",
        "type": "圖片",
        "count": "12個文件",
        "size": "8.5 MB",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "標誌套裝完整版.zip", "type": "壓縮檔", "size": "8.5 MB" },
          { "id": 2, "name": "品牌指南.pdf", "type": "PDF", "size": "2.1 MB" },
          { "id": 3, "name": "標誌使用範例.pdf", "type": "PDF", "size": "1.4 MB" }
        ]
      },
      {
        "id": 3,
        "title": "產品展示與功能介紹簡報",
        "type": "簡報",
        "slides": "24頁",
        "size": "15.2 MB",
        "hasAttachment": true,
        "attachmentCount": 2,
        "attachments": [
          { "id": 1, "name": "產品展示簡報.pptx", "type": "PowerPoint", "size": "15.2 MB" },
          { "id": 2, "name": "展示腳本與筆記.docx", "type": "Word", "size": "456 KB" }
        ]
      }
    ],
    risk: [
      {
        "id": 1,
        "title": "市中心商業區路線安全評估",
        "route": "路線 A-1 (市中心走廊)",
        "riskLevel": "中風險",
        "lastUpdate": "2024-10-15",
        "status": "持續監控",
        "description": "市中心商業路線的全面安全評估，包括交通模式與行人安全",
        "type": "OD1",
        "issuer": "安全部門",
        "serialNumber": "RISK-SAF-021-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "市中心路線評估報告.pdf", "type": "PDF", "size": "3.2 MB" },
          { "id": 2, "name": "交通分析數據.xlsx", "type": "Excel", "size": "1.8 MB" },
          { "id": 3, "name": "安全改進建議.pdf", "type": "PDF", "size": "1.1 MB" },
          { "id": 4, "name": "風險區域路線圖.pdf", "type": "PDF", "size": "2.4 MB" }
        ]
      },
      {
        "id": 2,
        "title": "高速公路走廊風險分析與緩解策略",
        "route": "路線 B-3 (州際高速公路段)",
        "riskLevel": "低風險",
        "lastUpdate": "2024-11-01",
        "status": "定期監控",
        "description": "高速公路路線安全的詳細分析，包括天氣條件與交通流量模式",
        "type": "OD2",
        "issuer": "安全部門",
        "serialNumber": "RISK-SAF-022-2024",
        "hasAttachment": true,
        "attachmentCount": 3,
        "attachments": [
          { "id": 1, "name": "高速公路走廊風險分析.pdf", "type": "PDF", "size": "2.7 MB" },
          { "id": 2, "name": "天氣影響評估.pdf", "type": "PDF", "size": "1.5 MB" },
          { "id": 3, "name": "緩解策略計劃.pdf", "type": "PDF", "size": "1.9 MB" }
        ]
      },
      {
        "id": 3,
        "title": "工業區交通風險評估",
        "route": "路線 C-2 (工業園區通道)",
        "riskLevel": "高風險",
        "lastUpdate": "2024-09-20",
        "status": "正在審查增強安全措施",
        "description": "工業區路線的關鍵評估，聚焦於重型車輛交通與危險物質考量",
        "type": "ODN",
        "issuer": "安全部門",
        "serialNumber": "RISK-SAF-023-2024",
        "hasAttachment": true,
        "attachmentCount": 6,
        "attachments": [
          { "id": 1, "name": "工業區風險評估.pdf", "type": "PDF", "size": "4.1 MB" },
          { "id": 2, "name": "重型車輛交通分析.pdf", "type": "PDF", "size": "2.3 MB" },
          { "id": 3, "name": "危險物質評估.pdf", "type": "PDF", "size": "1.8 MB" },
          { "id": 4, "name": "緊急應對程序.pdf", "type": "PDF", "size": "1.4 MB" },
          { "id": 5, "name": "安全設備要求.pdf", "type": "PDF", "size": "987 KB" },
          { "id": 6, "name": "增強安全提案.pdf", "type": "PDF", "size": "2.1 MB" }
        ]
      },
      {
        "id": 4,
        "title": "學校區域與住宅區安全評估",
        "route": "路線 D-4 (住宅與學校區域)",
        "riskLevel": "中風險",
        "lastUpdate": "2024-10-30",
        "status": "需季節性監控",
        "description": "聚焦於學校區域、住宅區及兒童行人安全措施的安全評估",
        "type": "OD1",
        "issuer": "安全部門",
        "serialNumber": "RISK-SAF-024-2024",
        "hasAttachment": true,
        "attachmentCount": 5,
        "attachments": [
          { "id": 1, "name": "學校區域安全評估.pdf", "type": "PDF", "size": "2.9 MB" },
          { "id": 2, "name": "住宅區交通模式.pdf", "type": "PDF", "size": "1.7 MB" },
          { "id": 3, "name": "兒童安全措施檢討.pdf", "type": "PDF", "size": "1.3 MB" },
          { "id": 4, "name": "季節性風險因素.pdf", "type": "PDF", "size": "1.1 MB" },
          { "id": 5, "name": "社區反饋摘要.pdf", "type": "PDF", "size": "834 KB" }
        ]
      }
    ],
    safety: [
      {
        "id": 1,
        "title": "火災緊急程序與疏散協議更新",
        "category": "緊急程序",
        "type": "通告",
        "content": "更新後的火災安全程序，包括自2024年12月起生效的新疏散路線、集合點及緊急聯繫協議",
        "description": "包含更新程序與培訓要求的全面火災安全資訊",
        "priority": "高",
        "issuer": "安全部門",
        "serialNumber": "SAF-EMR-025-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "2024年火災緊急程序.pdf", "type": "PDF", "size": "2.1 MB" },
          { "id": 2, "name": "疏散路線圖.pdf", "type": "PDF", "size": "1.8 MB" },
          { "id": 3, "name": "緊急聯繫目錄.pdf", "type": "PDF", "size": "567 KB" },
          { "id": 4, "name": "火災安全培訓計劃.pdf", "type": "PDF", "size": "734 KB" }
        ]
      },
      {
        "id": 2,
        "title": "工作場所人體工學與健康安全培訓影片系列",
        "category": "健康與福祉",
        "type": "影片",
        "content": "全面的影片培訓系列，涵蓋正確的工作站設置、姿勢指南及傷害預防技術",
        "description": "用於人體工學工作場所設置與健康維護的影片內容",
        "priority": "中",
        "issuer": "職業健康部",
        "serialNumber": "SAF-ERG-026-2024",
        "hasAttachment": true,
        "attachmentCount": 5,
        "attachments": [
          { "id": 1, "name": "人體工學培訓系列_第一部分.mp4", "type": "影片", "size": "85 MB" },
          { "id": 2, "name": "人體工學培訓系列_第二部分.mp4", "type": "影片", "size": "78 MB" },
          { "id": 3, "name": "工作站設置清單.pdf", "type": "PDF", "size": "1.2 MB" },
          { "id": 4, "name": "人體工學設備指南.pdf", "type": "PDF", "size": "1.7 MB" },
          { "id": 5, "name": "健康評估表單.pdf", "type": "PDF", "size": "456 KB" }
        ]
      },
      {
        "id": 3,
        "title": "車輛安全檢查與維護指南",
        "category": "交通安全",
        "type": "海報及其他資料",
        "content": "所有公司車輛的必要出車前檢查程序、維護計劃及安全清單",
        "description": "包含檢查程序與維護要求的全面車輛安全資訊",
        "priority": "高",
        "issuer": "車隊管理部",
        "serialNumber": "SAF-VEH-027-2024",
        "hasAttachment": true,
        "attachmentCount": 6,
        "attachments": [
          { "id": 1, "name": "車輛安全指南完整版.pdf", "type": "PDF", "size": "3.4 MB" },
          { "id": 2, "name": "出車前檢查清單.pdf", "type": "PDF", "size": "789 KB" },
          { "id": 3, "name": "維護計劃模板.xlsx", "type": "Excel", "size": "567 KB" },
          { "id": 4, "name": "安全檢查海報.pdf", "type": "PDF", "size": "1.1 MB" },
          { "id": 5, "name": "車輛緊急程序.pdf", "type": "PDF", "size": "923 KB" },
          { "id": 6, "name": "車隊聯繫資訊.pdf", "type": "PDF", "size": "334 KB" }
        ]
      },
      {
        "id": 4,
        "title": "化學品處理與危險物質安全協議",
        "category": "危險物質",
        "type": "通告",
        "content": "工作場所環境中化學品及危險物質的安全處理、儲存及處置的更新協議",
        "description": "處理危險物質及化學品的關鍵安全資訊",
        "priority": "高",
        "issuer": "環境安全部",
        "serialNumber": "SAF-HAZ-028-2024",
        "hasAttachment": true,
        "attachmentCount": 7,
        "attachments": [
          { "id": 1, "name": "2024年化學品處理協議.pdf", "type": "PDF", "size": "4.2 MB" },
          { "id": 2, "name": "危險物質清單.xlsx", "type": "Excel", "size": "1.3 MB" },
          { "id": 3, "name": "安全數據表集合.pdf", "type": "PDF", "size": "6.7 MB" },
          { "id": 4, "name": "個人防護裝備指南.pdf", "type": "PDF", "size": "2.1 MB" },
          { "id": 5, "name": "洩漏應對程序.pdf", "type": "PDF", "size": "1.5 MB" },
          { "id": 6, "name": "危險物質緊急聯繫.pdf", "type": "PDF", "size": "456 KB" },
          { "id": 7, "name": "培訓認證要求.pdf", "type": "PDF", "size": "892 KB" }
        ]
      },
      {
        "id": 5,
        "title": "工作場所暴力預防與安全意識",
        "category": "安全",
        "type": "海報及其他資料",
        "content": "識別、預防及應對工作場所暴力與安全威脅的全面資訊",
        "description": "安全意識與暴力預防資訊，包含應對程序",
        "priority": "高",
        "issuer": "安全部門",
        "serialNumber": "SAF-SEC-029-2024",
        "hasAttachment": true,
        "attachmentCount": 4,
        "attachments": [
          { "id": 1, "name": "工作場所暴力預防指南.pdf", "type": "PDF", "size": "2.8 MB" },
          { "id": 2, "name": "安全意識海報集.pdf", "type": "PDF", "size": "1.9 MB" },
          { "id": 3, "name": "威脅評估程序.pdf", "type": "PDF", "size": "1.4 MB" },
          { "id": 4, "name": "安全緊急應對.pdf", "type": "PDF", "size": "1.1 MB" }
        ]
      }
    ],
    gallery: [
      {
        "id": 1,
        "title": "2024年公司年度會議",
        "description": "與領導團隊的策略規劃會議",
        "date": "2024-11-15",
        "event": "公司會議",
        "photographer": "企業傳訊部",
        "tags": ["會議", "領導", "策略"],
        "imageUrl": "https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NTg2ODkzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 2,
        "title": "第三季度全體會議",
        "description": "季度成果簡報與團隊慶祝活動",
        "date": "2024-10-08",
        "event": "季度會議",
        "photographer": "人力資源部",
        "tags": ["季度", "成果", "慶祝"],
        "imageUrl": "https://images.unsplash.com/photo-1621857093087-7daa85ab14a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBldmVudHxlbnwxfHx8fDE3NTg2ODkzMTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 3,
        "title": "2024年創新峰會",
        "description": "技術展示與創新簡報",
        "date": "2024-09-22",
        "event": "創新峰會",
        "photographer": "行銷團隊",
        "tags": ["創新", "技術", "簡報"],
        "imageUrl": "https://images.unsplash.com/photo-1568983268695-74a04650c8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbmZlcmVuY2UlMjBwcmVzZW50YXRpb258ZW58MXx8fHwxNzU4NTk1Njg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 4,
        "title": "2024年假日派對",
        "description": "與全體團隊的年度假日慶祝活動",
        "date": "2024-12-15",
        "event": "假日派對",
        "photographer": "活動委員會",
        "tags": ["假日", "慶祝", "派對"],
        "imageUrl": "https://images.unsplash.com/photo-1758520144658-c87be518b87e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBwYXJ0eSUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc1ODY4OTMyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 5,
        "title": "領導力發展工作坊",
        "description": "管理團隊的專業發展課程",
        "date": "2024-08-30",
        "event": "培訓工作坊",
        "photographer": "學習與發展部",
        "tags": ["培訓", "領導", "發展"],
        "imageUrl": "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3b3Jrc2hvcCUyMHRyYWluaW5nfGVufDF8fHx8MTc1ODY4OTMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 6,
        "title": "行業交流活動",
        "description": "與行業合作夥伴及客戶的交流聚會",
        "date": "2024-07-18",
        "event": "交流活動",
        "photographer": "業務發展部",
        "tags": ["交流", "合作夥伴", "客戶"],
        "imageUrl": "https://images.unsplash.com/photo-1675716921224-e087a0cca69a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ldHdvcmtpbmclMjBldmVudHxlbnwxfHx8fDE3NTg2NDExMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 7,
        "title": "員工卓越獎",
        "description": "表彰傑出成就的頒獎典禮",
        "date": "2024-06-12",
        "event": "頒獎典禮",
        "photographer": "人力資源部",
        "tags": ["獎項", "表彰", "卓越"],
        "imageUrl": "https://images.unsplash.com/photo-1716703742352-0bbdb45f505b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBhd2FyZCUyMGNlcmVtb255fGVufDF8fHx8MTc1ODY4OTMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 8,
        "title": "客戶答謝午餐",
        "description": "為主要客戶與利益相關者舉辦的感謝午餐",
        "date": "2024-05-24",
        "event": "客戶活動",
        "photographer": "客戶管理部",
        "tags": ["客戶", "答謝", "午餐"],
        "imageUrl": "https://images.unsplash.com/photo-1719046057021-3f27a15bffec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGx1bmNoJTIwbWVldGluZ3xlbnwxfHx8fDE3NTg2ODkzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 9,
        "title": "新產品發布活動",
        "description": "最新產品線的發布慶祝活動",
        "date": "2024-04-15",
        "event": "產品發布",
        "photographer": "行銷團隊",
        "tags": ["產品", "發布", "慶祝"],
        "imageUrl": "https://images.unsplash.com/photo-1623169274520-36235a547737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBwcm9kdWN0JTIwbGF1bmNofGVufDF8fHx8MTc1ODY4OTMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 10,
        "title": "公司年度靜修",
        "description": "團隊建設活動與策略規劃靜修",
        "date": "2024-03-08",
        "event": "公司靜修",
        "photographer": "活動委員會",
        "tags": ["靜修", "團隊建設", "戶外"],
        "imageUrl": "https://images.unsplash.com/photo-1746021425981-5f55202a826d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwcmV0cmVhdCUyMG91dGRvb3J8ZW58MXx8fHwxNzU4Njg5MzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 11,
        "title": "團隊建設工作坊",
        "description": "聚焦於協作與溝通的互動工作坊",
        "date": "2024-02-20",
        "event": "團隊建設",
        "photographer": "人力資源部",
        "tags": ["團隊建設", "工作坊", "協作"],
        "imageUrl": "https://images.unsplash.com/photo-1676277758786-c2ce791b7a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4Njg5MzQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        "id": 12,
        "title": "創新展示",
        "description": "尖端項目與原型展示",
        "date": "2024-01-25",
        "event": "創新展示",
        "photographer": "研發部門",
        "tags": ["創新", "展示", "技術"],
        "imageUrl": "https://images.unsplash.com/photo-1561489411-c0ce86e994bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBpbm5vdmF0aW9uJTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzU4Njg5MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ]
    // Other Chinese sections...
  }
};