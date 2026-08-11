export const clinic = {
  name: "Dental 7 Aesthetics",
  tagline:
    "As your dentists in Karachi, we protect oral health and design smiles with clinical precision.",
  location: "Jinnah Avenue, opposite Malir Cantt, Karachi",
  city: "Karachi, Pakistan",
  instagram: "https://www.instagram.com/dental7aesthetics/",
  instagramHandle: "@dental7aesthetics",
  email: "dental7aesthetics@gmail.com",
  linkedin: "https://www.linkedin.com/company/dental-7-aesthetics",
  hours: [
    { day: "Monday – Saturday", time: "11:00 AM – 9:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const gallery = [
  {
    src: "/images/hero.jpg",
    alt: "Our modern dental operatory prepared for precise treatment",
  },
  {
    src: "/images/atmosphere-clinic.png",
    alt: "Calm, composed treatment suite at Dental 7 Aesthetics",
  },
  {
    src: "/images/smile.jpg",
    alt: "Healthy smile following aesthetic dental care",
  },
  {
    src: "/images/atmosphere-smile.png",
    alt: "Naturally refined smile designed with aesthetic dentistry",
  },
  {
    src: "/images/clinic.jpg",
    alt: "Sterile clinical environment for patient-safe dentistry",
  },
  {
    src: "/images/treatment.jpg",
    alt: "Dentist delivering careful restorative treatment",
  },
  {
    src: "/images/hygiene.jpg",
    alt: "Professional dental hygiene and preventive care",
  },
  {
    src: "/images/consult.jpg",
    alt: "Chairside consultation and diagnosis",
  },
];

export const homeMoments = [
  {
    src: "/images/reception.jpg",
    alt: "Welcoming clinic reception for a calm first visit",
    caption: "Your first visit starts with a clear exam and honest plan.",
  },
  {
    src: "/images/ortho.jpg",
    alt: "Orthodontic assessment for aligned bites",
    caption: "We evaluate bite, alignment, and long-term enamel health together.",
  },
  {
    src: "/images/implant.jpg",
    alt: "Implant consultation and restorative planning",
    caption: "Missing teeth are restored for function first, aesthetics always.",
  },
  {
    src: "/images/family.jpg",
    alt: "Family-focused dental care setting",
    caption: "From children to adults, we tailor care to every stage of life.",
  },
];

export const team = [
  {
    name: "Dr. Abdullah Baig",
    role: "Founder, Dentist & CEO",
    focus:
      "I lead treatment planning across general and aesthetic dentistry—balancing comfort, longevity, and natural-looking results.",
  },
  {
    name: "Dr. Maira Minhaj",
    role: "General Dentist",
    focus:
      "I focus on preventive care, restorative dentistry, and smile treatments with a calm chairside manner for every patient.",
  },
];

export type Service = {
  title: string;
  description: string;
  category: "Cosmetic" | "General" | "Restorative" | "Specialty";
  image: string;
};

export const services: Service[] = [
  {
    title: "Smile Design & Makeovers",
    description:
      "We map facial proportions, tooth shade, and bite before reshaping your smile—so the result looks natural in conversation and on photographs.",
    category: "Cosmetic",
    image: "/images/atmosphere-smile.png",
  },
  {
    title: "Teeth Whitening",
    description:
      "In-clinic whitening brightens enamel safely under our supervision. We protect gums, select the right concentration, and set realistic shade goals.",
    category: "Cosmetic",
    image: "/images/whitening.jpg",
  },
  {
    title: "Porcelain Veneers",
    description:
      "Ultra-thin ceramic veneers correct shape, color, and minor alignment issues while preserving as much healthy tooth structure as possible.",
    category: "Cosmetic",
    image: "/images/smile.jpg",
  },
  {
    title: "Cosmetic Bonding",
    description:
      "We repair chips, close small gaps, and refine edges with tooth-colored composite—often completed in a single comfortable visit.",
    category: "Cosmetic",
    image: "/images/tools.jpg",
  },
  {
    title: "Dental Checkups & Exams",
    description:
      "Every checkup includes a full oral examination, gum assessment, and discussion of findings so you understand your oral health clearly.",
    category: "General",
    image: "/images/consult.jpg",
  },
  {
    title: "Scaling & Polishing",
    description:
      "We remove plaque and calculus above and below the gumline, then polish enamel to reduce stain and support healthier gums.",
    category: "General",
    image: "/images/hygiene.jpg",
  },
  {
    title: "Preventive Care",
    description:
      "Fluoride, hygiene coaching, and recall intervals are personalized to your risk level—because prevention is the foundation of lasting dentistry.",
    category: "General",
    image: "/images/care.jpg",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Children receive gentle exams, cleanings, and early guidance in a calm setting so dental visits feel safe from the start.",
    category: "General",
    image: "/images/family.jpg",
  },
  {
    title: "Tooth-Colored Fillings",
    description:
      "We treat decay with bonded composite restorations that match your enamel and conserve healthy tooth structure.",
    category: "Restorative",
    image: "/images/treatment.jpg",
  },
  {
    title: "Root Canal Therapy",
    description:
      "When pulp infection causes pain, we clean and seal the canals carefully to relieve discomfort and save your natural tooth whenever possible.",
    category: "Restorative",
    image: "/images/xray.jpg",
  },
  {
    title: "Crowns & Bridges",
    description:
      "Custom crowns and bridges restore strength after fracture or large fillings, rebuilding bite function with refined aesthetics.",
    category: "Restorative",
    image: "/images/implant.jpg",
  },
  {
    title: "Dentures & Partials",
    description:
      "Removable prostheses are fitted for speech, chewing comfort, and a natural appearance—adjusted carefully for daily wear.",
    category: "Restorative",
    image: "/images/reception.jpg",
  },
  {
    title: "Dental Implants",
    description:
      "Implants replace missing teeth with a stable foundation for crowns or bridges that look and function like natural teeth.",
    category: "Specialty",
    image: "/images/implant.jpg",
  },
  {
    title: "Orthodontics & Aligners",
    description:
      "We correct crowding and bite issues with braces or clear aligners, planning tooth movement for both aesthetics and long-term stability.",
    category: "Specialty",
    image: "/images/ortho.jpg",
  },
  {
    title: "Gum Therapy",
    description:
      "Periodontal treatment reduces inflammation, deep cleans infected pockets, and helps stabilize gums that support your teeth.",
    category: "Specialty",
    image: "/images/hygiene.jpg",
  },
  {
    title: "Wisdom Tooth Care",
    description:
      "Impacted or symptomatic third molars are assessed with imaging and removed carefully when they threaten pain, crowding, or infection.",
    category: "Specialty",
    image: "/images/xray.jpg",
  },
  {
    title: "Oral Surgery Support",
    description:
      "Extractions and minor surgical care are performed with clear consent, sterile protocol, and aftercare instructions you can follow at home.",
    category: "Specialty",
    image: "/images/treatment.jpg",
  },
  {
    title: "Emergency Dental Care",
    description:
      "Toothache, trauma, swelling, or a broken restoration needs prompt attention—we stabilize the problem and explain the next clinical steps.",
    category: "Specialty",
    image: "/images/clinic.jpg",
  },
  {
    title: "Night Guards & Bite Care",
    description:
      "Custom night guards protect enamel from grinding and help ease jaw strain linked to clenching during sleep.",
    category: "Specialty",
    image: "/images/tools.jpg",
  },
  {
    title: "Full Mouth Rehabilitation",
    description:
      "For extensive wear or multiple missing teeth, we rebuild function step by step—restoring bite, comfort, and a cohesive smile.",
    category: "Restorative",
    image: "/images/atmosphere-clinic.png",
  },
];

export const values = [
  {
    title: "Diagnosis First",
    text: "We examine, listen, and explain before we treat—so every recommendation is based on what your mouth actually needs.",
  },
  {
    title: "Conservative Care",
    text: "Whenever clinically possible, we preserve natural tooth structure and choose the least invasive option that still lasts.",
  },
  {
    title: "Natural Aesthetics",
    text: "Shade, shape, and gum harmony are planned carefully so cosmetic work looks like your own teeth—only healthier and more refined.",
  },
];

export const pageCopy = {
  home: {
    headline: "Dental care planned by dentists—for health first, beauty always.",
    subcopy:
      "At Dental 7 Aesthetics in Karachi, we diagnose carefully, treat gently, and design smiles that remain functional for years—not just photogenic for a day.",
  },
  services: {
    eyebrow: "Clinical Services",
    title: "Comprehensive dentistry for every stage of oral health.",
    subtitle:
      "From preventive cleanings to implants and smile design, we provide the treatments we would recommend for our own families—explained clearly before we begin.",
  },
  about: {
    eyebrow: "About Our Practice",
    title: "A dentist-led clinic built on trust, skill, and composed care.",
    subtitle:
      "Meet the clinicians behind Dental 7 Aesthetics and the standards that guide every appointment.",
  },
  visit: {
    eyebrow: "Visit the Clinic",
    title: "Book a consultation and begin with a proper dental assessment.",
    subtitle:
      "Visit us on Jinnah Avenue, opposite Malir Cantt. Share your concern and we will guide the right next clinical step.",
  },
};
