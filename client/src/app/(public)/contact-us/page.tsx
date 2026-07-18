import type { Metadata } from "next";
import { fetchCmsPage, cmsMetadata, renderCmsBlocks } from "@/lib/cmsPage";
import ContactForm from "./ContactForm";
import LocationSection from "./LocationSection";
import Legacy from "./page.legacy";

// One-line restore: set to false to instantly revert to the original
// hardcoded page (page.legacy.tsx, untouched). Only the Hero is
// CMS-editable — ContactForm and LocationSection are functional
// components (form submission, office locations), not marketing content,
// so they stay hardcoded and always render below the CMS blocks.
const CMS_ENABLED = true;

async function getPage() {
  if (!CMS_ENABLED) return null;
  return fetchCmsPage("contact-us");
}

export async function generateMetadata(): Promise<Metadata> {
  return cmsMetadata(await getPage());
}

export default async function Page() {
  const page = await getPage();
  if (!page) return <Legacy />;
  return (
    <main>
      {renderCmsBlocks(page)}
      <ContactForm />
      <LocationSection />
    </main>
  );
}
