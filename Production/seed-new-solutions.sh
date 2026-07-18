#!/bin/bash
# Seeds the 6 additional Solution pages (Industrial Procurement, OEM Supply
# Solutions, Project Based Steel Supply, Ready Stock Supply, Annual Supply
# Contract, Logistics & Delivery) and adds them to the navbar's Solutions
# mega-menu. Idempotent — safe to re-run. Companion to seed.sh, which covers
# the original 19 pages + navbar + admin + products.
#
# Usage: ./seed-new-solutions.sh   (run from anywhere; cd's into ../server)
set -e
cd "$(dirname "$0")/../server"
npx ts-node src/seed/runNewSolutionsSeed.ts
