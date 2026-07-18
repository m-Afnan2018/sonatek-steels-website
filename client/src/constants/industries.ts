// All industries now have bespoke pages (see app/(public)/industries/*/page.legacy.tsx)
// instead of being driven by this template — kept as an empty stub since
// IndustryPageContent.tsx still imports the shape.
export const INDUSTRIES_DATA = {};

export type IndustryKey = keyof typeof INDUSTRIES_DATA;
