# Trivia Salvaje project context

Read this file before making changes. It stores the durable context and working agreements for this project only. Keep it updated at the end of each milestone so a future Codex chat can continue without mixing this work with another project.

## Project and history

- This is a small Spanish-language trivia app built with plain HTML, CSS, and JavaScript.
- The original app was Etelbina Cañedo's second programming project. She and Valeria Diaz built it as a pair during Laboratoria's pre-admission challenge, working together in Replit over Zoom. Their contributions were about 50/50.
- This is an individual portfolio refresh of that project, done to revisit programming concepts and practice working with AI in the loop.
- Preserve the original trivia content and keep the finished design and behavior very close to the original. Keep the project simple and suitable for an early-career portfolio; avoid unnecessary frameworks, features, or folder restructuring.
- Give Valeria Diaz clear credit for the original pair project in public project documentation. Describe the current refresh as Etelbina's individual work with AI assistance.

## How to work with Etelbina

- Be a patient pair-programming tutor. Explain the reason for a proposed change before or while making it, in plain English.
- Work milestone by milestone. Agree on the current milestone's goal and scope before editing.
- Prefer small, focused changes. Show what changed and explain how it connects to the learning goal.
- Do not silently redesign the app, change existing behavior, or add features beyond the agreed milestone.
- Do not overcomplicate the code. Keep the result understandable to someone early in their programming journey.
- Let Etelbina make the decisions and do as much of the learning work as she wants. Do not take over without being asked.
- Do not run tests unless Etelbina asks to test or verify. If she asks to verify structure or behavior, explain what was checked and what was not.
- After a milestone is completed, update the current status and next step in this file. Do not commit or push unless Etelbina asks.

## Current Git state

- Active branch: `ia-in-the-loop-version`.
- The branch is published to `origin/ia-in-the-loop-version`.
- `main` is the original GitHub version and should remain untouched during this refresh.
- Hito 1 was committed and pushed as `bbf878b` (`Complete Hito 1 answer reveal`).
- Ignore `.DS_Store`; do not include it in commits.

## Milestone plan

Follow the original Laboratoria project brief one hito at a time, while preserving the original app's content and intended final design:

1. **Hito 1 — complete:** one view with the first two animal questions, three answer choices each, and an Enviar button that reveals only the correct answer. No right/wrong feedback and no active CSS.
2. **Hito 2 — implemented, ready for Etelbina's review:** add the welcome/name flow, greeting, third animal question, right/wrong feedback, correct/incorrect answer formatting, next-question flow, and replay. Keep CSS inactive.
3. **Hito 3:** add category selection and the plant questions as agreed.
4. **Hito 4:** add any remaining original features, such as the timer, only if they fit the agreed scope.

Revisit the exact acceptance criteria with Etelbina before starting each hito; do not assume every original brief feature must be added.

## Hito 1 implementation notes

- `index.html` has Spanish document language, UTF-8, viewport, description, and author metadata for Etelbina Cañedo and Valeria Diaz.
- The active HTML contains the app logo and the first two animal questions. Later screens and questions are preserved in HTML comments.
- `style.css` is retained with its original rules commented out; Hito 1 does not load the stylesheet.
- The original JavaScript is retained as comments in `script.js`. The active Hito 1 JavaScript adds click listeners for the two Enviar buttons and reveals `La respuesta correcta es: Murciélago` or `La respuesta correcta es: Rana` below the corresponding question, regardless of the selected option.
- The prototype and supplied art are in `images/`, including `images/prototype.png`.
- Hito 1 is complete and committed/pushed.
- Hito 2 is implemented locally but not committed. It uses HTML `hidden` attributes to show one screen at a time, asks for a name, displays a greeting, includes three animal questions, gives Correcto/Incorrecto feedback with the correct answer, bolds the correct choice, strikes through an incorrect selection, changes each question button to Siguiente, and returns to the welcome screen with Volver a jugar. CSS remains inactive. Ask Etelbina to review the milestone before moving on.

## Continuity

- A new Codex chat opened in this project should read this file first.
- For the full transcript of an earlier Codex CLI conversation, use `codex resume`; this file preserves project instructions and status, not every past message.
