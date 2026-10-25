Clicker zoom, Google Sheet script

live-clicker/   push both files to the live-clicker repo (they replace this morning's copies):
   instructor.html   adds "Send to sheet" (posts one row per character name into your Google Sheet) and renames the
                     export button "Export gradebook". Needs window.SHEET_URL in config.js once the script is deployed.
   student.html      same as this morning (room code gate, deck questions, one-tap ID).

google-sheet/   Code.gs is the Apps Script to paste into your sheet; GOOGLE-SHEET-SETUP.txt walks the 10 steps,
                including the one line to add to config.js.

site/instructor/   the three decks re-encrypted with the clicker zoom: click the ID photo to see it big with the pin,
                   click the question block after it closes to see the question and the four answers big. Replace the
                   folder in the course repo (the two Lecture-Sheets-KEY files from vault-update-keys.zip stay as they are).
