export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  title: string;
  description: string;
  ctaLabel: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' }
];

export const HERO_CONTENT: HeroContent = {
  title: 'Navigating the digital landscape for success',
  description:
    'Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.',
  ctaLabel: 'Book a consultation'
};

export const BRAND_NAMES: string[] = [
  'amazon',
  'dribbble',
  'HubSpot',
  'Notion',
  'NETFLIX',
  'zoom'
];
