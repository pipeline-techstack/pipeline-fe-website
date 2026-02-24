import { StaticImageData } from "next/image";

// Nav types
type NavLink = {
  label: string;
  href?: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
};

export type NavbarNewProps = {
  navigationLinks: NavLink[];
  demolink: string;
};

// hero types

export type HeroProps = {
  cta: string;
  title: string;
  subtitle: string;
  button_text: string;
  img: StaticImageData;
  imgclassname?: string;
  button_link:string;
};

// industry types

export type Industry = {
  title: string;
  icon: StaticImageData;
};

export type TrustedIndustriesSectionProps = {
  badgeText: string;
  heading: string;
  subheading: string;
  industries: Industry[];
};

// how it works types

export type Step = {
  title: string;
  description: string;
  bullets: string[];
  img: StaticImageData;
};

export type HowItWorksSectionProps = {
  heading: string;
  subheading: string;
  steps: Step[];
};

// platfrom performance types
type stat = {
  value: string;
  label: string;
};
export type PlatfromPerformanceProps = {
  heading: string;
  stats: stat[];
  achievements: string[];
};

// outcome types

type entry = {
  percentage: string;
  title: string;
  description: string;
  icon: StaticImageData;
};
export type OutcomeProps = {
  heading: string;
  outcomes: entry[];
};


// visibility types

type Item = {
  icon: StaticImageData;
  title: string;
  description: string;
};

export type VisibilityProps = {
  heading: string;
  subtitle: string;
  items: Item[];
  autoInterval?: number; 
  img: StaticImageData;
};

// footer types
type ArrayofLinks = {
  label: string;
  href: string;
}
export type FooterProps = {
  tagline: string;
  footerLinks: {
    product: ArrayofLinks[],
    company: ArrayofLinks[],
    resources: ArrayofLinks[]
  }
}

// cta types

export type CTAProps = {
  tagline: string;
  heading: string;
  subheading: string;
  link: string;
}

// demo types

export type DemoProps = {
  cta: string;
  headline: string;
  page: string;
}

// CTA Demo types

export type CTADemoProps={
  heading: string;
  subheading: string;
}