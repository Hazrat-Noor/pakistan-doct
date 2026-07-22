import { EduArticle, FAQItem, AgriFact, FarmingTip, CalendarMonth } from '../types';

export const EDU_ARTICLES: EduArticle[] = [
  {
    id: 'crop-seasons',
    title: 'Pakistani Crop Seasons (فصلی موسم)',
    urduTitle: 'پاکستان میں فصلوں کے اہم موسم',
    category: 'Crop Seasons',
    iconName: 'Sun',
    tag: 'Fundamental',
    readTime: '4 min',
    summary: 'Comprehensive guide to Pakistan\'s three distinct cropping seasons: Kharif (Summer), Rabi (Winter), and Zaid (Spring/Autumn).',
    content: [
      {
        heading: '1. Kharif Season (گرمیوں کی فصلیں)',
        body: 'The Kharif cropping season begins with the onset of early summer rains and warm weather (April to June) and ends in autumn (October to November). It relies on monsoon rains and canal water supplies.',
        bulletPoints: [
          'Major Crops: Rice (Basmati & IRRI), Cotton (White Gold), Sugarcane, Maize (Corn), Sesame, Mung Bean, Okra.',
          'Key Challenge: Managing high heat, humidity, whitefly pests, and monsoon flooding risks.',
          'Water Strategy: Maximizing monsoon runoff harvesting and laser land leveled irrigation.'
        ]
      },
      {
        heading: '2. Rabi Season (سردیوں کی فصلیں)',
        body: 'The Rabi cropping season starts in late autumn (October to November) after monsoon rains recede and harvests in spring (April to May). It requires cool weather for growth and warm sunshine for seed maturation.',
        bulletPoints: [
          'Major Crops: Wheat (Gandum), Chickpea (Gram/Chana), Mustard (Sarson), Barley (Jow), Potato, Onion, Garlic.',
          'Key Advantage: Lower crop water evaporation, predictable winter rains (Western Disturbances).',
          'Yield Factors: Timely sowing before November 25 is vital for max wheat output.'
        ]
      },
      {
        heading: '3. Zaid / Extra Seasons (زائد/بہاریہ فصلیں)',
        body: 'Zaid seasons occur in short transitional gaps between main Rabi and Kharif crops (March to June). Fast-maturing crops are grown with high market cash returns.',
        bulletPoints: [
          'Major Crops: Spring Maize, Sunflower, Cucumber, Watermelon, Muskmelon, Fodder (SSG).',
          'Ideal for: High-tunnel farming and drip-irrigated vegetable production.'
        ]
      }
    ]
  },
  {
    id: 'soil-types',
    title: 'Soil Types & Soil Health in Pakistan (زمین کی اقسام)',
    urduTitle: 'پاکستان میں مٹی کی اقسام اور دیکھ بھال',
    category: 'Soil Health',
    iconName: 'Layers',
    tag: 'Essential',
    readTime: '5 min',
    summary: 'Understand Alluvial, Sandy, Clay, Loam, and Saline soils, and learn how to test pH and restore soil carbon.',
    content: [
      {
        heading: 'Indus Basin Alluvial Soil (زرخیز سائل)',
        body: 'Formed by deep river silt deposits along the Indus River and its five tributaries in Punjab and Sindh. It is naturally fertile, rich in potassium, but often deficient in nitrogen, phosphorus, and organic matter (< 0.8%).'
      },
      {
        heading: 'Soil pH & Testing Guidelines',
        body: 'Most Pakistani soils are alkaline (pH 7.5 to 8.5) due to dry climate and calcium carbonate accumulation. Knowing your exact pH dictates fertilizer efficiency.',
        bulletPoints: [
          'pH 6.0 - 7.5: Optimal range for maximum plant nutrient absorption.',
          'pH > 8.2 (Alkaline/Saline): Phosphorus gets locked up; apply Gypsum or Elemental Sulfur + Organic Compost to reclaim.'
        ]
      },
      {
        heading: 'Restoring Organic Carbon',
        body: 'Pakistani soils urgently need organic matter boost. Incorporate farmyard manure (FYM), pressmud, biochar, and green manure crops (Dhaincha / Sesbania) before primary tillage.'
      }
    ]
  },
  {
    id: 'seed-info',
    title: 'Seed Selection & Seed Treatment (بیج کا انتخاب)',
    urduTitle: 'عمدہ بیج کا انتخاب اور زہر آلودگی',
    category: 'Seed Information',
    iconName: 'Sprout',
    tag: 'Practical',
    readTime: '3 min',
    summary: 'Guidelines from FSC&RD for certified disease-free seeds, germination testing at home, and bio-seed treatment.',
    content: [
      {
        heading: 'Why Certified Seeds Matter?',
        body: 'Using certified seeds registered with the Federal Seed Certification & Registration Department (FSC&RD) boosts crop yields by 15-25% compared to uncertified farm-saved seed.'
      },
      {
        heading: 'Home Germination Test in 3 Steps',
        body: '1. Take 100 seeds from your seed bag.\n2. Place them on a wet cloth/paper towel inside a warm plate for 5-7 days.\n3. Count sprouted seeds. If > 85 seeds germinate, your seed lot is high quality.'
      },
      {
        heading: 'Seed Fungicide & Bio-Treatment',
        body: 'Treat seeds with Trichoderma harzianum or approved bio-fungicide prior to sowing to prevent seed-borne smuts, wilts, and root rot diseases.'
      }
    ]
  },
  {
    id: 'fertilizer-guide',
    title: 'Fertilizer Management: NPK & Micronutrients (کھادوں کا استعمال)',
    urduTitle: 'نائٹروجن، فاسفورس اور پوٹاش کی متوازن مقدار',
    category: 'Fertilizers',
    iconName: 'FlaskConical',
    tag: 'Nutrition',
    readTime: '6 min',
    summary: 'Complete breakdown of Urea, DAP, SOP, MOP, and essential micronutrients like Zinc, Boron, and Iron.',
    content: [
      {
        heading: 'Balanced N-P-K Nutrition',
        body: 'Nitrogen (Urea) builds green leaves and vegetative growth. Phosphorus (DAP / SSP) establishes strong roots and early flowers. Potassium (SOP) hardens plant stems, improves drought tolerance, and increases grain weight.',
        bulletPoints: [
          'DAP Application: Always apply 100% of Phosphorus (DAP) at sowing time near root depth.',
          'Urea Splitting: Apply Nitrogen (Urea) in 2-3 split doses during active tillering / growth stages.',
          'SOP Potash: Crucial for fruit quality, cotton boll weight, and grain shining in wheat.'
        ]
      },
      {
        heading: 'Vital Micronutrients in Pakistan',
        body: 'Zinc (Zn) is deficient in 70% of paddy soils; apply 10kg Zinc Sulfate (33%) at rice transplanting. Boron (B) prevents hollow stems in cauliflower and flower drop in cotton.'
      }
    ]
  },
  {
    id: 'irrigation-methods',
    title: 'Smart Irrigation & Water Saving (آبپاشی کے طریقہ کار)',
    urduTitle: 'جدید آبپاشی اور پانی کی بچت',
    category: 'Irrigation',
    iconName: 'Droplets',
    tag: 'Water Smart',
    readTime: '5 min',
    summary: 'Compare Canal flooding, Drip irrigation, High-efficiency Sprinklers, and Laser Land Leveling to double water efficiency.',
    content: [
      {
        heading: 'Laser Land Leveling (لیزر لیولنگ)',
        body: 'Precisely flattens farm fields using laser sensors. Saves 30% irrigation water, increases crop stand uniformity, and cuts pumping diesel cost by 25%.',
        bulletPoints: [
          'Water Distribution: Prevents low-spot waterlogging and high-spot drought stress.',
          'Fertilizer Efficiency: Uniform water spread ensures equal fertilizer distribution across all plants.'
        ]
      },
      {
        heading: 'Drip & Micro-Irrigation (ڈپ آبپاشی)',
        body: 'Delivers water and dissolved liquid nutrients directly to individual plant roots via dripper tubes. Achieves up to 90% water application efficiency; ideal for orchards, vegetables, and cotton.'
      },
      {
        heading: 'Raised Bed & Furrow Sowing',
        body: 'Sowing crops like wheat, maize, and cotton on beds saves 25-30% water compared to flat flood irrigation while protecting plants from root drown.'
      }
    ]
  },
  {
    id: 'pest-management',
    title: 'Integrated Pest Management - IPM (کیڑوں کا مربوط انسداد)',
    urduTitle: 'سائنسی اور بائیولوجیکل کیڑا مار طریقے',
    category: 'Pest Control',
    iconName: 'Bug',
    tag: 'Protection',
    readTime: '5 min',
    summary: 'Reduce chemical pesticide sprays using yellow sticky traps, pheromones, beneficial insects, and organic botanical sprays.',
    content: [
      {
        heading: 'Core Principles of IPM',
        body: '1. Field Scouting: Inspect crops twice weekly before spraying.\n2. Economic Threshold Level (ETL): Only spray when pest count exceeds ETL damage limit.\n3. Biological Protection: Protect natural farmer friends like Ladybird beetles, Chrysoperla, and spiders.'
      },
      {
        heading: 'Homemade Organic Neem Spray Recipe',
        body: 'Boil 5 kg fresh neem leaves in 10 liters of water for 30 minutes. Cool, strain, add 50g mild soap, and dilute in 100 liters water. Sprayed over crops, it deters aphids, caterpillars, and whiteflies effectively.'
      },
      {
        heading: 'Mechanical Traps',
        body: 'Deploy Yellow Sticky Traps (20/acre) for whitefly and aphids; Pheromone Traps for Pink Bollworm in cotton and Fall Armyworm in maize.'
      }
    ]
  },
  {
    id: 'disease-management',
    title: 'Crop Disease Identification & Control (بیماریوں کا علاج)',
    urduTitle: 'پودوں کی بیماریوں کی پہچان اور تدابیر',
    category: 'Disease Management',
    iconName: 'ShieldAlert',
    tag: 'Health',
    readTime: '4 min',
    summary: 'Identify Fungal rusts, Bacterial blights, Viral leaf curls, and Soil-borne root rots with preventative organic remedies.',
    content: [
      {
        heading: 'Fungal Diseases (پپھوندی کی بیماریاں)',
        body: 'Includes Wheat Rust, Potato Late Blight, Rice Blast, and Powdery Mildew. Thrives in cold humid weather. Control via crop spacing, crop rotation, and Trichoderma bio-fungicides or copper sprays.'
      },
      {
        heading: 'Viral Diseases & Insect Vectors',
        body: 'Cotton Leaf Curl Virus (CLCuV) and Tomato Leaf Curl Virus are transmitted by Whiteflies. Controlling the sucking insect vector is the only way to stop viral spread.'
      }
    ]
  },
  {
    id: 'organic-farming',
    title: 'Organic Farming & Natural Fertilizers (آرگینک فارمنگ)',
    urduTitle: 'قدرتی اور آرگینک طریقۂ کاشت',
    category: 'Organic Farming',
    iconName: 'Leaf',
    tag: 'Eco Friendly',
    readTime: '5 min',
    summary: 'Build high-grade vermicompost, compost tea, green manuring, and organic biocontrol for pesticide-free food.',
    content: [
      {
        heading: 'Aerobic Composting in 45 Days',
        body: 'Layer green nitrogen waste (crop leaves, kitchen scraps) with dry carbon materials (straw, dry grass) and moisten. Turn every 10 days. Produces rich, earthy compost packed with soil microbes.'
      },
      {
        heading: 'Green Manuring (گرین مینوئرنگ)',
        body: 'Sow Dhaincha (Sesbania) or Guara in May, allow 45 days growth, then plow green biomass into wet soil. Adds 30kg natural Nitrogen per acre and boosts soil organic humus.'
      }
    ]
  },
  {
    id: 'sustainable-farming',
    title: 'Sustainable Soil Conservation & Zero Tillage (پائیدار زراعت)',
    urduTitle: 'زمین کی قدرتی زرخیزی کو محفوظ بنانا',
    category: 'Sustainable Farming',
    iconName: 'Recycle',
    tag: 'Conservation',
    readTime: '4 min',
    summary: 'Practice zero-tillage wheat sowing into paddy residue, crop rotation, and rainwater conservation.',
    content: [
      {
        heading: 'Happy Seeder & Zero-Tillage Sowing',
        body: 'Directly sows wheat into standing paddy stubble without burning straw. Stops air smog, conserves soil moisture, and cuts land preparation tractor cost by 100%.'
      },
      {
        heading: 'Crop Rotation Strategy',
        body: 'Rotate heavy feeder crops (Wheat, Cotton, Maize) with soil-building legumes (Chickpea, Lentil, Mung Bean) to break pest life cycles and maintain soil structure.'
      }
    ]
  },
  {
    id: 'modern-farming',
    title: 'Modern Farming: Hydroponics & Greenhouses (جدید زراعت)',
    urduTitle: 'ہائیڈروپونکس اور ٹنل تکنیک',
    category: 'Modern Farming',
    iconName: 'Cpu',
    tag: 'Technology',
    readTime: '5 min',
    summary: 'Explore Hydroponic nutrient film technique, Walk-in Tunnels, and Controlled Environment Agriculture in Pakistan.',
    content: [
      {
        heading: 'High Tunnel Farming in Punjab',
        body: 'Walk-in plastic tunnels shield sensitive off-season vegetables (cucumber, tomato, capsicum) from winter frost. Farmers earn 3x higher revenues by hitting early market high prices.'
      },
      {
        heading: 'Soil-Less Hydroponics (NFT)',
        body: 'Grows plants in nutrient-enriched oxygenated water without soil. Uses 90% less water and achieves double growth rates for strawberries, lettuce, and bell peppers.'
      }
    ]
  },
  {
    id: 'smart-agriculture',
    title: 'Smart Agriculture: Drones & IoT Sensors (ڈیجیٹل فارمنگ)',
    urduTitle: 'زرعی ڈرون اور سمارٹ سینسرز',
    category: 'Smart Agriculture',
    iconName: 'Zap',
    tag: 'Future Tech',
    readTime: '4 min',
    summary: 'How agricultural spray drones, satellite soil mapping, and smart tubewell controllers are transforming Pakistan farming.',
    content: [
      {
        heading: 'Agri Spray Drones',
        body: 'Spray 1 acre of crop field in just 6 minutes with 95% uniform coverage, saving 90% water and keeping farmers safe from toxic chemical inhalation.'
      },
      {
        heading: 'Smart Tubewell Controllers',
        body: 'Remote mobile app switches for agricultural tubewells allow farmers to start and stop electric/solar tubewells remotely, saving electricity and tubewell trips.'
      }
    ]
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Wheat',
    question: 'When is the best time to sow wheat in Punjab and Sindh?',
    urduQuestion: 'پنجاب اور سندھ میں گندم کی کاشت کا بہترین وقت کون سا ہے؟',
    answer: 'The optimal sowing window is October 25 to November 20. Sowing after November 25 causes a daily yield decline of approximately 15-20 kg per acre due to terminal heat stress during grain filling.'
  },
  {
    id: 'faq-2',
    category: 'Irrigation',
    question: 'When should I give the first irrigation to wheat crop?',
    urduQuestion: 'گندم کی فصل کو پہلا پانی کب دینا چاہیے؟',
    answer: 'The first irrigation (Crown Root Initiation stage) MUST be given 20 to 25 days after sowing. Delayed first irrigation severely reduces plant tillers and final head size.'
  },
  {
    id: 'faq-3',
    category: 'Cotton',
    question: 'How can I control Pink Bollworm in cotton without excessive chemical sprays?',
    urduQuestion: 'کپاس میں گلابی سنڈی کا بغیر زیادہ سپرے کے کنٹرول کیسے ممکن ہے؟',
    answer: 'Use PB-Ropes (Pheromone mating disruptors) early at 40 days after crop emergence, install 6-8 pheromone traps per acre for pest scouting, and destroy crop residues immediately after harvest.'
  },
  {
    id: 'faq-4',
    category: 'Fertilizers',
    question: 'Is it beneficial to apply Zinc Sulfate in rice paddy fields?',
    urduQuestion: 'چاول کے کھیت میں زنک سلفیٹ ڈالنا کیوں ضروری ہے؟',
    answer: 'Yes! Pakistani flooded rice soils are 70% zinc deficient. Applying 10 kg Zinc Sulfate (33%) per acre at 10-12 days after transplanting prevents Khaira disease (rust spots) and boosts yield by 3-5 maunds.'
  },
  {
    id: 'faq-5',
    category: 'Soil',
    question: 'How do I reduce soil alkalinity and salinity in my fields?',
    urduQuestion: 'زمین میں کلر اور شور ختم کرنے کے لیے کیا کریں؟',
    answer: 'Apply Agricultural Gypsum based on soil test report recommendations, followed by deep plowing, incorporating organic compost/FYM, and growing green manure crops like Dhaincha (Sesbania).'
  },
  {
    id: 'faq-6',
    category: 'Vegetables',
    question: 'What is the main advantage of High Tunnel farming for vegetables?',
    urduQuestion: 'ٹماٹر اور کھیرا کے لیے ہائی ٹنل کے کیا فوائد ہیں؟',
    answer: 'High tunnels protect off-season vegetables (cucumber, tomato) from severe winter frost, allowing early harvest in January/February when market vegetable prices are highest.'
  },
  {
    id: 'faq-7',
    category: 'Pesticides',
    question: 'How can I prepare a bio-pesticide spray using Neem at home?',
    urduQuestion: 'گھر پر نیم سے قدرتی کیڑا مار سپرے کیسے بنائیں؟',
    answer: 'Boil 5 kg fresh crushed neem leaves in 10 liters of water for 30 minutes. Filter the liquid, add 50g mild soap bar, dilute into 100 liters water, and spray over crops for aphid and whitefly control.'
  }
];

export const AGRI_FACTS: AgriFact[] = [
  {
    id: 'fact-1',
    title: 'Indus Basin Canal System',
    fact: 'Pakistan possesses the world\'s largest contiguous irrigation canal network, stretching over 58,000 km across Punjab and Sindh.',
    urduFact: 'پاکستان کے پاس دنیا کا سب سے بڑا نہری نظام ہے جس کی لمبائی 58 ہزار کلومیٹر سے زائد ہے۔',
    source: 'WAPDA Agriculture Directorate',
    icon: 'Waves'
  },
  {
    id: 'fact-2',
    title: 'Global Basmati Supremacy',
    fact: 'Pakistan is the exclusive producer of authentic Geographical Indication (GI) tagged Super Kernel Basmati rice famous for length and natural aroma.',
    urduFact: 'پاکستان دنیا کا واحد ملک ہے جو سپر کرنل باسمتی چاول پیدا کرتا ہے جس کی خوشبو لاجواب ہے۔',
    source: 'REAP (Rice Exporters Association of Pakistan)',
    icon: 'Award'
  },
  {
    id: 'fact-3',
    title: 'Top Cotton Producer',
    fact: 'Pakistan is consistently ranked among the top 5 largest cotton producers and top 3 yarn consumers worldwide.',
    urduFact: 'پاکستان کپاس کی پیداوار میں دنیا کے پہلے 5 بڑے ممالک میں شامل ہے۔',
    source: 'APTMA',
    icon: 'Sparkles'
  },
  {
    id: 'fact-4',
    title: 'Agricultural Employment',
    fact: 'Agriculture employs ~37.4% of Pakistan\'s total labor force and contributes ~23% to the national Gross Domestic Product (GDP).',
    urduFact: 'پاکستان کی 37 فیصد آبادی براہ راست زراعت سے روزگار حاصل کرتی ہے۔',
    source: 'Pakistan Economic Survey',
    icon: 'Users'
  }
];

export const FARMING_TIPS: FarmingTip[] = [
  {
    id: 'tip-1',
    title: 'Laser Land Leveling Benefits',
    urduTitle: 'لیزر لیولنگ کا فائدہ',
    category: 'Water Saving',
    tip: 'Laser leveling your field before Rabi sowing saves up to 30% water and ensures 100% uniform germination of wheat seeds.',
    urduTip: 'گندم کی کاشت سے پہلے لیزر لیولنگ سے 30 فیصد پانی کی بچت اور یکساں اگاؤ حاصل ہوتا ہے۔',
    season: 'Rabi (Winter)'
  },
  {
    id: 'tip-2',
    title: 'Zinc Application in Paddy',
    urduTitle: 'چاول میں زنک کا استعمال',
    category: 'Fertilizer',
    tip: 'Apply 10kg Zinc Sulfate (33%) within 14 days of transplanting paddy seedlings to protect crop from rust disease.',
    urduTip: 'منجی کی منتقلی کے 14 دن کے اندر 10 کلو زنک سلفیٹ ڈالیں تا کہ برائی کا خطرہ نہ رہے۔',
    season: 'Kharif (Summer)'
  },
  {
    id: 'tip-3',
    title: 'Late Wheat Sowing Seed Adjustment',
    urduTitle: 'دیر سے کاشت پر بیج کی مقدار',
    category: 'Seed Rate',
    tip: 'If sowing wheat after November 25, increase seed rate from 45 kg to 55-60 kg per acre to compensate for reduced tiller branching.',
    urduTip: '25 نومبر کے بعد گندم بیجتے وقت شرح بیج 50 سے بڑھا کر 60 کلوگرام فی ایکڑ رکھیں۔',
    season: 'Rabi (Winter)'
  },
  {
    id: 'tip-4',
    title: 'Whitefly Trap Cropping',
    urduTitle: 'سفید مکھی سے بچاؤ',
    category: 'Pest Control',
    tip: 'Plant two rows of Okra or Sorghum around cotton fields as a natural trap crop to divert whiteflies away from main cotton bolls.',
    urduTip: 'کپاس کے گرد بھنڈی یا باجرہ کی پٹیاں لگائیں تا کہ سفید مکھی کپاس کے بجائے وہیں رک جائے۔',
    season: 'Kharif (Summer)'
  },
  {
    id: 'tip-5',
    title: 'Potato late Blight Alert',
    urduTitle: 'آلو کی بلائیٹ کا انتباہ',
    category: 'Disease Control',
    tip: 'During cold foggy cloudy winter days, spray copper-based preventive fungicide on potato crop immediately before blight outbreak.',
    urduTip: 'سردیوں میں دھند اور ابر آلود موسم کے دوران آلو پر پیشگی کاپر فنجی سائیڈ سپرے کریں۔',
    season: 'Rabi (Winter)'
  }
];

export const CROP_CALENDAR: CalendarMonth[] = [
  {
    month: 'January',
    urduMonth: 'جنوری',
    sowing: ['Spring Maize (Tunnel)', 'Cucumber (Tunnel)', 'Tomato Nursery', 'Sunflower (Early)'],
    harvesting: ['Potato (Autumn)', 'Sugarcane', 'Citrus / Kinnow', 'Spinach'],
    irrigationFocus: 'Light irrigation for wheat tillering; protect winter nursery seedlings from frost.',
    notes: 'Cover tunnel vegetables on cold frosty nights; monitor wheat for rust symptoms.'
  },
  {
    month: 'February',
    urduMonth: 'فروری',
    sowing: ['Spring Maize', 'Sunflower', 'Okra (Spring)', 'Pumpkin', 'Melon'],
    harvesting: ['Sugarcane', 'Carrot', 'Radish', 'Turnip', 'Cauliflower'],
    irrigationFocus: 'Critical 3rd irrigation for wheat booting stage.',
    notes: 'Prepare land for spring sugarcane; check maize for early leaf pests.'
  },
  {
    month: 'March',
    urduMonth: 'مارچ',
    sowing: ['Spring Sugarcane', 'Cotton (Early)', 'Moong Bean', 'Summer Vegetables'],
    harvesting: ['Barley', 'Lentil (Masoor)', 'Chickpea (Gram)', 'Mustard / Raya'],
    irrigationFocus: 'Final light watering for wheat grain filling; avoid watering during high winds.',
    notes: 'Harvest oilseed mustard when pods turn golden brown.'
  },
  {
    month: 'April',
    urduMonth: 'اپریل',
    sowing: ['Cotton (Main Sowing)', 'Rice Nursery (Early)', 'Sorghum Fodder'],
    harvesting: ['Wheat (Gandum)', 'Garlic', 'Onion (Plains)', 'Chickpea'],
    irrigationFocus: 'Land preparation for cotton and summer crops.',
    notes: 'Peak wheat harvest season across Punjab & Sindh! Ensure clean dry storage.'
  },
  {
    month: 'May',
    urduMonth: 'مئی',
    sowing: ['Cotton', 'Rice Nursery (Basmati)', 'Sesame (Til)', 'Guara'],
    harvesting: ['Wheat (Northern areas)', 'Spring Maize', 'Sunflower'],
    irrigationFocus: 'Frequent watering for young cotton plants in hot dry weather.',
    notes: 'Prepare rice nursery beds with rich manure organic soil.'
  },
  {
    month: 'June',
    urduMonth: 'جون',
    sowing: ['Rice Transplanting (Basmati & IRRI)', 'Sugarcane (Late)', 'Green Manure (Dhaincha)'],
    harvesting: ['Spring Maize', 'Early Watermelon', 'Okra (First pickings)'],
    irrigationFocus: 'Puddling fields for rice transplanting.',
    notes: 'Maintain standing water in paddy fields for 15 days after transplanting.'
  },
  {
    month: 'July',
    urduMonth: 'جولائی',
    sowing: ['Autumn Maize', 'Soybean', 'Sesame', 'Chili Transplanting'],
    harvesting: ['Early Summer Vegetables', 'Cucumber', 'Melons'],
    irrigationFocus: 'Monsoon rain water management; clean drainage channels.',
    notes: 'Inspect cotton for whitefly and Pink Bollworm infestation.'
  },
  {
    month: 'August',
    urduMonth: 'اگست',
    sowing: ['Autumn Maize', 'Cauliflower Nursery', 'Cabbage Nursery', 'Onion Nursery'],
    harvesting: ['Okra', 'Chili (First picking)', 'Bitter Gourd'],
    irrigationFocus: 'Avoid excess waterlogging in cotton during monsoon spells.',
    notes: 'Apply Zinc Sulfate to transplanted rice crops.'
  },
  {
    month: 'September',
    urduMonth: 'ستمبر',
    sowing: ['Autumn Sugarcane', 'Potato (Autumn Crop)', 'Canola / Mustard (Early)', 'Spinach'],
    harvesting: ['Cotton (1st Picking)', 'Rice (Early IRRI)', 'Sesame'],
    irrigationFocus: 'Regular irrigation for autumn potato ridges.',
    notes: 'Autumn sugarcane planting gives 20% higher sugar yield.'
  },
  {
    month: 'October',
    urduMonth: 'اکتوبر',
    sowing: ['Wheat (Early Sowing)', 'Garlic (G1 / NARC)', 'Onion Transplanting', 'Chickpea (Barani)'],
    harvesting: ['Cotton (2nd Picking)', 'Basmati Rice', 'Chili (Dry red)'],
    irrigationFocus: 'Soaking irrigation (Rauni) for wheat land preparation.',
    notes: 'Sow chickpea in Thal desert; prepare certified wheat seed.'
  },
  {
    month: 'November',
    urduMonth: 'نومبر',
    sowing: ['Wheat (Peak Sowing)', 'Barley', 'Lentil', 'Mustard', 'Carrot', 'Radish'],
    harvesting: ['Basmati Rice (Final)', 'Cotton (Final Picking)', 'Autumn Maize'],
    irrigationFocus: 'First irrigation for early sown wheat at 20-25 days.',
    notes: 'Avoid burning paddy straw! Use Happy Seeder for zero-till wheat sowing.'
  },
  {
    month: 'December',
    urduMonth: 'دسمبر',
    sowing: ['Wheat (Late Sowing)', 'Tunnel Cucumber', 'Tunnel Tomato'],
    harvesting: ['Sugarcane Milling Season', 'Potato (Autumn)', 'Turnip', 'Spinach'],
    irrigationFocus: 'Winter moisture maintenance for cold protection.',
    notes: 'Sugarcane mills start crushing season; frost protection for young crops.'
  }
];
