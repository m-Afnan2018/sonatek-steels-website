#!/bin/bash
# Seeds the initial Contact Us Page doc so its Hero section becomes
# admin-editable (Title/Description/Background Image/Breadcrumb). Content
# matches what was previously hardcoded, so this changes nothing visually
# until an admin edits it. Idempotent (upsert by slug) — safe to re-run.
#
# Usage: ./seed-contact-us.sh   (run from anywhere; cd's into ../server)
set -e
cd "$(dirname "$0")/../server"
npx ts-node src/utils/upsertPage.ts src/seed/contactUsPageData.ts
