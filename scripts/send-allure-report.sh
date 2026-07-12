#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REPORT_DIR="$ROOT_DIR/allure-report"
ZIP_FILE="$ROOT_DIR/allure-report.zip"
MAIL_TO="${MAIL_TO:-manascrv@gmail.com}"
SUBJECT="${SUBJECT:-Playwright Allure Report}"
BODY="${BODY:-Please find the attached Playwright Allure report.}"

if [[ ! -d "$REPORT_DIR" ]]; then
  echo "Allure report directory not found at $REPORT_DIR"
  echo "Generate it first with: npm run allure:report"
  exit 1
fi

rm -f "$ZIP_FILE"
(
  cd "$ROOT_DIR"
  zip -r "allure-report.zip" "allure-report"
)

if command -v sendmail >/dev/null 2>&1; then
  TMP_MSG="$(mktemp)"
  {
    echo "To: $MAIL_TO"
    echo "Subject: $SUBJECT"
    echo "MIME-Version: 1.0"
    echo 'Content-Type: multipart/mixed; boundary="BOUNDARY"'
    echo
    echo "--BOUNDARY"
    echo "Content-Type: text/plain; charset=UTF-8"
    echo
    echo "$BODY"
    echo
    echo "--BOUNDARY"
    echo "Content-Type: application/zip; name=\"$(basename "$ZIP_FILE")\""
    echo "Content-Transfer-Encoding: base64"
    echo "Content-Disposition: attachment; filename=\"$(basename "$ZIP_FILE")\""
    echo
    base64 < "$ZIP_FILE"
    echo
    echo "--BOUNDARY--"
  } > "$TMP_MSG"

  sendmail -t < "$TMP_MSG"
  rm -f "$TMP_MSG"
  echo "Report sent to $MAIL_TO"
else
  echo "sendmail command not available; report was created at $ZIP_FILE"
  exit 1
fi
