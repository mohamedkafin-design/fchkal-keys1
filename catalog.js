const WHATSAPP_NUMBER = '212636059783';
const PLACEHOLDER_IMAGE = 'images/placeholder.svg';

const GAME_CATALOG = [
  {
    id: 'g-007-first-light',
    slug: '007-first-light',
    title: '007 First Light',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 400,
    image: 'images/007 First Light.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-007-first-light-ps5', platform: 'PS5', label: 'PS5', price: 400, status: 'available' }
    ]
  },
  {
    id: 'g-arc-raiders',
    slug: 'arc-raiders',
    title: 'ARC Raiders',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 300,
    image: 'images/ARC Raiders.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-arc-raiders-ps5', platform: 'PS5', label: 'PS5', price: 300, status: 'available' }
    ]
  },
  {
    id: 'g-assassins-creed-black-flag-resynced',
    slug: 'assassins-creed-black-flag-resynced',
    title: "Assassin's Creed Black Flag Resynced",
    category: 'Action Adventure',
    edition: 'Resynced',
    price: 400,
    image: 'images/Assassin’s Creed Black Flag Resynced.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-assassins-creed-black-flag-resynced-ps5', platform: 'PS5', label: 'PS5', price: 400, status: 'available' }
    ]
  },
  {
    id: 'g-black-myth-wukong',
    slug: 'black-myth-wukong',
    title: 'Black Myth: Wukong',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 349,
    image: 'images/Black Myth Wukong.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-black-myth-wukong-pc', platform: 'PC', label: 'PC', price: 349, status: 'available' }
    ]
  },
  {
    id: 'g-call-of-duty-modern-warfare-ii',
    slug: 'call-of-duty-modern-warfare-ii',
    title: 'Call of Duty: Modern Warfare II',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 249,
    image: 'images/Call of Duty Modern Warfare II.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-call-of-duty-modern-warfare-ii-pc', platform: 'PC', label: 'PC', price: 249, status: 'available' }
    ]
  },
  {
    id: 'g-call-of-duty-modern-warfare-4',
    slug: 'call-of-duty-modern-warfare-4',
    title: 'Call of Duty: Modern Warfare 4',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 449,
    image: 'images/Call of Duty® Modern Warfare® 4.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-call-of-duty-modern-warfare-4-pc', platform: 'PC', label: 'PC', price: 449, status: 'available' }
    ]
  },
  {
    id: 'g-crimson-desert',
    slug: 'crimson-desert',
    title: 'Crimson Desert',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 449,
    image: 'images/Crimson Desert.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-crimson-desert-pc', platform: 'PC', label: 'PC', price: 449, status: 'available' }
    ]
  },
  {
    id: 'g-elden-ring',
    slug: 'elden-ring',
    title: 'Elden Ring',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 249,
    image: 'images/Elden Ring.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-elden-ring-pc', platform: 'PC', label: 'PC', price: 249, status: 'available' }
    ]
  },
  {
    id: 'g-far-cry-6-deluxe-edition',
    slug: 'far-cry-6-deluxe-edition',
    title: 'Far Cry 6 Deluxe Edition',
    category: 'Action Adventure',
    edition: 'Deluxe Edition',
    price: 300,
    image: 'images/Far Cry® 6 Deluxe Edition.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-far-cry-6-deluxe-edition-pc', platform: 'PC', label: 'PC', price: 300, status: 'available' }
    ]
  },
  {
    id: 'g-ghost-of-tsushima',
    slug: 'ghost-of-tsushima',
    title: 'Ghost of Tsushima',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 249,
    image: 'images/Ghost of Tsushima.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-ghost-of-tsushima-ps5', platform: 'PS5', label: 'PS5', price: 249, status: 'available' }
    ]
  },
  {
    id: 'g-god-of-war-ragnarok',
    slug: 'god-of-war-ragnarok',
    title: 'God of War Ragnarök',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 300,
    image: 'images/God of War Ragnarok.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-god-of-war-ragnarok-ps5', platform: 'PS5', label: 'PS5', price: 300, status: 'available' }
    ]
  },
  {
    id: 'g-it-takes-two-a-way-out',
    slug: 'it-takes-two-a-way-out',
    title: 'It Takes Two + A Way Out',
    category: 'Action Adventure',
    edition: 'Bundle',
    price: 249,
    image: 'images/It takes two + a way out.png',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-it-takes-two-a-way-out-pc', platform: 'PC', label: 'PC', price: 249, status: 'available' }
    ]
  },
  {
    id: 'g-pragmata',
    slug: 'pragmata',
    title: 'PRAGMATA',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 300,
    image: 'images/PRAGMATA.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-pragmata-pc', platform: 'PC', label: 'PC', price: 300, status: 'available' }
    ]
  },
  {
    id: 'g-resident-evil-4',
    slug: 'resident-evil-4',
    title: 'Resident Evil 4',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 249,
    image: 'images/Resident Evil 4.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-resident-evil-4-ps5', platform: 'PS5', label: 'PS5', price: 249, status: 'available' }
    ]
  },
  {
    id: 'g-resident-evil-requiem',
    slug: 'resident-evil-requiem',
    title: 'Resident Evil Requiem',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 449,
    image: 'images/Resident Evil Requiem.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-resident-evil-requiem-pc', platform: 'PC', label: 'PC', price: 449, status: 'available' }
    ]
  },
  {
    id: 'g-the-last-of-us-part-i',
    slug: 'the-last-of-us-part-i',
    title: 'The Last of Us Part I',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 300,
    image: 'images/The Last of Us Part I.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-the-last-of-us-part-i-ps5', platform: 'PS5', label: 'PS5', price: 300, status: 'available' }
    ]
  },
  {
    id: 'g-the-last-of-us-part-ii',
    slug: 'the-last-of-us-part-ii',
    title: 'The Last of Us Part II',
    category: 'Action Adventure',
    edition: 'Standard',
    price: 249,
    image: 'images/The Last of Us Part II.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-the-last-of-us-part-ii-ps5', platform: 'PS5', label: 'PS5', price: 249, status: 'available' }
    ]
  },
  {
    id: 'g-uncharted-4-lost-legacy-bundle',
    slug: 'uncharted-4-lost-legacy-bundle',
    title: 'UNCHARTED 4: A Thief\'s End & UNCHARTED: The Lost Legacy Digital Bundle',
    category: 'Action Adventure',
    edition: 'Digital Bundle',
    price: 249,
    image: 'images/UNCHARTED 4 A Thief’s End & UNCHARTED The Lost Legacy Digital Bundle.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-uncharted-4-lost-legacy-bundle-ps5', platform: 'PS5', label: 'PS5', price: 249, status: 'available' }
    ]
  },
  {
    id: 'g-ea-sports-fc-25',
    slug: 'ea-sports-fc-25',
    title: 'EA SPORTS FC 25',
    category: 'EA SPORTS FC',
    edition: 'Standard',
    price: 200,
    image: 'images/EA Sports FC 25.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-ea-sports-fc-25-ps5', platform: 'PS5', label: 'PS5', price: 200, status: 'available' }
    ]
  },
  {
    id: 'g-ea-sports-fc-26',
    slug: 'ea-sports-fc-26',
    title: 'EA SPORTS FC 26',
    category: 'EA SPORTS FC',
    edition: 'Standard',
    price: 200,
    image: 'images/EA Sports FC 26.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-ea-sports-fc-26-ps5', platform: 'PS5', label: 'PS5', price: 200, status: 'available' }
    ]
  },
  {
    id: 'g-ea-sports-fc-27-ultimate-edition',
    slug: 'ea-sports-fc-27-ultimate-edition',
    title: 'EA SPORTS FC 27 Ultimate Edition',
    category: 'EA SPORTS FC',
    edition: 'Ultimate Edition',
    price: 599,
    image: 'images/EA SPORTS FC™ 27 ULTIMATE.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-ea-sports-fc-27-ultimate-edition-ps5', platform: 'PS5', label: 'PS5', price: 599, status: 'available' }
    ]
  },
  {
    id: 'g-ea-sports-fc-27',
    slug: 'ea-sports-fc-27',
    title: 'EA SPORTS FC 27',
    category: 'EA SPORTS FC',
    edition: 'Standard',
    price: 299,
    image: 'images/EA SPORTS FC™ 27.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS4', 'PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-ea-sports-fc-27-ps4-variant', platform: 'PS4', label: 'PS4', price: 299, status: 'available' },
      { id: 'g-ea-sports-fc-27-ps5-variant', platform: 'PS5', label: 'PS5', price: 349, status: 'available' }
    ]
  },
  {
    id: 'g-gta-v',
    slug: 'gta-v',
    title: 'Grand Theft Auto V (GTA 5)',
    category: 'Grand Theft Auto',
    edition: 'Standard',
    price: 200,
    image: 'images/Grand Theft Auto V (GTA 5).jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-gta-v-pc', platform: 'PC', label: 'PC', price: 200, status: 'available' }
    ]
  },
  {
    id: 'g-gta-vi',
    slug: 'gta-vi',
    title: 'Grand Theft Auto VI (GTA 6)',
    category: 'Grand Theft Auto',
    edition: 'Standard',
    price: 500,
    image: 'images/Grand Theft Auto VI (GTA 6).jpg',
    status: 'preorder',
    availabilityStatus: 'preorder',
    platforms: ['PS5', 'PC'],
    releaseDate: '2026-11-19',
    reviewNotes: 'Preorder status remains active until official launch confirmation on November 19, 2026.',
    variants: [
      { id: 'g-gta-vi-standard-preorder', platform: 'Preorder', label: 'Preorder', price: 500, status: 'preorder' }
    ]
  },
  {
    id: 'g-gta-vi-ultimate-edition',
    slug: 'gta-vi-ultimate-edition',
    title: 'Grand Theft Auto VI: Ultimate Edition (GTA 6 UE)',
    category: 'Grand Theft Auto',
    edition: 'Ultimate Edition',
    price: 649,
    image: 'images/Grand Theft Auto VI Ultimate Edition (GTA 6 UE).jpg',
    status: 'preorder',
    availabilityStatus: 'preorder',
    platforms: ['PS5', 'PC'],
    releaseDate: '2026-11-19',
    reviewNotes: 'Preorder status remains active until official launch confirmation on November 19, 2026.',
    variants: [
      { id: 'g-gta-vi-ultimate-preorder', platform: 'Preorder', label: 'Preorder', price: 649, status: 'preorder' }
    ]
  },
  {
    id: 'g-mafia-the-old-country',
    slug: 'mafia-the-old-country',
    title: 'Mafia: The Old Country',
    category: 'Mafia and Marvel',
    edition: 'Review Required',
    price: 349,
    image: 'images/Mafia The Old Country.jpg',
    status: 'review',
    availabilityStatus: 'review',
    platforms: ['PS4', 'PS5'],
    releaseDate: null,
    reviewNotes: 'PS4 variant is pending platform validation and is not published. PS5 variant remains pending confirmation.',
    variants: [
      { id: 'g-mafia-the-old-country-ps4', platform: 'PS4', label: 'PS4', price: 300, status: 'review' },
      { id: 'g-mafia-the-old-country-ps5', platform: 'PS5', label: 'PS5', price: 349, status: 'review' }
    ]
  },
  {
    id: 'g-marvels-wolverine',
    slug: 'marvels-wolverine',
    title: "Marvel's Wolverine",
    category: 'Mafia and Marvel',
    edition: 'Standard',
    price: 449,
    image: 'images/Marvel’s Wolverine.jpeg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-marvels-wolverine-ps5', platform: 'PS5', label: 'PS5', price: 449, status: 'available' }
    ]
  },
  {
    id: 'g-marvels-spider-man-2',
    slug: 'marvels-spider-man-2',
    title: "Marvel's Spider-Man 2",
    category: 'Mafia and Marvel',
    edition: 'Review Required',
    price: 349,
    image: 'images/Marvel\'s Spider-Man 2.jpg',
    status: 'review',
    availabilityStatus: 'review',
    platforms: ['PS4', 'PS5'],
    releaseDate: null,
    reviewNotes: 'PS4 variant is officially incompatible and not published. PS5 variant remains pending confirmation.',
    variants: [
      { id: 'g-marvels-spider-man-2-ps4', platform: 'PS4', label: 'PS4', price: 300, status: 'review' },
      { id: 'g-marvels-spider-man-2-ps5', platform: 'PS5', label: 'PS5', price: 349, status: 'review' }
    ]
  },
  {
    id: 'g-forza-horizon-5',
    slug: 'forza-horizon-5',
    title: 'Forza Horizon 5',
    category: 'Racing and sports',
    edition: 'Review Required',
    price: 400,
    image: 'images/Forza Horizon 5.jpg',
    status: 'review',
    availabilityStatus: 'review',
    platforms: ['PS4', 'PS5'],
    releaseDate: null,
    reviewNotes: 'PS4 variant is not officially supported and is not published. Only PS5 is currently eligible for sale review.',
    variants: [
      { id: 'g-forza-horizon-5-ps4', platform: 'PS4', label: 'PS4', price: 350, status: 'review' },
      { id: 'g-forza-horizon-5-ps5', platform: 'PS5', label: 'PS5', price: 400, status: 'review' }
    ]
  },
  {
    id: 'g-nba-2k27-deluxe-edition',
    slug: 'nba-2k27-deluxe-edition',
    title: 'NBA 2K27 Deluxe Edition',
    category: 'Racing and sports',
    edition: 'Deluxe Edition',
    price: 599,
    image: 'images/NBA 2K27 Deluxe Edition.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-nba-2k27-deluxe-edition-ps5', platform: 'PS5', label: 'PS5', price: 599, status: 'available' }
    ]
  },
  {
    id: 'g-nba-2k27-ps5-edition',
    slug: 'nba-2k27-ps5-edition',
    title: 'NBA 2K27 PS5 Edition',
    category: 'Racing and sports',
    edition: 'PS5 Edition',
    price: 449,
    image: 'images/NBA 2K27.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-nba-2k27-ps5-edition-ps5', platform: 'PS5', label: 'PS5', price: 449, status: 'available' }
    ]
  },
  {
    id: 'g-ufc-6',
    slug: 'ufc-6',
    title: 'UFC 6',
    category: 'Racing and sports',
    edition: 'Standard',
    price: 449,
    image: 'images/UFC™ 6.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-ufc-6-ps5', platform: 'PS5', label: 'PS5', price: 449, status: 'available' }
    ]
  },
  {
    id: 'g-wwe-2k25',
    slug: 'wwe-2k25',
    title: 'WWE 2K25',
    category: 'Racing and sports',
    edition: 'Variant Pack',
    price: 299,
    image: 'images/WWE 2K25.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS4', 'PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-wwe-2k25-ps4', platform: 'PS4', label: 'PS4', price: 249, status: 'available' },
      { id: 'g-wwe-2k25-ps5', platform: 'PS5', label: 'PS5', price: 299, status: 'available' }
    ]
  },
  {
    id: 'g-wwe-2k26-standard-edition',
    slug: 'wwe-2k26-standard-edition',
    title: 'WWE 2K26 Standard Edition',
    category: 'Racing and sports',
    edition: 'Standard Edition',
    price: 449,
    image: 'images/WWE 2K26 Édition standard.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PS5'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-wwe-2k26-standard-edition-ps5', platform: 'PS5', label: 'PS5', price: 449, status: 'available' }
    ]
  },
  {
    id: 'g-minecraft',
    slug: 'minecraft',
    title: 'Minecraft',
    category: 'Minecraft and Red Dead Redemption',
    edition: 'Standard',
    price: 249,
    image: 'images/Minecraft.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-minecraft-pc', platform: 'PC', label: 'PC', price: 249, status: 'available' }
    ]
  },
  {
    id: 'g-red-dead-redemption-2',
    slug: 'red-dead-redemption-2',
    title: 'Red Dead Redemption 2',
    category: 'Minecraft and Red Dead Redemption',
    edition: 'Standard',
    price: 200,
    image: 'images/Red Dead Redemption 2.jpg',
    status: 'available',
    availabilityStatus: 'available',
    platforms: ['PC'],
    releaseDate: null,
    reviewNotes: '',
    variants: [
      { id: 'g-red-dead-redemption-2-pc', platform: 'PC', label: 'PC', price: 200, status: 'available' }
    ]
  },
  {
    id: 'g-playstation-plus-essential-3-months',
    slug: 'playstation-plus-essential-3-months',
    title: 'PlayStation Plus Essential — 3 months',
    category: 'PlayStation Plus subscriptions',
    edition: '3 months',
    price: 300,
    image: 'images/PlayStation Plus Essential 3 mois.jpg',
    status: 'inquiry',
    availabilityStatus: 'inquiry',
    platforms: ['PS4', 'PS5'],
    releaseDate: null,
    reviewNotes: 'Platform and eligibility must be confirmed before fulfillment. Ask via WhatsApp for current availability.',
    variants: [
      { id: 'g-playstation-plus-essential-3-months-ps4', platform: 'PS4', label: 'PS4', price: 249, status: 'inquiry' },
      { id: 'g-playstation-plus-essential-3-months-ps5', platform: 'PS5', label: 'PS5', price: 300, status: 'inquiry' }
    ]
  },
  {
    id: 'g-playstation-plus-essential-12-months',
    slug: 'playstation-plus-essential-12-months',
    title: 'PlayStation Plus Essential — 12 months',
    category: 'PlayStation Plus subscriptions',
    edition: '12 months',
    price: 349,
    image: 'images/PlayStation Plus Essential 12 mois.jpg',
    status: 'inquiry',
    availabilityStatus: 'inquiry',
    platforms: ['PS4', 'PS5'],
    releaseDate: null,
    reviewNotes: 'Platform and eligibility must be confirmed before fulfillment. Ask via WhatsApp for current availability.',
    variants: [
      { id: 'g-playstation-plus-essential-12-months-ps4', platform: 'PS4', label: 'PS4', price: 300, status: 'inquiry' },
      { id: 'g-playstation-plus-essential-12-months-ps5', platform: 'PS5', label: 'PS5', price: 349, status: 'inquiry' }
    ]
  },
  {
    id: 'g-playstation-plus-extra-3-months',
    slug: 'playstation-plus-extra-3-months',
    title: 'PlayStation Plus Extra — 3 months',
    category: 'PlayStation Plus subscriptions',
    edition: '3 months',
    price: 400,
    image: 'images/PlayStation Plus Extra 3 mois.jpg',
    status: 'inquiry',
    availabilityStatus: 'inquiry',
    platforms: ['Account verification required'],
    releaseDate: null,
    reviewNotes: 'Platform, account region, and subscription eligibility must be confirmed before order fulfillment. Price remains unchanged.',
    variants: [
      { id: 'g-playstation-plus-extra-3-months-confirmation', platform: 'Confirmation required', label: 'Confirmation required', price: 400, status: 'inquiry' }
    ]
  },
  {
    id: 'g-playstation-plus-extra-12-months',
    slug: 'playstation-plus-extra-12-months',
    title: 'PlayStation Plus Extra — 12 months',
    category: 'PlayStation Plus subscriptions',
    edition: '12 months',
    price: 500,
    image: 'images/PlayStation Plus Extra 12 mois.png',
    status: 'inquiry',
    availabilityStatus: 'inquiry',
    platforms: ['Account verification required'],
    releaseDate: null,
    reviewNotes: 'Platform, account region, and subscription eligibility must be confirmed before order fulfillment. Price remains unchanged.',
    variants: [
      { id: 'g-playstation-plus-extra-12-months-confirmation', platform: 'Confirmation required', label: 'Confirmation required', price: 500, status: 'inquiry' }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.WHATSAPP_NUMBER = WHATSAPP_NUMBER;
  window.PLACEHOLDER_IMAGE = PLACEHOLDER_IMAGE;
  window.GAME_CATALOG = GAME_CATALOG;
}

if (typeof module !== 'undefined') {
  module.exports = {
    WHATSAPP_NUMBER,
    PLACEHOLDER_IMAGE,
    GAME_CATALOG
  };
}
