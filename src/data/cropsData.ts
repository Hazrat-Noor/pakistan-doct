import { Crop } from '../types';

export const CROPS_DATA: Crop[] = [
  {
    id: 'wheat',
    name: 'Wheat',
    urduName: 'گندم',
    scientificName: 'Triticum aestivum',
    family: 'Poaceae',
    category: 'Cereals',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Cool winter growing season followed by dry warm weather for grain ripening.',
    soilType: 'Loamy to clay loam with good drainage and fertility.',
    soilPh: '6.0 - 7.5',
    waterRequirements: '350 - 450 mm throughout the growing cycle.',
    irrigationMethod: 'Border strip or flood irrigation (4-5 irrigations: Crown root stage, Tillering, Booting, Flowering, Milk stage).',
    temperatureRange: '12°C to 25°C during growth; 25°C to 30°C for harvesting.',
    sowingTime: 'Mid-October to November (Punjab & Sindh).',
    harvestingTime: 'April to May.',
    seedRate: '45 - 50 kg per acre.',
    fertilizerRecommendation: '1.5 bags DAP + 2 bags Urea per acre (split application).',
    commonPests: [
      {
        name: 'Wheat Aphid (تِلا)',
        type: 'Pest',
        symptoms: 'Sucking sap from leaves and young wheat heads, causing yellowing and honey-dew mold.',
        prevention: 'Encourage natural predators like Ladybird beetles; balanced nitrogen fertilizer.',
        organicTreatment: 'Neem seed kernel extract (NSKE) spray 5% or soap solution.'
      },
      {
        name: 'Rust / Stripe Rust (کنگی)',
        type: 'Disease',
        symptoms: 'Yellowish/orange pustules arranged in linear stripes on leaves.',
        prevention: 'Use rust-resistant seed varieties (e.g. Faisalabad-08, Akbar-19, Dilkash-20).',
        organicTreatment: 'Sulfur-based biopesticide or garlic extract spray.'
      }
    ],
    organicPractices: [
      'Incorporate green manure (Dhaincha/Sesbania) prior to sowing.',
      'Apply 3-4 tons of well-decomposed Farm Yard Manure (FYM) per acre.',
      'Use Trichoderma harzianum seed treatment for root disease control.'
    ],
    nutritionalValue: 'Rich in complex carbohydrates, dietary fiber, B-complex vitamins, iron, and protein.',
    economicImportance: 'Pakistan\'s primary staple food grain, accounting for ~78% of total cereal food consumption and 1.8% of national GDP.',
    farmingTips: [
      'Avoid late sowing after November 25th as it reduces yield by 15-20 kg per acre per day delay.',
      'Ensure 1st irrigation strictly at 20-25 days after sowing (Crown Root Initiation stage).',
      'Use laser land leveling to save up to 30% irrigation water.'
    ],
    interestingFacts: [
      'Pakistan is among the top 8 wheat producers worldwide.',
      'Wheat straw (Bhoosa) is a vital winter fodder for millions of livestock across Punjab and Sindh.'
    ],
    description: 'Wheat is the backbone of Pakistan\'s agricultural economy and the staple diet for the nation.'
  },
  {
    id: 'rice',
    name: 'Rice',
    urduName: 'چاول (باسمتی)',
    scientificName: 'Oryza sativa',
    family: 'Poaceae',
    category: 'Cereals',
    season: 'Kharif (Summer)',
    imageUrl: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Hot, humid tropical to sub-tropical climate with abundant water availability.',
    soilType: 'Heavy clay or clay loam capable of retaining standing water.',
    soilPh: '5.5 - 7.0',
    waterRequirements: '1200 - 1500 mm (High water intensive crop).',
    irrigationMethod: 'Puddling followed by direct flooding / Alternate Wetting and Drying (AWD) or Drip Rice.',
    temperatureRange: '22°C to 35°C during vegetative stage.',
    sowingTime: 'Nursery in May; Transplanting in June to early July.',
    harvestingTime: 'October to November.',
    seedRate: '5 - 7 kg per acre (Basmati varieties); 8-10 kg for Coarse varieties.',
    fertilizerRecommendation: '1 bag DAP, 2 bags Urea, 1 bag Potassium Sulfate (SOP) + 10kg Zinc Sulfate (33%) per acre.',
    commonPests: [
      {
        name: 'Rice Stem Borer (سنڈی)',
        type: 'Pest',
        symptoms: 'Dead hearts in vegetative stage and white heads at flowering.',
        prevention: 'Pheromone traps (5-8 per acre); light traps; destruction of stubbles after harvest.',
        organicTreatment: 'Trichogramma egg parasitoids release & neem oil spray.'
      },
      {
        name: 'Bacterial Leaf Blight (BLB)',
        type: 'Disease',
        symptoms: 'Water-soaked lesions turning yellow/brown along leaf margins.',
        prevention: 'Avoid excess nitrogen fertilizer; use balanced potash.',
        organicTreatment: 'Copper oxychloride spray mixed with Streptocycline or Sour buttermilk extract.'
      }
    ],
    organicPractices: [
      'Duck-rice farming system for natural weed and insect control.',
      'Application of Azolla biofertilizer in flooded fields.',
      'Laser land leveling and System of Rice Intensification (SRI).'
    ],
    nutritionalValue: 'High carbohydrate content, naturally gluten-free, rich in energy and trace minerals.',
    economicImportance: 'Super Kernel Basmati rice is one of Pakistan\'s major export earners, bringing billions in foreign exchange annually.',
    farmingTips: [
      'Apply Zinc Sulfate at transplanting to avoid Khaira disease (zinc deficiency).',
      'Adopt AWD (Alternate Wetting & Drying) to cut water usage by 25% without yield loss.',
      'Transplant 25-30 day old nursery seedlings with 2-3 stems per hill.'
    ],
    interestingFacts: [
      'Pakistani Super Basmati is globally famed for its unique aroma and kernel elongation upon cooking.',
      'Kalar tract (Sheikhupura, Gujranwala, Sialkot, Narowal) produces the finest Basmati in the world.'
    ],
    description: 'Basmati Rice is Pakistan\'s prized agricultural export, known worldwide for aroma and grain length.'
  },
  {
    id: 'corn',
    name: 'Corn (Maize)',
    urduName: 'مکئی',
    scientificName: 'Zea mays',
    family: 'Poaceae',
    category: 'Cereals',
    season: 'Kharif (Summer)',
    imageUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Warm temperate to tropical conditions with good sunlight and low frost risk.',
    soilType: 'Deep, rich loamy soil with excellent organic matter and drainage.',
    soilPh: '6.0 - 7.2',
    waterRequirements: '500 - 600 mm.',
    irrigationMethod: 'Ridge and furrow irrigation.',
    temperatureRange: '18°C to 32°C.',
    sowingTime: 'Spring (Feb-Mar) and Autumn (July-Aug).',
    harvestingTime: 'May-June (Spring Maize) and Oct-Nov (Autumn Maize).',
    seedRate: '8 - 10 kg per acre (Hybrid seed).',
    fertilizerRecommendation: '1.5 bags DAP + 3 bags Urea + 1 bag Potash per acre.',
    commonPests: [
      {
        name: 'Fall Armyworm (فال آرمی ورم)',
        type: 'Pest',
        symptoms: 'Large ragged holes in leaves with sawdust-like frass in corn whorl.',
        prevention: 'Early field scouting; push-pull cropping with Desmodium.',
        organicTreatment: 'Application of sand/ash mixture in the plant whorls or Bacillus thuringiensis (Bt) spray.'
      }
    ],
    organicPractices: [
      'Intercropping with legumes like cowpea or soybean.',
      'Application of bio-char and earthworm compost (Vermicompost).'
    ],
    nutritionalValue: 'Rich in vitamins A, B, E, magnesium, phosphorus, and carotenoids like lutein.',
    economicImportance: 'Essential for livestock feed, poultry industry, starch factories, and human food.',
    farmingTips: [
      'Plant on raised ridges spaced 60-75 cm apart to avoid waterlogging at root level.',
      'Maintain plant population of ~30,000 to 32,000 plants per acre for optimal hybrid yield.'
    ],
    interestingFacts: [
      'Spring maize in Punjab yields up to 100+ maunds per acre with hybrid varieties.'
    ],
    description: 'Maize is a high-yielding cereal crop driving Pakistan\'s feed and poultry sectors.'
  },
  {
    id: 'cotton',
    name: 'Cotton',
    urduName: 'کپاس (سفید سونا)',
    scientificName: 'Gossypium hirsutum',
    family: 'Malvaceae',
    category: 'Cash Crops',
    season: 'Kharif (Summer)',
    imageUrl: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Hot, sunny dry climate during boll opening; frost-free period of 180-200 days.',
    soilType: 'Deep alluvial loam to medium black clay soils.',
    soilPh: '6.5 - 8.0',
    waterRequirements: '600 - 800 mm.',
    irrigationMethod: 'Bed and furrow irrigation.',
    temperatureRange: '25°C to 40°C.',
    sowingTime: 'April to May (Early sowing in March).',
    harvestingTime: 'September to December (multiple pickings).',
    seedRate: '6 - 8 kg per acre (Delinted seed).',
    fertilizerRecommendation: '1.5 bags DAP + 2.5 bags Urea + 1 bag SOP Potash.',
    commonPests: [
      {
        name: 'Pink Bollworm (گلابی سنڈی)',
        type: 'Pest',
        symptoms: 'Rosetted flowers, damaged bolls with lint staining.',
        prevention: 'PB-Rope mating disruption; shredding crop residue; early crop termination.',
        organicTreatment: 'Pheromone traps & release of Bracon hebetor parasites.'
      },
      {
        name: 'Whitefly (سفید مکھی)',
        type: 'Pest',
        symptoms: 'Sucks sap, spreads Cotton Leaf Curl Virus (CLCuV) causing leaf curling.',
        prevention: 'Avoid excessive nitrogen; yellow sticky traps (20 per acre).',
        organicTreatment: 'Neem-garlic-chili biopesticide spray.'
      }
    ],
    organicPractices: [
      'Integrated Pest Management (IPM) using beneficial insects.',
      'Border planting of okra or sorghum as trap crop.'
    ],
    nutritionalValue: 'Cottonseed oil is refined for edible cooking oil; cottonseed cake (Khal) is high-protein cattle feed.',
    economicImportance: 'Known as "White Gold" in Pakistan, fueling the textile industry which accounts for 60% of total national exports.',
    farmingTips: [
      'Choose CLCuV-resistant varieties like FH-142, BS-15, or MNH-1020.',
      'Avoid flood irrigation during full bloom to prevent flower drop.'
    ],
    interestingFacts: [
      'Pakistan is the 5th largest cotton producer and 3rd largest consumer globally.'
    ],
    description: 'Cotton is Pakistan\'s "White Gold" providing raw material for the textile ecosystem.'
  },
  {
    id: 'sugarcane',
    name: 'Sugarcane',
    urduName: 'گنا',
    scientificName: 'Saccharum officinarum',
    family: 'Poaceae',
    category: 'Cash Crops',
    season: 'All Seasons',
    imageUrl: 'https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Tropical to sub-tropical hot humid weather with high rainfall or assured irrigation.',
    soilType: 'Heavy loamy to clay soil rich in organic humus.',
    soilPh: '6.5 - 7.5',
    waterRequirements: '1500 - 2000 mm (Perennial 10-12 month crop).',
    irrigationMethod: 'Furrow irrigation.',
    temperatureRange: '20°C to 38°C.',
    sowingTime: 'Spring (Feb-Mar) or Autumn (Sep-Oct).',
    harvestingTime: 'November to April.',
    seedRate: '30,000 to 35,000 two-budded sets per acre (approx. 3-4 tons cane).',
    fertilizerRecommendation: '2 bags DAP + 4 bags Urea + 1 bag SOP Potash per acre.',
    commonPests: [
      {
        name: 'Sugarcane Top Borer (ٹوپ بورر)',
        type: 'Pest',
        symptoms: 'Dead heart in top shoots, bunchy top formation.',
        prevention: 'Light traps; field sanitation; resistant varieties like CPF-246.',
        organicTreatment: 'Release of Trichogramma chilonis biocontrol cards.'
      }
    ],
    organicPractices: [
      'Trash mulching between rows to conserve moisture and suppress weeds.',
      'Pressmud application from sugar mills to enrich organic soil carbon.'
    ],
    nutritionalValue: 'Source of natural sucrose, molasses, jaggery (Gur), energy, and minerals like iron and calcium.',
    economicImportance: 'Feeds Pakistan\'s 80+ sugar mills; produces refined sugar, Gur, bio-ethanol, and bagasse power.',
    farmingTips: [
      'Plant sets in deep furrows (10-12 inches) to encourage strong root hold and prevent lodging.',
      'Autumn planting yields 20-25% more sugar content and higher cane tonnage than spring planting.'
    ],
    interestingFacts: [
      'Cane bagasse is converted into eco-friendly paper and green electricity in Pakistan.'
    ],
    description: 'Sugarcane is Pakistan\'s major sugar crop, producing sugar, Gur, and industrial bio-products.'
  },
  {
    id: 'potato',
    name: 'Potato',
    urduName: 'آلو',
    scientificName: 'Solanum tuberosum',
    family: 'Solanaceae',
    category: 'Vegetables',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Cool sunlit weather with temperature below 20°C for tuber formation.',
    soilType: 'Well-drained light sandy loam rich in organic content.',
    soilPh: '5.2 - 6.5',
    waterRequirements: '400 - 500 mm.',
    irrigationMethod: 'Furrow irrigation on ridges.',
    temperatureRange: '15°C to 22°C (tuber initiation stops above 28°C).',
    sowingTime: 'Autumn crop (Sept-Oct); Spring crop (Jan-Feb).',
    harvestingTime: 'December to February (Autumn); April to May (Spring).',
    seedRate: '800 - 1000 kg tuber seed per acre.',
    fertilizerRecommendation: '2 bags DAP + 3 bags Urea + 2 bags Potash per acre.',
    commonPests: [
      {
        name: 'Late Blight (لیٹ بلائیٹ)',
        type: 'Disease',
        symptoms: 'Water-soaked dark spots on leaves with white fungal growth on undersides during humid cold weather.',
        prevention: 'Prophylactic application of copper fungicides; certified disease-free seed tubers.',
        organicTreatment: 'Bordeaux mixture spray (1%) or Trichoderma viride application.'
      }
    ],
    organicPractices: [
      'Earthing up (Mitti charhana) twice to protect tubers from sunlight and tuber moth.',
      'Straw mulching to maintain low soil temperature.'
    ],
    nutritionalValue: 'Rich in Vitamin C, potassium, Vitamin B6, complex carbohydrates, and resistant starch.',
    economicImportance: 'High-value cash vegetable; Okara, Sahiwal, Chiniot, and Swat are prime production centers.',
    farmingTips: [
      'Always treat seed tubers with fungicide or bio-fungicide before planting.',
      'Stop irrigation 10-12 days prior to harvest to toughen tuber skin.'
    ],
    interestingFacts: [
      'Okara and Sahiwal in Punjab are known as the Potato Hub of Pakistan.'
    ],
    description: 'Potato is a high-demand vegetable crop providing high caloric food security across Pakistan.'
  },
  {
    id: 'tomato',
    name: 'Tomato',
    urduName: 'ٹماٹر',
    scientificName: 'Solanum lycopersicum',
    family: 'Solanaceae',
    category: 'Vegetables',
    season: 'All Seasons',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Warm sunny weather with moderate humidity.',
    soilType: 'Deep, fertile sandy loam with high organic carbon.',
    soilPh: '6.0 - 7.0',
    waterRequirements: '500 - 600 mm.',
    irrigationMethod: 'Drip or Furrow irrigation.',
    temperatureRange: '18°C to 28°C.',
    sowingTime: 'Oct-Nov (Plains nursery); Feb-March (Hills nursery).',
    harvestingTime: 'February to May (Plains); July to October (Hills/Swat/Quetta).',
    seedRate: '80 - 100 grams per acre (Hybrid seeds).',
    fertilizerRecommendation: '1.5 bags DAP + 2 bags Urea + 1.5 bags Potash per acre.',
    commonPests: [
      {
        name: 'Fruit Borer (فروٹ بورر)',
        type: 'Pest',
        symptoms: 'Caterpillars bore holes inside tomato fruits, making them unfit for market.',
        prevention: 'Pheromone traps; marigold trap cropping around tomato field.',
        organicTreatment: 'Bacillus thuringiensis (Bt) or Neem oil 10,000 ppm spray.'
      }
    ],
    organicPractices: [
      'Staking with bamboo poles and twine to elevate fruit off moist ground.',
      'Compost tea soil drenches.'
    ],
    nutritionalValue: 'Packed with Lycopene antioxidant, Vitamin C, Vitamin A, and potassium.',
    economicImportance: 'Essential kitchen ingredient for Pakistani curry bases (Salay-na / Karahi).',
    farmingTips: [
      'Use high-tunnel plastic structures for off-season tomato production in winter.',
      'Ensure regular uniform irrigation to prevent Blossom End Rot and fruit cracking.'
    ],
    interestingFacts: [
      'Tunnel farming of tomatoes in Punjab provides 3x higher income per acre than traditional field crops.'
    ],
    description: 'Tomato is an indispensable culinary vegetable grown extensively in tunnels and open fields.'
  },
  {
    id: 'onion',
    name: 'Onion',
    urduName: 'پیاز',
    scientificName: 'Allium cepa',
    family: 'Amaryllidaceae',
    category: 'Vegetables',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Mild cool climate during early growth and bright warm dry weather for bulb maturing.',
    soilType: 'Friable sandy loam to silt loam with good humus.',
    soilPh: '6.0 - 6.8',
    waterRequirements: '350 - 450 mm.',
    irrigationMethod: 'Drip or short furrow irrigation.',
    temperatureRange: '13°C to 24°C.',
    sowingTime: 'Nursery Oct-Nov; Transplanting Dec-Jan (Punjab/Sindh); July-Aug (Balochistan).',
    harvestingTime: 'April to June (Plains); Oct-Nov (Balochistan).',
    seedRate: '3 - 4 kg per acre.',
    fertilizerRecommendation: '1.5 bags DAP + 2 bags Urea + 1 bag Potash + 10kg Sulfur per acre.',
    commonPests: [
      {
        name: 'Onion Thrips (تھریپس)',
        type: 'Pest',
        symptoms: 'Silvery patches on leaves with black specks, leaf curling and drying.',
        prevention: 'Blue or yellow sticky traps; sprinkler overhead rinsing.',
        organicTreatment: 'Potassium soap spray or neem extract formulation.'
      }
    ],
    organicPractices: [
      'Wood ash broadcasting over young crop foliage.',
      'Mulching with dry paddy straw.'
    ],
    nutritionalValue: 'Rich in Quercetin antioxidant, sulfur compounds, Vitamin C, and chromium.',
    economicImportance: 'Top 3 vegetable in Pakistan; Sindh (Hyderabad, Swat, Mastung) supplies major national market.',
    farmingTips: [
      'Stop watering 15 days before harvest when 50% of plant tops fall over (neck collapse).',
      'Cure harvested bulbs under shade for 4-5 days before storage.'
    ],
    interestingFacts: [
      'Pakistan consumes over 2 million tons of onions annually in daily culinary cooking.'
    ],
    description: 'Onion is the core bulb vegetable in every Pakistani household dish.'
  },
  {
    id: 'quinoa',
    name: 'Quinoa',
    urduName: 'کینوا (سپر فوڈ)',
    scientificName: 'Chenopodium quinoa',
    family: 'Amaranthaceae',
    category: 'Cereals',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Highly drought-tolerant, frost-resistant and salt-tolerant climate.',
    soilType: 'Marginal, sandy or saline soils where other crops struggle.',
    soilPh: '6.0 - 8.5 (Tolerates high salinity)',
    waterRequirements: '200 - 300 mm (Very low water user).',
    irrigationMethod: 'Sprinkler or light surface furrow (2-3 irrigations total).',
    temperatureRange: '8°C to 25°C.',
    sowingTime: 'November.',
    harvestingTime: 'March to April.',
    seedRate: '2 - 3 kg per acre.',
    fertilizerRecommendation: '1 bag DAP + 1 bag Urea per acre.',
    commonPests: [
      {
        name: 'Downy Mildew',
        type: 'Disease',
        symptoms: 'Pale green/yellow spots on top leaf surface with grayish bloom below.',
        prevention: 'Wide row spacing for ventilation; avoid over-watering.',
        organicTreatment: 'Baking soda (sodium bicarbonate) spray with bio-soap.'
      }
    ],
    organicPractices: [
      'Ideal crop for organic cultivation without chemical pesticides.',
      'Saponin washing post-harvest to remove bitter outer seed coat.'
    ],
    nutritionalValue: 'Complete plant protein containing all 9 essential amino acids, iron, magnesium, and zero gluten.',
    economicImportance: 'Emerging climate-resilient superfood in Pakistan promoted by UAF (University of Agriculture Faisalabad).',
    farmingTips: [
      'Sow seeds shallow (0.5 to 1 cm deep) in moist soil beds.',
      'Wash harvested grain thoroughly in water to remove saponin before consumption.'
    ],
    interestingFacts: [
      'Quinoa can thrive in saline salt-affected soils of southern Punjab and Sindh.'
    ],
    description: 'Quinoa is a climate-smart, highly nutritious superfood grain adapted for Pakistani saline soils.'
  },
  {
    id: 'sunflower',
    name: 'Sunflower',
    urduName: 'سورج مکھی',
    scientificName: 'Helianthus annuus',
    family: 'Asteraceae',
    category: 'Oilseed Crops',
    season: 'Zaid (Spring/Autumn)',
    imageUrl: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Warm sunlit conditions with well-distributed moisture during flower seed fill.',
    soilType: 'Deep, fertile well-drained loams.',
    soilPh: '6.5 - 8.0',
    waterRequirements: '350 - 450 mm.',
    irrigationMethod: 'Ridge and furrow irrigation.',
    temperatureRange: '18°C to 30°C.',
    sowingTime: 'January to February (Spring) and August (Autumn).',
    harvestingTime: 'May to June (Spring crop).',
    seedRate: '2 - 2.5 kg per acre (Hybrid seeds).',
    fertilizerRecommendation: '1.5 bags DAP + 2 bags Urea + 1 bag SOP Potash + Sulfur 10kg.',
    commonPests: [
      {
        name: 'Head Rot (Sclerotinia)',
        type: 'Disease',
        symptoms: 'Water-soaked brownish spots on back of sunflower head turning soft and moldy.',
        prevention: 'Wide plant spacing; avoiding excessive irrigation during flowering.',
        organicTreatment: 'Bio-fungicide drenching with Trichoderma.'
      }
    ],
    organicPractices: [
      'Beehive placement in field to boost honeybee cross-pollination and seed set.',
      'Crop rotation with legumes.'
    ],
    nutritionalValue: 'Oil contains 40-45% premium edible oil rich in unsaturated fatty acids (Linoleic acid) and Vitamin E.',
    economicImportance: 'Crucial edible oilseed crop reducing Pakistan\'s heavy import bill on palm oil.',
    farmingTips: [
      'Ensure field has honeybee presence during flowering stage to guarantee seed setting.',
      'Harvest when back of flower head turns yellow-brown and stem leaves dry out.'
    ],
    interestingFacts: [
      'Sunflower heads track the sun from east to west every day (heliotropism).'
    ],
    description: 'Sunflower is a major edible oil crop helping lower Pakistan\'s cooking oil import dependency.'
  },
  {
    id: 'chickpea',
    name: 'Chickpea (Gram)',
    urduName: 'چنا (چھولے)',
    scientificName: 'Cicer arietinum',
    family: 'Fabaceae',
    category: 'Pulses',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Cool dry climate; highly rainfed resilient in Thal desert region.',
    soilType: 'Light sandy loam to medium clay loams with neutral reaction.',
    soilPh: '6.0 - 7.8',
    waterRequirements: '200 - 250 mm (Extremely rainfed friendly).',
    irrigationMethod: 'Rainfed (Barani) or 1-2 supplemental sprinkler irrigations.',
    temperatureRange: '10°C to 25°C.',
    sowingTime: 'October to November.',
    harvestingTime: 'March to April.',
    seedRate: '25 - 30 kg per acre (Desi type); 35-40 kg (Kabul type).',
    fertilizerRecommendation: '1 bag DAP + 12 kg Urea per acre at sowing.',
    commonPests: [
      {
        name: 'Gram Pod Borer (سنڈی)',
        type: 'Pest',
        symptoms: 'Caterpillar bores circular holes in young chickpea pods and devours seeds inside.',
        prevention: 'Bird perches (10-15 per acre) for natural bird feeding on larvae; pheromone traps.',
        organicTreatment: 'NPV (Nuclear Polyhedrosis Virus) or Neem seed extract spray.'
      },
      {
        name: 'Chickpea Blight (Ascochyta)',
        type: 'Disease',
        symptoms: 'Brown dark circular spots on leaves and stems causing sudden plant wilting.',
        prevention: 'Cultivate resistant varieties (Bhakkar-2011, Balksar-2000).',
        organicTreatment: 'Seed treatment with Trichoderma viride.'
      }
    ],
    organicPractices: [
      'Inoculation of Rhizobium culture on seeds before sowing for biological nitrogen fixation.',
      'Zero-tillage sowing into moisture conserved soil.'
    ],
    nutritionalValue: 'Packed with 20-22% plant protein, dietary fiber, iron, folate, and low glycemic carbohydrates.',
    economicImportance: 'Dominant pulse crop in Thal desert (Bhakkar, Layyah, Khushab, Mianwali).',
    farmingTips: [
      'Nipping (pinching off top shoots at 30-45 days) encourages bushy lateral branching and 20% more pods.',
      'Do not over-water, as waterlogging causes severe root rot.'
    ],
    interestingFacts: [
      'Chickpea roots naturally fertilize the soil by fixing up to 40kg atmospheric Nitrogen per acre.'
    ],
    description: 'Chickpea (Gram) is the king of pulses in Pakistan, thriving in rainfed barani Thal regions.'
  },
  {
    id: 'mustard',
    name: 'Mustard (Raya / Canola)',
    urduName: 'سرسوں / رایا',
    scientificName: 'Brassica juncea / Brassica napus',
    family: 'Brassicaceae',
    category: 'Oilseed Crops',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Sub-tropical cool climate with sunny winter days.',
    soilType: 'Loam to sandy loam soils.',
    soilPh: '6.0 - 7.5',
    waterRequirements: '250 - 300 mm.',
    irrigationMethod: 'Border or furrow irrigation (2-3 irrigations).',
    temperatureRange: '10°C to 25°C.',
    sowingTime: 'October.',
    harvestingTime: 'February to March.',
    seedRate: '1.5 - 2 kg per acre.',
    fertilizerRecommendation: '1 bag DAP + 1.5 bags Urea + 10kg Ammonium Sulfate (Sulfur).',
    commonPests: [
      {
        name: 'Mustard Aphid (تِلا)',
        type: 'Pest',
        symptoms: 'Dense clusters of green aphids on flower stalks and seed pods sucking sap.',
        prevention: 'Early sowing in early October avoids peak aphid window.',
        organicTreatment: 'Tobacco tea spray or insecticidal soap solution.'
      }
    ],
    organicPractices: [
      'Young green tender leaves harvested as traditional "Sarson ka Saag".',
      'Mustard oil cake (Khali) used as organic soil fertilizer and cattle feed.'
    ],
    nutritionalValue: 'Rich in Omega-3 fatty acids, mustard oil, and Saag greens packed with vitamins A, C, and iron.',
    economicImportance: 'Traditional winter green vegetable (Sarson ka Saag) and key local cooking oil source.',
    farmingTips: [
      'Ensure adequate Sulfur fertilization to boost seed oil content by 3-5%.',
      'Harvest early morning when pods are moist to prevent seed shattering loss.'
    ],
    interestingFacts: [
      'Bright yellow blossoming mustard fields are an iconic winter landscape across Punjab.'
    ],
    description: 'Mustard gives Pakistan the beloved winter staple "Sarson ka Saag" and high quality edible oil.'
  },
  {
    id: 'sugarcane_extra_okra',
    name: 'Okra (Ladyfinger)',
    urduName: 'بھنڈی',
    scientificName: 'Abelmoschus esculentus',
    family: 'Malvaceae',
    category: 'Vegetables',
    season: 'Kharif (Summer)',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Warm tropical to sub-tropical moist climate.',
    soilType: 'Loose loamy soil with rich organic matter.',
    soilPh: '6.0 - 6.8',
    waterRequirements: '400 - 500 mm.',
    irrigationMethod: 'Ridge and furrow irrigation every 5-7 days.',
    temperatureRange: '22°C to 35°C.',
    sowingTime: 'Feb-Mar (Spring) and May-June (Summer).',
    harvestingTime: '45-50 days post sowing (continuous picking every 2 days).',
    seedRate: '10 - 12 kg per acre (Spring); 5-6 kg (Summer).',
    fertilizerRecommendation: '1 bag DAP + 1.5 bags Urea per acre.',
    commonPests: [
      {
        name: 'Yellow Vein Mosaic Virus (YVMV)',
        type: 'Disease',
        symptoms: 'Yellowing of leaf veins turning whole leaf golden yellow; small stunted pods.',
        prevention: 'Whitefly pest control; plant YVMV-tolerant hybrids like Sabz Pari.',
        organicTreatment: 'Neem-garlic spray against whitefly vector.'
      }
    ],
    organicPractices: [
      'Soaking seeds in warm water or aloe vera gel for 12 hours prior to planting for rapid germination.',
      'Mulching with organic compost.'
    ],
    nutritionalValue: 'High soluble fiber (mucilage), Vitamin C, Vitamin K, folate, and anti-diabetic compounds.',
    economicImportance: 'Popular quick-return summer cash crop for smallholder vegetable farmers.',
    farmingTips: [
      'Harvest tender pods every 2 days to encourage continuous new flower initiation.',
      'Use hand gloves during harvesting to protect against skin itching trichomes.'
    ],
    interestingFacts: [
      'Okra mucilage is naturally used to clarify raw sugarcane juice during artisan Gur making.'
    ],
    description: 'Okra is a popular summer vegetable with high yield and frequent harvesting returns.'
  },
  {
    id: 'garlic',
    name: 'Garlic',
    urduName: 'لہسن (این۱ / جی۱)',
    scientificName: 'Allium sativum',
    family: 'Amaryllidaceae',
    category: 'Vegetables',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Cool moist winter during early vegetative growth and warm dry weather for bulb development.',
    soilType: 'Rich loamy soil with abundant organic humus and good drainage.',
    soilPh: '6.0 - 7.0',
    waterRequirements: '350 - 400 mm.',
    irrigationMethod: 'Bed or short furrow irrigation.',
    temperatureRange: '12°C to 24°C.',
    sowingTime: 'October.',
    harvestingTime: 'April to May.',
    seedRate: '250 - 300 kg garlic cloves per acre (or 500kg for G1 variety).',
    fertilizerRecommendation: '2 bags DAP + 2.5 bags Urea + 1.5 bags Potash + 10kg Sulfur per acre.',
    commonPests: [
      {
        name: 'Purple Blotch',
        type: 'Disease',
        symptoms: 'Purple/brown oval spots on leaves causing leaf tip drying.',
        prevention: 'Crop rotation; avoid overhead irrigation.',
        organicTreatment: 'Trichoderma viride foliage spray.'
      }
    ],
    organicPractices: [
      'Intercropping with mint or cilantro.',
      'Heavy cow manure bed preparation.'
    ],
    nutritionalValue: 'Contains Allicin compound, natural antibiotic properties, lowers blood cholesterol and blood pressure.',
    economicImportance: 'High commercial profitability, especially with high-yielding NARC-G1 garlic variety.',
    farmingTips: [
      'Plant individual healthy cloves upright with pointed tips facing upwards.',
      'Withhold irrigation 2 weeks before harvest to prevent bulb skin rot during storage.'
    ],
    interestingFacts: [
      'NARC-G1 garlic developed by PARC produces giant bulbs yielding up to 200 maunds per acre!'
    ],
    description: 'Garlic is a high-value spice vegetable with immense culinary and medicinal value in Pakistan.'
  },
  {
    id: 'chili',
    name: 'Chili (Red Pepper)',
    urduName: 'سرخ مرچ',
    scientificName: 'Capsicum annuum',
    family: 'Solanaceae',
    category: 'Vegetables',
    season: 'Kharif (Summer)',
    imageUrl: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Warm tropical to sub-tropical climate with moderate rainfall.',
    soilType: 'Well-drained light loams and silt loams.',
    soilPh: '6.0 - 7.0',
    waterRequirements: '450 - 550 mm.',
    irrigationMethod: 'Ridge and furrow / Drip irrigation.',
    temperatureRange: '20°C to 32°C.',
    sowingTime: 'Nursery Jan-Feb; Transplanting Feb-March (Kunri / Sindh).',
    harvestingTime: 'June to October (multiple pickings).',
    seedRate: '200 - 250 grams per acre (Hybrid).',
    fertilizerRecommendation: '1.5 bags DAP + 2 bags Urea + 1.5 bags Potash per acre.',
    commonPests: [
      {
        name: 'Chili Leaf Curl Virus (ChLCV)',
        type: 'Disease',
        symptoms: 'Downward and upward curling of leaves, stunting of plants and small puckered fruits.',
        prevention: 'Manage whitefly vector with sticky traps and border crops.',
        organicTreatment: 'Ferment sour milk/whey spray 10% solution.'
      }
    ],
    organicPractices: [
      'Sun-drying on clean elevated wire racks or polythene sheets to avoid Aflatoxin contamination.',
      'Compost and vermicompost soil feeding.'
    ],
    nutritionalValue: 'Capsaicin compound, Vitamin C (higher than oranges), Vitamin A, and antioxidants.',
    economicImportance: 'Kunri in Sindh is known as the Chili Capital of Asia, exporting dried red chillies globally.',
    farmingTips: [
      'Dry harvested red chillies on clean tarpaulins away from soil moisture to avoid Aflatoxin fungus.',
      'Maintain regular light waterings during flowering to stop bloom drop.'
    ],
    interestingFacts: [
      'Kunri (Umerkot, Sindh) accounts for over 85% of red chili production in Pakistan.'
    ],
    description: 'Chili is the fiery spice crop centered in Sindh\'s famous Kunri market.'
  },
  {
    id: 'barley',
    name: 'Barley',
    urduName: 'جَو (طبی فائدہ)',
    scientificName: 'Hordeum vulgare',
    family: 'Poaceae',
    category: 'Cereals',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Cool dry climate; highly tolerant of drought and alkaline soils.',
    soilType: 'Light sandy loams, saline or sodic soils.',
    soilPh: '6.5 - 8.5',
    waterRequirements: '200 - 250 mm.',
    irrigationMethod: 'Flood or border irrigation (2 irrigations).',
    temperatureRange: '10°C to 22°C.',
    sowingTime: 'October to November.',
    harvestingTime: 'March to April.',
    seedRate: '30 - 35 kg per acre.',
    fertilizerRecommendation: '1 bag DAP + 1 bag Urea per acre.',
    commonPests: [
      {
        name: 'Covered Smut',
        type: 'Disease',
        symptoms: 'Black spore masses replacing seed grains inside head.',
        prevention: 'Seed treatment with bio-fungicide or copper sulfate solution.',
        organicTreatment: 'Hot water seed soak treatment before sowing.'
      }
    ],
    organicPractices: [
      'Prophetic medicine crop (Talbina preparation).',
      'Low chemical input farming.'
    ],
    nutritionalValue: 'High Beta-Glucan soluble fiber, lowers cholesterol, rich in selenium, copper, and B vitamins.',
    economicImportance: 'Used for health food (Talbina porridge), barley water, livestock fodder, and malt.',
    farmingTips: [
      'Barley requires 50% less water than wheat, making it ideal for water-scarce districts.',
      'Sow early in November for optimal tillering.'
    ],
    interestingFacts: [
      'Barley is one of the oldest cultivated grains in ancient Indus Valley Civilization (Mohenjo-daro).'
    ],
    description: 'Barley is a sunnah health grain with supreme drought tolerance and low water footprint.'
  },
  {
    id: 'lentil',
    name: 'Lentil (Masoor)',
    urduName: 'مسور (دال)',
    scientificName: 'Lens culinaris',
    family: 'Fabaceae',
    category: 'Pulses',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1515543904379-3d757afe72e3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Cool winter climate with light rain.',
    soilType: 'Alluvial loams and well-drained silt soils.',
    soilPh: '6.0 - 7.5',
    waterRequirements: '200 - 250 mm.',
    irrigationMethod: 'Barani / 1-2 supplemental surface waterings.',
    temperatureRange: '12°C to 24°C.',
    sowingTime: 'October to November.',
    harvestingTime: 'March to April.',
    seedRate: '12 - 15 kg per acre.',
    fertilizerRecommendation: '1 bag DAP at sowing time.',
    commonPests: [
      {
        name: 'Lentil Rust',
        type: 'Disease',
        symptoms: 'Rust-colored pustules on leaf underside causing early defoliation.',
        prevention: 'Use certified resistant seed lines (Masoor-2004, Markaz-09).',
        organicTreatment: 'Sulfur dust or neem leaf decoction spray.'
      }
    ],
    organicPractices: [
      'Biological Nitrogen fixation enriches soil for succeeding summer crops.',
      'Zero till sowing in paddy fields.'
    ],
    nutritionalValue: 'High protein (25%), dietary iron, zinc, potassium, and slow-release starch.',
    economicImportance: 'Essential household pulse consumed nationwide as Daal Masoor.',
    farmingTips: [
      'Treat seed with Rhizobium bio-fertilizers before sowing to maximize nitrogen nodules.',
      'Harvest when lower pods turn golden brown to avoid pod shattering.'
    ],
    interestingFacts: [
      'Lentil requires minimal synthetic fertilizers because its root nodules produce their own urea.'
    ],
    description: 'Lentil (Daal Masoor) is an essential protein pulse crop enriching both human diets and agricultural soil.'
  },
  {
    id: 'soybean',
    name: 'Soybean',
    urduName: 'سویا بین',
    scientificName: 'Glycine max',
    family: 'Fabaceae',
    category: 'Oilseed Crops',
    season: 'Kharif (Summer)',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Warm moist climate with adequate rain during pod formation.',
    soilType: 'Deep, well-drained fertile loams.',
    soilPh: '6.0 - 7.0',
    waterRequirements: '450 - 500 mm.',
    irrigationMethod: 'Ridge or furrow irrigation.',
    temperatureRange: '20°C to 30°C.',
    sowingTime: 'July.',
    harvestingTime: 'October to November.',
    seedRate: '25 - 30 kg per acre.',
    fertilizerRecommendation: '1 bag DAP + 0.5 bag Urea + 1 bag Potash per acre.',
    commonPests: [
      {
        name: 'Stem Fly',
        type: 'Pest',
        symptoms: 'Maggots tunnel into stems causing wilted plant tops.',
        prevention: 'Intercropping with maize; seed treatment.',
        organicTreatment: 'Neem spray at early vegetative stage.'
      }
    ],
    organicPractices: [
      'Rhizobium japonicum inoculation on seed.',
      'Green manure incorporation.'
    ],
    nutritionalValue: 'Contains 40% protein and 20% high quality oil, rich in lecithin and isoflavones.',
    economicImportance: 'High potential to substitute poultry feed soybean meal imports in Pakistan.',
    farmingTips: [
      'Inoculate seeds with specific Bradyrhizobium culture prior to planting.',
      'Keep field weed-free during first 30 days.'
    ],
    interestingFacts: [
      'Soybean has the highest protein density of any commercial crop grown on earth.'
    ],
    description: 'Soybean is a dual-purpose high-protein and oilseed crop with huge industrial potential.'
  },
  {
    id: 'cucumber',
    name: 'Cucumber',
    urduName: 'کھیرا (ٹنل فارمنگ)',
    scientificName: 'Cucumis sativus',
    family: 'Cucurbitaceae',
    category: 'Vegetables',
    season: 'Zaid (Spring/Autumn)',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Warm frost-free weather; highly successful in high/walk-in plastic tunnels.',
    soilType: 'Rich sandy loam well supplied with organic matter.',
    soilPh: '6.0 - 7.0',
    waterRequirements: '350 - 450 mm.',
    irrigationMethod: 'Drip irrigation with fertigation.',
    temperatureRange: '20°C to 30°C.',
    sowingTime: 'Nov-Dec (Tunnel); Feb-Mar (Open field).',
    harvestingTime: '35-40 days after sowing (rapid continuous harvest).',
    seedRate: '150 - 200 grams per acre (Parthenocarpic hybrid).',
    fertilizerRecommendation: '1.5 bags DAP + 2 bags Urea + 1.5 bags Potash.',
    commonPests: [
      {
        name: 'Powdery Mildew',
        type: 'Disease',
        symptoms: 'White powdery coating over top leaf surfaces.',
        prevention: 'Good air circulation in tunnels; avoid humidity stagnancy.',
        organicTreatment: 'Potassium bicarbonate or milk whey spray (1:9 ratio).'
      }
    ],
    organicPractices: [
      'Vertical trellising using plastic string wire systems.',
      'Bee-attracting border flowers.'
    ],
    nutritionalValue: '95% water content, rich in silica, potassium, Vitamin K, and hydration minerals.',
    economicImportance: 'Top commercial tunnel farming crop yielding steady daily cash income.',
    farmingTips: [
      'Use Parthenocarpic (self-fruiting) hybrid seeds inside closed plastic tunnels.',
      'Harvest fruits early morning when crisp and green.'
    ],
    interestingFacts: [
      'Tunnel cucumbers yield up to 40 tons per acre compared to 8 tons in traditional fields.'
    ],
    description: 'Cucumber is the star crop of high-efficiency tunnel farming in Punjab.'
  },
  {
    id: 'pumpkin',
    name: 'Pumpkin / Gourd',
    urduName: 'میٹھا کدو / حلوہ کدو',
    scientificName: 'Cucurbita moschata',
    family: 'Cucurbitaceae',
    category: 'Vegetables',
    season: 'Kharif (Summer)',
    imageUrl: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1508313880080-c4bef0730395?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Warm sunny weather with long summer days.',
    soilType: 'Deep fertile sandy loams.',
    soilPh: '6.0 - 7.5',
    waterRequirements: '400 - 500 mm.',
    irrigationMethod: 'Wide channel furrow irrigation.',
    temperatureRange: '22°C to 35°C.',
    sowingTime: 'February to March & June to July.',
    harvestingTime: '80-90 days after sowing.',
    seedRate: '1 - 1.5 kg per acre.',
    fertilizerRecommendation: '1 bag DAP + 1.5 bags Urea + 1 bag Potash.',
    commonPests: [
      {
        name: 'Fruit Fly (پھل کی مکھی)',
        type: 'Pest',
        symptoms: 'Flies lay eggs inside tender young fruits, maggots spoil fruit flesh.',
        prevention: 'Pheromone protein bait traps (ME traps 6-8 per acre).',
        organicTreatment: 'Neem-oil spray and destroyed punctured fruits.'
      }
    ],
    organicPractices: [
      'Mound or pit planting with heavy rotten farmyard manure.',
      'Vine training over dry tree branches.'
    ],
    nutritionalValue: 'Packed with Beta-Carotene (Vitamin A), zinc in seeds, dietary fiber, and antioxidants.',
    economicImportance: 'Long shelf-life vegetable suitable for transport across distant Pakistani markets.',
    farmingTips: [
      'Place wooden boards or dry straw under developing large pumpkins to keep them off moist soil.',
      'Harvest with a short length of stem attached to increase storage life.'
    ],
    interestingFacts: [
      'Pumpkin seeds (Maghaz) are traditional brain-boosting winter dry fruits in Pakistan.'
    ],
    description: 'Pumpkin is a durable, vitamin-A rich vegetable with long post-harvest shelf life.'
  },
  {
    id: 'spinach',
    name: 'Spinach',
    urduName: 'پالک',
    scientificName: 'Spinacia oleracea',
    family: 'Amaranthaceae',
    category: 'Vegetables',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Cool moist weather; highly frost resistant.',
    soilType: 'Fertile silt loam to clay loam rich in organic matter.',
    soilPh: '6.5 - 7.5',
    waterRequirements: '250 - 300 mm.',
    irrigationMethod: 'Bed flooding or overhead sprinkler (frequent light watering).',
    temperatureRange: '10°C to 20°C.',
    sowingTime: 'September to November (staggered sowings for continuous yield).',
    harvestingTime: '25-30 days post sowing (multiple foliage cuttings).',
    seedRate: '8 - 10 kg per acre.',
    fertilizerRecommendation: '1 bag DAP + 1.5 bags Urea (split after each cutting).',
    commonPests: [
      {
        name: 'Leaf Miner',
        type: 'Pest',
        symptoms: 'Serpentine white trails mined through leaf blades.',
        prevention: 'Yellow sticky traps; immediate leaf removal.',
        organicTreatment: 'Neem seed kernel extract spray.'
      }
    ],
    organicPractices: [
      'Vermicompost top-dressing after every leaf harvest cutting.',
      'Organic compost tea application.'
    ],
    nutritionalValue: 'Exceptional source of iron, calcium, folate, Vitamin A, C, and K.',
    economicImportance: 'Popular quick-growing leafy green staple (Palak Gosht / Palak Paneer).',
    farmingTips: [
      'Apply light nitrogen top-dressing right after each leaf cutting to trigger rapid regrow.',
      'Sow seeds in staggered 15-day intervals for non-stop market supply.'
    ],
    interestingFacts: [
      'Spinach yields 4 to 6 successive leaf cuttings from a single planting in winter.'
    ],
    description: 'Spinach is the nutrient-dense leafy green providing quick multi-harvest returns.'
  },
  {
    id: 'cabbage',
    name: 'Cabbage',
    urduName: 'بند گوبھی',
    scientificName: 'Brassica oleracea var. capitata',
    family: 'Brassicaceae',
    category: 'Vegetables',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Cool moist weather with uniform temperatures.',
    soilType: 'Well-drained rich loams with high humus.',
    soilPh: '6.0 - 6.8',
    waterRequirements: '350 - 400 mm.',
    irrigationMethod: 'Furrow irrigation.',
    temperatureRange: '12°C to 20°C.',
    sowingTime: 'Nursery Aug-Sept; Transplanting Sept-Oct.',
    harvestingTime: 'December to February.',
    seedRate: '200 - 250 grams per acre (Hybrid).',
    fertilizerRecommendation: '1.5 bags DAP + 2 bags Urea + 1 bag Potash per acre.',
    commonPests: [
      {
        name: 'Diamondback Moth (DBM)',
        type: 'Pest',
        symptoms: 'Small green caterpillars chew window-like holes in foliage.',
        prevention: 'Mustard trap crop borders; pheromone traps.',
        organicTreatment: 'Bt (Bacillus thuringiensis) biopesticide spray.'
      }
    ],
    organicPractices: [
      'Intercropping with garlic or onion to deter moths.',
      'Heavy organic compost application.'
    ],
    nutritionalValue: 'Rich in Vitamin C, Vitamin K, dietary fiber, sulforaphane, and gut prebiotic compounds.',
    economicImportance: 'Widely used in salads, Chinese Pakistani street food, and winter vegetable curries.',
    farmingTips: [
      'Maintain steady soil moisture; irregular irrigation causes firm cabbage heads to split open.',
      'Harvest when heads feel firm and solid when pressed by hand.'
    ],
    interestingFacts: [
      'A compact cabbage head is actually a giant dense terminal leaf bud.'
    ],
    description: 'Cabbage is a cold-hardy head vegetable essential for fresh salads and winter cooking.'
  },
  {
    id: 'cauliflower',
    name: 'Cauliflower',
    urduName: 'پھول گوبھی',
    scientificName: 'Brassica oleracea var. botrytis',
    family: 'Brassicaceae',
    category: 'Vegetables',
    season: 'Rabi (Winter)',
    imageUrl: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80',
    suitableClimate: 'Cool humid climate; sensitive to hot dry spells.',
    soilType: 'Deep fertile loam rich in organic matter and Boron.',
    soilPh: '6.0 - 7.0',
    waterRequirements: '350 - 400 mm.',
    irrigationMethod: 'Furrow irrigation.',
    temperatureRange: '15°C to 22°C (curd initiation requires cool temperatures).',
    sowingTime: 'Nursery July-August (Early), Sept-Oct (Late).',
    harvestingTime: 'October to March (depending on early/late variety).',
    seedRate: '250 grams per acre.',
    fertilizerRecommendation: '1.5 bags DAP + 2.5 bags Urea + 1 bag Potash + 2kg Borax per acre.',
    commonPests: [
      {
        name: 'Hollow Stem (Boron Deficiency)',
        type: 'Disease',
        symptoms: 'Stem center becomes hollow and curd turns brownish.',
        prevention: 'Apply Borax (2kg/acre) in soil or foliar spray.',
        organicTreatment: 'Bio-boron spray and compost tea.'
      }
    ],
    organicPractices: [
      'Blanching (tying outer leaves over the curd) to protect white curd from turning yellow in sun.',
      'Neem oil foliar sprays.'
    ],
    nutritionalValue: 'High in Vitamin C, folate, choline, glucosinolates, and fiber with low calories.',
    economicImportance: 'High commercial cash returns in winter vegetable hubs of Sheikhupura and Gujranwala.',
    farmingTips: [
      'Perform blanching (cover curd with leaves 4-5 days before harvest) to keep curds snow-white.',
      'Ensure Boron micronutrient is present in soil to prevent hollow stem disease.'
    ],
    interestingFacts: [
      'The edible white "flower" of cauliflower is technically an undeveloped flower head cluster (curd).'
    ],
    description: 'Cauliflower is a prized white curd winter vegetable with high market profitability.'
  }
];
