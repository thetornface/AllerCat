/**
 * AllerCat — Preorder Handler
 *
 * Принимает POST с JSON-телом от формы предзаказа и добавляет строку
 * в Google-таблицу. Работает как Apps Script Web App.
 *
 * Связан с таблицей:
 *   https://docs.google.com/spreadsheets/d/1rS4YIFD29kbu3SKJBgbn9ZdxhOHneZ_2_mqFujIXtAc/edit
 *
 * Лист по умолчанию: «Лист1». При первом запуске doPost создаст шапку.
 *
 * Развернуть: см. README.md в этой же папке.
 */

const SPREADSHEET_ID = '1rS4YIFD29kbu3SKJBgbn9ZdxhOHneZ_2_mqFujIXtAc';
const SHEET_NAME     = 'Лист1';

const HEADERS = ['Дата', 'Имя', 'Контакт', 'Соцсети', 'Страница', 'User-Agent'];

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    const body = e && e.postData && e.postData.contents
      ? JSON.parse(e.postData.contents)
      : {};

    const ts      = body.ts || new Date().toISOString();
    const name    = String(body.name    || '').slice(0, 200);
    const contact = String(body.contact || '').slice(0, 200);
    const social  = String(body.social  || '').slice(0, 300);
    const page    = String(body.page    || '').slice(0, 500);
    const ua      = String(body.userAgent || '').slice(0, 500);

    if (!name && !contact) {
      return jsonResponse({ ok: false, error: 'Empty payload' });
    }

    sheet.appendRow([new Date(ts), name, contact, social, page, ua]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function doGet() {
  // Удобно проверить, что развёртывание живо.
  return jsonResponse({ ok: true, service: 'AllerCat preorder handler' });
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
