#!/bin/bash
# One command to fully bootstrap this project's dynamic content after a
# fresh clone: seeds the CR/HR product catalog, creates the default admin
# user (if none exists), and restores every CMS page + the site navbar
# from src/seed/seedData.ts. Every step is idempotent (upsert-based) — safe
# to re-run at any time.
#
# Usage: ./seed.sh   (run from anywhere; cd's into ../server itself)
set -e
cd "$(dirname "$0")/../server"

echo "== Seeding CR products =="
npx ts-node src/utils/seedCrProducts.ts

echo "== Seeding HR products =="
npx ts-node src/utils/seedHrProducts.ts

echo "== Seeding admin user + CMS pages + navbar =="
npx ts-node src/seed/runSeed.ts
