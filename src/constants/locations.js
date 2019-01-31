const CITIES = {
  Cambridge: 'Cambridge',
  Guelph: 'Guelph',
  Kitchener: 'Kitchener',
  Waterloo: 'Waterloo',
  Fergus: 'Fergus',
  Null: 'Null',
  // Confirmed the f is for Fergus, Created a Null option
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
    city: CITIES.Null,
    status: STATUSES.Active,
    // I think this location might not be city specific, created a null option
  },
  'CONDOON': {
    description: 'W-Conestoga College - Doon',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'CONDRIFT': {
    description: 'W-Conestoga Colleg - Driftwood',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'CONGLEN': {
    description: 'K-Conestoga College- Glencairn',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'CONJOHN' {
    description: 'W-Conestoga Coll - John Darlin',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'CONSILVER': {
    description: 'W-Conestoga Coll - Silverheig',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'CORONATION': {
    description: 'C-Coronation Early Learning Childcare Centre',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CRAYON': {
    description: 'C-Crayon Club',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'CREBEG-BAD': {
    description: 'K-Creative Begin - Baden PS',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'CREBEG-II': {
    description: 'W-Creative Begin Ch Care II',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'CREBEG-INH': {
    description: 'K-Creativ Begin I -New Hamburg',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'CREBEG-SAB': {
    description: 'K-Creative Begin-Sir Adam Beck',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'DINOKIDZ': {
    description: 'C-Dino and Kidz',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'EARLY': {
    description: 'G-Early Learning Centre',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'EASTSIDE': {
    description: 'C-East Side Day Care Centre',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'EDITHMAC': {
    description: 'W-Edith MacIntosh Ch Care Cen',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'EDUKIDS' {
    description: 'C-EDU KIDS DAYCARE',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'ELMIRACC': {
    description: 'W-Elmira Children\'s Centre',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'ELMIRACOMM': {
    description: 'W-Elmira Community Nursery School',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'ELORACOOP': {
    description: 'F-Elora Co-Op Preschool',
    city: CITIES.Fergus,
    status: STATUSES.Active,
  },
  'EMMANUEL': {
    description: 'W-Emanuel At Brighton CCC',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'F-CLIENT': {
    description: 'F-Fergus Client Home',
    city: CITIES.Fergus,
    status: STATUSES.Active,
  },
  'FERGLARGE': {
    description: 'Ferg Large Tx Room',
    city: CITIES.Fergus,
    status: STATUSES.Active,
  },
  'FERGSMALL': {
    description: 'Ferg Small Tx Room',
    city: CITIES.Fergus,
    status: STATUSES.Active,
  },
  'FERGUS': {
    description: 'Fergus Site',
    city: CITIES.Fergus,
    status: STATUSES.Active,
  },
  'FIDDLESTIC': {
    description: 'C-Fiddlesticks Day Care',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'FIRSTSTEPS': {
    description: 'G-First Steps Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'FREDAHAM': {
    description: 'G-Fred A Hamilton Preschool',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'G-CLIENT' {
    description: 'G-Guelph Client Home',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'G-GATEWAY': {
    description: 'G-Gateway P.S.',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GINGERBREA': {
    description: 'G-Gingerbread House Co-Op',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GREENBROOK': {
    description: 'W-Greenbrook Co-op Prescho',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'GUELALBERTA': {
    description: 'Guel Alberta',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELBRITISH': {
    description: 'Guel British Columbia',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELELORA': {
    description: 'Guel Elora Gorge Family Lounge',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELGRAND': {
    description: 'Guel Grand River',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELHUDSON': {
    description: 'Guel Hudson Bay',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELMANITOBA': {
    description: 'Guel Manitoba',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELMANITOULIN': {
    description: 'Guel Manitoulin Island',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELMAPLE': {
    description: 'Guel Maple Leaf',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELNIAGARA': {
    description: 'Guel Niagara Falls',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELPEGGY': {
    description: 'Guel Peggy\'s Cove',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELPH': {
    description: 'Guelph Site',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELPOINT': {
    description: 'Guel Point Peele',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELROYAL': {
    description: 'Guel The Royal City Board Room',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELSAUGEE': {
    description: 'Guel Saugeen River',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUELYUKON': {
    description: 'Guel Yukon',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUEMONT': {
    description: 'G-Guelph Montessori School',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'GUESCHOO': {
    description: 'G-Guelph School-Age Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'HANSEL': {
    description: 'G-Hansel & Gretel CoOp Nursery',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'HARMONY': {
    description: 'G-Harmony Kids Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'HARRISTON': {
    description: 'G-Harriston Preschool',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'HEALTH': {
    description: 'Health Fair',
    city: CITIES.Null,
    status: STATUSES.Active,
  },
  'HILDEGARD': {
    description: 'W-Hildegard Marsden CoOp',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'HOME-CAM': {
    description: 'C-Home Ch Care Srvcs - Cam',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'HOME-WAT': {
    description: 'W-Home Ch Care Srvcs - Wat',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'HOME-WELL': {
    description: 'G-Home Ch Care Srvcs - Well',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'HOSP-CAMB': {
    description: 'Cambridge Memorial Hospital',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'HOSP-GRAND': {
    description: 'Grand River Hospital',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'INSPIR-ELC': {
    description: 'W-Inspiring Minds Early Learn',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'INSPIR-SCH': {
    description: 'W-Inspiring Minds School Age',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'JACKANDJIL': {
    description: 'G-Jack And Jill Day Nursery',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'JACOB-CHIL': {
    description: 'C-Jacob Hespeler-Ch Care Cent',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'JACOB-JANET': {
    description: 'K-Jacob Hespeler-Janet Metcalfe Daycare',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'JACOB-LACK': {
    description: 'W-Jacob Hespeler-Lackner Woods',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'JACOB-WEST': {
    description: 'W-Jacob Hespeler-Westvale',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'JACOB-WOOD': {
    description: 'C-Jacob Hespeler-Woodland Park',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'JACOBMILLE': {
    description: 'W-Jacob Millen Childcare',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
};
export default LOCATIONS;