/* BIO 004 Clicker -> Google Sheet
   Paste this into Extensions > Apps Script in your "BIO 004 Clicker" sheet, then Deploy > New deployment > Web app
   (Execute as: Me. Who has access: Anyone). Copy the web app URL into config.js as window.SHEET_URL.
   The dashboard's "Send to sheet" button posts one row per character name into the "sessions" tab, with the date and room. */

var SHEET_NAME = 'sessions';
var HEADER = ['Date', 'Room', 'Character', 'Concept pts', 'Concept max', 'Concept %', 'ID pts', 'ID max', 'ID %', 'Correct', 'Detail'];

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) { sh.appendRow(HEADER); sh.getRange(1, 1, 1, HEADER.length).setFontWeight('bold'); sh.setFrozenRows(1); }
    var date = body.date || Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
    var rows = (body.rows || []).map(function (r) {
      return [date, body.room || '', r.code || '', r.concept_pts || 0, r.concept_max || 0, r.concept_pct || 0, r.id_pts || 0, r.id_max || 0, r.id_pct || 0, r.num_correct || 0, r.detail || ''];
    });
    // replace any earlier rows for the same date and room, so re-sending after class does not double count
    var data = sh.getDataRange().getValues();
    for (var i = data.length - 1; i >= 1; i--) {
      if (String(data[i][0]) === date && String(data[i][1]) === (body.room || '')) sh.deleteRow(i + 1);
    }
    if (rows.length) sh.getRange(sh.getLastRow() + 1, 1, rows.length, HEADER.length).setValues(rows);
    return ContentService.createTextOutput(JSON.stringify({ ok: true, rows: rows.length })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: String(err) })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() { return ContentService.createTextOutput('BIO 004 clicker sheet is listening.'); }
