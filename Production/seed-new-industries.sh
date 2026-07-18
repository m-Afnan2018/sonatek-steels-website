#!/bin/bash
# Seeds the 14 additional Industries pages (Auto Components, Electrical
# Panel, Furniture, HVAC, Renewable & Solar, Warehousing & Logistics,
# Railway Transportation, Industrial Fabrication, OEM Manufacturing,
# Utensils, Working Machinery, Steel Drums, Metro, Tunnel) and adds them to
# the navbar's INDUSTRIAL SEGMENTS section. Idempotent — safe to re-run.
# Companion to seed.sh (original 6 industries) and seed-new-solutions.sh /
# seed-new-services.sh.
#
# Usage: ./seed-new-industries.sh   (run from anywhere; cd's into ../server)
set -e
cd "$(dirname "$0")/../server"
npx ts-node src/seed/runNewIndustriesSeed.ts
