# THE BLACK BOX — HOW A PLANE DISAPPEARS
### Malaysia Airlines Flight MH370 &bull; An Aviation Intelligence & Investigative Archive

> **"In conclusion, the team is unable to determine the real cause for the disappearance of MH370."**  
> — *The Malaysian ICAO Annex 13 Safety Investigation Team for MH370 (Final Report, 30 July 2018)*



https://the-black-box-mh370.vercel.app/



## 🌌 Overview & Creative Concept

**THE BLACK BOX** is an interactive, longform investigative documentary website that reimagines modern web journalism. Moving away from generic dark dashboards and sensational conspiracy aesthetics, the project immerses the viewer in a **high-altitude midnight sky atmosphere** (2:00 AM above the ocean) where aviation intelligence, orbital mathematics, air defense radar tracking, and physical evidence converge.

### Core Experience Highlights:
1. **The Night Sky Atmosphere:** Dynamic multi-layered celestial starfield with variable apparent magnitude twinkling, volumetric atmospheric cloud drift, and moonlight horizon glow.
2. **The Disappearance Event:** A distant aircraft navigation beacon travels across the upper stratosphere until it abruptly drops off at waypoint IGARI, triggering a radar-loss shockwave and transitioning into the case file.
3. **Documentary Chapter System:** Minimal fixed header with a real-time chapter tracker (`01 / 12  THE NIGHT SKY` &rarr; `12 / 12  THEORY MATRIX`), live scroll progress, and an interactive Table of Chapters modal.
4. **Desktop Telemetry Rail:** A live side HUD rail providing contextual flight metadata (Airframe: `9M-MRO`, Transponder status, Radar mode, Estimated position, and Investigation status) as the user descends through the chapters.
5. **Horizontal Pinned Timeline:** "The Last 90 Minutes" timeline scrolls horizontally, taking the reader from takeoff at KLIA to primary radar loss in the Andaman Sea.
6. **Airway M770 Interactive Route Map:** Built with Leaflet and CartoDB Dark Matter tiles, featuring an interactive 7-waypoint scrubber syncing live telemetry readouts.
7. **Fullscreen Primary Radar Scope:** An HTML5 canvas rendering a military air defense radar terminal (12 RPM sweep, range rings, and primary skin returns).
8. **Inmarsat 7th Arc Stratospheric Geometry:** Canvas visualization of Inmarsat-3 F1 (64.5°E) and the seven concentric Burst Timing Offset (BTO) distance rings that proved flight into the Southern Indian Ocean.
9. **Forensic Evidence Room & Theory Matrix:** 15 categorized evidence records and 12 evaluated hypotheses with documented bases and forensic counterpoints.
10. **The Three Pillars & Monolith:** Clear epistemological separation between *What We Know*, *What Was Inferred*, and *What Remains Unknown*, culminating in the Black Box monolith.

---

## ⚖️ Evidentiary Standards & Classification Architecture

To ensure strict journalistic and forensic discipline, every finding, claim, and hypothesis is classified into one of six evidential tiers:

| Tier | Badge | Definition |
| :--- | :--- | :--- |
| **CONFIRMED** | `CONFIRMED` | Physically verified or corroborated by physical debris / formal accident investigation boards. |
| **DOCUMENTED** | `DOCUMENTED` | Formally recorded in primary radar logs, ATC voice transcripts, or aircraft maintenance manifests. |
| **REPORTED** | `REPORTED` | Published by accredited international news agencies citing verified primary sources. |
| **HYPOTHESIS** | `HYPOTHESIS` | Plausible technical scenario formulated by accredited aviation safety specialists or accident investigators. |
| **DISPUTED** | `DISPUTED` | Investigated and directly contradicted by physical debris, satellite pings, or radar data. |
| **UNVERIFIED** | `UNVERIFIED` | Claims lacking documentary, forensic, or circumstantial evidentiary basis. |

---

## 🗂️ Project Structure

```text
the-black-box-mh370/
├── index.html       # Complete semantic markup, sky canvases, side data rail & modal viewers
├── style.css        # Cinematic night-sky styles, cloud parallax, radar scope & responsive layout
├── script.js        # Celestial starfield engine, aircraft beacon simulation, Leaflet map, & chapter tracking
└── README.md        # Investigative documentation and project repository guide
```

---

## 🛠️ Technology Stack

* **Markup:** Semantic HTML5 with ARIA accessibility roles and Open Graph metadata.
* **Styling:** Vanilla CSS3 (Custom properties, CSS Grid, Flexbox, `clamp()` fluid typography, and `@media (prefers-reduced-motion)`).
* **Scripting:** Pure Vanilla ES6+ JavaScript (zero framework overhead).
* **Interactive Mapping:** [Leaflet.js](https://leafletjs.com/) with CartoDB Dark Matter tiles.
* **Animations:** Canvas 2D API for starfield, radar scope, and satellite orbital geometry.
* **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/) with GSAP ScrollTrigger compatibility.
* **Audio Engine:** Web Audio API interface synthesizer (subtle cockpit beeps and radar clicks; default **MUTED** with user toggle).
* **Typography:**
  * Display: *Cormorant Garamond* (Editorial Serif)
  * Body: *Inter* & *IBM Plex Sans* (Modern Technical Sans)
  * Monospace / Telemetry: *IBM Plex Mono*

---



## 📚 Primary Verified Sources Cited

1. **Malaysian ICAO Annex 13 Safety Investigation Team for MH370** — *Safety Investigation Report: Malaysia Airlines Boeing 777-200ER (9M-MRO)* (30 July 2018).
2. **Australian Transport Safety Bureau (ATSB)** — *The Operational Search for MH370 (Final Report)* (3 October 2017).
3. **ATSB Satellite & Flight Path Working Group** — *MH370 — Definition of Underwater Search Areas* (December 2014 / 2015 Update).
4. **Royal Institute of Navigation (Journal of Navigation)** — *The Search for MH370: Inmarsat Satellite Data Analysis* (Ashton, Shuster et al., 2015).
5. **Department of Civil Aviation, Malaysia (DCA)** — *Air-Ground Radio Communication Transcript Flight MH370* (Released 1 April 2014).
6. **French Direction Générale de l’Armement (DGA) / BEA** — *Examination of Flaperon Found on Saint-André Beach, Réunion Island* (September 2015).
7. **Interpol Headquarters, Lyon** — *Official Briefing Clearing Stolen-Passport Passengers of Terrorist Ties* (March 2014).
8. **Royal Malaysian Air Force (RMAF)** — *Military Primary Surveillance Radar Briefing* (March 2014).
9. **Federal Aviation Administration (FAA) & Boeing** — *Commercial Avionics Network Architecture and Security Isolation Report* (May 2014).
10. **Snopes Fact Checking Archive** — *Investigation of Freescale Semiconductor Patent Conspiracy Claims* (March 2014).

---



## 📄 License & Fair Use

This repository is an educational, journalistic, and investigative memorial project dedicated to the 239 passengers and crew of Flight MH370. The codebase is distributed under the **MIT License**.
