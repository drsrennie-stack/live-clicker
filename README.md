# Live Clicker — push these files

Everything in this folder is ready to go live. Your Firebase keys are already in `config.js`.

## What's here
- `index.html` — landing page (so the repo root never 404s)
- `instructor.html` — your live dashboard
- `student.html` — the phone page students open
- `config.js` — Firebase keys + room code (already filled in)
- `questions.js` — the five cardiac questions
- `.nojekyll` — makes GitHub Pages serve every file correctly
- `SETUP.md` — the full reference
- `README.md` — this file

## Push it (web upload, no git needed)
1. github.com → **New repository** → name it `live-clicker` → **Public** → Create.
2. On the repo page → **Add file → Upload files**.
3. Drag in EVERY file from this folder, including the hidden `.nojekyll`. Commit.
   (If `.nojekyll` won't drag, in the repo click **Add file → Create new file**, name it `.nojekyll`, leave it empty, commit.)
4. **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main**, folder: **/ (root)** → Save.
5. Wait 1–3 minutes. Settings → Pages will show "Your site is live at …".

## Your links
- Landing: `https://drsrennie-stack.github.io/live-clicker/`
- Dashboard (you): `https://drsrennie-stack.github.io/live-clicker/instructor.html`
- Student page: `https://drsrennie-stack.github.io/live-clicker/student.html`

## First test
Open the dashboard. The status line should go from "connecting…" to **connected**. Launch a question, open the student page in another tab, answer it, and watch it appear on the dashboard. Done.
