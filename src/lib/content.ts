export const clinic = {
  name: "Dental 7 Aesthetics",
  tagline: "Certified dental experts in general & aesthetic dentistry",
  location: "Jinnah Avenue, opposite Malir Cantt, Karachi",
  city: "Karachi, Pakistan",
  instagram: "https://www.instagram.com/dental7aesthetics/",
  instagramHandle: "@dental7aesthetics",
  linkedin: "https://www.linkedin.com/company/dental-7-aesthetics",
  hours: [
    { day: "Monday – Saturday", time: "11:00 AM – 9:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const team = [
  {
    name: "Dr. Abdullah Baig",
    role: "Founder & CEO",
    focus: "General & aesthetic dentistry with a calm, precision-led approach.",
  },
  {
    name: "Dr. Maira Minhaj",
    role: "General Dentist",
    focus: "Patient-first care across preventive, restorative, and smile treatments.",
  },
];

export type Service = {
  title: string;
  description: string;
  category: "Cosmetic" | "General" | "Restorative" | "Specialty";
};

export const services: Service[] = [
  {
    title: "Smile Design & Makeovers",
    description:
      "Bespoke smile planning that balances facial harmony, shade, and lasting function.",
    category: "Cosmetic",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening for a brighter, naturally luminous smile—safely guided in-clinic.",
    category: "Cosmetic",
  },
  {
    title: "Porcelain Veneers",
    description:
      "Ultra-thin ceramic veneers to refine shape, color, and symmetry with elegant detail.",
    category: "Cosmetic",
  },
  {
    title: "Cosmetic Bonding",
    description:
      "Artful composite bonding to repair chips, close gaps, and refresh smile aesthetics.",
    category: "Cosmetic",
  },
  {
    title: "Dental Checkups & Exams",
    description:
      "Thorough consultations and oral assessments to protect long-term dental health.",
    category: "General",
  },
  {
    title: "Scaling & Polishing",
    description:
      "Deep professional cleaning to remove plaque, tartar, and surface stains.",
    category: "General",
  },
  {
    title: "Preventive Care",
    description:
      "Fluoride, hygiene coaching, and recall plans designed around your lifestyle.",
    category: "General",
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Gentle, reassuring dental care for children in a calm clinical setting.",
    category: "General",
  },
  {
    title: "Tooth-Colored Fillings",
    description:
      "Natural-looking restorations that repair cavities while preserving tooth structure.",
    category: "Restorative",
  },
  {
    title: "Root Canal Therapy",
    description:
      "Comfort-focused endodontic treatment to relieve pain and save natural teeth.",
    category: "Restorative",
  },
  {
    title: "Crowns & Bridges",
    description:
      "Custom prosthetics that restore strength, bite, and refined aesthetics.",
    category: "Restorative",
  },
  {
    title: "Dentures & Partials",
    description:
      "Well-fitted removable solutions crafted for comfort, speech, and confidence.",
    category: "Restorative",
  },
  {
    title: "Dental Implants",
    description:
      "Permanent tooth replacement with implant-supported restorations that feel natural.",
    category: "Specialty",
  },
  {
    title: "Orthodontics & Aligners",
    description:
      "Braces and clear aligner pathways for straighter teeth and improved bite.",
    category: "Specialty",
  },
  {
    title: "Gum Therapy",
    description:
      "Periodontal care for healthier gums, fresher breath, and stable oral foundations.",
    category: "Specialty",
  },
  {
    title: "Wisdom Tooth Care",
    description:
      "Evaluation and careful extraction when third molars threaten comfort or alignment.",
    category: "Specialty",
  },
  {
    title: "Oral Surgery Support",
    description:
      "Extractions and surgical support delivered with clear guidance and aftercare.",
    category: "Specialty",
  },
  {
    title: "Emergency Dental Care",
    description:
      "Prompt attention for toothache, trauma, broken restorations, and urgent concerns.",
    category: "Specialty",
  },
  {
    title: "Night Guards & Bite Care",
    description:
      "Custom appliances to protect enamel from grinding and ease jaw strain.",
    category: "Specialty",
  },
  {
    title: "Full Mouth Rehabilitation",
    description:
      "Comprehensive rebuilding for complex wear, missing teeth, and functional renewal.",
    category: "Restorative",
  },
];

export const values = [
  {
    title: "Quiet Confidence",
    text: "A composed clinical experience—never rushed, never clinical in the cold sense of the word.",
  },
  {
    title: "Aesthetic Precision",
    text: "Every shade, contour, and margin is considered so your smile looks intentional and natural.",
  },
  {
    title: "Honest Guidance",
    text: "Clear recommendations, transparent options, and care plans that respect your priorities.",
  },
];
