#!/bin/bash
# Seeds the 5 additional Services pages (Coil Slitting, Cut-To-Length
# Service, Luster Steel Processing, Bulk Industrial Supply, Delivery &
# Logistics Service) and adds them to the navbar's Solutions mega-menu
# SERVICES section. Idempotent — safe to re-run. Companion to seed.sh and
# seed-new-solutions.sh.
#
# Usage: ./seed-new-services.sh   (run from anywhere; cd's into ../server)
set -e
cd "$(dirname "$0")/../server"
npx ts-node src/seed/runNewServicesSeed.ts
