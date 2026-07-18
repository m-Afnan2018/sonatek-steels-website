import type { ComponentType } from 'react';
import Hero from '@/components/core/home/Hero';
import GlobalNetwork from '@/components/core/home/GlobalNetwork';
import BeyondBusiness from '@/components/core/home/BeyondBusiness';
import CTABannerHome from '@/components/core/home/CTABanner';
import MissionSection from '@/components/common/MissionSection/MissionSection';
import StickyNav from '@/components/common/Navbar/StickyNav';
import ServicesSection from '@/components/common/Industry/ServicesSection';
import FAQSection from '@/components/common/Industry/FAQSection';
import CTABannerIndustry from '@/components/common/Industry/CTABanner';
import IndustryHero from '@/components/common/Industry/IndustryHero';
import StatsSection from '@/components/common/Industry/StatsSection';
import HowWeCanHelp from '@/components/common/Industry/HowWeCanHelp';
import IconGrid from '@/components/common/Service/IconGrid';
import ProcessSteps from '@/components/common/Service/ProcessSteps';
import MapSection from '@/components/common/Service/MapSection';
import Impact from '@/components/core/home/Impact';
import ServicesHome from '@/components/core/home/Services';
import Testimonials from '@/components/core/home/Testimonials';
import BuiltToDeliver from '@/components/common/Industry/BuiltToDeliver';
import VideoTeaserSection from '@/components/common/VideoTeaserSection/VideoTeaserSection';
import ServiceHero from '@/components/common/Service/ServiceHero';
import SolutionHero from '@/components/common/Service/SolutionHero';
import InnovationSection from '@/components/common/Service/InnovationSection';
import AlternateCardSection from '@/components/common/AlternateSection/AlternateCardSection';
import HeroSection from '@/components/common/HeroSection/HeroSection';
import FocusAreasSection from '@/components/common/FocusAreasSection/FocusAreasSection';
import CtaSection from '@/components/common/CtaSection/CtaSection';
import SustainabilityPartners from '@/components/core/sustainability/SustainabilityPartners';
import KeyDocuments from '@/components/core/sustainability/KeyDocuments';
import RelatedDocuments from '@/components/core/sustainability/RelatedDocuments';
import SustainabilityFaqs from '@/components/core/sustainability/SustainabilityFaqs';
import FeaturedNewsCard from '@/components/core/blogs/FeaturedNewsCard/FeaturedNewsCard';
import NewsCard from '@/components/core/blogs/NewsCard/NewsCard';
import WhySonatek from '@/components/core/home/WhySonatek';
import SinglePlatform from '@/components/core/home/SinglePlatform';
import LatestNews from '@/components/core/home/LatestNews';
import SolutionInsights from '@/components/common/Service/SolutionInsights';
import TextSections from '@/components/common/TextSections/TextSections';
import JoinTeamCta from '@/components/common/JoinTeamCta/JoinTeamCta';

const SAFE_IMG = 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80';

export type FieldType =
    | 'text' | 'textarea' | 'richtext'
    | 'image' | 'video' | 'icon'
    | 'number' | 'boolean' | 'select'
    | 'link'       // single optional { label, href } sub-object
    | 'anchor-ref' // select populated from sibling blocks' anchorId, only valid inside a list itemSchema
    | 'list';      // repeatable array of rows shaped by itemSchema

export interface BlockFieldSchema {
    key: string;
    label: string;
    type: FieldType;
    placeholder?: string;
    options?: string[];       // for type: 'select'
    itemSchema?: BlockFieldSchema[]; // for type: 'list'
    maxLength?: number;       // for type: 'text' | 'textarea' — enforced in the admin form with a live counter
}

export interface BlockDefinition {
    key: string;
    family: string;
    label: string;
    /** short line shown in the palette so two same-named components (the two CTABanners) read as distinct */
    hint?: string;
    component: ComponentType<any>;
    fields: BlockFieldSchema[];
    defaultData: Record<string, any>;
}

// Grouping is by source directory (components/core/home, components/common/Industry,
// components/common/Service, generic shared sections, components/core/sustainability,
// components/core/blogs) — a defensible, non-subjective split now that there are 32 blocks.
const FAMILY_BY_KEY: Record<string, string> = {
    'hero': 'Home', 'global-network': 'Home', 'beyond-business': 'Home', 'cta-banner-home': 'Home',
    'impact': 'Home', 'services-home': 'Home', 'testimonials': 'Home',

    'mission-section': 'Solutions & Industries', 'sticky-nav': 'Solutions & Industries',
    'services-section': 'Solutions & Industries', 'faq-section': 'Solutions & Industries',
    'cta-banner-industry': 'Solutions & Industries', 'industry-hero': 'Solutions & Industries',
    'stats-section': 'Solutions & Industries', 'how-we-can-help': 'Solutions & Industries',
    'built-to-deliver': 'Solutions & Industries',

    'service-hero': 'Service', 'solution-hero': 'Service', 'innovation-section': 'Service',
    'icon-grid': 'Service', 'map-section': 'Service', 'process-steps': 'Service',

    'hero-section': 'Company', 'alternate-card-section': 'Company', 'focus-areas-section': 'Company',
    'cta-section': 'Company', 'video-teaser': 'Company', 'text-sections': 'Company', 'join-team-cta': 'Company',

    'sustainability-partners': 'Sustainability', 'key-documents': 'Sustainability',
    'related-documents': 'Sustainability', 'sustainability-faqs': 'Sustainability',

    'featured-news-card': 'Blogs', 'news-card': 'Blogs',

    'why-sonatek': 'Home', 'single-platform': 'Home', 'latest-news': 'Home',
    'solution-insights': 'Service',
};

export const FAMILY_ORDER = ['Home', 'Solutions & Industries', 'Service', 'Company', 'Sustainability', 'Blogs'];

const RAW_BLOCK_REGISTRY: Omit<BlockDefinition, 'family'>[] = [
    {
        key: 'hero',
        label: 'Hero',
        hint: 'Home — full-bleed video hero',
        component: Hero,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'text' },
            { key: 'paragraph', label: 'Paragraph', type: 'textarea' },
            { key: 'btnText', label: 'Button text', type: 'text' },
            { key: 'btnLink', label: 'Button link', type: 'text' },
            { key: 'videoUrl', label: 'Background video', type: 'video' },
            { key: 'posterUrl', label: 'Poster image (fallback)', type: 'image' },
        ],
        defaultData: {
            title: 'Your Partner in',
            description: 'Flat Steel',
            paragraph: 'Established in 2014, Sonatek Steels Pvt. Ltd. are the leading distributors of flat steel products in Northern India.',
            btnText: 'Explore Our Products',
            btnLink: '/products',
            videoUrl: 'https://cdn.pixabay.com/video/2021/02/05/64212-509543056_large.mp4',
            posterUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80',
        },
    },
    {
        key: 'global-network',
        label: 'Global Network',
        hint: 'Home / About — looping video panel',
        component: GlobalNetwork,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'headline', label: 'Headline', type: 'textarea', placeholder: 'Use \\n for a line break' },
            { key: 'videoUrl', label: 'Background video', type: 'video' },
            { key: 'sub', label: 'Footer text', type: 'textarea' },
            { key: 'ctaText', label: 'CTA text', type: 'text' },
            { key: 'ctaHref', label: 'CTA link', type: 'text' },
        ],
        defaultData: {
            label: 'Our Distribution Network', headline: 'Strong Presence Across\nNorthern India',
            videoUrl: 'https://www.pexels.com/download/video/8829606',
            sub: 'Our extensive network means fewer handovers, faster local delivery, and tailored solutions delivered through a single trusted partner.',
            ctaText: 'Our Locations', ctaHref: '/contact-us#location',
        },
    },
    {
        key: 'beyond-business',
        label: 'Beyond Business',
        hint: 'Home / Sustainability — initiative cards',
        component: BeyondBusiness,
        fields: [
            { key: 'heading', label: 'Heading', type: 'text' },
            { key: 'subheading', label: 'Subheading', type: 'textarea' },
            { key: 'bgImage', label: 'Background image', type: 'image' },
            {
                key: 'data', label: 'Initiative cards', type: 'list',
                itemSchema: [
                    { key: 'img', label: 'Image', type: 'image' },
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'des', label: 'Description', type: 'textarea' },
                ],
            },
        ],
        defaultData: {
            heading: 'BEYOND BUSINESS',
            subheading: 'Our sustainability, education, and social impact initiatives ensure that global trade leaves a positive footprint.',
            bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&q=90',
            data: [
                { img: 'https://aagamshreefoundation.org/wp-content/uploads/2026/01/Donate.svg', title: 'Aagamshree Foundation', des: 'Every individual should have the opportunity to lead a healthy and productive life.' },
                { img: 'https://cdn.prod.website-files.com/6938169ca88035d1476d6905/69fdba2a2e78b0e42257cd78_780x1000%20mobile.jpg', title: 'Using Sustainable Transportation', des: "We're committed to understanding and reducing our environmental impact until we reach net zero." },
                { img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', title: 'Empowering People', des: 'We focus on improving well-being and making a positive social impact.' },
            ],
        },
    },
    {
        key: 'cta-banner-home',
        label: 'CTA Banner',
        hint: 'Home version — not the same component as "CTA Banner (Industry)"',
        component: CTABannerHome,
        fields: [
            { key: 'headline', label: 'Headline', type: 'textarea', placeholder: 'Use \\n for a line break' },
            { key: 'sub', label: 'Subtext', type: 'textarea' },
            { key: 'btnText', label: 'Button text', type: 'text' },
            { key: 'btnLink', label: 'Button link', type: 'text' },
            { key: 'bgImage', label: 'Background image', type: 'image' },
        ],
        defaultData: {
            headline: 'Talk to a Steel\\nExpert',
            sub: 'Get solutions that fit your industrial needs. Talk to a flat steel product expert today.',
            btnText: 'Contact Us',
            btnLink: '/contact-us',
            bgImage: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=85',
        },
    },
    {
        key: 'mission-section',
        label: 'Mission Section',
        hint: 'Solutions / Industries — label + big title + body',
        component: MissionSection,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'bodyText', label: 'Body paragraph', type: 'textarea' },
        ],
        defaultData: { label: '', title: '', bodyText: '' },
    },
    {
        key: 'sticky-nav',
        label: 'Sticky Nav',
        hint: "Jump-links bar — items must point at other blocks' anchor IDs",
        component: StickyNav,
        fields: [
            {
                key: 'navItems', label: 'Nav items', type: 'list',
                itemSchema: [
                    { key: 'id', label: 'Jumps to (anchor)', type: 'anchor-ref' },
                    { key: 'label', label: 'Label', type: 'text' },
                ],
            },
        ],
        defaultData: { navItems: [] },
    },
    {
        key: 'services-section',
        label: 'Services Section',
        hint: 'Card grid — reused across Solutions, Industries, Services',
        component: ServicesSection,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
            {
                key: 'services', label: 'Service cards', type: 'list',
                itemSchema: [
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'description', label: 'Description', type: 'textarea' },
                    { key: 'image', label: 'Image', type: 'image' },
                    { key: 'href', label: 'Link', type: 'text' },
                ],
            },
            {
                key: 'topLink', label: 'Top-right link (optional)', type: 'link',
            },
        ],
        defaultData: { title: '', subtitle: '', services: [], topLink: undefined },
    },
    {
        key: 'faq-section',
        label: 'FAQ Section',
        hint: 'Accordion — reused across Solutions, Industries, Services',
        component: FAQSection,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            {
                key: 'items', label: 'Questions', type: 'list',
                itemSchema: [
                    { key: 'question', label: 'Question', type: 'text' },
                    { key: 'answer', label: 'Answer', type: 'textarea' },
                ],
            },
        ],
        defaultData: { title: 'FAQs', items: [] },
    },
    {
        key: 'cta-banner-industry',
        label: 'CTA Banner (Industry)',
        hint: 'Industry/Solutions version — not the same component as the Home "CTA Banner"',
        component: CTABannerIndustry,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            { key: 'btnText', label: 'Button text', type: 'text' },
            { key: 'btnHref', label: 'Button link', type: 'text' },
            { key: 'bgImage', label: 'Background image', type: 'image' },
            { key: 'secondaryBtnText', label: 'Secondary button text (optional)', type: 'text' },
            { key: 'secondaryBtnHref', label: 'Secondary button link', type: 'text' },
        ],
        defaultData: { title: '', description: '', btnText: 'Contact Us', btnHref: '/contact-us', bgImage: '', secondaryBtnText: '', secondaryBtnHref: '/contact-us' },
    },
    {
        key: 'industry-hero',
        label: 'Industry Hero',
        hint: 'Industries / Port pages — hero with breadcrumbs',
        component: IndustryHero,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            { key: 'image', label: 'Background image', type: 'image' },
            { key: 'ctaText', label: 'CTA button text', type: 'text' },
            { key: 'ctaHref', label: 'CTA button link', type: 'text' },
            { key: 'secondaryCtaText', label: 'Secondary CTA text (optional)', type: 'text' },
            { key: 'secondaryCtaHref', label: 'Secondary CTA link', type: 'text' },
            {
                key: 'breadcrumbs', label: 'Breadcrumbs', type: 'list',
                itemSchema: [
                    { key: 'label', label: 'Label', type: 'text' },
                    { key: 'href', label: 'Link', type: 'text' },
                ],
            },
        ],
        defaultData: {
            label: '', title: '', description: '',
            image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80',
            ctaText: 'Get in Touch', ctaHref: '/contact-us',
            secondaryCtaText: '', secondaryCtaHref: '/contact-us',
            breadcrumbs: [{ label: 'Home', href: '/' }],
        },
    },
    {
        key: 'stats-section',
        label: 'Stats Section',
        hint: 'Count-up numbers — Industries / Port pages',
        component: StatsSection,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            {
                key: 'stats', label: 'Stats', type: 'list',
                itemSchema: [
                    { key: 'prefix', label: 'Prefix (optional)', type: 'text' },
                    { key: 'value', label: 'Value', type: 'number' },
                    { key: 'suffix', label: 'Suffix (optional)', type: 'text' },
                    { key: 'label', label: 'Label', type: 'text' },
                ],
            },
            { key: 'link', label: 'Link (optional)', type: 'link' },
            { key: 'theme', label: 'Theme', type: 'select', options: ['dark', 'light'] },
        ],
        defaultData: { label: '', title: '', description: '', stats: [], link: undefined, theme: 'dark' },
    },
    {
        key: 'how-we-can-help',
        label: 'How We Can Help',
        hint: 'Cargo/help cards — Industries / Port Services',
        component: HowWeCanHelp,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
            {
                key: 'items', label: 'Items', type: 'list',
                itemSchema: [
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'image', label: 'Image', type: 'image' },
                    { key: 'href', label: 'Link', type: 'text' },
                ],
            },
        ],
        defaultData: { label: 'INDUSTRY SOLUTIONS', title: '', subtitle: '', items: [] },
    },
    {
        key: 'icon-grid',
        label: 'Icon Grid',
        hint: 'Solutions / Port Services — icon + text points',
        component: IconGrid,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
            {
                key: 'items', label: 'Points', type: 'list',
                itemSchema: [
                    { key: 'icon', label: 'Icon (Lucide name)', type: 'icon' },
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'description', label: 'Description', type: 'textarea' },
                ],
            },
        ],
        defaultData: { title: '', subtitle: '', items: [] },
    },
    {
        key: 'process-steps',
        label: 'Process Steps',
        hint: 'Numbered "how it works" sequence',
        component: ProcessSteps,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'subtitle', label: 'Subtitle (optional)', type: 'textarea' },
            {
                key: 'steps', label: 'Steps', type: 'list',
                itemSchema: [
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'description', label: 'Description', type: 'textarea' },
                ],
            },
        ],
        defaultData: { label: 'PROCESS', title: '', subtitle: '', steps: [] },
    },
    {
        key: 'map-section',
        label: 'Map Section',
        hint: 'Port pages — image + parallax + link',
        component: MapSection,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            { key: 'mapImage', label: 'Map image', type: 'image' },
            { key: 'link', label: 'Link (optional)', type: 'link' },
        ],
        defaultData: {
            title: '', description: '',
            mapImage: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=1920&q=85',
            link: undefined,
        },
    },
    {
        key: 'impact',
        label: 'Impact Stats',
        hint: 'Home — count-up stat row',
        component: Impact,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'headline', label: 'Headline', type: 'text' },
            { key: 'sub', label: 'Subtext', type: 'textarea' },
            {
                key: 'stats', label: 'Stats', type: 'list',
                itemSchema: [
                    { key: 'value', label: 'Value', type: 'number' },
                    { key: 'suffix', label: 'Suffix', type: 'text' },
                    { key: 'label', label: 'Label', type: 'text' },
                ],
            },
        ],
        defaultData: {
            label: 'Our Impact', headline: 'Numbers that define us',
            sub: 'Two decades of consistent growth and trust.',
            stats: [
                { value: 11, suffix: '+', label: 'Years of excellence' },
                { value: 200, suffix: 'k+', label: 'Tons distributed annually' },
                { value: 40, suffix: '+', label: 'Cities served' },
            ],
        },
    },
    {
        key: 'services-home',
        label: 'Product Highlights',
        hint: 'Home only — up to 3 product cards, fully editable',
        component: ServicesHome,
        fields: [
            {
                key: 'products', label: 'Product cards', type: 'list',
                itemSchema: [
                    { key: 'name', label: 'Name', type: 'text' },
                    { key: 'slug', label: 'Product slug', type: 'text' },
                    { key: 'image', label: 'Image', type: 'image' },
                ],
            },
        ],
        defaultData: { products: [{ name: 'Hot Rolled Coils', slug: 'hr-coils', image: SAFE_IMG }] },
    },
    {
        key: 'testimonials',
        label: 'Testimonials',
        hint: 'Home — scrolling review marquee',
        component: Testimonials,
        fields: [
            {
                key: 'items', label: 'Reviews', type: 'list',
                itemSchema: [
                    { key: 'name', label: 'Name', type: 'text' },
                    { key: 'designation', label: 'Designation', type: 'text' },
                    { key: 'rating', label: 'Rating (1-5)', type: 'number' },
                    { key: 'text', label: 'Review text', type: 'textarea' },
                ],
            },
        ],
        defaultData: {
            items: [{ name: 'Rohan Mehta', designation: 'Procurement Head, ABC Fabricators', rating: 5, text: 'Sonatek has been a reliable partner for our steel sourcing needs — consistent quality and on-time delivery every time.' }],
        },
    },
    {
        key: 'built-to-deliver',
        label: 'Built to Deliver',
        hint: 'Industries — icon points, currently only wired via IndustryPageContent',
        component: BuiltToDeliver,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
            {
                key: 'points', label: 'Points', type: 'list',
                itemSchema: [
                    { key: 'icon', label: 'Icon (Lucide name)', type: 'icon' },
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'description', label: 'Description', type: 'textarea' },
                ],
            },
        ],
        defaultData: { label: 'WHY SONATEK STEELS', title: '', subtitle: '', points: [] },
    },
    {
        key: 'video-teaser',
        label: 'Video Teaser',
        hint: 'Industries — currently only wired via IndustryPageContent',
        component: VideoTeaserSection,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            { key: 'videoUrl', label: 'Video', type: 'video' },
        ],
        defaultData: { label: '', title: '', description: '', videoUrl: 'https://cdn.pixabay.com/video/2021/02/05/64212-509543056_large.mp4' },
    },
    {
        key: 'service-hero',
        label: 'Service Hero',
        hint: 'Port Services — has its own fixed breadcrumb, distinct from Solution Hero',
        component: ServiceHero,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'breadcrumbLabel', label: 'Breadcrumb label (optional — short label for a long title)', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea', maxLength: 300 },
            { key: 'image', label: 'Background image', type: 'image' },
            { key: 'ctaText', label: 'CTA button text', type: 'text' },
            { key: 'ctaHref', label: 'CTA button link', type: 'text' },
            { key: 'secondaryCtaText', label: 'Secondary CTA text (optional)', type: 'text' },
            { key: 'secondaryCtaHref', label: 'Secondary CTA link', type: 'text' },
        ],
        defaultData: { title: '', description: '', image: SAFE_IMG, ctaText: 'Read More', ctaHref: '/contact-us', secondaryCtaText: '', secondaryCtaHref: '/contact-us' },
    },
    {
        key: 'solution-hero',
        label: 'Solution Hero',
        hint: 'Solutions — hero with breadcrumbs, distinct from Service Hero',
        component: SolutionHero,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            { key: 'image', label: 'Background image', type: 'image' },
            { key: 'ctaText', label: 'CTA button text', type: 'text' },
            { key: 'ctaHref', label: 'CTA button link', type: 'text' },
            {
                key: 'breadcrumbs', label: 'Breadcrumbs', type: 'list',
                itemSchema: [
                    { key: 'label', label: 'Label', type: 'text' },
                    { key: 'href', label: 'Link', type: 'text' },
                ],
            },
        ],
        defaultData: {
            title: '', description: '', image: SAFE_IMG,
            ctaText: 'Talk to an Expert', ctaHref: '/contact-us',
            breadcrumbs: [{ label: 'Home', href: '/' }],
        },
    },
    {
        key: 'innovation-section',
        label: 'Innovation Section',
        hint: 'Port Services — image/text cards',
        component: InnovationSection,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
            {
                key: 'items', label: 'Items', type: 'list',
                itemSchema: [
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'image', label: 'Image', type: 'image' },
                    { key: 'description', label: 'Description', type: 'textarea' },
                    { key: 'link', label: 'Link (optional)', type: 'text' },
                ],
            },
            { key: 'topLink', label: 'Top-right link (optional)', type: 'link' },
        ],
        defaultData: { title: '', subtitle: '', items: [], topLink: undefined },
    },
    {
        key: 'alternate-card-section',
        label: 'Alternating Card',
        hint: 'Sustainability — one image+text row, alternates side per instance',
        component: AlternateCardSection,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            { key: 'image', label: 'Image', type: 'image' },
            { key: 'link', label: 'Link (optional — leave blank to hide the button)', type: 'text' },
            { key: 'linkText', label: 'Link text', type: 'text' },
            { key: 'isReversed', label: 'Reverse layout', type: 'boolean' },
        ],
        defaultData: { title: '', description: '', image: SAFE_IMG, link: '/contact-us', linkText: 'Read More', isReversed: false },
    },
    {
        key: 'hero-section',
        label: 'Hero Section (generic)',
        hint: 'Leadership / Contact Us — breadcrumb hero',
        component: HeroSection,
        fields: [
            {
                key: 'breadcrumb', label: 'Breadcrumbs', type: 'list',
                itemSchema: [
                    { key: 'label', label: 'Label', type: 'text' },
                    { key: 'href', label: 'Link', type: 'text' },
                ],
            },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            { key: 'bgImage', label: 'Background image', type: 'image' },
            { key: 'hasBtn', label: 'Show button', type: 'boolean' },
            { key: 'btnText', label: 'Button text', type: 'text' },
            { key: 'btnHref', label: 'Button link', type: 'text' },
        ],
        defaultData: {
            breadcrumb: [{ label: 'Home', href: '/' }],
            title: '', description: '', bgImage: SAFE_IMG,
            hasBtn: false, btnText: '', btnHref: '',
        },
    },
    {
        key: 'focus-areas-section',
        label: 'Focus Areas',
        hint: 'Sustainability — tabbed card section',
        component: FocusAreasSection,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            {
                key: 'areas', label: 'Areas', type: 'list',
                itemSchema: [
                    { key: 'id', label: 'ID', type: 'text' },
                    { key: 'tabLabel', label: 'Tab label', type: 'text' },
                    { key: 'cardTitle', label: 'Card title', type: 'text' },
                    { key: 'cardDescription', label: 'Card description', type: 'textarea' },
                    { key: 'image', label: 'Image', type: 'image' },
                ],
            },
        ],
        defaultData: { title: '', description: '', areas: [] },
    },
    {
        key: 'cta-section',
        label: 'CTA Section (generic)',
        hint: 'Sustainability — full-width image CTA',
        component: CtaSection,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            { key: 'buttonText', label: 'Button text', type: 'text' },
            { key: 'buttonLink', label: 'Button link', type: 'text' },
            { key: 'bgImage', label: 'Background image', type: 'image' },
        ],
        defaultData: { title: '', description: '', buttonText: 'Read More', buttonLink: '/contact-us', bgImage: SAFE_IMG },
    },
    {
        key: 'sustainability-partners',
        label: 'Partner Logos',
        hint: 'Sustainability — scrolling logo marquee',
        component: SustainabilityPartners,
        fields: [
            {
                key: 'partners', label: 'Partners', type: 'list',
                itemSchema: [
                    { key: 'name', label: 'Name', type: 'text' },
                    { key: 'logoUrl', label: 'Logo', type: 'image' },
                ],
            },
            { key: 'baseVelocity', label: 'Scroll speed', type: 'number' },
        ],
        defaultData: { partners: [], baseVelocity: -2 },
    },
    {
        key: 'key-documents',
        label: 'Key Documents',
        hint: 'Sustainability — downloadable document cards',
        component: KeyDocuments,
        fields: [
            {
                key: 'documents', label: 'Documents', type: 'list',
                itemSchema: [
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'type', label: 'Type label', type: 'text' },
                    { key: 'imageUrl', label: 'Cover image', type: 'image' },
                    { key: 'downloadUrl', label: 'Download link', type: 'text' },
                ],
            },
        ],
        defaultData: { documents: [] },
    },
    {
        key: 'related-documents',
        label: 'Related Documents',
        hint: 'Sustainability — plain link list',
        component: RelatedDocuments,
        fields: [
            {
                key: 'documents', label: 'Documents', type: 'list',
                itemSchema: [
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'url', label: 'Link', type: 'text' },
                ],
            },
        ],
        defaultData: { documents: [] },
    },
    {
        key: 'sustainability-faqs',
        label: 'FAQ Accordion (Sustainability)',
        hint: 'Sustainability — distinct component from the Industry/Solutions FAQ Section',
        component: SustainabilityFaqs,
        fields: [
            {
                key: 'faqs', label: 'Questions', type: 'list',
                itemSchema: [
                    { key: 'question', label: 'Question', type: 'text' },
                    { key: 'answerText', label: 'Answer', type: 'textarea' },
                ],
            },
        ],
        defaultData: { faqs: [] },
    },
    {
        key: 'featured-news-card',
        label: 'Featured News Card',
        hint: 'Blogs listing — large single-post feature',
        component: FeaturedNewsCard,
        fields: [
            { key: 'date', label: 'Date', type: 'text' },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'excerpt', label: 'Excerpt', type: 'textarea' },
            { key: 'imageUrl', label: 'Image', type: 'image' },
            { key: 'link', label: 'Link', type: 'text' },
            { key: 'isReversed', label: 'Reverse layout', type: 'boolean' },
        ],
        defaultData: { date: '', title: '', excerpt: '', imageUrl: SAFE_IMG, link: '/blogs', isReversed: false },
    },
    {
        key: 'news-card',
        label: 'News Card',
        hint: 'Blogs listing — grid card',
        component: NewsCard,
        fields: [
            { key: 'date', label: 'Date', type: 'text' },
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'excerpt', label: 'Excerpt', type: 'textarea' },
            { key: 'imageUrl', label: 'Image', type: 'image' },
            { key: 'link', label: 'Link', type: 'text' },
        ],
        defaultData: { date: '', title: '', excerpt: '', imageUrl: SAFE_IMG, link: '/blogs' },
    },
    {
        key: 'why-sonatek',
        label: 'Why Sonatek',
        hint: 'Home — scroll-fade statement block',
        component: WhySonatek,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'headline', label: 'Headline', type: 'text' },
            { key: 'body', label: 'Body', type: 'textarea' },
            { key: 'ctaText', label: 'CTA text', type: 'text' },
            { key: 'ctaHref', label: 'CTA link', type: 'text' },
        ],
        defaultData: {
            label: 'Why Sonatek Steels?', headline: 'Precision. Reliability.',
            body: 'As MOU Dealers of SAIL and leading stockists in Northern India, we provide a comprehensive range of flat steel products tailored to your industrial needs. From OEMs to corporate clients, we deliver quality and excellence in every coil and sheet.',
            ctaText: 'Explore Our Solutions', ctaHref: '/supply-chain',
        },
    },
    {
        key: 'single-platform',
        label: 'Single Platform',
        hint: 'Home — pill-CTA statement block',
        component: SinglePlatform,
        fields: [
            { key: 'label', label: 'Eyebrow label', type: 'text' },
            { key: 'headline', label: 'Headline', type: 'textarea', placeholder: 'Use \\n for a line break' },
            { key: 'sub', label: 'Subtext', type: 'textarea' },
            { key: 'ctaText', label: 'CTA text', type: 'text' },
            { key: 'ctaHref', label: 'CTA link', type: 'text' },
        ],
        defaultData: {
            label: 'A Single Platform for Trade', headline: 'One Partner. Total\nSteel Solutions.',
            sub: "Whatever your project, whatever your requirement, we have the complete range of flat steel products and custom processing solutions. That's the Sonatek Steels advantage.",
            ctaText: 'Find Your Solution', ctaHref: '/supply-chain',
        },
    },
    {
        key: 'latest-news',
        label: 'Latest News',
        hint: 'Home — leave items empty to keep auto-pulling the 3 newest blog posts',
        component: LatestNews,
        fields: [
            {
                key: 'items', label: 'News items (optional — overrides the live blog feed)', type: 'list',
                itemSchema: [
                    { key: 'date', label: 'Date', type: 'text' },
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'href', label: 'Link', type: 'text' },
                    { key: 'image', label: 'Image', type: 'image' },
                    { key: 'isLogo', label: 'Show logo placeholder instead of image', type: 'boolean' },
                ],
            },
        ],
        defaultData: { items: [] },
    },
    {
        key: 'solution-insights',
        label: 'Solution Insights',
        hint: 'Solutions — leave items empty to keep auto-pulling the 3 newest blog posts',
        component: SolutionInsights,
        fields: [
            {
                key: 'items', label: 'Blog items (optional — overrides the live blog feed)', type: 'list',
                itemSchema: [
                    { key: 'slug', label: 'Blog slug', type: 'text' },
                    { key: 'title', label: 'Title', type: 'text' },
                    { key: 'excerpt', label: 'Excerpt', type: 'textarea' },
                    { key: 'coverImage', label: 'Cover image', type: 'image' },
                ],
            },
        ],
        defaultData: { items: [] },
    },
    {
        key: 'text-sections',
        label: 'Text Sections',
        hint: 'Legal/static pages — title + intro + always-visible heading/paragraph list',
        component: TextSections,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'intro', label: 'Intro paragraph (optional)', type: 'textarea' },
            {
                key: 'breadcrumb', label: 'Breadcrumbs (optional)', type: 'list',
                itemSchema: [
                    { key: 'label', label: 'Label', type: 'text' },
                    { key: 'href', label: 'Link', type: 'text' },
                ],
            },
            {
                key: 'sections', label: 'Sections', type: 'list',
                itemSchema: [
                    { key: 'heading', label: 'Heading', type: 'text' },
                    { key: 'content', label: 'Content', type: 'textarea' },
                ],
            },
        ],
        defaultData: { title: '', intro: '', breadcrumb: [{ label: 'Home', href: '/' }], sections: [] },
    },
    {
        key: 'join-team-cta',
        label: 'Join Team CTA',
        hint: 'About Us — plain split-layout CTA, distinct from "CTA Section (generic)"',
        component: JoinTeamCta,
        fields: [
            { key: 'title', label: 'Title', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
            { key: 'buttonText', label: 'Button text', type: 'text' },
            { key: 'buttonLink', label: 'Button link', type: 'text' },
        ],
        defaultData: { title: '', description: '', buttonText: 'Join our team', buttonLink: '/leadership' },
    },
];

export const BLOCK_REGISTRY: BlockDefinition[] = RAW_BLOCK_REGISTRY.map((b) => ({
    ...b,
    family: FAMILY_BY_KEY[b.key] ?? 'Other',
}));

export function getBlockDefinition(key: string): BlockDefinition | undefined {
    return BLOCK_REGISTRY.find((b) => b.key === key);
}
