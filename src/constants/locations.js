const CITIES = {
  Cambridge: 'Cambridge',
  Guelph: 'Guelph',
  Kitchener: 'Kitchener',
  Waterloo: 'Waterloo',
  Fergus: 'Fergus',
  Null: 'Null',
  MountForest: 'Mount Forest',
  // added Mount Forest option
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
  'CONJOHN': {
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
  'EDUKIDS': {
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
  'G-CLIENT': {
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
  'JDHOGARTH': {
    description: 'G-J D Hogarth Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'JUMPJACKS': {
    description: 'C-Jumping Jacks Child Care',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'JUMPJACKSI': {
    description: 'C-Jumping Jacks III Child Care',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'JUSTFORKID': {
    description: 'W-Just For Kids',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'K-CLIENT': {
    description: 'K-Kitchener Client Home',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KIDSCOMEFI': {
    description: 'G-Kids Come First',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'KIDSCOWAT': {
    description: 'W-Kids & Company Techtown',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'KIDSFIRST': {
    description: 'G-Kids First Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'KINGSDALE': {
    description: 'K-Kingsdale Participating P.S.',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KINSMEN': {
    description: 'C-Kinsmen Children\'s Centre',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'KITC1078': {
    description: 'Kitc 1078',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITC1102': {
    description: 'Kitc 1102-Sims Resource',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITC1103': {
    description: 'Kitc 1103-Petrozzi',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITC1110': {
    description: 'Kitc 1110-Weber',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITC1111': {
    description: 'Kitc 1111-Johnson Fmly Lnge',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITC1112A': {
    description: 'Kitc 1112A-Clinic',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITC1112B': {
    description: 'Kitc 1112B-Clinic',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITC1113': {
    description: 'Kitc 1113-Harkins',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITC1114': {
    description: 'Kitc 1114-Ambassador',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITC1117': {
    description: 'Kitc 1117-Rangers',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCBUSY': {
    description: 'Kitc Busy Bee Room',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCFOREST': {
    description: 'Kitc Forest Room',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCHENER': {
    description: 'Kitchener Site',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCLEARN': {
    description: 'Kitc The Learning Garden',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCOCEAN': {
    description: 'Kitc Ocean Room',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCOWL': {
    description: 'Kitc Owl Room',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCRAC': {
    description: 'Kitc Raccoon Room',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCSEA': {
    description: 'Kitc Sea Horse Rooom',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCSQUI': {
    description: 'Kitc Squirrel Room',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCTURTLE': {
    description: 'Kitc Turtle Room',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KITCWHALE': {
    description: 'Kitc Whale Room',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'KLEMMER': {
    description: 'W-Klemmer Farmhouse Cooperativ',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'KORTWRIGHT': {
    description: 'G-Kortright Playschool',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'KWENGLISH': {
    description: 'W-K-W English Preschool',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'KWMONTBRID': {
    description: 'W-K-W Montessori School-Bridg',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'LAGARDERIE': {
    description: 'G-La Garderie De L\'Arc En Ciel',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'LAKESHORE': {
    description: 'W-Lakeshore Co-Op Nursery Sch.',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'LAKESIDE': {
    description: 'G-Lakeside Childcare Centre',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'LAPETITE': {
    description: 'W-La Petite Ecole Francophone',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'LECNTRE': {
    description: 'C-Le Centre Educatif Les Petit',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'LECOLE': {
    description: 'W-l\'Ecole Elemenetai l\'Harmoni',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'LEGARDERIE': {
    description: 'K-Le Garderie Des Lutin De Kit',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'LILLIANS': {
    description: 'G-Lillian\'s Children\'s Centre',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'LILLIPUT': {
    description: 'G-Lilliput Land Preschool',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'LITTLEANGE': {
    description: 'G-Little Angels Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'LITTLECHAM': {
    description: 'W-Little Champs Academy',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'LITTLECHAMGUE': {
    description: 'G-Little Champs Daycare',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'LITTLELEARN': {
    description: 'G-Little Learners Preschool',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'LITTLEMOUN': {
    description: 'W-Little Mountain/Open Sesame',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'MACMGS': {
    description: 'W-MAC MGS Preschool',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'MF-CLIENT': {
    description: 'MF-Mount Forest-Client Home',
    city: CITIES.MountForest,
    status: STATUSES.Active,
  },
  'MONTACAD': {
    description: 'G-Montessori Academy Learning',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'MONTCAMBRI': {
    description: 'C-Montessori School of Camb',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'MONTLITTLE': {
    description: 'G-Montessori Little Folks',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'MONTMORN': {
    description: 'C-Montessori Sch-Morningside',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'MONTTRILL': {
    description: 'K-Montessori Trillium',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'MONTWELL': {
    description: 'G-Montessori School of Welling',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'MOPPET': {
    description: 'W-Moppet Parent Particip P.S.',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'MOUNTFORES': {
    description: 'G-Mount Forest Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'MT.FOREST': {
    description: 'G-Mount Forest Site',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'NA': {
    description: 'Not Applicable',
    city: CITIES.Null,
    status: STATUSES.Active,
  },
  'NEWDUNDEE': {
    description: 'K-New Dundee Parent Participat',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'NEWHAMBURG': {
    description: 'K-New Hamburg Cooperative P.S.',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'NOAHSARK': {
    description: 'G-Noah\'s Ark Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'NOELSWOOD': {
    description: 'G-Noel\'s Children Centre-Woodl',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'NORTHDUMFR': {
    description: 'C-North Dumfries P.S. CoOp',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'NORTHLAKE': {
    description: 'W-Northlake Co-op Preschool',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'OEYC-CAM': {
    description: 'C-OEYC-Cambridge',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'OEYC-ERB': {
    description: 'W-OEYC-Erbsville',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'OEYC-GUE': {
    description: 'G-OEYC-Guelph',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'OEYC-KIT': {
    description: 'K-OEYC-Kitchener',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'OEYC-MTFOR': {
    description: 'G-OEYC-Mount Forest',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'OEYC-RIVERSIDE': {
    description: 'W-OEYC-RIVERSIDE P.S.',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'OEYC-WAT': {
    description: 'W-OEYC-Waterloo',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'OTHER': {
    description: 'Other Community',
    city: CITIES.Null,
    status: STATUSES.Active,
  },
  'OWLAUBURN': {
    description: 'W-Owl Child Care-Auburn',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'OWLJOHNSWE': {
    description: 'K-Owl Child Care-John Sweeney',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'OWLLINCOLN': {
    description: 'W-Owl Child Care-Lincoln',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'OWLOURLADY': {
    description: 'C-Owl Ch Care-Our Lady of Fat',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'OWLPOPEJOH': {
    description: 'K-Owl Child Care-Pope John Pau',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'OWLSTBRIGID': {
    description: 'C-Owl Child Care-St. Brigid',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'OWLSTLUKES': {
    description: 'W-Owl Child Care-St. Luke\'s',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'OWLSTMATTH': {
    description: 'W-Owl Child Care-St. Matthew',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'OWLSTNICHO': {
    description: 'W-Owl Child Care-St. Nicholas',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'OWLWESTMOU': {
    description: 'W-Owl Child Care-Westmount',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'PAINTINPLA': {
    description: 'W-Paintin\' Place Co-op Day',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'PALMERSTON': {
    description: 'W-Palmerston Childcare',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'PARKMINSTE': {
    description: 'W-Parkminster Nursery School',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'PARKVIEW': {
    description: 'G-Parkview Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'PARKWOOD': {
    description: 'G-Parkwood Gardens Nursery Sch',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'PEEKABOOMA': {
    description: 'C-Peekaboo Child Care-Maple',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'PEEKABOOSH': {
    description: 'C-Peekaboo Child Care-Sheldon',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'PEEKABOOVI': {
    description: 'W-Peekaboo Child Care-Victoria',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'PLUTOACTIV': {
    description: 'K-Pluto Day Care Centre-Activa',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'PLUTOBROOK': {
    description: 'C-Pluto Day Care Centre-Brook',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'PLUTOKING': {
    description: 'W-Pluto Day Care Centre-King',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'PLUTOOTTAW': {
    description: 'K-Pluto Day Care Centre-Ottawa',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'PLUTOWEBER': {
    description: 'W-Pluto Day Care Centre-Weber',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'POLKADOT': {
    description: 'C-Polkadot Palace',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'PRESTONHEI': {
    description: 'C-Preston Heights Participatin',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'RICKSONRID': {
    description: 'G-Rickson Ridge Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'ROCKINGHOR': {
    description: 'G-Rocking HorseEarly Learni C',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'ROCKWOOD': {
    description: 'G-Rockwood Nursery School',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'ROLLINGHIL': {
    description: 'G-Rolling Hills Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'ROYALCITY': {
    description: 'G-Royal City Co-op Prescho',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'SAGINAW': {
    description: 'C-Saginaw Child Care Centre',
    city: CITIES.Cambridge,
    status: STATUSES.Active,
  },
  'SALVATION': {
    description: 'G-Salvation Army Guel Toddler',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'SCHOOL': {
    description: 'School',
    city: CITIES.Null,
    status: STATUSES.Active,
  },
  'SMALLANGEL': {
    description: 'G-Small Angels Day Care',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'SMITHSON': {
    description: 'W-Smithson Preschool',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'SPOTSFORTO': {
    description: 'W-Spots For Tots',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'STANLEYPAR': {
    description: 'W-Stanley Park Rosemount P.S.',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'STANLEYSPR': {
    description: 'K-Stanley\'s Preschool',
    city: CITIES.Kitchener,
    status: STATUSES.Active,
  },
  'STATIONRD': {
    description: 'G-Station Road Nursery School',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'STATIONROA': {
    description: 'G-Station Road Preschool',
    city: CITIES.Guelph,
    status: STATUSES.Active,
  },
  'STBONIFACE': {
    description: 'W-ST.BONIFACE',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'STCLEMENTS': {
    description: 'W-St. Clements Nursery School',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'STGREG': {
    description: 'C-St. Gregory',
    city: CITIES.Cambridge,
    status: STATUSES.Inactive,
  },
  'STJACOBS': {
    description: 'W-St. Jacobs Day Care',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
  'STJOHNSCHR': {
    description: 'W-St. Johns Christian Nursery S',
    city: CITIES.Waterloo,
    status: STATUSES.Active,
  },
};
export default LOCATIONS;
