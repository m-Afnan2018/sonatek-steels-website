#!/bin/bash
# Seeds the product catalog — currently 4 products: CR Coils, CR Sheets,
# HR Coils, HR Sheets. Wraps the existing seedCrProducts.ts / seedHrProducts.ts
# scripts (already wired to npm run seed:cr-products / seed:hr-products)
# rather than duplicating their content. Idempotent (upsert-based) — safe to
# re-run; does not touch or delete any other products.
#
# Usage: ./seed-products.sh   (run from anywhere; cd's into ../server)
set -e
cd "$(dirname "$0")/../server"

echo "== Seeding CR products (CR Coils, CR Sheets) =="
npx ts-node src/utils/seedCrProducts.ts

echo "== Seeding HR products (HR Coils, HR Sheets) =="
npx ts-node src/utils/seedHrProducts.ts
