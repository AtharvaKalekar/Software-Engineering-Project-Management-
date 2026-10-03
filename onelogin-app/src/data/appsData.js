// Option 2 (Recommended Scope): Vendor Legacy Apps Cut Down / Deferred
// Core Scope: 9 Applications (4 Cloud + 5 In-House) = 52 Person-Days (6.5 Weeks)

export const CORE_APPS = [
  {
    id: 1,
    name: "Enterprise Resource Planning (ERP)",
    category: "Cloud",
    protocol: "OpenID Connect",
    effortDays: 3,
    icon: "Building2",
    color: "#38bdf8",
    description: "Core university financial, HR, student records, and administrative operations.",
    allowedRoles: ["Faculty", "Administrative Staff", "IT Administrator"],
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_fac_94021",
      aud: "erp-cloud-service",
      role: "Faculty",
      permissions: ["grades:write", "payroll:view", "dept:manage"],
      exp: Math.floor(Date.now() / 1000) + 3600
    }
  },
  {
    id: 2,
    name: "Learning Management System (LMS)",
    category: "Cloud",
    protocol: "SAML 2.0",
    effortDays: 3,
    icon: "GraduationCap",
    color: "#818cf8",
    description: "Course materials, online assignments, quiz submissions, and class lectures.",
    allowedRoles: ["Student", "Faculty", "IT Administrator"],
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_std_18204",
      aud: "lms-canvas-cloud",
      role: "Student",
      permissions: ["courses:read", "submissions:upload"],
      exp: Math.floor(Date.now() / 1000) + 3600
    }
  },
  {
    id: 3,
    name: "Student Self-Service Portal",
    category: "Cloud",
    protocol: "OAuth 2.0",
    effortDays: 3,
    icon: "UserCheck",
    color: "#34d399",
    description: "Course registration, fee payment receipts, transcript generation, and ID requests.",
    allowedRoles: ["Student", "IT Administrator"],
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_std_18204",
      aud: "student-portal-cloud",
      role: "Student",
      permissions: ["transcripts:view", "fees:pay"],
      exp: Math.floor(Date.now() / 1000) + 3600
    }
  },
  {
    id: 4,
    name: "University Mail & Cloud Suite",
    category: "Cloud",
    protocol: "SAML 2.0",
    effortDays: 3,
    icon: "Mail",
    color: "#fbbf24",
    description: "Google Workspace & Microsoft 365 official campus communication.",
    allowedRoles: ["Student", "Faculty", "Administrative Staff", "IT Administrator"],
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_std_18204",
      aud: "google-workspace-saml",
      role: "Student",
      permissions: ["email:full", "drive:write"],
      exp: Math.floor(Date.now() / 1000) + 3600
    }
  },
  {
    id: 5,
    name: "Library Digital Catalog & Journals",
    category: "In-House",
    protocol: "Custom JWT",
    effortDays: 8,
    icon: "BookOpen",
    color: "#c084fc",
    description: "IEEE/ACM paper access, physical book borrowing, and study room booking.",
    allowedRoles: ["Student", "Faculty", "Administrative Staff", "IT Administrator"],
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_fac_94021",
      aud: "inhouse-library-jwt",
      role: "Faculty",
      permissions: ["journals:download", "room:reserve"],
      exp: Math.floor(Date.now() / 1000) + 3600
    }
  },
  {
    id: 6,
    name: "Placement & Internship Portal",
    category: "In-House",
    protocol: "Custom JWT",
    effortDays: 8,
    icon: "Briefcase",
    color: "#f43f5e",
    description: "Campus recruitment drives, resume verification, and interview schedules.",
    allowedRoles: ["Student", "Administrative Staff", "IT Administrator"],
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_std_18204",
      aud: "placement-inhouse-jwt",
      role: "Student",
      permissions: ["jobs:apply", "interview:view"],
      exp: Math.floor(Date.now() / 1000) + 3600
    }
  },
  {
    id: 7,
    name: "Hostel & Mess Allocation",
    category: "In-House",
    protocol: "Custom JWT",
    effortDays: 8,
    icon: "Home",
    color: "#22d3ee",
    description: "Dorm room allotment, mess menu feedback, and night pass requests.",
    allowedRoles: ["Student", "Administrative Staff", "IT Administrator"],
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_std_18204",
      aud: "hostel-inhouse-jwt",
      role: "Student",
      permissions: ["room:view", "pass:request"],
      exp: Math.floor(Date.now() / 1000) + 3600
    }
  },
  {
    id: 8,
    name: "Campus Sports & Gym Booking",
    category: "In-House",
    protocol: "Custom JWT",
    effortDays: 8,
    icon: "Trophy",
    color: "#a3e635",
    description: "Badminton court reservations, swimming pool passes, and fitness equipment.",
    allowedRoles: ["Student", "Faculty", "Administrative Staff", "IT Administrator"],
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_std_18204",
      aud: "sports-inhouse-jwt",
      role: "Student",
      permissions: ["slot:book"],
      exp: Math.floor(Date.now() / 1000) + 3600
    }
  },
  {
    id: 9,
    name: "Faculty Research Repository",
    category: "In-House",
    protocol: "Custom JWT",
    effortDays: 8,
    icon: "FlaskConical",
    color: "#e879f9",
    description: "Grant proposals, research datasets, laboratory access permissions, and IP logs.",
    allowedRoles: ["Faculty", "IT Administrator"],
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_fac_94021",
      aud: "research-repo-jwt",
      role: "Faculty",
      permissions: ["grant:write", "lab:unlock"],
      exp: Math.floor(Date.now() / 1000) + 3600
    }
  }
];

export const VENDOR_DEFERRED_APPS = [
  {
    id: 10,
    name: "Legacy Exam Cell Database",
    category: "Legacy Vendor (Deferred)",
    protocol: "Vault Proxy Wrapper",
    effortDays: 15,
    icon: "ShieldAlert",
    color: "#f87171",
    description: "Proprietary database storing historical grade ledgers. Cut from initial 16-week scope.",
    allowedRoles: ["Faculty", "Administrative Staff", "IT Administrator"],
    status: "Deferred to Phase 2",
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_admin_001",
      aud: "legacy-exam-vault-proxy",
      role: "IT Administrator",
      permissions: ["legacy:db_inject_auth"],
      exp: Math.floor(Date.now() / 1000) + 1800
    }
  },
  {
    id: 11,
    name: "Legacy Bus & Transport Tracker",
    category: "Legacy Vendor (Deferred)",
    protocol: "Vault Proxy Wrapper",
    effortDays: 15,
    icon: "Bus",
    color: "#fb923c",
    description: "Third-party vendor fleet tracking. Cut from initial 16-week scope to mitigate risk.",
    allowedRoles: ["Student", "Faculty", "Administrative Staff", "IT Administrator"],
    status: "Deferred to Phase 2",
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_std_18204",
      aud: "legacy-bus-proxy",
      role: "Student",
      permissions: ["bus:track"],
      exp: Math.floor(Date.now() / 1000) + 1800
    }
  },
  {
    id: 12,
    name: "Legacy Alumni Network",
    category: "Legacy Vendor (Deferred)",
    protocol: "Vault Proxy Wrapper",
    effortDays: 15,
    icon: "Users",
    color: "#38bdf8",
    description: "Legacy relational directory. Cut from initial 16-week scope to save 45 person-days.",
    allowedRoles: ["Administrative Staff", "IT Administrator"],
    status: "Deferred to Phase 2",
    sampleToken: {
      iss: "https://onelogin.university.edu",
      sub: "usr_staff_4091",
      aud: "legacy-alumni-proxy",
      role: "Administrative Staff",
      permissions: ["alumni:search"],
      exp: Math.floor(Date.now() / 1000) + 1800
    }
  }
];

// Active primary dataset: 9 Core Apps (Vendor Apps Cut Down)
export const APPS_DATA = CORE_APPS;
