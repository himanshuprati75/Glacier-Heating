# Glacier Heating and Cooling LLC — Codebase & UX Architecture Audit

## 1. GLOBAL STYLING & COLOR PSYCHOLOGY
- **Brand & Target Market**:
  - Business Name: **Glacier Heating and Cooling LLC**
  - Website Domain: `https://www.glacierheatcool.com/`
  - Physical Headquarters / NAP: **Grand Rapids, MI 49504**
  - 24/7 Live Emergency Line: **(616) 900-4759**
  - Direct Business Email: **glopez@glacier-services.com**
  - Owner & Lead Technician: **Gerardo "Jerry" Lopez, Owner**
  - Language Capabilities: **Bilingual (English & Spanish • Se Habla Español)**
  - Primary Service Region: Grand Rapids, Wyoming, Kentwood, Walker, Grandville, Rockford, Ada, Cascade, East Grand Rapids, Hudsonville, Jenison, Allendale, Byron Center, Comstock Park, Kent County, and Eastern Ottawa County (West Michigan).
  - Credentials: **BBB Accredited Business (A- Rating)**, Licensed & Insured Michigan Mechanical Contractor.
- **Curated Color Palette**:
  - `glacierNavy-900` / `glacierNavy-950` (`#0c2340` / `#071526`): Deep Michigan mechanical navy establishing icy authority, dependable trade craftsmanship, and strong contrast.
  - `fireOrange-600` / `fireOrange-500` (`#ea580c` / `#f97316`): Emergency furnace flame orange representing urgent winter heating action and conversion psychology.
  - `glacierCyan-600` / `glacierCyan-400` (`#0284c7` / `#38bdf8`): Cool ice blue highlighting central AC cooling, eco efficiency, and clean filtration.
  - `amberGold-500` (`#f59e0b`): 5-star customer review ratings, BBB seals, and craftsmanship badges.

---

## 2. PROFESSIONAL 4-TO-5 SEPARATED TABS ARCHITECTURE (Core Standard)
- **Strict Navigation Rule**:
  - Top navigation bars must never feature cluttered or wrapped text links. They are strictly limited to **4 to 5 clean, distinct, separated tabs** inside an elevated capsule pill container.
- **Header Separated Pill Tab System (`Header.jsx`)**:
  - **Container**: Elevated capsule pill container (`bg-slate-100/90 backdrop-blur-md p-1.5 rounded-full border border-slate-200/90 shadow-inner flex items-center`).
  - **Tabs (Strictly 5)**:
    1. **Services** (with interactive dropdown containing 6 core residential capabilities: Furnace Repair & Installation, Central AC & Mini-Splits, Heat Pump & Inverters, Water Heater Replacement, Annual Seasonal Tune-Ups, Smart Thermostats & IAQ).
    2. **Pricing** (with subtle `LIVE` pill badge, linking to `#calculator`).
    3. **Real Work** (linking to `#craftsmanship`).
    4. **About Us** (linking to `#about`).
    5. **Reviews** (linking to `#reviews`).
  - **Separation & Spacing**:
    - Each tab is rendered as an individually padded rounded pill with discrete vertical dividers (`w-px h-4 bg-slate-300/80`).
    - Every tab enforces `whitespace-nowrap` to guarantee zero text wrapping on all viewports.
    - Emergency dispatch phone number `(616) 900-4759` is locked to a single line with generous breathing room and click-to-call modal trigger.
- **Services Section Separated Tabs (`ServicesGrid.jsx`)**:
  - Interactive 6-tab filter bar: `[All Capabilities (6)]` `[Furnaces & Heating]` `[Air Conditioning]` `[Water Heaters]` `[Heat Pumps]` `[Tune-Ups & IAQ]`.
- **Cost Calculator Category Filter Tabs (`CostCalculator.jsx`)**:
  - Segmented category tabs: `[All Services (6)]` `[Furnaces & Heating]` `[Air Conditioning]` `[Heat Pumps]` `[Water Heaters]`.

---

## 3. MOBILE-FIRST ARCHITECTURE (Crucial)
- **Mobile Menu Drawer**:
  - Replaces messy text lists with **6 separated card buttons** with category icons, live status badges, and direct emergency dispatch links.
- **Sticky Bottom Lifeline CTA (`MobileStickyCTA.jsx`)**:
  - Fixed to viewport bottom on screens `< 768px` (`fixed bottom-0 left-0 right-0 z-40`).
  - Implements safe-area inset padding (`pb-[max(0.75rem,env(safe-area-inset-bottom))]`) for modern mobile screens.
  - Features a prominent 1-tap `CALL (616) 900-4759` button with emergency pulse animation alongside a direct `$50 OFF` dispatch credit button linking directly to the synchronized lead form.

---

## 4. HIGH-CONVERTING RECIPROCITY SEQUENCE
- **Step 1 — Immediate Calming & Problem Identification (`Hero.jsx`)**:
  - 3-second hook delivering instant trust: *"Grand Rapids & West Michigan's Trusted Heating & Cooling Experts. Fast 24/7 Emergency Dispatch."*
  - Quick-dispatch issue selector allowing homeowners to select their specific equipment failure.
- **Step 2 — 4-Pillar Authority Shield (`TrustShield.jsx`)**:
  - Licensed & Insured MI Mechanical Contractor (BBB Accredited), Bilingual & Respectful Care (Gerardo Lopez / Boot Covers), 24/7 Emergency Dispatch, Upfront Flat-Rate Pricing.
- **Step 3 — Value-First Reciprocity Engine (`CostCalculator.jsx`)**:
  - Homeowners see transparent repair and installation ranges, estimated arrival times, and seasonal savings before entering contact information.
- **Step 4 — State-Synchronized Lead Capture (`LeadCaptureForm.jsx`)**:
  - Pre-populates selected mechanical priority from Hero or Cost Calculator.
  - Automatically activates web courtesy discount: `-$50.00 OFF Instant Dispatch Voucher` (`CODE: GLACIER50-DISPATCH`).
  - Inquiries route directly to `glopez@glacier-services.com`.
  - Realistic dispatch confirmation ticket generator (`GL-MI-XXXX`) with 15-minute response window and 1-tap emergency line.

---

## 5. BUILD & VERIFICATION STATUS
- **Production Build**: `npm run build` completed with exit code `0`.
- **Distribution Artifacts**:
  - `dist/index.html` (3.36 kB)
  - `dist/assets/index-Bt9wfRU6.css` (41.94 kB)
  - `dist/assets/index-DxIq_nS1.js` (251.04 kB)
- **Live Local Verification**: Running on `http://localhost:3006/` with confirmed HTTP 200 response and verified responsive styling.

