const STATUSES = {
  Active: 'Active',
  Inactive: 'Inactive',
};

const GROUPS = {
  AB: 'AB',
  SPECIAL: 'SPECIAL',
  AS: 'AS',
  ACS: 'ACS',
  OT: 'OT',
  SLP: 'SLP',
  BLV: 'BLV',
  CDA: 'CDA',
  GENERAL: 'GENERAL',
  CDT: 'CDT',
  CTC: 'CTC',
  DIET: 'DIET',
  ECE: 'ECE',
  FEEDING: 'FEEDING',
  FIREFLY: 'FIREFLY',
  IBI: 'IBI',
  IHP: 'IHP',
  IHPHEAR: 'IHP-HEAR',
  INTAKE: 'INTAKE',
  ISS: 'ISS',
  KAS: 'KAS',
  KIN: 'KIN',
  SPOT: 'SPOT',
  LIAISON: 'LIAISON',
  OAP: 'OAP',
  MEDICAL: 'MEDICAL',
  ASD: 'ASD',
  CARIZON: 'CARIZON',
  EARLY: 'EARLY',
  SBRS: 'SBRS',
  SPINAL: 'SPINAL',
  SEATING: 'SEATING',
  SCHOOL: 'SCHOOL',
  PT: 'PT',
  RE: 'RE',
  REF: 'REF',
  RT: 'RT',
  SW: 'SW',
  IHPSW: 'IHP-SW',
};

const PROGRAMS = {
  'Any': {
    description: 'Any',
    groups: [],
    status: STATUSES.Active,
   },
  'ABA-ABA': {
    description: 'ABA-ABA',
    groups: [GROUPS.ABA, GROUPS.SPECIAL, GROUPS.AS],
    status: STATUSES.Inactive,
 },
  'ACS-MAIN': {
    description: 'ACS-MAIN',
    groups: [GROUPS.ACS, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'AS_FS': {
    description: 'AS-FS',
    groups: [GROUPS.AS, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'BLV-MAIN': {
    description: 'BLV-MAIN',
    groups: [GROUPS.SPECIAL, GROUPS.BLV],
    status: STATUSES.Active,
 },
  'CDA-ACS': {
    description: 'CDA-ACS',
    groups: [GROUPS.SLP, GROUPS.ACS, GROUPS.SPECIAL, GROUPS.CDA],
    status: STATUSES.Active,
 },
  'CDA-GEN': {
    description: 'CDA-GEN',
    groups: [GROUPS.SLP, GROUPS.GENERAL, GROUPS.CDA],
    status: STATUSES.Active,
 },
  'CTC': {
    description: 'CTC',
    groups: [GROUPS.CTC],
    status: STATUSES.Active,
 },    
  'DIET-GEN': {
    description: 'DIET-GEN',
    groups: [GROUPS.DIET, GROUPS.SPECIAL],
    status: STATUSES.Active,
 }, 
  'FEED-MAIN': {
    description: 'FEEDING-MAIN',
    groups: [GROUPS.SPECIAL, GROUPS.FEEDING],
    status: STATUSES.Active,
 }, 
  'FIREFLY-CA': {
    description: 'FIREFLY-CAMP',
    groups: [GROUPS.FIREFLY],
    status: STATUSES.Active,
 }, 
  'FIREFLY-MU': {
    description: 'FIREFLY-MUSIC',
    groups: [GROUPS.FIREFLY],
    status: STATUSES.Active,
 }, 
  'FIREFLY-OT': {
    description: 'FIREFLY-OT',
    groups: [GROUPS.FIREFLY, GROUPS.OT],
    status: STATUSES.Active,
 }, 
  'FIREFLY-SM': {
    description: 'FIREFLY-SWIM',
    groups: [GROUPS.FIREFLY],
    status: STATUSES.Active,
 }, 
  'FIREFLY-SS': {
    description: 'FIREFLY-SOCIAL',
    groups: [GROUPS.FIREFLY],
    status: STATUSES.Active,
 }, 
  'FIREFLY-ST': {
    description: 'FIREFLY-SLP',
    groups: [GROUPS.FIREFLY, GROUPS.SLP],
    status: STATUSES.Active,
 }, 
  'IBI-IBI': {
    description: 'FIREFLY-MUSIC',
    groups: [GROUPS.IBI, GROUPS.SPECIAL, GROUPS.AS],
    status: STATUSES.Active,
 }, 
  'IHP-SCN': {
    description: 'IHP-SCN',
    groups: [GROUPS.SLP, GROUPS.IHPHEAR, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'INTAKE': {
    description: 'INTAKE',
    groups: [GROUPS.INTAKE],
    status: STATUSES.Active,
 },
  'ISS-MAIN': {
    description: 'ISS-MAIN',
    groups: [GROUPS.GENERAL, GROUPS.ISS],
    status: STATUSES.Active,
 },
  'KAS-MAIN': {
    description: 'KAS-MAIN',
    groups: [GROUPS.SPECIAL, GROUPS.KAS],
    status: STATUSES.Active,
 },
  'KIN-SPOT': {
    description: 'KIN-SPOT',
    groups: [GROUPS.KIN, GROUPS.SPOT, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'KIN-T2SPOT': {
    description: 'KIN-T2SPOT',
    groups: [GROUPS.KIN, GROUPS.SPOT, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'LIAISON': {
    description: 'LIAISON',
    groups: [GROUPS.LIAISON],
    status: STATUSES.Active,
 },
  'NA': {
    description: 'NA',
    groups: [],
    status: STATUSES.Active,
 },
  'OAP': {
    description: 'OAP',
    groups: [GROUPS.OAP, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OAP-BEHAV': {
    description: 'OAP-BEHAVE',
    groups: [GROUPS.SPECIAL, GROUPS.OAP],
    status: STATUSES.Active,
 },
  'OAP-CS': {
    description: 'OAP-CS',
    groups: [GROUPS.OAP, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OAP-FSG': {
    description: 'OAP-FSG',
    groups: [GROUPS.OAP, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OAP-ICG': {
    description: 'OAP-ICG',
    groups: [GROUPS.OAP, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OAP-ICI': {
    description: 'OAP-ICI',
    groups: [GROUPS.OAP, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OAP-IH': {
    description: 'OAP-IH',
    groups: [GROUPS.OAP, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OAP-OT': {
    description: 'OAP-OT',
    groups: [GROUPS.OAP, GROUPS.SPECIAL, GROUPS.OT],
    status: STATUSES.Active,
 },
  'OAP-PE': {
    description: 'OAP-PE',
    groups: [GROUPS.OAP, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OAP-SC': {
    description: 'OAP-SC',
    groups: [GROUPS.OAP, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OAP-SLP': {
    description: 'OAP-SLP',
    groups: [GROUPS.OAP, GROUPS.SPECIAL, GROUPS.SLP],
    status: STATUSES.Active,
 },
  'ORTHC-MAIN': {
    description: 'ORTHOTICS-MAIN',
    groups: [GROUPS.SPECIAL, GROUPS.MEDICAL],
    status: STATUSES.Active,
 },
  'OT-ACS': {
    description: 'OT-ACS',
    groups: [GROUPS.OT, GROUPS.ACS, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OT-ASD': {
    description: 'OT-ASD-WAT',
    groups: [GROUPS.OT, GROUPS.SPECIAL, GROUPS.ASD],
    status: STATUSES.Active,
 }, 
  'OT-ASD-GW': {
    description: 'OT-ASD-WEL',
    groups: [GROUPS.OT, GROUPS.SPECIAL, GROUPS.ASD],
    status: STATUSES.Active,
 },
  'OT-CZFASD': {
    description: 'OT-Carizon-FASD',
    groups: [GROUPS.OT, GROUPS.CORIZON, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OT-EY': {
    description: 'OT-EY',
    groups: [GROUPS.OT, GROUPS.EARLY, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'OT-FASD': {
    description: 'OT-FASD',
    groups: [GROUPS.OT, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OT-FEED': {
    description: 'OT-FEEDING',
    groups: [GROUPS.OT, GROUPS.SPECIAL, GROUPS.FEEDING],
    status: STATUSES.Active,
 },
  'OT-ISS': {
    description: 'OT-ISS',
    groups: [GROUPS.OT, GROUPS.GENERAL, GROUPS.ISS],
    status: STATUSES.Active,
 },
  'OT-KAS': {
    description: 'OT-KAS',
    groups: [GROUPS.OT, GROUPS.KAS, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OT-SB-WAT': {
    description: 'OT-SB-WAT',
    groups: [GROUPS.OT, GROUPS.SBRS, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'OT-SB-WEL': {
    description: 'OT-SB-WEL',
    groups: [GROUPS.OT, GROUPS.SBRS, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'OT-SCL': {
    description: 'OT-SCL',
    groups: [GROUPS.OT, GROUPS.SEATING, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OT-SPINAL': {
    description: 'OT-SPINAL',
    groups: [GROUPS.OT, GROUPS.SPINAL, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'OT-SPOT': {
    description: 'OT-SPOT',
    groups: [GROUPS.OT, GROUPS.SPOT, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'OT-SY': {
    description: 'OT-SY',
    groups: [GROUPS.OT, GROUPS.SCHOOL, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'OT-T2SPOT': {
    description: 'OT-T2SPOT',
    groups: [GROUPS.OT, GROUPS.SPOT, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'PHY-ASD': {
    description: 'PHY-ASD-WAT',
    groups: [GROUPS.MEDICAL, GROUPS.ASD, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'PHY-ASD-GW': {
    description: 'PHY-ASD-WEL',
    groups: [GROUPS.MEDICAL, GROUPS.ASD, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'PHY-DEVP': {
    description: 'PHY-DEV PAED',
    groups: [GROUPS.MEDICAL, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'PHY-ORTHO': {
    description: 'PHY-ORTHO',
    groups: [GROUPS.MEDICAL, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'PRIV-MAIN': {
    description: 'PRIVATE-MAIN',
    groups: [],
    status: STATUSES.Active,
 },
  'PT-EY': {
    description: 'PT-EY',
    groups: [GROUPS.PT, GROUPS.EARLY, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'PT-ISS': {
    description: 'PT-ISS',
    groups: [GROUPS.PT, GROUPS.GENERAL, GROUPS.ISS],
    status: STATUSES.Active,
 },
  'PT-KAS': {
    description: 'PT-KAS',
    groups: [GROUPS.PT, GROUPS.SPECIAL, GROUPS.KAS],
    status: STATUSES.Active,
 },
  'PT-SB-WAT': {
    description: 'PT-SB-WAT',
    groups: [GROUPS.PT, GROUPS.SBRS, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'PT-SB-WEL': {
    description: 'PT-SB-WEL',
    groups: [GROUPS.PT, GROUPS.SBRS, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'PT-SPINAL': {
    description: 'PT-SPINAL',
    groups: [GROUPS.PT, GROUPS.SPINAL, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'PT-SPOT': {
    description: 'PT-SPOT',
    groups: [GROUPS.PT, GROUPS.SPOT, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'PT-SY': {
    description: 'PT-SY',
    groups: [GROUPS.PT, GROUPS.SCHOOL, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'PT-T2SPOT': {
    description: 'PT-T2SPOT',
    groups: [GROUPS.PT, GROUPS.SPOT, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'RE-ACS': {
    description: 'RE-ACS',
    groups: [GROUPS.RE, GROUPS.ACS, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'RE-SCL': {
    description: 'RE-SCL',
    groups: [GROUPS.RE, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'RE-TECH': {
    description: 'RE-TECH',
    groups: [GROUPS.RE, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'REFERRAL': {
    description: 'REFERRAL',
    groups: [GROUPS.REF],
    status: STATUSES.Active,
 },
  'RT-GEN': {
    description: 'RT-GEN',
    groups: [GROUPS.RT, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'RT-KAS': {
    description: 'RT-KAS',
    groups: [GROUPS.RT, GROUPS.KAS, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SB-MAIN': {
    description: 'SB-MAIN',
    groups: [GROUPS.SBRS, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SCL-MAIN': {
    description: 'SCL-MAIN',
    groups: [GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SLP-ACS': {
    description: 'SLP-ACS',
    groups: [GROUPS.SLP, GROUPS.ACS, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SLP-ASD': {
    description: 'SLP-ASD-WAT',
    groups: [GROUPS.SLP, GROUPS.ASD, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SLP-ASD-GW': {
    description: 'SLP-ASD-WEL',
    groups: [GROUPS.SLP, GROUPS.ASD, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SLP-CZFASD': {
    description: 'SLP-Carizon-FASD',
    groups: [GROUPS.SLP, GROUPS.CARIZON, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SLP-EY': {
    description: 'SLP-EY',
    groups: [GROUPS.SLP, GROUPS.EARLY, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SLP-FASD': {
    description: 'SLP-FASD',
    groups: [GROUPS.SLP, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SLP-FEED': {
    description: 'SLP-FEED',
    groups: [GROUPS.SLP, GROUPS.FEEDING, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SLP-GEN': {
    description: 'SLP-GEN',
    groups: [GROUPS.SLP, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SLP-KAS': {
    description: 'SLP-KAS',
    groups: [GROUPS.SLP, GROUPS.KAS, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SLP-OUTRCH': {
    description: 'SLP-OUTREACH',
    groups: [GROUPS.SLP, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SLP-SB-WAT': {
    description: 'SLP-SB-WAT',
    groups: [GROUPS.SLP, GROUPS.SBRS, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SLP-SB-WEL': {
    description: 'SLP-SB-WEL',
    groups: [GROUPS.SLP, GROUPS.SBRS, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SLP-SPOT': {
    description: 'SLP-SPOT',
    groups: [GROUPS.SLP, GROUPS.SPOT, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SLP-SY': {
    description: 'SLP-SY',
    groups: [GROUPS.SLP, GROUPS.SCHOOL, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SLP-T2SPOT': {
    description: 'SLP-T2SPOT',
    groups: [GROUPS.SLP, GROUPS.SPOT, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SW-ASD': {
    description: 'SW-ASD-WAT',
    groups: [GROUPS.SW, GROUPS.ASD, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SW-ASD-GW': {
    description: 'SW-ASD-WEL',
    groups: [GROUPS.SW, GROUPS.SPECIAL, GROUPS.ASD],
    status: STATUSES.Active,
 },
  'SW-BLV': {
    description: 'SW-BLV',
    groups: [GROUPS.SW, GROUPS.SPECIAL, GROUPS.BLV],
    status: STATUSES.Active,
 },
  'SW-EY': {
    description: 'SW-EY',
    groups: [GROUPS.SW, GROUPS.EARLY, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SW-IHP': {
    description: 'SW-IHP',
    groups: [GROUPS.SW, GROUPS.IHPSW, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SW-KAS': {
    description: 'SW-KAS',
    groups: [GROUPS.SW, GROUPS.KAS, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SW-MED': {
    description: 'SW-MED',
    groups: [GROUPS.SW, GROUPS.MEDICAL, GROUPS.SPECIAL],
    status: STATUSES.Active,
 },
  'SW-SY': {
    description: 'SW-SY',
    groups: [GROUPS.SW, GROUPS.SCHOOL, GROUPS.GENERAL],
    status: STATUSES.Active,
 },
  'SY-MAIN': {
    description: 'SY-MAIN',
    groups: [GROUPS.GENERAL],
    status: STATUSES.Active,
 },
}

export default PROGRAMS;
