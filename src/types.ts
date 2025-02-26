export interface NavLink {
  name: string;
  path: string;
}

export interface DidYouKnowFact {
  fact: string;
  source: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export interface DemoFormData {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  message: string;
}