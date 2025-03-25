export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

export interface ResourceItem {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface TestimonialItem {
  name: string;
  image: string;
  quote: string;
  rating: number;
  subtitle: string;
}

export interface EventItem {
  title: string;
  description: string;
  date: string;
  day: string;
  month: string;
  location: string;
  time: string;
  link: string;
}

export interface ScriptureItem {
  verse: string;
  reference: string;
}

export interface FormValues {
  [key: string]: any;
}

export interface PrayerRequestFormValues {
  name?: string;
  email: string;
  'prayer-request': string;
  'keep-private'?: boolean;
}

export interface ContactFormValues {
  'contact-name': string;
  'contact-email': string;
  'contact-phone'?: string;
  'contact-subject': string;
  'contact-message': string;
  'contact-agreement': boolean;
}
