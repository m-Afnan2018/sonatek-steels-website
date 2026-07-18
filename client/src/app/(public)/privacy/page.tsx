import { fetchCmsPage, cmsMetadata, renderCmsBlocks } from "@/lib/cmsPage";
import Legacy from "./page.legacy";

// One-line restore: set to false to instantly revert to the original
// hardcoded page (page.legacy.tsx, untouched). Metadata for this route
// comes from layout.tsx (static) merged with cmsMetadata() below when
// the CMS page has SEO data set.
const CMS_ENABLED = true;

async function getPage() {
  if (!CMS_ENABLED) return null;
  return fetchCmsPage("privacy");
}

export async function generateMetadata() {
  return cmsMetadata(await getPage());
}

export default async function Page() {
  const page = await getPage();
  if (!page) return <Legacy />;
  return <main>{renderCmsBlocks(page)}</main>;
}
