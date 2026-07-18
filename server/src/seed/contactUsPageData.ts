// Initial Contact Us Page doc — makes the Hero section admin-editable.
// Content matches the previously hardcoded values in
// client/src/app/(public)/contact-us/page.legacy.tsx exactly, so seeding
// this changes nothing visually. Seed with:
//   npm run seed:page -- src/seed/contactUsPageData.ts
import type { PageSeedInput } from '../utils/upsertPage';

const CONTACT_US_PAGE: PageSeedInput = {
    slug: 'contact-us',
    title: 'Contact Us',
    status: 'published',
    seo: {},
    blocks: [
        {
            blockType: 'hero-section',
            order: 0,
            data: {
                breadcrumb: [
                    { label: 'Home', href: '/' },
                    { label: 'Contact Us', href: '/contact-us' },
                ],
                title: "Let's Talk",
                description: 'Our team of experts is always ready to assist you with your needs.',
                bgImage: 'https://images.unsplash.com/photo-1613993995046-07bce4b0bfed?q=80&w=1170&auto=format',
                hasBtn: false,
                btnText: '',
                btnHref: '',
            },
        },
    ],
};

export default CONTACT_US_PAGE;
