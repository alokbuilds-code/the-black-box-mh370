/**
 * THE BLACK BOX — AVIATION INVESTIGATION ARCHIVE (MH370)
 * UI/UX REDESIGN: CINEMATIC NIGHT SKY ENGINE & CHAPTER RECONSTRUCTION
 * Grounded in Official ATSB, Malaysian MOT, Inmarsat, and Forensic Records.
 */

(function () {
  'use strict';

  /* ==========================================================================
     01. FORENSIC DATABASE: SOURCES, EVIDENCE, THEORIES, WAYPOINTS & CHAPTERS
     ========================================================================== */

  const chaptersMeta = [
    { num: '01 / 12', name: 'THE NIGHT SKY', id: 'hero' },
    { num: '02 / 12', name: 'THE CASE FILE', id: 'case' },
    { num: '03 / 12', name: 'AIRWAY M770', id: 'flight' },
    { num: '04 / 12', name: 'THE LAST 90 MINUTES', id: 'last90' },
    { num: '05 / 12', name: 'PRIMARY RADAR', id: 'radar' },
    { num: '06 / 12', name: 'THE AIRSPACE TURN', id: 'turn' },
    { num: '07 / 12', name: 'THE 7TH SATELLITE ARC', id: 'satellite' },
    { num: '08 / 12', name: 'THE SOUTHERN OCEAN', id: 'ocean' },
    { num: '09 / 12', name: 'RECOVERED DEBRIS', id: 'debris' },
    { num: '10 / 12', name: 'UNDERWATER SEARCH', id: 'search' },
    { num: '11 / 12', name: 'FORENSIC EVIDENCE', id: 'evidence' },
    { num: '12 / 12', name: 'THEORY MATRIX & WHAT WE KNOW', id: 'matrix' }
  ];

  const sourcesData = {
    'SRC-001': {
      id: 'SRC-001',
      title: 'Safety Investigation Report: Malaysia Airlines Boeing 777-200ER (9M-MRO)',
      publisher: 'The Malaysian ICAO Annex 13 Safety Investigation Team for MH370',
      date: '30 July 2018',
      type: 'Official Accident Investigation Final Report (495 Pages)',
      excerpt: 'Concluded that the change in flight path likely resulted from manual inputs by a human actor. Unable to determine the real cause for the disappearance due to the absence of the aircraft wreckage and flight recorders.',
      url: 'https://www.mot.gov.my'
    },
    'SRC-002': {
      id: 'SRC-002',
      title: 'The Operational Search for MH370 (Final Report)',
      publisher: 'Australian Transport Safety Bureau (ATSB)',
      date: '3 October 2017',
      type: 'Official Search Operations Report',
      excerpt: 'Comprehensive 440-page operational record detailing 1,046 days of bathymetric mapping and sidescan sonar survey across 120,000 square kilometers along the 7th Arc in the Southern Indian Ocean.',
      url: 'https://www.atsb.gov.au/publications/investigation_reports/2014/aair/ae-2014-054'
    },
    'SRC-003': {
      id: 'SRC-003',
      title: 'MH370 — Definition of Underwater Search Areas',
      publisher: 'ATSB Satellite & Flight Path Working Group',
      date: 'December 2014 / Updated 2015',
      type: 'Technical Telemetry Analysis Report',
      excerpt: 'Detailed derivation of aircraft velocity vectors, fuel exhaustion parameters, and burst frequency offset (BFO) Doppler analysis defining the high-priority underwater search arc.',
      url: 'https://www.atsb.gov.au'
    },
    'SRC-004': {
      id: 'SRC-004',
      title: 'The Search for MH370: Inmarsat Satellite Data Analysis',
      publisher: 'Royal Institute of Navigation (Journal of Navigation)',
      date: 'January 2015',
      type: 'Peer-Reviewed Scientific Telemetry Paper (Ashton, Shuster et al.)',
      excerpt: 'Defines the mathematical methodology used by Inmarsat engineers to calculate round-trip microsecond radio delays (BTO) and Doppler shifts (BFO) that proved the aircraft flew south into the Indian Ocean.',
      url: 'https://www.cambridge.org/core/journals/journal-of-navigation'
    },
    'SRC-005': {
      id: 'SRC-005',
      title: 'Air-Ground Radio Communication Transcript Flight MH370',
      publisher: 'Department of Civil Aviation, Malaysia (DCA)',
      date: 'Released 1 April 2014',
      type: 'Official Air Traffic Control Audio Transcript',
      excerpt: 'Official 54-line verbatim transcript between MH370 and Lumpur Delivery, Ground, Tower, and Area Control Centre. Concludes with the final 01:19:30 MYT signoff: "Good night Malaysian three seven zero."',
      url: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Malaysia_Airlines_Flight_MH370_cockpit_transcript_%28official_1_April_2014%29.pdf'
    },
    'SRC-006': {
      id: 'SRC-006',
      title: 'Examination of Flaperon Found on Saint-André Beach, Réunion Island',
      publisher: 'DGA Techniques aéronautiques / French BEA / Paris Prosecutor',
      date: 'September 2015',
      type: 'Official Metallurgical & Forensic Examination Report',
      excerpt: 'Confirmed serial number 657BB corresponds to the right-wing flaperon of Boeing 777 MSN 28420 (9M-MRO). Trailing-edge composite shear damage demonstrated the flaperon was in a stowed, non-deployed position upon water impact.',
      url: 'https://www.defense.gouv.fr/dga'
    },
    'SRC-007': {
      id: 'SRC-007',
      title: 'Preliminary Report: Missing Boeing 777-200ER, 9M-MRO',
      publisher: 'Ministry of Transport Malaysia & Air Accident Investigation Bureau',
      date: '9 April 2014',
      type: 'Preliminary ICAO Accident Investigation Report',
      excerpt: 'Initial official factual findings detailing cargo manifest (including 221 kg of lithium-ion batteries), maintenance logbook clearance, and initial radar search timeline.',
      url: 'https://www.mot.gov.my'
    },
    'SRC-008': {
      id: 'SRC-008',
      title: 'Interpol Clears Stolen-Passport Passengers of Terrorist Ties',
      publisher: 'Interpol Headquarters, Lyon & Associated Press',
      date: '11 March 2014',
      type: 'Law Enforcement Intelligence Briefing',
      excerpt: 'Interpol Secretary General Ronald K. Noble confirmed that the two Iranian nationals travelling on stolen Austrian and Italian passports were asylum seekers seeking European transit, with zero links to terrorist organizations.',
      url: 'https://www.interpol.int'
    },
    'SRC-009': {
      id: 'SRC-009',
      title: 'MH370: The Flight Simulator and the Captain',
      publisher: 'BBC News & New York Magazine Intelligence Report',
      date: '28 July 2016',
      type: 'Investigative News Report',
      excerpt: 'Analysis of the FBI cyber-forensic recovery of deleted Microsoft Flight Simulator X files from Captain Zaharie Ahmad Shah’s home computer containing simulated waypoints into the Southern Indian Ocean.',
      url: 'https://www.bbc.com/news/world-asia-36873539'
    },
    'SRC-010': {
      id: 'SRC-010',
      title: 'Did Patent Transfer Cause MH370 Disappearance?',
      publisher: 'Snopes Fact Checking Archive',
      date: '19 March 2014',
      type: 'Investigative Fact Check & Patent Office Examination',
      excerpt: 'Disproved the viral claim that Jacob Rothschild gained sole ownership of patent US8671381B2 by killing four Freescale patent co-assignees on MH370. The patent was assigned entirely to Freescale Semiconductor Inc., not individual engineers.',
      url: 'https://www.snopes.com/fact-check/patent-conspiracy-mh370/'
    },
    'SRC-011': {
      id: 'SRC-011',
      title: 'Official Denial of Diego Garcia Landing / Intercept Claims',
      publisher: 'U.S. Embassy Kuala Lumpur & Pentagon Press Office',
      date: '12 April 2014',
      type: 'Diplomatic & Military Press Clarification',
      excerpt: 'Confirmed that Flight MH370 never flew near or landed at Naval Support Facility Diego Garcia. The 7th satellite arc is located over 2,000 miles south of the Chagos Archipelago.',
      url: 'https://my.usembassy.gov'
    },
    'SRC-012': {
      id: 'SRC-012',
      title: 'MH370 Relatives Say Passengers\' Phones Still Ringing',
      publisher: 'The Guardian (Aviation Correspondent)',
      date: '10 March 2014',
      type: 'Media Report on Family Dispatches',
      excerpt: 'Documented emotional accounts of Chinese families dialing vanished passengers and hearing ringing tones for several days following the disappearance.',
      url: 'https://www.theguardian.com/world/2014/mar/10/malaysia-airlines-flight-mh370-cellphones'
    },
    'SRC-013': {
      id: 'SRC-013',
      title: 'Why Ghost Cell Phones Ring When the Handset Is Dead',
      publisher: 'IEEE Spectrum (Telecom Engineering Analysis)',
      date: '12 March 2014',
      type: 'Technical Telecommunications Architecture Breakdown',
      excerpt: 'Explains that in wireless telephony networks, standard ringback tones are generated by intermediate telephone exchange switches while searching for base stations, and do not indicate a handset is receiving signal.',
      url: 'https://spectrum.ieee.org/why-ghost-cell-phones-ring-when-the-handset-is-dead'
    },
    'SRC-014': {
      id: 'SRC-014',
      title: 'A Startlingly Simple Theory About the Missing Malaysia Airlines Jet',
      publisher: 'Wired Magazine (Analysis of Chris Goodfellow Proposal)',
      date: '18 March 2014',
      type: 'Aviation Safety Analysis',
      excerpt: 'Examination of the cockpit electrical/cargo fire hypothesis proposing the crew turned toward Langkawi International Airport (runway 21) before being overcome by toxic fumes or hypoxia.',
      url: 'https://www.wired.com/2014/03/mh370-electrical-fire/'
    },
    'SRC-015': {
      id: 'SRC-015',
      title: 'Royal Malaysian Air Force (RMAF) Military Radar Data Briefing',
      publisher: 'Ministry of Defence, Malaysia',
      date: '15 March 2014',
      type: 'Defense Air Surveillance Briefing',
      excerpt: 'Revealed that military primary surveillance radar (PSR) tracked an unidentified aircraft turning west across the Malay Peninsula and north towards waypoint MEKAR in the Malacca Strait.',
      url: 'https://www.mod.gov.my'
    },
    'SRC-016': {
      id: 'SRC-016',
      title: 'Ocean Infinity Seabed Constructor Search Operations Review',
      publisher: 'Ocean Infinity / Government of Malaysia Contract Record',
      date: 'May 2018',
      type: 'Private Marine Survey Operational Summary',
      excerpt: 'Report on 112,000 square kilometers of deep seabed surveyed by 8 autonomous HUGIN submersibles under a "no cure, no fee" charter without locating aircraft debris.',
      url: 'https://oceaninfinity.com'
    },
    'SRC-017': {
      id: 'SRC-017',
      title: 'Fluid Dynamics and Numerical Simulations of MH370 Water Entry',
      publisher: 'Notices of the American Mathematical Society (Dr. Goong Chen et al.)',
      date: 'April 2015',
      type: 'Computational Fluid Dynamics Research Paper',
      excerpt: 'Numerical supercomputer modeling proposing a vertical or near-vertical entry (entry angle 90 degrees) would minimize fuselage fragmentation and surface oil slick formation.',
      url: 'https://www.ams.org/notices/201504/rnoti-p330.pdf'
    },
    'SRC-018': {
      id: 'SRC-018',
      title: 'What Really Happened to Malaysia\'s Missing Airplane',
      publisher: 'The Atlantic (William Langewiesche Investigative Dossier)',
      date: 'June 2019',
      type: 'Longform Investigative Aviation Journalism',
      excerpt: 'Comprehensive investigation into Captain Zaharie Ahmad Shah’s operational background, cockpit depressurization dynamics, and the forensic timeline of the turn.',
      url: 'https://www.theatlantic.com/magazine/archive/2019/07/mh370-malaysia-airlines/590653/'
    },
    'SRC-019': {
      id: 'SRC-019',
      title: 'Commercial Avionics Network Architecture and Remote Access Isolation',
      publisher: 'Federal Aviation Administration (FAA) & The Boeing Company',
      date: 'May 2014',
      type: 'Aviation Cyber-Safety Architectural Reference',
      excerpt: 'Confirmed that the flight control fly-by-wire computer, flight management computers (FMC), and Aircraft Condition Monitoring System are physically and logically isolated from passenger Wi-Fi and cabin entertainment.',
      url: 'https://www.faa.gov'
    },
    'SRC-020': {
      id: 'SRC-020',
      title: 'Aviation Investigation Methodology & Rebuttal of Fringe Claims',
      publisher: 'CNN Intelligence & Aviation Analysts Panel',
      date: 'March 2014',
      type: 'Media Analysis',
      excerpt: 'Documented rejection by astrophysicists, air accident investigators, and meteorologists of speculations regarding black holes, extraterrestrial abduction, and meteor strikes.',
      url: 'https://www.cnn.com'
    }
  };

  const evidenceData = [
    {
      id: 'EV-001',
      title: 'Right-Wing Flaperon (Reunion Island)',
      category: 'debris',
      status: 'CONFIRMED',
      date: '29 July 2015',
      location: 'Saint-André, Réunion Island',
      description: 'First physical proof of aircraft crash. Part numbers confirmed it belonged to 9M-MRO. Trailing edge fracture analysis showed flaps were retracted at impact.',
      sourceId: 'SRC-006'
    },
    {
      id: 'EV-002',
      title: 'Horizontal Stabilizer Fairing ("NO STEP")',
      category: 'debris',
      status: 'CONFIRMED',
      date: 'December 2015',
      location: 'Vilankulo, Mozambique',
      description: 'Composite panel recovered by Blaine Gibson. Stenciled lettering "NO STEP" matched Malaysia Airlines proprietary font and paint chemistry.',
      sourceId: 'SRC-002'
    },
    {
      id: 'EV-003',
      title: 'Right Outboard Flap Section',
      category: 'debris',
      status: 'CONFIRMED',
      date: '24 June 2016',
      location: 'Pemba Island, Tanzania',
      description: 'Large wing section with manufacturer date code matching 9M-MRO assembly line. Critical forensic evidence confirmed flap was in cruising retracted position at sea strike.',
      sourceId: 'SRC-002'
    },
    {
      id: 'EV-004',
      title: 'Engine Cowling Stencil ("Roy")',
      category: 'debris',
      status: 'REPORTED',
      date: 'March 2016',
      location: 'Mossel Bay, South Africa',
      description: 'Rolls-Royce Trent 800 engine cowling section with partial "RR" emblem. Consistent with 9M-MRO engine configuration.',
      sourceId: 'SRC-002'
    },
    {
      id: 'EV-005',
      title: 'Civilian Transponder Cease at IGARI',
      category: 'radar',
      status: 'DOCUMENTED',
      date: '08 March 2014, 01:21:13 MYT',
      location: 'Waypoint IGARI (Gulf of Thailand)',
      description: 'Secondary radar Mode-S transponder ceased transmitting exactly at the Kuala Lumpur / Ho Chi Minh FIR airspace boundary.',
      sourceId: 'SRC-001'
    },
    {
      id: 'EV-006',
      title: 'RMAF Military Primary Radar Track',
      category: 'radar',
      status: 'DOCUMENTED',
      date: '08 March 2014, 01:21 - 02:22 MYT',
      location: 'Malay Peninsula & Malacca Strait',
      description: 'Air defense radar skin returns recorded an unscheduled turn to heading 240, passing Kota Bharu, Penang, and Pulau Perak towards waypoint MEKAR.',
      sourceId: 'SRC-015'
    },
    {
      id: 'EV-007',
      title: 'Inmarsat SDU 7th Handshake (08:19 MYT)',
      category: 'satellite',
      status: 'CONFIRMED',
      date: '08 March 2014, 08:19:37 MYT',
      location: 'Southern Indian Ocean (7th Arc)',
      description: 'Unprompted satellite log-on request indicating electrical reboot following main engine flameout due to fuel exhaustion.',
      sourceId: 'SRC-004'
    },
    {
      id: 'EV-008',
      title: 'Final ATC Radio Transmission ("Good night")',
      category: 'cockpit',
      status: 'DOCUMENTED',
      date: '08 March 2014, 01:19:30 MYT',
      location: 'Kuala Lumpur FIR',
      description: 'Captain Zaharie broadcasted "Good night Malaysian three seven zero" after being instructed to switch to Ho Chi Minh frequency 120.9 MHz.',
      sourceId: 'SRC-005'
    },
    {
      id: 'EV-009',
      title: 'Flight Simulator Indian Ocean Trajectory',
      category: 'cockpit',
      status: 'DOCUMENTED',
      date: 'Recovered April 2014',
      location: 'Captain Zaharie Private Residence',
      description: 'FBI cyber forensic recovery found six deleted waypoints on home simulator plotting a route into the southern Indian Ocean. Intent unproven.',
      sourceId: 'SRC-009'
    },
    {
      id: 'EV-010',
      title: 'Lithium-Ion Battery Cargo (221 kg)',
      category: 'cargo',
      status: 'DOCUMENTED',
      date: '08 March 2014 Cargo Manifest',
      location: 'Forward / Aft Cargo Holds',
      description: 'Cargo included 221 kg of lithium-ion batteries and 4,563 kg of fresh mangosteens packed in organic matter. All passed standard screening.',
      sourceId: 'SRC-007'
    },
    {
      id: 'EV-011',
      title: 'CSIRO Reverse-Drift Oceanographic Modeling',
      category: 'debris',
      status: 'CONFIRMED',
      date: '2016 - 2017',
      location: 'Western Indian Ocean Basin',
      description: 'Computer oceanographic drift models factoring real ocean surface winds and currents placed the debris origin along the 7th Arc between 32°S and 36°S.',
      sourceId: 'SRC-002'
    },
    {
      id: 'EV-012',
      title: 'Underwater Sonar Scan of 120,000 km²',
      category: 'satellite',
      status: 'CONFIRMED',
      date: '2014 - 2017',
      location: '7th Arc Seabed',
      description: 'Deep-tow high-resolution sonar mapped sea floor to 6,000m depths. No aircraft debris field located; ruled out vast majority of primary arc.',
      sourceId: 'SRC-002'
    },
    {
      id: 'EV-013',
      title: 'Two Passengers with Stolen Passports Cleared',
      category: 'cockpit',
      status: 'CONFIRMED',
      date: '11 March 2014',
      location: 'Interpol Headquarters / KLIA',
      description: 'Interpol cleared two Iranian asylum seekers travelling on stolen Austrian and Italian passports. No intelligence or terror connections.',
      sourceId: 'SRC-008'
    },
    {
      id: 'EV-014',
      title: 'Cockpit Oxygen System Configuration',
      category: 'cockpit',
      status: 'DOCUMENTED',
      date: 'Boeing 777 Flight Operations Manual',
      location: 'Flight Deck (Left / Right Console)',
      description: 'Flight crew equipped with quick-donning 100% positive-pressure oxygen masks with 2.5 hours endurance; passenger masks provide 12-15 minutes.',
      sourceId: 'SRC-001'
    },
    {
      id: 'EV-015',
      title: 'Acoustic Locator Beacon Expiration (37.5 kHz)',
      category: 'satellite',
      status: 'DOCUMENTED',
      date: 'April 2014 (30-day battery life)',
      location: 'Flight Recorders (FDR / CVR)',
      description: 'Underwater acoustic beacons attached to the black boxes had a mandatory battery life of 30 days. No verified acoustic detections prior to expiration.',
      sourceId: 'SRC-002'
    }
  ];

  const theoriesData = [
    {
      id: 'TH-001',
      title: 'Pilot Deliberate Action',
      status: 'HYPOTHESIS',
      claim: 'Captain Zaharie Ahmad Shah or First Officer Fariq Abdul Hamid intentionally depressurized the cabin, disabled transponders, and diverted the aircraft into the Southern Indian Ocean.',
      evidence: 'Deliberate navigation across international FIR boundaries and via established waypoints (IGARI, VAMPI, MEKAR); recovered home simulator coordinates in southern Indian Ocean.',
      counterpoints: 'Malaysian police and psychiatric evaluations found no signs of financial crisis, mental illness, marital collapse, or ideological radicalization. Motive unproven.',
      sourceId: 'SRC-001'
    },
    {
      id: 'TH-002',
      title: 'Unlawful Interference / Hijacking',
      status: 'HYPOTHESIS',
      claim: 'Unknown hijackers breached the reinforced cockpit door, incapacitated the flight crew, and redirected the aircraft.',
      evidence: 'Disabling of SSR transponder and navigation at the FIR boundary fits tactical evasion techniques.',
      counterpoints: 'Post-9/11 Boeing 777 cockpit doors feature electronic deadbolts resistant to forced entry. No passenger distress calls or cabin squawk codes (7500) broadcasted.',
      sourceId: 'SRC-001'
    },
    {
      id: 'TH-003',
      title: 'Terrorist Attack (Stolen Passports)',
      status: 'DISPUTED',
      claim: 'Terrorist operatives boarded using stolen European passports to execute a suicide attack.',
      evidence: 'Two passengers (Pouria Nour Mohammad Mehrdad and Delavar Seyed Mohammadreza) boarded on stolen Austrian and Italian passports.',
      counterpoints: 'Interpol and international intelligence agencies thoroughly investigated and cleared both individuals as asylum seekers seeking European transit with zero terror links.',
      sourceId: 'SRC-008'
    },
    {
      id: 'TH-004',
      title: 'Cargo / Electrical Fire',
      status: 'HYPOTHESIS',
      claim: 'A thermal runaway in the 221 kg shipment of lithium-ion batteries created toxic smoke, prompting the crew to turn toward Langkawi airport before succumbing to hypoxia.',
      evidence: 'Cargo hold contained 221 kg of lithium-ion batteries. The turn at IGARI pointed approximately toward runway 21 at Langkawi International.',
      counterpoints: 'An uncontained catastrophic fire in an aircraft typically destroys flight controls within 20–30 minutes (e.g. Swissair 111, UPS 6). Inmarsat data proved MH370 flew for an additional 6 hours.',
      sourceId: 'SRC-014'
    },
    {
      id: 'TH-005',
      title: 'Military Shoot-Down',
      status: 'DISPUTED',
      claim: 'The aircraft was accidentally or deliberately shot down during a military exercise over the South China Sea or Indian Ocean.',
      evidence: 'Joint military exercises (e.g. Cope Tiger) take place in Southeast Asia.',
      counterpoints: 'Contradicted completely by physical debris found in Réunion/Tanzania and 7 subsequent hourly Inmarsat satellite pings tracking the aircraft across thousands of miles.',
      sourceId: 'SRC-004'
    },
    {
      id: 'TH-006',
      title: 'Cyberattack / Remote Avionics Override',
      status: 'DISPUTED',
      claim: 'Hackers used software exploits to remotely hijack the fly-by-wire controls through passenger Wi-Fi or satellite communications.',
      evidence: 'Commercial security researchers highlighted vulnerabilities in consumer in-flight entertainment routers.',
      counterpoints: 'Boeing and FAA avionics certification mandates strict physical air-gaps between passenger entertainment networks and the flight management computer / flight controls.',
      sourceId: 'SRC-019'
    },
    {
      id: 'TH-007',
      title: 'Diego Garcia Landing / Intercept',
      status: 'DISPUTED',
      claim: 'The aircraft flew to the secretive U.S. naval military facility at Diego Garcia in the Chagos Archipelago and was either landed or shot down.',
      evidence: 'Diego Garcia is located in the central Indian Ocean.',
      counterpoints: 'Geographically incompatible with Inmarsat BTO distance arcs, which place the aircraft thousands of miles south. The U.S. Embassy and military issued formal denials.',
      sourceId: 'SRC-011'
    },
    {
      id: 'TH-008',
      title: 'Freescale Patent / Rothschild Conspiracy',
      status: 'DISPUTED',
      claim: 'Four co-inventors of a semiconductor patent (KL-03 microcontroller) died on board, transferring sole rights to Jacob Rothschild / Carlyle Group.',
      evidence: '20 Freescale Semiconductor employees were confirmed passengers on Flight MH370.',
      counterpoints: 'Snopes and patent office records proved the patent (US8671381B2) belonged entirely to Freescale Semiconductor as corporate assignee, not individual employees. No death-transfer clause existed.',
      sourceId: 'SRC-010'
    },
    {
      id: 'TH-009',
      title: 'Phantom Cellphone Ringing',
      status: 'DISPUTED',
      claim: 'Family members dialed passengers’ cell phones days after the disappearance and heard ringing, suggesting the plane had landed safely in secret.',
      evidence: 'Multiple relatives in Beijing presented video recordings of ringing tones upon dialing lost passengers.',
      counterpoints: 'Telecommunications network engineers confirmed that phantom ringing occurs at the cellular switching center while searching for handsets before timing out, and does not mean the phone was connected.',
      sourceId: 'SRC-013'
    },
    {
      id: 'TH-010',
      title: 'Vertical Entry (90-Degree Dive)',
      status: 'HYPOTHESIS',
      claim: 'A Texas A&M fluid dynamics simulation proposed the plane entered the water at a steep 90-degree nose-down angle, causing minimal surface wreckage.',
      evidence: 'Computational fluid dynamic models show clean water entry with reduced bending moment on wings.',
      counterpoints: 'ATSB debris examination showed trailing-edge composite tears on the flaperon and flap indicating severe lateral tearing and high-speed flutter inconsistent with a simple clean entry.',
      sourceId: 'SRC-017'
    },
    {
      id: 'TH-011',
      title: 'North Korea Diversion',
      status: 'DISPUTED',
      claim: 'The aircraft had sufficient fuel to reach Pyongyang, North Korea and was hijacked by foreign state operatives.',
      evidence: 'Boeing 777 range allowed for regional flight capabilities.',
      counterpoints: 'Military primary radar and Inmarsat Doppler shift data definitively prove the plane turned west and then flew south towards Antarctica, not northeast toward the Korean peninsula.',
      sourceId: 'SRC-004'
    },
    {
      id: 'TH-012',
      title: 'MH17 Airframe Substitution',
      status: 'DISPUTED',
      claim: 'Flight MH17 shot down in Ukraine four months later was actually the disguised hull of MH370 in a false-flag swap.',
      evidence: 'Both flights were Malaysia Airlines Boeing 777-200ER aircraft lost in 2014.',
      counterpoints: 'Dutch Safety Board metallurgical evidence, airframe registration plates, manufacturer serial numbers, and maintenance histories confirmed MH17 was 9M-MRD, while MH370 was 9M-MRO.',
      sourceId: 'SRC-001'
    }
  ];

  const flightWaypoints = [
    { index: 0, name: 'WMKK (Kuala Lumpur Int\'l)', time: '00:41 MYT (16:41 UTC)', lat: 2.7456, lng: 101.7099, alt: '0 FT (RUNWAY 32R)', speed: '160 KTS', heading: '320°', transponder: 'ACTIVE [SQUAWK 2157]' },
    { index: 1, name: 'CLIMBING TO FL350', time: '01:01 MYT (17:01 UTC)', lat: 5.2500, lng: 102.8000, alt: 'FL350 (35,000 FT)', speed: '468 KTS', heading: '025° (NORTHEAST)', transponder: 'ACTIVE [SQUAWK 2157]' },
    { index: 2, name: 'FINAL ACARS REPORT', time: '01:07 MYT (17:07 UTC)', lat: 6.2000, lng: 103.2000, alt: 'FL350 (35,000 FT)', speed: '471 KTS', heading: '025°', transponder: 'ACTIVE [SQUAWK 2157]' },
    { index: 3, name: 'WAYPOINT IGARI (LAST ATC)', time: '01:19 - 01:21 MYT', lat: 6.9367, lng: 103.5850, alt: 'FL350 (35,000 FT)', speed: '470 KTS', heading: '025° (FIR BOUNDARY)', transponder: 'OFF AT 01:21:13 MYT' },
    { index: 4, name: 'TURN OVER PENANG', time: '01:37 MYT (17:37 UTC)', lat: 5.4164, lng: 100.3327, alt: 'DATA NOT DISPLAYED [PSR]', speed: '490 KTS', heading: '240° (WESTBOUND)', transponder: 'TRANSPONDER INOPERATIVE' },
    { index: 5, name: 'PULAU PERAK (MALACCA STRAIT)', time: '02:02 MYT (18:02 UTC)', lat: 5.6800, lng: 98.9400, alt: 'DATA NOT DISPLAYED [PSR]', speed: '480 KTS', heading: '280° (NORTHWEST)', transponder: 'TRANSPONDER INOPERATIVE' },
    { index: 6, name: 'WAYPOINT MEKAR (LAST RADAR)', time: '02:22 MYT (18:22 UTC)', lat: 6.8000, lng: 96.5000, alt: 'ESTIMATED FL295', speed: '495 KTS', heading: '295° (ANDAMAN SEA)', transponder: 'PRIMARY RADAR LOST' }
  ];

  /* ==========================================================================
     02. NIGHT SKY STARFIELD CANVAS ENGINE
     ========================================================================== */
  let stars = [];

  function initStarfield() {
    const canvas = document.getElementById('skyStarCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
    }

    function createStars() {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 3800);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.4,
          baseAlpha: Math.random() * 0.7 + 0.2,
          alpha: Math.random() * 0.7 + 0.2,
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          twinkleDir: Math.random() > 0.5 ? 1 : -1
        });
      }
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.alpha += s.twinkleSpeed * s.twinkleDir;
        if (s.alpha > 0.95) {
          s.alpha = 0.95;
          s.twinkleDir = -1;
        } else if (s.alpha < s.baseAlpha * 0.4) {
          s.alpha = s.baseAlpha * 0.4;
          s.twinkleDir = 1;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 232, 240, ${s.alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(render);
    }

    window.addEventListener('resize', resize);
    resize();
    render();
  }

  /* ==========================================================================
     03. AIRCRAFT BEACON IN THE SKY & DISAPPEARANCE EVENT
     ========================================================================== */
  function initAircraftBeacon() {
    const plane = document.getElementById('distantAircraft');
    const pulse = document.getElementById('radarLossPulse');
    const heroBeats = document.querySelectorAll('.hero-beat');

    if (!plane) return;

    let posX = -5; // percent
    let posY = 28;
    let disappeared = false;

    function move() {
      if (disappeared) return;

      posX += 0.055;
      posY += 0.006;
      plane.style.left = posX + '%';
      plane.style.top = posY + '%';

      // Advance story beats based on position
      if (posX > 18 && posX < 38) {
        showHeroBeat(0);
      } else if (posX >= 38 && posX < 58) {
        showHeroBeat(1);
      } else if (posX >= 58 && posX < 68) {
        showHeroBeat(2);
      } else if (posX >= 68) {
        // Disappearance Event!
        disappeared = true;
        plane.style.opacity = '0';

        if (pulse) {
          pulse.style.left = posX + '%';
          pulse.style.top = posY + '%';
          pulse.classList.add('triggered');
        }

        playCockpitAudio(240, 0.4, 'sawtooth'); // static loss pulse
        setTimeout(() => {
          showHeroBeat(3); // Monolith Reveal
        }, 1200);
        return;
      }

      requestAnimationFrame(move);
    }

    function showHeroBeat(index) {
      heroBeats.forEach((b, i) => {
        b.classList.toggle('active', i === index);
      });
    }

    // Delay start slightly for atmosphere
    setTimeout(() => {
      move();
    }, 1000);
  }

  /* ==========================================================================
     04. AUDIO SYNTHESIZER (WEB AUDIO API)
     ========================================================================== */
  let audioCtx = null;
  let audioActive = false;

  function initAudio() {
    const btn = document.getElementById('audioToggleBtn');
    const statusText = document.getElementById('audioStatus');
    const icon = document.getElementById('audioIcon');

    if (!btn) return;

    btn.addEventListener('click', () => {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) audioCtx = new AudioContext();
      }

      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      audioActive = !audioActive;
      btn.setAttribute('aria-pressed', audioActive);

      if (audioActive) {
        statusText.textContent = 'ONLINE';
        icon.className = 'fa-solid fa-volume-high';
        playCockpitAudio(880, 0.08, 'sine');
      } else {
        statusText.textContent = 'MUTED';
        icon.className = 'fa-solid fa-volume-xmark';
      }
    });
  }

  function playCockpitAudio(freq = 600, duration = 0.05, type = 'sine') {
    if (!audioActive || !audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Fallback
    }
  }

  /* ==========================================================================
     05. CHAPTER NAVIGATION & SIDE TECHNICAL DATA RAIL
     ========================================================================== */
  function initChapterTracking() {
    const numEl = document.getElementById('currentChapterNum');
    const nameEl = document.getElementById('currentChapterName');
    const progressBar = document.getElementById('navScrollProgress');
    const sections = document.querySelectorAll('section[data-chapter]');

    // Side Rail Elements
    const railSignal = document.getElementById('railSignalVal');
    const railRadar = document.getElementById('railRadarVal');
    const railPos = document.getElementById('railPosVal');

    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      const progress = (scrollPos / docHeight) * 100;

      if (progressBar) progressBar.style.width = Math.min(progress, 100) + '%';

      // Check current visible chapter
      sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
          const chapIndex = parseInt(sec.getAttribute('data-chapter'), 10) - 1;
          const meta = chaptersMeta[chapIndex];

          if (meta && numEl && nameEl) {
            numEl.textContent = meta.num;
            nameEl.textContent = meta.name;
          }

          // Contextual Side Data Rail Update
          if (railSignal && railRadar && railPos) {
            if (meta.id === 'hero' || meta.id === 'case') {
              railSignal.textContent = 'TRANSPONDER: ON';
              railSignal.className = 'r-val text-green';
              railRadar.textContent = 'SECONDARY (SSR)';
              railPos.textContent = 'GULF OF THAILAND';
            } else if (meta.id === 'flight' || meta.id === 'last90') {
              railSignal.textContent = 'LOST AT IGARI';
              railSignal.className = 'r-val text-red';
              railRadar.textContent = 'PRIMARY (PSR)';
              railPos.textContent = 'WAYPOINT MEKAR';
            } else if (meta.id === 'radar' || meta.id === 'turn') {
              railSignal.textContent = 'SKIN REFLECTION';
              railSignal.className = 'r-val text-amber';
              railRadar.textContent = 'MILITARY (RMAF)';
              railPos.textContent = 'MALACCA STRAIT';
            } else if (meta.id === 'satellite' || meta.id === 'ocean' || meta.id === 'debris' || meta.id === 'search') {
              railSignal.textContent = '7TH BTO PING';
              railSignal.className = 'r-val text-amber';
              railRadar.textContent = 'INMARSAT-3 F1';
              railPos.textContent = 'SOUTHERN INDIAN OCEAN';
            } else {
              railSignal.textContent = 'UNRESOLVED';
              railSignal.className = 'r-val text-unlocated';
              railRadar.textContent = 'RADAR CONCLUDED';
              railPos.textContent = '7TH ARC SEABED';
            }
          }
        }
      });
    }, { passive: true });
  }

  function initChapterDirectoryModal() {
    const toggleBtn = document.getElementById('menuToggleBtn');
    const modal = document.getElementById('chapterModal');
    const closeBtn = document.getElementById('closeDirBtn');
    const links = document.querySelectorAll('.dir-link');

    if (!modal) return;

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        playCockpitAudio(720, 0.05, 'triangle');
      });
    }

    function closeModal() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    links.forEach(l => l.addEventListener('click', closeModal));
  }

  /* ==========================================================================
     06. INTERACTIVE ROUTE MAP (LEAFLET CARTODB DARK)
     ========================================================================== */
  let routeMap = null;
  let planeMarker = null;

  function initRouteMap() {
    const mapEl = document.getElementById('flightRouteMap');
    if (!mapEl || typeof L === 'undefined') return;

    try {
      routeMap = L.map('flightRouteMap', {
        center: [5.2, 102.5],
        zoom: 6,
        minZoom: 4,
        maxZoom: 9,
        scrollWheelZoom: false,
        attributionControl: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd'
      }).addTo(routeMap);

      // Scheduled Flight Route (Cyan)
      const scheduledLine = [
        [2.7456, 101.7099],
        [5.2500, 102.8000],
        [6.2000, 103.2000],
        [6.9367, 103.5850]
      ];
      L.polyline(scheduledLine, { color: '#38BDF8', weight: 3, opacity: 0.9 }).addTo(routeMap);

      // Unscheduled Turn Across Malay Peninsula (Amber)
      const turnLine = [
        [6.9367, 103.5850], // IGARI
        [6.0500, 102.2000], // Kota Bharu
        [5.4164, 100.3327], // Penang
        [5.6800, 98.9400],  // Pulau Perak
        [6.8000, 96.5000]   // Waypoint MEKAR
      ];
      L.polyline(turnLine, { color: '#F59E0B', weight: 3, opacity: 0.95 }).addTo(routeMap);

      // Waypoint Markers
      flightWaypoints.forEach(wp => {
        const circle = L.circleMarker([wp.lat, wp.lng], {
          radius: 5,
          color: wp.index < 4 ? '#38BDF8' : '#F59E0B',
          fillColor: '#020711',
          fillOpacity: 1,
          weight: 2
        }).addTo(routeMap);

        circle.bindPopup(`
          <div style="font-family:'IBM Plex Mono',monospace; font-size:11px; color:#E2E8F0; background:#04111F; padding:4px;">
            <strong style="color:#38BDF8;">${wp.name}</strong><br>
            Time: ${wp.time}<br>
            Altitude: ${wp.alt}
          </div>
        `);
      });

      // Moving Aircraft DivIcon
      const planeIcon = L.divIcon({
        className: 'sky-plane-icon',
        html: `<div style="width:14px; height:14px; background:#38BDF8; border-radius:50%; box-shadow:0 0 10px #38BDF8; border:2px solid #FFFFFF;"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });

      planeMarker = L.marker([flightWaypoints[0].lat, flightWaypoints[0].lng], { icon: planeIcon }).addTo(routeMap);

      // Scrubber hookup
      const scrubber = document.getElementById('flightScrubber');
      if (scrubber) {
        scrubber.addEventListener('input', (e) => {
          const idx = parseInt(e.target.value, 10);
          updateMapHud(idx);
          playCockpitAudio(480 + idx * 40, 0.03, 'sine');
        });
      }
    } catch (e) {
      console.warn('Map init:', e);
    }
  }

  function updateMapHud(index) {
    const wp = flightWaypoints[index];
    if (!wp) return;

    if (planeMarker && routeMap) {
      planeMarker.setLatLng([wp.lat, wp.lng]);
      routeMap.panTo([wp.lat, wp.lng], { animate: true, duration: 0.5 });
    }

    const hudWaypoint = document.getElementById('hudWaypoint');
    const hudTime = document.getElementById('hudTime');
    const hudAltitude = document.getElementById('hudAltitude');
    const hudSpeed = document.getElementById('hudSpeed');
    const hudTransponder = document.getElementById('hudTransponder');
    const hudHeading = document.getElementById('hudHeading');

    if (hudWaypoint) hudWaypoint.textContent = wp.name;
    if (hudTime) hudTime.textContent = wp.time;
    if (hudAltitude) hudAltitude.textContent = wp.alt;
    if (hudSpeed) hudSpeed.textContent = wp.speed;
    if (hudHeading) hudHeading.textContent = wp.heading;

    if (hudTransponder) {
      hudTransponder.textContent = wp.transponder;
      hudTransponder.className = index >= 3 ? 'val text-red' : 'val text-green';
    }
  }

  /* ==========================================================================
     07. FULLSCREEN RADAR SCOPE CANVAS
     ========================================================================== */
  function initRadarScope() {
    const canvas = document.getElementById('radarScopeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const center = { x: w / 2, y: h / 2 };
    const radius = w / 2 - 10;

    let sweepAngle = 0;

    const radarPoints = [
      { x: center.x + 40, y: center.y - 75, label: 'IGARI' },
      { x: center.x - 10, y: center.y - 20, label: 'PENANG' },
      { x: center.x - 70, y: center.y - 50, label: 'P.PERAK' },
      { x: center.x - 115, y: center.y - 90, label: 'MEKAR' }
    ];

    function draw() {
      ctx.fillStyle = 'rgba(1, 4, 10, 0.22)';
      ctx.fillRect(0, 0, w, h);

      // Outer Ring
      ctx.strokeStyle = '#0B263D';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Range Rings (50, 100, 150, 200 NM)
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(center.x, center.y, (radius / 4) * i, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
        ctx.stroke();
      }

      // Compass Axis Lines
      ctx.beginPath();
      ctx.moveTo(center.x, 10);
      ctx.lineTo(center.x, h - 10);
      ctx.moveTo(10, center.y);
      ctx.lineTo(w - 10, center.y);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
      ctx.stroke();

      // Rotating Radar Sweep Line
      sweepAngle += 0.024;
      if (sweepAngle >= Math.PI * 2) sweepAngle = 0;

      const sweepX = center.x + Math.cos(sweepAngle) * radius;
      const sweepY = center.y + Math.sin(sweepAngle) * radius;

      const grad = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, radius);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0.03)');
      grad.addColorStop(1, 'rgba(56, 189, 248, 0.25)');

      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.arc(center.x, center.y, radius, sweepAngle - 0.22, sweepAngle);
      ctx.closePath();
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.lineTo(sweepX, sweepY);
      ctx.strokeStyle = '#38BDF8';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw Air Defense Waypoint Blips
      radarPoints.forEach(p => {
        ctx.fillStyle = '#38BDF8';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.font = '9px "IBM Plex Mono", monospace';
        ctx.fillStyle = '#94A3B8';
        ctx.fillText(p.label, p.x + 6, p.y - 4);
      });

      requestAnimationFrame(draw);
    }

    draw();
  }

  /* ==========================================================================
     08. SATELLITE 7TH ARC GEOMETRY CANVAS
     ========================================================================== */
  function initSatelliteCanvas() {
    const canvas = document.getElementById('satelliteArcsCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    function renderSatellite() {
      ctx.clearRect(0, 0, w, h);

      // Inmarsat-3 F1 position (64.5°E Geostationary)
      const sat = { x: 140, y: 110 };

      // Earth Globe Curvature
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(270, 260, 180, 0, Math.PI * 2);
      ctx.stroke();

      // Equator
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
      ctx.beginPath();
      ctx.moveTo(90, 260);
      ctx.lineTo(450, 260);
      ctx.stroke();

      // 7 BTO Distance Arcs
      const radii = [130, 155, 180, 205, 230, 255, 280];
      radii.forEach((r, idx) => {
        ctx.strokeStyle = idx === 6 ? '#F59E0B' : 'rgba(56, 189, 248, 0.25)';
        ctx.lineWidth = idx === 6 ? 2.5 : 1;
        ctx.beginPath();
        ctx.arc(sat.x, sat.y, r, 0.35, 1.35);
        ctx.stroke();
      });

      // Satellite Dot
      ctx.fillStyle = '#38BDF8';
      ctx.beginPath();
      ctx.arc(sat.x, sat.y, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = '10px "IBM Plex Mono", monospace';
      ctx.fillStyle = '#38BDF8';
      ctx.fillText('INMARSAT-3 F1 (64.5°E)', sat.x + 8, sat.y - 6);

      // 7th Arc Callout
      ctx.fillStyle = '#F59E0B';
      ctx.fillText('7TH ARC (08:19 MYT FUEL FLAMEOUT)', 220, 375);
    }

    renderSatellite();
  }

  /* ==========================================================================
     09. EVIDENCE ROOM DYNAMIC CARDS
     ========================================================================== */
  function initEvidenceRoom() {
    const grid = document.getElementById('evidenceCardsGrid');
    const counter = document.getElementById('evidenceVisibleCount');
    const filterButtons = document.querySelectorAll('#evidenceFilterGroup .filter-pill');

    if (!grid) return;

    function render(category = 'all') {
      grid.innerHTML = '';
      const filtered = category === 'all'
        ? evidenceData
        : evidenceData.filter(e => e.category === category);

      if (counter) counter.textContent = filtered.length;

      filtered.forEach(item => {
        const card = document.createElement('article');
        card.className = 'ev-card';

        let badgeClass = 'badge-doc';
        if (item.status === 'CONFIRMED') badgeClass = 'badge-conf';
        if (item.status === 'REPORTED') badgeClass = 'badge-rep';
        if (item.status === 'HYPOTHESIS') badgeClass = 'badge-hyp';

        card.innerHTML = `
          <div class="ev-card-top">
            <span class="ev-card-id">${item.id}</span>
            <span class="badge ${badgeClass}">${item.status}</span>
          </div>
          <h3 class="ev-card-title">${item.title}</h3>
          <p class="ev-card-desc">${item.description}</p>
          <div class="ev-card-footer">
            <span><i class="fa-solid fa-calendar-day"></i> ${item.date}</span>
            <a href="#sources" class="src-ref" data-source-id="${item.sourceId}">[${item.sourceId}]</a>
          </div>
        `;

        grid.appendChild(card);
      });

      attachSourceLinks();
    }

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-cat');
        render(cat);
        playCockpitAudio(600, 0.04, 'sine');
      });
    });

    render('all');
  }

  /* ==========================================================================
     10. THEORY MATRIX TABLE
     ========================================================================== */
  function initTheoryMatrix() {
    const tbody = document.getElementById('matrixTableBody');
    const filterBtns = document.querySelectorAll('.m-pill');

    if (!tbody) return;

    function render(filter = 'all') {
      tbody.innerHTML = '';
      const list = filter === 'all'
        ? theoriesData
        : theoriesData.filter(t => t.status === filter);

      list.forEach(t => {
        const tr = document.createElement('tr');
        let statusClass = 'badge-hyp';
        if (t.status === 'DISPUTED') statusClass = 'badge-disp';
        if (t.status === 'UNVERIFIED') statusClass = 'badge-unver';

        tr.innerHTML = `
          <td class="matrix-id-col">${t.id}</td>
          <td>
            <span class="matrix-claim-title">${t.title}</span>
            <span>${t.claim}</span>
          </td>
          <td>${t.evidence}</td>
          <td>${t.counterpoints}</td>
          <td><span class="badge ${statusClass}">${t.status}</span></td>
          <td><a href="#sources" class="src-ref" data-source-id="${t.sourceId}">[${t.sourceId}]</a></td>
        `;

        tbody.appendChild(tr);
      });

      attachSourceLinks();
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterStatus = btn.getAttribute('data-matrix-filter');
        render(filterStatus);
        playCockpitAudio(640, 0.04, 'sine');
      });
    });

    render('all');
  }

  /* ==========================================================================
     11. SOURCES & SLIDE-OUT DRAWER
     ========================================================================== */
  function initSourcesArchive() {
    const grid = document.getElementById('sourcesGrid');
    if (!grid) return;

    grid.innerHTML = '';
    Object.values(sourcesData).forEach(src => {
      const card = document.createElement('article');
      card.className = 'src-card';

      card.innerHTML = `
        <div class="src-card-top">
          <span class="src-card-id">${src.id}</span>
          <span class="src-card-pub">${src.date}</span>
        </div>
        <h3 class="src-card-title">${src.title}</h3>
        <p class="src-card-desc">${src.excerpt}</p>
        <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="src-card-link">
          <i class="fa-solid fa-arrow-up-right-from-square"></i> ${src.publisher}
        </a>
      `;

      grid.appendChild(card);
    });
  }

  function initSourceDrawer() {
    const drawer = document.getElementById('sourceDrawer');
    const closeBtn = document.getElementById('drawerCloseBtn');

    if (!drawer || !closeBtn) return;

    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
      }
    });
  }

  function openSourceDrawer(sourceId) {
    const src = sourcesData[sourceId];
    const drawer = document.getElementById('sourceDrawer');
    if (!src || !drawer) return;

    document.getElementById('drawerSourceId').textContent = src.id;
    document.getElementById('drawerSourceTitle').textContent = src.title;
    document.getElementById('drawerSourcePub').textContent = src.publisher;
    document.getElementById('drawerSourceDate').textContent = src.date;
    document.getElementById('drawerSourceType').textContent = src.type;
    document.getElementById('drawerSourceExcerpt').textContent = src.excerpt;
    document.getElementById('drawerSourceUrl').href = src.url;

    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    playCockpitAudio(720, 0.05, 'triangle');
  }

  function attachSourceLinks() {
    document.querySelectorAll('.src-ref').forEach(link => {
      link.onclick = function (e) {
        e.preventDefault();
        const id = this.getAttribute('data-source-id');
        openSourceDrawer(id);
      };
    });
  }

  /* ==========================================================================
     12. SEARCH OPERATIONS FILTER (CHAPTER 10)
     ========================================================================== */
  function initSearchFilters() {
    const btns = document.querySelectorAll('.ops-filter-row .op-btn');
    const cards = document.querySelectorAll('.op-card');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');

        cards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });

        playCockpitAudio(520, 0.04, 'sine');
      });
    });
  }

  /* ==========================================================================
     13. SYSTEM UTC CLOCK & RETICLE CURSOR
     ========================================================================== */
  function initUtcClock() {
    const clock = document.getElementById('systemUtcClock');
    if (!clock) return;

    function update() {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, '0');
      const m = String(now.getUTCMinutes()).padStart(2, '0');
      const s = String(now.getUTCSeconds()).padStart(2, '0');
      clock.textContent = `${h}:${m}:${s} UTC`;
    }

    update();
    setInterval(update, 1000);
  }

  function initReticleCursor() {
    const cursor = document.getElementById('customCursor');
    const telem = document.getElementById('cursorTelemetry');
    if (!cursor) return;

    window.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';

      if (telem) {
        const lat = (e.clientY / window.innerHeight * 40 - 20).toFixed(3);
        const lng = (e.clientX / window.innerWidth * 60 + 80).toFixed(3);
        telem.textContent = `FL350 &bull; ${Math.abs(lat)}°${lat >= 0 ? 'N' : 'S'} ${lng}°E`;
      }
    });

    document.querySelectorAll('a, button, input, .op-card, .ev-card').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('active'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
    });
  }

  /* ==========================================================================
     14. PRELOADER
     ========================================================================== */
  function initPreloader() {
    const loader = document.getElementById('caseLoader');
    const bar = document.getElementById('loaderBar');
    const percent = document.getElementById('loaderPercent');
    const log = document.getElementById('loaderLogLine');

    if (!loader || !bar) return;

    let p = 0;
    const logs = [
      'ACQUIRING STRATOSPHERIC TELEMETRY...',
      'CALIBRATING INMARSAT 64.5°E SATELLITE ORBIT...',
      'RECONSTRUCTING PRIMARY AIR DEFENSE RADAR...',
      'OPENING ICAO ANNEX 13 SAFETY ARCHIVE...',
      'CASE INITIALIZED: 9M-MRO'
    ];

    const timer = setInterval(() => {
      p += Math.floor(Math.random() * 15) + 10;
      if (p > 100) p = 100;

      bar.style.width = p + '%';
      if (percent) percent.textContent = p + '%';

      const idx = Math.min(Math.floor((p / 100) * logs.length), logs.length - 1);
      if (log) log.textContent = logs[idx];

      if (p >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          loader.classList.add('hidden');
          playCockpitAudio(900, 0.1, 'sine');
        }, 300);
      }
    }, 55);
  }

  /* ==========================================================================
     15. INITIALIZATION DISPATCHER
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initStarfield();
    initAircraftBeacon();
    initAudio();
    initChapterTracking();
    initChapterDirectoryModal();
    initRouteMap();
    initRadarScope();
    initSatelliteCanvas();
    initEvidenceRoom();
    initTheoryMatrix();
    initSourcesArchive();
    initSourceDrawer();
    initSearchFilters();
    initUtcClock();
    initReticleCursor();
    attachSourceLinks();

    // Smooth scroll with Lenis if available
    if (typeof Lenis !== 'undefined') {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  });

})();
