import { VoiceQuestion } from '../types';

export const VOICE_QUESTIONS: VoiceQuestion[] = [
  {
    id: 'vq-1',
    question: 'Tell me about wheat',
    urduQuestion: 'مجھے گندم کے بارے میں بتائیں',
    category: 'Crops',
    relatedCropId: 'wheat',
    answer: 'Wheat is Pakistan\'s main Rabi crop sown from October to November and harvested in April-May. It requires 350-450mm water, 1.5 bags DAP + 2 bags Urea per acre. Timely sowing before Nov 25 ensures max yield.',
    urduAnswer: 'گندم پاکستان کی اہم ترین ربیع کی فصل ہے۔ اس کی کاشت اکتوبر سے نومبر تک کی جاتی ہے اور کٹائی اپریل مئی میں ہوتی ہے۔ فی ایکڑ ڈیڑھ بوری ڈی اے پی اور دو بوری یوریا درکار ہوتی ہے۔'
  },
  {
    id: 'vq-2',
    question: 'How much water does rice need?',
    urduQuestion: 'چاول کو کتنے پانی کی ضرورت ہوتی ہے؟',
    category: 'Water & Irrigation',
    relatedCropId: 'rice',
    answer: 'Rice requires 1200 to 1500 mm of water throughout its growing season. Maintaining 2 to 3 inches standing water during first 15 days after transplanting is essential. You can save 25% water using Alternate Wetting and Drying (AWD).',
    urduAnswer: 'چاول کی فصل کو کل 1200 سے 1500 ملی میٹر پانی کی ضرورت ہوتی ہے۔ منتقلی کے بعد پہلے 15 دن 2 سے 3 انچ پانی کھڑا رکھنا ضروری ہے۔ خشکی و تری کا طریقہ اختیار کر کے 25 فیصد پانی بچایا جا سکتا ہے۔'
  },
  {
    id: 'vq-3',
    question: 'When should I plant tomatoes?',
    urduQuestion: 'ٹماٹر کی کاشت کا وقت کیا ہے؟',
    category: 'Vegetables',
    relatedCropId: 'tomato',
    answer: 'In plains (Punjab & Sindh), sow tomato nursery in Oct-Nov for spring crop. In high plastic tunnels, plant in Nov-Dec. In cooler hilly areas like Swat & Quetta, sow in Feb-March for summer harvest.',
    urduAnswer: 'پنجاب اور سندھ کے میدانوں میں ٹماٹر کی پنیریاں اکتوبر نومبر میں لگائی جاتی ہیں۔ ہائی ٹنل میں نومبر دسمبر جبکہ سوات اور کوئٹہ کے پہاڑی علاقوں میں فروری مارچ میں کاشت ہوتی ہے۔'
  },
  {
    id: 'vq-4',
    question: 'What fertilizer is best for cotton?',
    urduQuestion: 'کپاس کے لیے بہترین کھاد کون سی ہے؟',
    category: 'Fertilizers',
    relatedCropId: 'cotton',
    answer: 'For cotton, apply 1.5 bags DAP at sowing, 2.5 bags Urea split across 3 doses during flowering/boll stage, and 1 bag Potassium Sulfate (SOP) to enhance boll weight and fiber quality.',
    urduAnswer: 'کپاس کے لیے کاشت کے وقت ڈیڑھ بوری ڈی اے پی، پھول اور ڈوڈیاں بنتے وقت ڈھائی بوری یوریا تین اقساط میں اور فی ایکڑ ایک بوری پوٹاش (ایس او پی) بہترین نتائج دیتی ہے۔'
  },
  {
    id: 'vq-5',
    question: 'What diseases affect potatoes?',
    urduQuestion: 'آلو کی فصل کو کون سی بیماریاں لگتی ہیں؟',
    category: 'Diseases',
    relatedCropId: 'potato',
    answer: 'Potato is heavily affected by Late Blight (water-soaked spots on leaves in humid winter), Early Blight, and Virus Leaf Roll. Spray copper fungicide as preventive measure before cold foggy weather.',
    urduAnswer: 'آلو کی سب سے خطرناک بیماری لیٹ بلائیٹ (پچھتی جھلساؤ) ہے جو سرد مرطوب موسم میں پھیلتی ہے۔ دھند سے پہلے کاپر پر مبنی فنجی سائیڈ سپرے کرنا ضروری ہے۔'
  },
  {
    id: 'vq-6',
    question: 'How do I reduce soil salinity?',
    urduQuestion: 'زمین کی نمکیات یا کلر کا علاج کیسے کریں؟',
    category: 'Soil Health',
    answer: 'Apply Agricultural Gypsum based on soil lab test, plow deeply, flood field to leach salts, apply farmyard compost, and grow green manure crops like Dhaincha (Sesbania).',
    urduAnswer: 'زمین کی کلر اور شور دور کرنے کے لیے لیبارٹری ٹیسٹ کے مطابق جپسم ڈالیں، گہرا ہل چلائیں، گوبر کی کھاد ڈالیں اور جنتر (دھینچہ) بیج کر زمین میں روٹاویٹ کریں۔'
  }
];
