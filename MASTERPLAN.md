============================================================
SHIMUL SHARMA — PORTFOLIO WEBSITE
MASTER IMPLEMENTATION PLAN
============================================================

ROLE

You are the lead frontend engineer and creative developer
responsible for completing and refining an existing portfolio
website.

The repository already exists and should NOT be rebuilt from
scratch.

Repository:
https://github.com/Shimul-12/Portfolio-website

Owner:
Shimul Sharma

GitHub:
https://github.com/Shimul-12

X:
https://x.com/0xShimul

Current stack:
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

============================================================
1. PRIMARY OBJECTIVE
============================================================

Build an exceptional portfolio for a:

BLOCKCHAIN / WEB3 ENGINEER

The website must communicate:

- Smart contract engineering
- Blockchain development
- DeFi
- EVM development
- Web3 infrastructure
- Backend/Web3 integration
- Smart contract security
- Security research
- Protocol engineering

The website must NOT feel like a generic developer portfolio.

It should feel like:

"An interactive engineering system that happens to be a
portfolio."

The experience should make a recruiter initially think:

"This is different."

Then after exploring:

"This person actually understands blockchain systems."

The website's central philosophy is:

BUILDING PROTOCOLS.
BREAKING ASSUMPTIONS.

This is not merely a tagline.

The entire experience should reinforce it.

============================================================
2. IMPORTANT CONTEXT — CURRENT REPOSITORY
============================================================

The project is already partially/mostly implemented.

DO NOT throw away the existing architecture.

Existing major components include:

- Navbar
- Hero
- HeroBackground
- NetworkOverlay
- SystemPanel
- Work
- SecurityLab
- StackAbout
- Contact
- Footer
- Entrance/loading experience

The current page structure is approximately:

Navbar
Hero
Work
SecurityLab
StackAbout
Contact
Footer

The current Hero already has:

- Earth background
- network visualization
- hero identity
- main statement
- CTA buttons
- system status panel
- left navigation rail
- Current Systems
- bottom status bar

The current Work section already contains real project data.

The current Security Lab already contains technical security
writeups.

The current Stack/About section already contains:
- technologies
- engineering philosophy
- BUILD → TEST → BREAK → UNDERSTAND → IMPROVE

Therefore:

DO NOT restart from zero.

Inspect the repository first.

Understand the current implementation before modifying it.

Preserve working pieces.

Improve the visual quality and interaction model.

============================================================
3. CORE DESIGN PHILOSOPHY
============================================================

The website should combine:

TECHNICAL
+
CINEMATIC
+
MINIMAL
+
ENGINEERING-FOCUSED
+
INTERACTIVE

The visual language should be inspired by:

- global blockchain networks
- Earth from space
- infrastructure monitoring
- protocol architecture
- security research interfaces
- mission-control systems
- high-end technical products

BUT:

Do NOT make it an obvious cyberpunk website.

Avoid:

- excessive neon
- purple gradients
- RGB colors
- glitch spam
- Matrix rain
- skulls
- hacking clichés
- excessive terminal windows
- excessive glassmorphism
- giant glowing borders
- excessive 3D effects
- meaningless HUD elements

The interface should feel sophisticated rather than "gamer cyberpunk."

============================================================
4. MOST IMPORTANT DESIGN RULE
============================================================

READABILITY > TECHNICAL DECORATION

This has already been a problem during development.

Do NOT make important text tiny just because the interface is
supposed to look technical.

Recruiters must be able to read the website immediately.

Typography hierarchy:

PRIMARY:
Large
Strong
Highly readable

Examples:
- BUILDING PROTOCOLS.
- BREAKING ASSUMPTIONS.
- Project names
- Section titles

SECONDARY:
Normal readable text

Examples:
- descriptions
- project details
- technical explanations

TERTIARY:
Small metadata

Examples:
- BLOCKCHAIN / WEB3 ENGINEER
- SYSTEM STATUS
- ACTIVE
- LIVE
- project IDs

DECORATIVE:
Tiny technical labels only when necessary.

NEVER make actual content 7px or 8px.

Anything a recruiter needs to understand must be comfortably
readable at normal desktop viewing distance.

============================================================
5. VISUAL SYSTEM
============================================================

BACKGROUND:

Primary:
#020303

Use extremely dark blue/green atmospheric tones.

TEXT:

Primary:
near-white / white

Secondary:
white with reduced opacity

Muted:
gray

ACCENT:

Acid lime / electric green.

Approximate:

#B8FF5C

Use the accent for:

- active states
- important punctuation
- status indicators
- CTA buttons
- selected elements
- hover states
- small visual highlights

Do NOT make the whole site green.

============================================================
6. TYPOGRAPHY
============================================================

The design should have strong editorial typography.

Hero headline:

Approximately:
clamp(3.8rem, 5vw, 6.5rem)

Use:
- semibold
- uppercase
- tight tracking
- tight line height

Example:

BUILDING PROTOCOLS.
BREAKING ASSUMPTIONS.

Name:

Approximately:
clamp(2.8rem, 3.5vw, 4.5rem)

Body:

14–16px.

Navigation:

11–13px.

Metadata:

10–12px.

Project titles:

16–20px minimum depending on context.

Section headings:

Large enough to establish hierarchy.

Do not arbitrarily reduce font sizes.

============================================================
7. HERO — CURRENT STATE
============================================================

The current Hero is already conceptually correct.

Do NOT redesign the concept.

Current visual direction:

Left:
Identity + statement + CTA

Right:
Earth + network + System Status

Bottom:
Current Systems

The Earth/background currently works well.

DO NOT replace it unless there is a very strong reason.

DO NOT repeatedly reposition it without testing the entire
composition.

The Earth should remain the primary visual hook.

============================================================
8. HERO FINAL COMPOSITION
============================================================

Target composition:

TOP:

SHIMUL.
WORK
SECURITY
STACK
ABOUT
GITHUB

MAIN:

OPEN TO OPPORTUNITIES

SHIMUL SHARMA
BLOCKCHAIN / WEB3 ENGINEER

BUILDING PROTOCOLS.
BREAKING ASSUMPTIONS.

Supporting text:

Smart contracts, DeFi protocols, Web3 infrastructure and
security research — building systems that are reliable,
scalable and secure.

CTA:

[ EXPLORE WORK ↗ ]
[ GITHUB ↗ ]

RIGHT:

Earth / global network

System Status panel

BOTTOM:

CURRENT SYSTEMS

Five project/system cards.

============================================================
9. HERO — DO NOT OVERLOAD
============================================================

Do NOT put every possible dashboard element into the hero.

The hero needs:

- identity
- statement
- CTA
- Earth
- network
- one meaningful System Status panel
- Current Systems

Do NOT add:

- 10 different panels
- fake live data
- excessive statistics
- unnecessary telemetry
- multiple duplicate system panels
- excessive labels

The hero should be visually rich but conceptually simple.

============================================================
10. SYSTEM STATUS PANEL
============================================================

The System Status panel should remain.

It should communicate technical credibility.

Possible structure:

SYSTEM STATUS

NETWORK
EVM / WEB3
● OPERATIONAL

SECURITY LAYER
SMART CONTRACTS
ACTIVE

TESTING
[REAL METRIC ONLY]

BUILD STATUS
OPERATIONAL

IMPORTANT:

Do not fabricate metrics.

If "128,000 fuzz calls" is not a real verified metric from
Shimul's actual work, remove or replace it.

Never present invented numbers as professional achievements.

============================================================
11. CURRENT SYSTEMS
============================================================

Keep Current Systems as a bridge between the Hero and Work.

Current systems:

DSC
Decentralized Stablecoin

DAO
On-chain Governance

LOTTERY
Chainlink VRF

PROVORA
Decentralized Identity

SECURITY LAB
Audit / Research / Writeups

Cards must be readable.

Each card should contain:

Project ID
Project name
Description
Technology/context
Status

Recommended visual hierarchy:

PROJECT NAME:
16–18px

DESCRIPTION:
13–14px

STACK:
11–12px

STATUS:
11–12px

Card height:
approximately 90–110px on desktop.

Cards should not look like tiny dashboard widgets.

They should feel like actual portfolio previews.

============================================================
12. CURRENT SYSTEMS INTERACTION
============================================================

Hovering a system should produce subtle feedback:

- border brightens
- accent appears
- bottom line animates
- card rises slightly
- relevant network/project information can highlight

Do NOT use dramatic animations.

The interaction should feel precise.

Eventually clicking a system should scroll to or open the
corresponding Work content.

============================================================
13. WORK SECTION — MAJOR PRIORITY
============================================================

This is the next major development focus.

The existing Work section already contains useful project
information.

DO NOT replace it with generic cards.

Turn it into a premium engineering case-study experience.

Primary title:

SELECTED WORK

Alternative:

PROTOCOLS I'VE BUILT

The section should communicate:

"I built this."

not:

"Here are some projects."

============================================================
14. WORK — PROJECT STRUCTURE
============================================================

Each project should contain:

PROJECT NUMBER

PROJECT NAME

CATEGORY

TECH STACK

SHORT DESCRIPTION

PROBLEM

ARCHITECTURE

IMPLEMENTATION

SECURITY CONSIDERATIONS

CHALLENGES

RESULT / OUTCOME

SOURCE

LIVE DEMO if available

Only use information that is actually true.

============================================================
15. PROJECTS
============================================================

Known project/system candidates include:

DSC
DAO
LOTTERY
PROVORA
SECURITY LAB

Use actual repository information.

Do not invent additional projects.

Do not invent companies.

Do not invent production deployments.

Do not invent metrics.

Do not invent security findings.

============================================================
16. PROJECT VISUALIZATION — VERY IMPORTANT
============================================================

This is one of the main features that should differentiate the
portfolio.

Each major project should have a visual representation of its
architecture.

These should preferably be animated SVG/CSS diagrams rather
than generic images.

Example:

DSC:

USER
 ↓
COLLATERAL
 ↓
PRICE ORACLE
 ↓
HEALTH FACTOR
 ↓
MINT / LIQUIDATE
 ↓
STABLECOIN

DAO:

TOKEN HOLDERS
 ↓
PROPOSAL
 ↓
VOTING
 ↓
TIMELOCK
 ↓
EXECUTION

LOTTERY:

USER
 ↓
ENTRY
 ↓
CHAINLINK VRF
 ↓
RANDOMNESS
 ↓
WINNER

SECURITY:

ATTACK
 ↓
VULNERABILITY
 ↓
EXPLOIT
 ↓
MITIGATION

These diagrams should visually explain the system.

They should NOT be generic flowchart templates.

Make them fit the site's visual language.

============================================================
17. INTERACTIVE NETWORK — HIGH PRIORITY
============================================================

The existing Earth/network visualization is currently mostly
decorative.

Upgrade it so it can respond to the user's current project or
section.

Example:

When DSC is active:

Network highlights:

ORACLE
   ↓
CONTRACT
   ↓
COLLATERAL
   ↓
LIQUIDATION

When Lottery is active:

NETWORK
   ↓
VRF
   ↓
RANDOMNESS
   ↓
WINNER

When Security Lab is active:

ACCESS CONTROL
ORACLE
REENTRANCY
FUZZING

The goal:

The network should feel connected to the content.

This is one of the strongest opportunities to make the
portfolio unique.

============================================================
18. WORK INTERACTION MODEL
============================================================

Possible desktop interaction:

Left side:
Project list

Right side:
Project visualization / architecture

Example:

------------------------------------------------------------

01
DSC
DECENTRALIZED STABLECOIN

02
DAO
ON-CHAIN GOVERNANCE

03
LOTTERY
CHAINLINK VRF

04
PROVORA
DECENTRALIZED IDENTITY

------------------------------------------------------------

                    ARCHITECTURE

              ORACLE
                 ↓
          SMART CONTRACT
             ↙       ↘
      COLLATERAL    LIQUIDATION

------------------------------------------------------------

When project selection changes:

- project content changes
- diagram changes
- highlighted network nodes change
- accent state changes

Use Framer Motion for transitions.

============================================================
19. SECURITY LAB — CURRENT STATE
============================================================

SecurityLab already exists and contains meaningful technical
content.

Preserve it.

Do not replace it with generic "cybersecurity" graphics.

The Security Lab should feel like technical research.

Potential structure:

SECURITY LAB

001
REENTRANCY
HIGH

002
ACCESS CONTROL
HIGH

003
DENIAL OF SERVICE
MEDIUM

004
ABI ENCODING
MEDIUM

005
FUZZING
RESEARCH

Only include topics supported by Shimul's actual research.

============================================================
20. SECURITY LAB VISUAL EXPERIENCE
============================================================

Make each security topic feel like a research record.

Example:

SECURITY LAB / 001

REENTRANCY

SEVERITY
HIGH

CATEGORY
SMART CONTRACT SECURITY

SUMMARY

...

ROOT CAUSE

...

VULNERABLE FLOW

...

PROOF OF CONCEPT

...

MITIGATION

...

LESSON

...

Code should be readable.

Use syntax highlighting if useful.

Potentially include an attack-flow visualization.

Example:

USER
 ↓
CALL
 ↓
FALLBACK
 ↓
STATE NOT UPDATED
 ↓
RE-ENTER
 ↓
DRAIN

Then:

MITIGATION

STATE UPDATE
 ↓
EXTERNAL CALL
or
REENTRANCY GUARD

The visual explanation is more valuable than decorative
effects.

============================================================
21. SECURITY LAB INTERACTION
============================================================

On hover:

- selected issue becomes highlighted
- severity becomes visible
- subtle network/attack visualization can appear

On click:

- expand technical details
- show code
- show attack flow
- show mitigation

Keep transitions smooth.

============================================================
22. STACK — CURRENT STATE
============================================================

Stack/About already contains a substantial list of technologies
and concepts.

Preserve the actual information.

Categories can include:

SMART CONTRACTS
- Solidity
- Foundry
- OpenZeppelin
- Chainlink

BLOCKCHAIN
- Ethereum
- EVM
- RPC
- Web3

BACKEND
- Node.js
- TypeScript
- APIs
- integrations

SECURITY
- Fuzzing
- Invariant Testing
- Auditing
- Threat Modeling

DEVOPS / ENGINEERING
- Git
- GitHub
- Linux
- Docker
- CI/CD

Only include technologies Shimul actually knows/uses.

============================================================
23. STACK INTERACTION — MISSING FEATURE
============================================================

Upgrade Stack so it connects to actual projects.

Example:

Hover:

SOLIDITY

Then visually highlight:

DSC
DAO
LOTTERY
PROVORA
SECURITY LAB

Hover:

CHAINLINK

Highlight:

DSC
LOTTERY

Hover:

FOUNDRY

Highlight relevant projects.

This turns Stack from a list into a visual map of technical
experience.

============================================================
24. HOW I THINK — CURRENT STATE
============================================================

The existing:

BUILD
TEST
BREAK
UNDERSTAND
IMPROVE

concept is GOOD.

Keep it.

Make it a major philosophical section.

Potential visual:

BUILD
  ↓
TEST
  ↓
BREAK
  ↓
UNDERSTAND
  ↓
IMPROVE

Each stage should have a concise explanation.

The key message:

Engineering isn't just about making something work.

It is about understanding assumptions and discovering where
systems fail.

============================================================
25. ENGINEERING JOURNEY — MISSING
============================================================

Add a section:

ENGINEERING JOURNEY

Do NOT invent dates.

Do NOT invent jobs.

Do NOT invent experience.

Use either:

A conceptual progression:

BLOCKCHAIN FUNDAMENTALS
        ↓
SMART CONTRACT DEVELOPMENT
        ↓
DEFI
        ↓
WEB3 INFRASTRUCTURE
        ↓
SECURITY RESEARCH
        ↓
PROTOCOL ENGINEERING

OR use real dates/experience if Shimul provides verified data.

This section should explain evolution rather than act as a
traditional resume.

============================================================
26. LOG / ENGINEERING NOTES — OPTIONAL PHASE
============================================================

Potential future section:

ENGINEERING LOG

This can contain short technical posts such as:

- abi.encodePacked collisions
- delegatecall
- reentrancy
- fallback functions
- DOS
- access control
- oracle assumptions
- smart contract testing
- Web3 infrastructure

Security Lab should remain focused on security research.

LOG can cover broader engineering lessons.

This is optional for the first production release.

============================================================
27. CONTACT
============================================================

Existing Contact section is already aligned with the plan.

Keep it.

Primary CTA:

LET'S BUILD SOMETHING.

Supporting content:

Open to opportunities involving:

- Blockchain engineering
- Smart contracts
- Web3 infrastructure
- Security research
- Protocol development

Links:

GitHub
X
Email

Use actual links only.

GitHub:
https://github.com/Shimul-12

X:
https://x.com/0xShimul

============================================================
28. FOOTER
============================================================

Keep the footer minimal.

Possible:

DELHI, INDIA
UTC +05:30

BUILDING / AUDITING / LEARNING

01 / 07

Do not overload the footer.

============================================================
29. NAVIGATION
============================================================

Only ONE navbar.

Never render duplicate navigation.

Suggested:

SHIMUL.

WORK
SECURITY
STACK
ABOUT

GITHUB ↗

Potentially:

LOG

but only if there is actually a Log section.

Do not include navigation links that lead nowhere.

============================================================
30. ENTRANCE / LOADING EXPERIENCE
============================================================

There is an Entrance component.

Use carefully.

If retained:

Keep it very short.

Potential concept:

INITIALIZING SYSTEM
LOADING NETWORK
LOADING PROTOCOLS
LOADING SECURITY LAYER

A progress indicator may be used.

But:

DO NOT make users wait several seconds before seeing the
portfolio.

The loading experience must never become an obstacle.

A skip option may be useful.

If the entrance screen does not add meaningful value, remove it.

============================================================
31. RESPONSIVE DESIGN
============================================================

Desktop is the primary design target.

Target:
1440px
1920px
laptop widths

But mobile must be intentionally designed.

Do NOT simply shrink the desktop version.

Mobile changes:

- hide left navigation rail
- simplify network visualization
- reduce Earth prominence
- stack hero content
- move System Status below primary content
- Current Systems becomes vertical/horizontal scroll cards
- project architecture becomes stacked
- security content becomes accordion/stacked
- navigation becomes mobile menu

Text remains readable.

============================================================
32. ANIMATION PHILOSOPHY
============================================================

Use Framer Motion.

Animation should communicate hierarchy.

Hero:

1. availability
2. identity
3. statement
4. description
5. CTA
6. system panel
7. network elements

Use:
- opacity
- translateY
- translateX
- subtle scale

Avoid:
- bounce
- excessive spring
- glitch spam
- constant movement
- unnecessary rotation

============================================================
33. SCROLL EXPERIENCE
============================================================

Scrolling should feel like moving through an engineering system.

Sequence:

HERO
↓
CURRENT SYSTEMS
↓
SELECTED WORK
↓
SECURITY LAB
↓
STACK
↓
HOW I THINK
↓
ENGINEERING JOURNEY
↓
CONTACT

Sections can have:

- subtle entrance animations
- line animations
- active markers
- horizontal transitions
- visual continuity

But do NOT make scrolling slow or annoying.

============================================================
34. REAL DATA / AUTHENTICITY
============================================================

This is critical.

NEVER fabricate:

- companies
- employers
- users
- transactions
- audits
- vulnerabilities
- production deployments
- security findings
- testing metrics
- certifications
- protocol statistics
- performance numbers

If information is unknown:

Ask for it.

If a visual requires a number:

Use a clearly labeled illustrative value or avoid the number.

The portfolio must be technically impressive because it is
real, not because it exaggerates.

============================================================
35. CONTENT STRATEGY
============================================================

The site should prioritize PROOF over CLAIMS.

Bad:

"I am an expert Solidity developer."

Good:

Show a Solidity project.

Bad:

"I understand smart contract security."

Good:

Show:
- vulnerability
- exploit
- root cause
- mitigation
- test

Bad:

"I know DeFi."

Good:

Show:
- collateral
- oracle
- liquidation
- protocol assumptions

Bad:

"I know Web3 infrastructure."

Good:

Show actual:
- RPC
- backend
- integrations
- node/tooling work

============================================================
36. PERFORMANCE
============================================================

Keep the site fast.

Avoid unnecessary libraries.

Avoid heavy WebGL unless truly necessary.

Use:
- CSS
- SVG
- Framer Motion
- optimized images

where possible.

The Earth background should be optimized.

Lazy-load below-the-fold heavy content if appropriate.

Animations should be GPU-friendly.

============================================================
37. ACCESSIBILITY
============================================================

Maintain:

- readable contrast
- keyboard focus
- accessible buttons
- accessible links
- meaningful alt text
- semantic headings
- logical navigation

Do not communicate important information through color alone.

============================================================
38. SEO / METADATA
============================================================

Add proper metadata.

Title:

Shimul Sharma — Blockchain / Web3 Engineer

Description should communicate:

Blockchain engineering
Smart contracts
Web3
Security
DeFi

Use appropriate OpenGraph metadata.

Ensure social preview works.

============================================================
39. CODE QUALITY
============================================================

Keep components modular.

Avoid giant components where possible.

Suggested structure:

components/

Navbar.tsx

hero/
    Hero.tsx
    HeroBackground.tsx
    NetworkOverlay.tsx
    SystemPanel.tsx

CurrentSystems.tsx

Work.tsx
ProjectCard.tsx
ProjectArchitecture.tsx

SecurityLab.tsx
SecurityIssue.tsx
AttackFlow.tsx

Stack.tsx

About.tsx
EngineeringJourney.tsx

Contact.tsx

Footer.tsx

The exact structure can differ if the existing architecture is
better.

Do not create duplicate components.

============================================================
40. IMPLEMENTATION ORDER
============================================================

Do NOT try to change everything simultaneously.

Follow this order.

PHASE 1 — AUDIT

Inspect the entire repository.

Understand:
- existing components
- styles
- assets
- data
- dependencies
- page structure

Identify:
- duplicated UI
- unused components
- fake metrics
- broken links
- accessibility issues
- mobile problems

Do not modify anything yet.

PHASE 2 — HERO FINALIZATION

Finish:

- typography
- spacing
- hero hierarchy
- System Status
- Current Systems
- responsive behavior

Do not redesign the Earth.

Do not add excessive HUD elements.

PHASE 3 — WORK

Transform Work into a premium interactive project experience.

Implement:

- project selector
- project detail
- architecture visualization
- technical information
- security considerations
- source links

PHASE 4 — PROJECT VISUALIZATIONS

Create reusable architecture visualizations.

Examples:

DSC:
Oracle → Contract → Collateral → Liquidation

DAO:
Proposal → Vote → Timelock → Execute

Lottery:
Entry → VRF → Randomness → Winner

Security:
Attack → Vulnerability → Exploit → Mitigation

PHASE 5 — NETWORK INTEGRATION

Connect project selection to network visualization.

Selected project:
→ network changes
→ nodes highlight
→ labels change
→ architecture visual changes

PHASE 6 — SECURITY LAB

Improve presentation and interaction.

Implement:

- security issue selector
- severity
- technical writeup
- attack flow
- vulnerable code
- mitigation

PHASE 7 — STACK

Connect technologies to projects.

Interactive relationships.

PHASE 8 — ENGINEERING JOURNEY

Add conceptual/real progression.

PHASE 9 — CONTACT / FOOTER

Final polish.

PHASE 10 — RESPONSIVE

Test:

375px
390px
768px
1024px
1440px
1920px

PHASE 11 — PERFORMANCE / ACCESSIBILITY

Final audit.

============================================================
41. PRIORITY ORDER
============================================================

If time is limited, prioritize:

P0 — MUST HAVE

1. Hero quality
2. Readable typography
3. Current Systems
4. Work section
5. Real project information
6. Security Lab
7. Responsive layout
8. No fake claims

P1 — HIGH VALUE

9. Project architecture diagrams
10. Interactive project selection
11. Network/project relationship
12. Stack/project relationships

P2 — NICE TO HAVE

13. Engineering Journey
14. Engineering Log
15. Advanced live blockchain data
16. Entrance animation

Do NOT work on P2 before P0/P1 are excellent.

============================================================
42. WHAT MAKES THIS PORTFOLIO DIFFERENT
============================================================

The differentiator is NOT:

"more animations."

The differentiator is:

THE WEBSITE VISUALLY EXPLAINS ENGINEERING.

For example:

A recruiter sees DSC.

They don't just see:

"Decentralized Stablecoin."

They see:

Collateral
↓
Oracle
↓
Health Factor
↓
Liquidation

Then they can read how it was implemented.

Then they can see security considerations.

Then they can inspect the source.

Similarly:

Security Lab

doesn't just say:

"Smart contract security."

It shows:

Vulnerability
↓
Attack
↓
Root Cause
↓
Mitigation

This is the core product idea of the portfolio.

============================================================
43. RECRUITER EXPERIENCE
============================================================

FIRST 5 SECONDS:

Who is this?

SHIMUL SHARMA

What does he do?

BLOCKCHAIN / WEB3 ENGINEER

What makes him interesting?

BUILDING PROTOCOLS.
BREAKING ASSUMPTIONS.

FIRST 30 SECONDS:

What has he built?

Current Systems
Selected Work

FIRST 2 MINUTES:

Does he actually understand the technology?

Project architecture
Security Lab
Technical explanations

FINAL:

How can I contact him?

GitHub
X
Email

============================================================
44. FINAL VISUAL TEST
============================================================

Before calling the site finished, ask:

Does the first screen immediately look different from a
standard developer portfolio?

Is the main text readable without zooming?

Does the Earth support the content rather than obscure it?

Does the technical UI feel purposeful?

Does the portfolio demonstrate actual engineering ability?

Can a recruiter understand the person's role within seconds?

Can a technical recruiter inspect project depth?

Does Security Lab demonstrate thinking rather than buzzwords?

Does the site reward deeper exploration?

Does every animation have a purpose?

Are any elements decorative for no reason?

Are there fake metrics?

Are there broken links?

Are there duplicate navigation elements?

Does mobile remain usable?

============================================================
45. ABSOLUTE DON'Ts
============================================================

DO NOT:

- rebuild from scratch
- remove good existing project data
- make everything tiny
- add random HUD elements
- use fake metrics
- invent experience
- invent projects
- overuse neon
- overuse glassmorphism
- create generic cards
- add meaningless animations
- add sections just to make the site longer
- add a skill logo wall
- create duplicate navbars
- sacrifice readability for aesthetics
- make the user wait through a long loading screen
- add blockchain "live data" unless it is actually real
- turn the portfolio into a cyberpunk gimmick

============================================================
46. DEFINITION OF DONE
============================================================

The portfolio is finished when:

HERO:
- visually memorable
- readable
- Earth/network composition works
- clear identity
- clear CTA

WORK:
- projects feel like engineering case studies
- architecture is visually explained
- real technical information is present
- source links work

SECURITY LAB:
- technical
- readable
- interactive
- credible

STACK:
- organized
- connected to actual work
- interactive if possible

HOW I THINK:
- communicates engineering philosophy

JOURNEY:
- communicates progression without fabricated information

CONTACT:
- obvious
- simple
- functional

OVERALL:
- fast
- responsive
- accessible
- visually unique
- technically credible

The final emotional response should be:

"That's a portfolio."

not:

"That's a template."

and ideally:

"Whoever built this understands systems."

============================================================
47. FIRST ACTION
============================================================

Before writing or changing code:

1. Inspect the repository.
2. Inspect every existing component.
3. Inspect the current page structure.
4. Inspect the assets.
5. Inspect package.json.
6. Identify which parts of this specification are already
   implemented.
7. Identify exactly what is missing.
8. Do not blindly recreate existing functionality.

Then provide a short implementation audit:

CURRENT:
What already exists.

MISSING:
What is genuinely missing.

NEEDS REFINEMENT:
What exists but needs improvement.

THEN begin implementation in the priority order above.

When modifying a component, prefer returning the COMPLETE
replacement file rather than giving isolated line-by-line
instructions.

The development workflow should be:

INSPECT
→ PLAN
→ IMPLEMENT
→ RUN
→ VISUALLY VERIFY
→ REFINE

Do not make speculative changes without checking the current
implementation.

============================================================
END OF MASTER PLAN
============================================================