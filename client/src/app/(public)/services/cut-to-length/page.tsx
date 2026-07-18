import type { Metadata } from "next";
import { fetchCmsPage, cmsMetadata, renderCmsBlocks } from "@/lib/cmsPage";
import Legacy from "./page.legacy";

// One-line restore: set to false to instantly revert to the original
// hardcoded page (page.legacy.tsx, untouched).
const CMS_ENABLED = true;

async function getPage() {
  if (!CMS_ENABLED) return null;
  return fetchCmsPage("services-cut-to-length");
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata(await getPage());
}

export default async function Page() {
  const page = await getPage();
  if (!page) return <Legacy />;
  return <div style={{ width: '100%', backgroundColor: '#fff' }}>{renderCmsBlocks(page)}</div>;
}
