# Live Clicker — setup (about 10 minutes, one time)

Your own InteDashboard-style live questions: a 60-second confidence question on student phones, a live dashboard for you (who answered, who is still working, the answer graph), and every response saved on the backend. Free, no server to run.

You do this once. After that, every class is just "open the dashboard and launch questions."

---

## 1. Make a free Firebase project

1. Go to **console.firebase.google.com**, sign in with a Google account, click **Add project**.
2. Name it (e.g., `bio004-clicker`). You can turn Google Analytics off. Create.

## 2. Turn on the Realtime Database

1. In the left menu open **Build → Realtime Database**, click **Create Database**.
2. Pick a location, then choose **Start in test mode** for now. Enable.
3. Copy the database URL shown at the top (it ends in `.firebaseio.com` or `.firebasedatabase.app`). You'll need it.

## 3. Get your web config

1. Click the gear (Project settings) → **General** → scroll to **Your apps** → click the **web** icon `</>`.
2. Register the app (any nickname, no hosting needed). Firebase shows a `firebaseConfig = { ... }` block.
3. Copy each value into **config.js** in this folder, replacing the `PASTE_…` placeholders. Make sure `databaseURL` is the one from step 2.

## 4. Put the files online (so phones can reach them)

These three pages plus the two JS files need to live on the web. Easiest is GitHub Pages, same as your slides:

- Drop the whole `live-poll` folder into one of your GitHub Pages repos and push.
- Your dashboard will be at `https://YOURNAME.github.io/REPO/live-poll/instructor.html`
- The student page will be at `…/live-poll/student.html`

(You can also test it on your own computer first with any local web server, but students need the public GitHub Pages link.)

## 5. Run it in class

1. Open **instructor.html** on your projector. It shows a **join QR** and link for students, the five questions, and the live panel.
2. Students scan the QR (or open the student link), type their name once, and keep the page open.
3. When you reach a checkpoint in your lecture, click a question, then **Launch (60s)**. The question appears on their phones with a 60-second clock and the confidence points. It locks and disappears at zero.
4. Watch the dashboard: present count, answered count, who is still working, the bar graph of who picked what, percent on the correct answer, and average confidence. Click **Export CSV** to keep the results.
5. Move on, teach, launch the next question when you're ready. One continuous session.

---

## Confidence scoring

Each student spreads **4 points** (set by `POINT_BUDGET` in config.js) across the four options. All four on one answer means "I'm sure." Splitting them means "I'm hedging." Your dashboard shows the average points landing on the correct answer, so you can see not just who's right but how sure the room is.

## A note on security

Test mode leaves the database open to anyone with the link for 30 days, which is fine to get going. Before that expires, tighten it in **Realtime Database → Rules**. A simple class-friendly rule:

```json
{
  "rules": {
    "sessions": {
      ".read": true,
      ".write": true
    }
  }
}
```

This keeps it scoped to the clicker data. If you later want it locked to signed-in students, tell me and I'll wire Firebase sign-in. For a single live class, open rules with a fresh room code each term is the common, low-friction choice.

## Reusing it for other lectures

Change `window.QUESTIONS` in **questions.js** to new questions, and optionally change `window.SESSION` in config.js to a new room code. Everything else stays the same. This same app works for any unit, not just cardiac conduction.
