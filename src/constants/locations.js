const CITIES = {
  Cambridge: 'Cambridge',
  Guelph: 'Guelph',
  Kitchener: 'Kitchener',
  Waterloo: 'Waterloo',
  Fergus: 'Fergus',
  // I think the "f" might be Fergus
};

const STATUSES = {
  Active: 'Active',
  Inactive: 'Inactive',
}

const LOCATIONS = {
  'ALEXDC': {
    description: 'W-Alexandra Day Care',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'ALLDAY': {
    description: 'C-All In a Day\'s Play Day Care',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'APPLE': {
    description: 'G-Appleseed Child Care Centre',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'ARTHUR': {
    description: 'G-Arthur School Readiness Prog',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'ARTHURY': {
    description: 'F-Arthur Y Childcare',
    city: CITIES.Fergus,
    status: STATUSES.Active,
  },
  'BRASON': {
    description: 'C-Brason Academy Montessori',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'BRIGHTPATH': {
    description: 'W-BrightPath Early Learning Centre',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'BRIGHTSTAR': {
    description: 'W-Bright Starts Daycare',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'BUTTERFLY': {
    description: 'W-Butterfly Learning Centre',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'C-CLIENT': {
    description: 'C-Cambridge Client Home',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'C-ELITE': {
    description: 'C-Elite Daycare',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBALLIGA': {
    description: 'Camb Alligator',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBBEAR': {
    description: 'Camb Bear',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBBOARD': {
    description: 'Camb Board Room',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBCHEETA': {
    description: 'Camb Cheetah',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBDOLPHI': {
    description: 'Camb Dolphin',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBELEPHA': {
    description: 'Camb Elephant',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBFAMILY': {
    description: 'Camb Family Den',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBFOUND': {
    description: 'Camb Foundation Room',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBFROG': {
    description: 'Camb Frog',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBGIRAFF': {
    description: 'Camb Giraffe',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBGYM': {
    description: 'Camb Gym',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBHIPPO': {
    description: 'Camb Hippo',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBKANG': {
    description: 'Camb Kangaroo',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBLION': {
    description: 'Camb Lion',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBMONKEY': {
    description: 'Camb Monkey',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBMTG': {
    description: 'Camb Meeting Room',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBMTG3': {
    description: 'Camb Meeting Room 3',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBPENGUI': {
    description: 'Camb Penguin',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBRIDGE': {
    description: 'Cambridge Site',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBSEAL': {
    description: 'Camb Seal',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBTIGER': {
    description: 'Camb Tiger',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBWALRUS': {
    description: 'Camb Walrus',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBYOUTH': {
    description: 'Camb Youth Centre',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMBZEBRA': {
    description: 'Camb Zebra',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMCC': {
    description: 'C-Cambridge Children\'s Centre',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CAMPUS': {
    description: 'G-Campus Coop Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'CATHIECC': {
    description: 'F-Cathie\'s Children\'s Centre',
    city: CITIES.Fergus,
    status: STATUSES.Active,
  },
  'CEDARCREEK': {
    description: 'C-Cedar Creek P.S.',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CENTREEDUC': {
    description: 'W-Cent Educatif Village d\'Elis',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'CENTRESAUT': {
    description: 'C-Centre Educ P\'tites Sauterel',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'CENTREVILL': {
    description: 'K-Centreville Chicopee',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'CENTREWELL': {
    description: 'G-Centre Wellington Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'CHILDCARE': {
    description: 'K-Child Care Plus',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'CHILDCCLAU': {
    description: 'W-Children\'s Creativ Centr-Lau',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'CHILDPLACE': {
    description: 'W-Children\'s Place Nursery Sch',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'CHRISTELE': {
    description: 'W-Christ Elementary Early Lear',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'CHRISTOPHE': {
    description: 'C-Christopher Children\'s Centr',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'COM-PART': {
    description: 'Community Partner',
    city: 
    // I think this location might not be city specific
    status: STATUSES.Active,
  },

};

export default LOCATIONS;