import type { Metadata } from "next";
import { fetchCmsPage, cmsMetadata, renderCmsBlocks } from "@/lib/cmsPage";
import Legacy from "./page.legacy";

// One-line restore: set to false to instantly revert to the original
// IndustryPageContent-driven page (page.legacy.tsx, untouched).
const CMS_ENABLED = true;

async function getPage() {
  if (!CMS_ENABLED) return null;
  return fetchCmsPage("industries-industrial-fabrication");
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata(await getPage());
}

export default async function Page() {
  const page = await getPage();
  if (!page) return <Legacy />;
  return <>{renderCmsBlocks(page)}</>;
}
