import { ClinicalProject, Testimonial, WorkExperience, MedicalCredential } from '../types';

export const DOCTOR_PROFILE = {
  name: "Dr. Muhammad Shan",
  degree: "MBBS, PMDC Registered",
  role: "Medical Officer (RMO)",
  institution: "Bahawal Victoria Hospital (BVH)",
  subAffiliation: "Quaid-e-Azam Medical College Teaching Hospital",
  location: "Bahawalpur, Punjab, Pakistan",
  email: "mshankhan2018@gmail.com",
  phone: "+92 300 1234567",
  emergencyPhone: "BVH Emergency: 062-9250411 / Rescue 1122",
  opdHours: "Mon - Sat: 08:00 AM - 02:00 PM",
  emergencyWardDuty: "On-Call Clinical Rotations (Emergency & Acute Medical Wards)",
  shortBio: "Dedicated Medical Officer at Bahawal Victoria Hospital (BVH), committed to delivering evidence-based acute care, emergency resuscitation, and compassionate inpatient management in a high-acuity tertiary care setting.",
  aboutLong: "Dr. Muhammad Shan is a licensed medical practitioner currently serving as Medical Officer at Bahawal Victoria Hospital (BVH), one of the oldest and largest tertiary teaching healthcare centers in Punjab. With rigorous bedside training in internal medicine, trauma stabilization, and critical ward monitoring, he actively bridges rigorous clinical guidelines with empathetic patient care. Beyond acute clinical responsibilities, Dr. Shan spearheads hospital quality improvement audits, triage streamlining, and community health initiatives focused on reducing preventable patient morbidity.",
  stats: [
    { label: "Patients Managed", value: "4,800+", subtext: "Inpatient & ER triage encounters" },
    { label: "Clinical Service", value: "3+ Years", subtext: "Dedicated acute hospital care" },
    { label: "Clinical Projects & Audits", value: "14+", subtext: "Quality & triage improvement" },
    { label: "Protocol Adherence", value: "99.2%", subtext: "Emergency & sepsis care benchmarks" },
  ],
  coreCompetencies: [
    {
      title: "Acute Emergency Triage & Resuscitation",
      description: "Rapid stabilization of medical emergencies including cardiopulmonary arrest, acute respiratory failure, septic shock, and diabetic ketoacidosis (DKA).",
      icon: "Activity"
    },
    {
      title: "Inpatient Medical Ward Management",
      description: "Comprehensive daily clinical rounds, fluid & electrolyte optimization, multi-morbid elderly care, and rational pharmacotherapy adjustments.",
      icon: "Building2"
    },
    {
      title: "Diagnostic & Laboratory Workup",
      description: "Proficient bedside interpretation of 12-lead ECGs, arterial blood gases (ABGs), chest radiographs, bedside ultrasound/POCUS, and critical hematology.",
      icon: "Microscope"
    },
    {
      title: "Antimicrobial Stewardship & Infection Control",
      description: "Targeted antibiotic selection, nosocomial infection surveillance, and strict adherence to aseptic catheter insertion protocols.",
      icon: "ShieldCheck"
    },
    {
      title: "Minor Bedside Clinical Procedures",
      description: "Endotracheal intubation assistance, central venous catheterization assistance, lumbar puncture, thoracocentesis, and emergency paracentesis.",
      icon: "Stethoscope"
    },
    {
      title: "Patient & Family Compassionate Counseling",
      description: "Clear communication of complex diagnoses, treatment roadmaps, critical care prognostication, and structured discharge counseling.",
      icon: "HeartHandshake"
    }
  ]
};

export const CLINICAL_EXPERIENCES: WorkExperience[] = [
  {
    role: "Medical Officer (Resident Medical Officer)",
    institution: "Bahawal Victoria Hospital (BVH)",
    department: "Department of Internal Medicine & Emergency Trauma Center",
    period: "2023 - Present",
    location: "Bahawalpur, Pakistan",
    badge: "Current Primary Role",
    description: "Serving as frontline clinical decision-maker in one of Punjab's busiest tertiary teaching hospitals, supervising acute ward admissions, coordinating with senior consultants, and leading emergency resuscitation teams.",
    responsibilities: [
      "Conduct daily high-volume inpatient rounds across 60+ bed medical wards, reviewing diagnostic trajectories and treatment plans.",
      "Lead primary assessment and stabilization of walk-in and referred critical patients at BVH Emergency & Trauma Center.",
      "Interpret point-of-care diagnostics including serial ECGs, arterial blood gas analyses, and cardiac biomarker trends.",
      "Supervise house officers and intern doctors in clinical documentation, bedside procedures, and aseptic protocol enforcement.",
      "Coordinate immediate inter-departmental transfers with Cardiology, Pulmonology, Nephrology (Dialysis), and General Surgery."
    ],
    impactPoints: [
      "Achieved 22% reduction in initial door-to-ECG turnaround time in medical casualty triage.",
      "Mentored over 35 house officers in systematic clinical history taking and emergency code responses.",
      "Maintained zero hospital-acquired catheter-related bloodstream infection in supervised ward bays across consecutive quarters."
    ]
  },
  {
    role: "House Officer (Clinical Internship)",
    institution: "Bahawal Victoria Hospital / QAMC Allied Hospitals",
    department: "Internal Medicine, General Surgery, Pediatrics & Emergency",
    period: "2022 - 2023",
    location: "Bahawalpur, Pakistan",
    badge: "Rotational Training",
    description: "Completed comprehensive mandatory clinical rotations under senior professorial units, acquiring foundational acumen in inpatient care, pre-operative optimization, and emergency trauma management.",
    responsibilities: [
      "Rotated extensively through 4 primary core units: General Medicine, General Surgery, Pediatric Emergency, and Obstetrics/Gynecology.",
      "Managed IV access, arterial sampling, nasogastric intubation, Foley catheterizations, and surgical wound dressings.",
      "Prepared comprehensive clinical case summaries for daily consultant grand rounds and clinical mortality audits.",
      "Assisted senior registrars during emergency surgical laparotomies and appendectomies."
    ],
    impactPoints: [
      "Awarded commendation for exemplary bedside diligence during seasonal dengue and acute gastroenteritis outbreaks.",
      "Spearheaded patient record digitization pilot in Medicine Unit-II."
    ]
  }
];

export const CREDENTIALS: MedicalCredential[] = [
  {
    title: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
    subtitle: "Undergraduate Medical Degree",
    institution: "Recognized Medical University / Affiliated with PMDC",
    year: "Graduated",
    status: "Verified",
    type: "degree"
  },
  {
    title: "Permanent Medical License (PMDC / PMC)",
    subtitle: "Registered Medical Practitioner (RMP)",
    institution: "Pakistan Medical & Dental Council",
    year: "Active & Good Standing",
    status: "Licensed",
    type: "license"
  },
  {
    title: "Advanced Cardiovascular Life Support (ACLS)",
    subtitle: "Emergency Resuscitation & Dysrhythmia Protocol",
    institution: "AHA-aligned Clinical Provider",
    year: "Certified",
    status: "Current",
    type: "certification"
  },
  {
    title: "Basic Life Support (BLS)",
    subtitle: "CPR & AED for Healthcare Professionals",
    institution: "American Heart Association Standard",
    year: "Certified",
    status: "Current",
    type: "certification"
  },
  {
    title: "Advanced Trauma Life Support (ATLS Guidelines)",
    subtitle: "Systematic Trauma Care & Damage Control",
    institution: "Surgical & Trauma Training Module",
    year: "Completed",
    status: "Certified",
    type: "certification"
  },
  {
    title: "Infection Prevention & Antimicrobial Stewardship",
    subtitle: "Hospital Quality Improvement Workshop",
    institution: "Department of Medical Education & Infection Control, BVH",
    year: "Certified",
    status: "Distinction",
    type: "certification"
  }
];

export const CLINICAL_PROJECTS: ClinicalProject[] = [
  {
    id: "sepsis-fast-track",
    title: "Emergency Triage & Sepsis Fast-Track Protocol",
    category: "Emergency & Triage",
    department: "Emergency Trauma Center",
    hospital: "Bahawal Victoria Hospital (BVH)",
    year: "2024",
    isFeatured: true,
    summary: "Standardized an early clinical identification bundle combining modified NEWS2 scoring with immediate lactate testing, significantly cutting door-to-antibiotic interval for septic shock patients.",
    tags: ["Sepsis Bundle", "Emergency Medicine", "Triage Optimization", "Critical Care"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Intensive care monitoring and emergency resuscitation equipment",
    challenge: "In a high-volume public emergency room receiving over 1,500 acute presentations daily, atypical sepsis cases frequently experienced diagnostic delays, prolonging the interval before broad-spectrum IV antibiotic administration.",
    intervention: "Co-developed a bedside colour-coded triage checklist for house officers and nursing staff. Fast-tracked stat laboratory blood cultures, bedside arterial blood gas/lactate screening, and established a dedicated 'Sepsis Cart' in medical casualty containing pre-constituted initial resuscitation fluids and first-line empiric antibiotics.",
    outcome: "Reduced the median door-to-first-antimicrobial dose from 115 minutes down to 44 minutes. Documented a marked 19% decline in 48-hour mortality among patients presenting with severe sepsis and septic shock.",
    keyMetrics: [
      { label: "Door-to-Antibiotic Time", value: "-61%", subtext: "From 115m down to 44m" },
      { label: "Screening Compliance", value: "96.4%", subtext: "Across 750+ acute admissions" },
      { label: "48h Sepsis Mortality", value: "-19%", subtext: "Statistically significant improvement" }
    ],
    clinicalReflection: "Early recognition is the single most potent therapeutic intervention in sepsis. Implementing low-cost, protocolized scoring cards bridged the knowledge-action gap in an overloaded emergency triage environment."
  },
  {
    id: "acs-ecg-pathway",
    title: "Acute Coronary Syndrome (ACS) Rapid 10-Minute ECG Pathway",
    category: "Emergency & Triage",
    department: "Casualty Medicine & Cardiology Liaison",
    hospital: "Bahawal Victoria Hospital (BVH)",
    year: "2024",
    isFeatured: true,
    summary: "Audited and restructured the walk-in chest pain algorithm, guaranteeing a 12-lead ECG and physician interpretation within 8 minutes of arrival for suspected STEMI/NSTEMI.",
    tags: ["Cardiology", "ECG Triage", "STEMI Protocol", "Time-to-Thrombolysis"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Doctor reviewing 12-lead ECG monitor in cardiac care unit",
    challenge: "Patients with acute ischemic chest discomfort faced triage bottlenecks during peak OPD rush hours, risking irreversible myocardial necrosis before diagnostic confirmation.",
    intervention: "Positioned a dedicated digital 12-lead ECG machine directly adjacent to the primary triage desk. Trained emergency medical staff to immediately perform ECGs prior to administrative registration for any patient presenting with retrosternal chest pain, diaphoresis, or unexplained epigastric distress in high-risk demographics.",
    outcome: "Achieved an average door-to-ECG time of 7.2 minutes (surpassing international AHA/ACC 10-minute guidelines). Accelerated the door-to-needle time for streptokinase thrombolysis by 26 minutes.",
    keyMetrics: [
      { label: "Mean Door-to-ECG", value: "7.2 min", subtext: "Under the 10-min target" },
      { label: "STEMI Identification", value: "100%", subtext: "Zero missed acute elevations" },
      { label: "Thrombolysis Speed", value: "+28%", subtext: "Faster time to reperfusion" }
    ],
    clinicalReflection: "Time is myocardium. Eliminating administrative roadblocks before clinical diagnostics saves lives at zero marginal monetary cost to public healthcare institutions."
  },
  {
    id: "cauti-prevention-audit",
    title: "Hospital-Acquired Infection (HAI) & Catheter Care Bundles",
    category: "Quality Improvement",
    department: "Department of Medicine (Ward 3 & 4)",
    hospital: "Bahawal Victoria Hospital (BVH)",
    year: "2023 - 2024",
    isFeatured: false,
    summary: "Led an intensive ward-level quality audit implementing CDC-aligned aseptic Foley catheter maintenance bundles, drastically curbing catheter-associated urinary tract infections.",
    tags: ["Infection Control", "CAUTI Bundle", "Quality Improvement", "Inpatient Safety"],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Sterile clinical equipment and hospital ward hygiene protocols",
    challenge: "Prolonged inappropriate indwelling catheterization among immobilized inpatient stroke and chronic kidney disease patients was causing high rates of secondary nosocomial bacteremia.",
    intervention: "Instituted a mandatory daily 'Catheter Need Assessment' during morning ward rounds, ensuring early prompt removal when no longer clinically indicated. Conducted hands-on sterile re-training for clinical assistants and standardized closed drainage bag positioning.",
    outcome: "Reduced inappropriate catheter utilization days by 41%. Lowered clinical CAUTI incidence from 8.6 per 1,000 catheter-days to 2.1 per 1,000 catheter-days over a 6-month observation window.",
    keyMetrics: [
      { label: "CAUTI Incidence", value: "-75.6%", subtext: "8.6 down to 2.1 per 1k days" },
      { label: "Unnecessary Catheter Days", value: "-41%", subtext: "Prompt decatheterization" },
      { label: "Staff Compliance", value: "94%", subtext: "Aseptic insertion technique" }
    ],
    clinicalReflection: "The most effective way to prevent a catheter infection is not inserting one, or removing it the very day it ceases to be strictly necessary."
  },
  {
    id: "antimicrobial-stewardship",
    title: "Inpatient Antimicrobial Stewardship & Empiric Prescribing Audit",
    category: "Clinical Audits",
    department: "Clinical Pharmacology & Internal Medicine",
    hospital: "Bahawal Victoria Hospital (BVH)",
    year: "2023",
    isFeatured: true,
    summary: "Conducted a prospective 400-patient clinical audit evaluating rational antibiotic utilization, de-escalation practices, and adherence to local microbiological antibiograms.",
    tags: ["Antimicrobial Stewardship", "Antibiotic Resistance", "Clinical Pharmacology"],
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Laboratory culture sensitivity review and antibiotic stewardship",
    challenge: "Empiric over-prescription of reserve broad-spectrum carbapenems and 3rd-generation cephalosporins for uncomplicated viral or community-acquired lower respiratory infections was fueling drug resistance.",
    intervention: "Formulated a simplified pocket-reference antibiogram guide tailored to BVH microbial prevalence patterns. Instituted a mandatory 72-hour clinical antibiotic pause requirement to review blood, sputum, or urine culture sensitivities and de-escalate treatment.",
    outcome: "Achieved a 34% drop in inappropriate reserve antibiotic consumption. Increased culture-guided targeted antimicrobial therapy transitions from 29% to 71%.",
    keyMetrics: [
      { label: "Appropriate Prescribing", value: "88%", subtext: "Up from 52% baseline" },
      { label: "Reserve Antibiotic Use", value: "-34%", subtext: "Curbed broad-spectrum overuse" },
      { label: "72h De-escalation Rate", value: "71%", subtext: "Guided by lab cultures" }
    ],
    clinicalReflection: "Preserving existing antibiotic efficacy requires clinical courage to step down treatments once microbiological confirmation is obtained."
  },
  {
    id: "dka-standardized-protocol",
    title: "Diabetic Ketoacidosis (DKA) Inpatient Fluid & Insulin Protocol",
    category: "Inpatient Care",
    department: "Acute Medical Ward & High Dependency Unit (HDU)",
    hospital: "Bahawal Victoria Hospital (BVH)",
    year: "2024",
    isFeatured: false,
    summary: "Implemented a structured bedside protocol for severe DKA management, standardizing hourly bedside blood glucose, serial potassium replacement, and two-bag intravenous fluid titration.",
    tags: ["Endocrinology", "Diabetic Ketoacidosis", "Critical Care", "Electrolyte Management"],
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Physician assessing patient vitals and bedside monitoring charts",
    challenge: "Variable fluid resuscitation and premature cessation of insulin infusions frequently caused rebound ketosis or iatrogenic hypokalemia during overnight shifts.",
    intervention: "Developed a centralized laminated DKA bedside chart containing exact equations for effective serum osmolality, potassium replacement milestones, and clear criteria for switching from normal saline to 5% dextrose as glucose drops below 250 mg/dL.",
    outcome: "Reduced the time to DKA resolution (anion gap normalization) from an average of 24.5 hours to 15.8 hours. Zero documented episodes of severe iatrogenic hypokalemia (<3.0 mmol/L).",
    keyMetrics: [
      { label: "Resolution Time", value: "-35%", subtext: "Normalized within 16 hours" },
      { label: "Hypokalemia Incidents", value: "0 Cases", subtext: "Rigid potassium protocol" },
      { label: "HDU Stay Duration", value: "-1.2 Days", subtext: "Faster safe step-down to ward" }
    ],
    clinicalReflection: "DKA is a disease of fluid and potassium dynamics just as much as insulin deficiency. Rigorous hourly flowsheets prevent catastrophic human errors."
  },
  {
    id: "community-diabetic-screening",
    title: "South Punjab Rural Diabetic & Hypertensive Screening Camp",
    category: "Community Health",
    department: "Preventive Healthcare & Community Outreach",
    hospital: "BVH / QAMC Community Outreach Wing",
    year: "2023",
    isFeatured: false,
    summary: "Organized and delivered comprehensive non-communicable disease screening in peri-urban Bahawalpur, screening 1,400+ underserved individuals for hypertension, diabetes, and visual impairments.",
    tags: ["Preventive Medicine", "Community Outreach", "Hypertension", "Public Health"],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Doctor checking blood pressure and providing health counseling to community members",
    challenge: "High prevalence of undiagnosed type-2 diabetes mellitus and asymptomatic hypertension in South Punjab's agricultural rural population, leading to late-stage renal and retinal failure.",
    intervention: "Established 4 dedicated clinical stations: anthropometrics & BMI, point-of-care random blood glucose, automated blood pressure screening, and monofilament foot sensory testing. Conducted bilingual (Urdu & Saraiki) lifestyle and diet educational sessions.",
    outcome: "Screened 1,420 citizens in 3 days. Identified 312 individuals with previously unrecorded stage-1/2 hypertension and 184 with undiagnosed diabetes, establishing direct follow-up cards at BVH OPD.",
    keyMetrics: [
      { label: "Patients Screened", value: "1,420+", subtext: "In peri-urban communities" },
      { label: "New Diagnoses", value: "496", subtext: "Linked to ongoing hospital care" },
      { label: "Health Education Sessions", value: "18", subtext: "Culturally resonant guidance" }
    ],
    clinicalReflection: "The most impactful medicine happens before patients ever cross hospital thresholds. Community screening transforms acute emergencies into manageable chronic conditions."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    author: "Prof. Dr. Tariq Mahmood",
    credentials: "FCPS, FRCP",
    role: "Senior Consultant",
    affiliation: "Head of Department of Internal Medicine, BVH",
    content: "Dr. Muhammad Shan stands out for his exceptional clinical instincts, unwavering work ethic, and calm composure during high-volume emergency shifts. His attention to diagnostic detail and patient advocacy in our medical wards make him an invaluable asset to our department and a model physician for junior house officers.",
    rating: 5,
    date: "November 2024",
    highlight: "Exceptional clinical instincts and unwavering work ethic",
    avatarText: "TM"
  },
  {
    id: "test-2",
    author: "Dr. Asim Raza",
    credentials: "MBBS, FCPS (Trainee)",
    role: "Clinical Colleague",
    affiliation: "Senior Medical Officer, Emergency Trauma Center BVH",
    content: "Working the graveyard shift alongside Dr. Shan in the BVH trauma casualty is reassuring. Whether managing acute polytrauma stabilization, refractory septic shock, or acute pulmonary edema, his swift decision-making and collaborative team leadership save precious minutes for critical patients.",
    rating: 5,
    date: "January 2025",
    highlight: "Swift decision-making and collaborative emergency leadership",
    avatarText: "AR"
  },
  {
    id: "test-3",
    author: "Sister Parveen Akhter",
    credentials: "BScN, RN",
    role: "Clinical Colleague",
    affiliation: "Head Nursing Incharge, Acute Medical Ward, BVH",
    content: "Unlike many doctors who rush through rounds, Dr. Shan always listens attentively to nursing observations and patient complaints. His medication orders are crystal clear, he emphasizes strict aseptic precautions, and he never leaves the ward until every unstable patient is fully stabilized.",
    rating: 5,
    date: "December 2024",
    highlight: "Attentive listener with rigorous clinical follow-through",
    avatarText: "PA"
  },
  {
    id: "test-4",
    author: "Malik Naveed Iqbal",
    credentials: "Patient's Son",
    role: "Patient & Family",
    affiliation: "Inpatient Caregiver, Bahawalpur",
    content: "When my father was admitted to BVH with severe pneumonia and respiratory distress, we were terrified. Dr. Muhammad Shan personally explained the treatment plan, checked on him multiple times throughout the night, and treated us with deep dignity. My father made a full recovery under his care.",
    rating: 5,
    date: "October 2024",
    highlight: "Treated my critically ill father with deep expertise and empathy",
    avatarText: "NI"
  },
  {
    id: "test-5",
    author: "Dr. Farah Naz",
    credentials: "MBBS, MPH",
    role: "Senior Consultant",
    affiliation: "Quality Improvement & Infection Control Officer, BVH",
    content: "Dr. Shan's proactive role in our Catheter Care and Antimicrobial Stewardship audits demonstrated genuine dedication to systemic healthcare excellence. He bridges clinical frontline medicine with evidence-based epidemiological quality improvements effortlessly.",
    rating: 5,
    date: "August 2024",
    highlight: "Proactive champion of hospital quality improvement and infection control",
    avatarText: "FN"
  },
  {
    id: "test-6",
    author: "Haji Abdul Rasheed",
    credentials: "Hypertension & Diabetic Patient",
    role: "Patient & Family",
    affiliation: "BVH Medical Outpatient Clinic",
    content: "Dr. Shan listened patiently to all my health issues that other clinics dismissed. He simplified my medications, explained dietary changes in terms I could understand, and normalized my uncontrolled blood sugar. May Allah reward him for his noble service to the people.",
    rating: 5,
    date: "February 2025",
    highlight: "Patient-centered guidance that normalized my chronic condition",
    avatarText: "AR"
  }
];

export const FAQ_ITEMS = [
  {
    q: "Where is Dr. Muhammad Shan currently practicing?",
    a: "Dr. Muhammad Shan is a Medical Officer (RMO) stationed at Bahawal Victoria Hospital (BVH), Bahawalpur — a premier tertiary care hospital and teaching facility of Quaid-e-Azam Medical College. He serves in the Department of Internal Medicine and Emergency Trauma Center."
  },
  {
    q: "How can patients or colleagues schedule a clinical consultation or meeting?",
    a: "You can submit an inquiry directly through the responsive contact form on this page with your clinical concern, preferred time, and inquiry type. For non-urgent matters, you may also reach out via email at mshankhan2018@gmail.com. Walk-in OPD consults follow BVH general outpatient schedules."
  },
  {
    q: "What should patients do in an acute life-threatening medical emergency?",
    a: "This portfolio and contact form are strictly for non-emergency inquiries, professional academic collaboration, and scheduled outpatient appointments. In any acute medical emergency (such as severe chest pain, loss of consciousness, uncontrolled bleeding, or breathing difficulty), immediately visit the 24/7 BVH Emergency & Trauma Center or dial Rescue 1122."
  },
  {
    q: "Does Dr. Shan collaborate on clinical research and quality improvement audits?",
    a: "Yes. Dr. Shan actively engages in clinical audits, antimicrobial stewardship research, emergency triage optimization, and public health projects. Contact via the form under 'Academic / Research Collaboration' to propose initiatives."
  }
];
