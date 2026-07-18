#!/bin/bash
# Seeds 6 SEO-optimized blog posts (Cold vs Hot Rolled, Steel Grade standards,
# Custom Processing, Choosing a Supplier, Surface Finishes, Supply Chain
# Trends) plus 6 supporting tags. Idempotent (upsert-based by slug) — safe to
# re-run; does not touch or delete any other blogs/tags.
#
# Usage: ./seed-blogs.sh   (run from anywhere; cd's into ../server)
set -e
cd "$(dirname "$0")/../server"
npx ts-node src/seed/runBlogsSeed.ts
