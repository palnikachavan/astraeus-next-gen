import { NavLink, DidYouKnowFact } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Vajra', path: '/vajra' },
  { name: 'Minerva', path: '/minerva' },
  { name: 'Bug Bounty', path: '/bug-bounty' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'About Us', path: '/about' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms and Conditions', path: '/terms' }
];

export const COMPANY_INFO = {
  name: 'Astraeus Next Gen',
  address: 'SNO 7/1 (P) 7/2 NR, KOKAN EXPRESS, KOTHRUD, PUNE- 41103',
  email: 'info@astraeusnextgen.com',
  year: '2025'
};

export const FOUNDERS = [
  {
    name: 'Shreejit Sen',
    role: 'Co-Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/shreejit-sen-7a7b75255/',
    image: 'public/images/Shreejit-Sen.jpg'
  },
  {
    name: 'Anush Dhavale',
    role: 'Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/anush-dhavale-693488251/',
    image: 'public/images/Anush-Dhavale.jpg'
  }
];

export const DID_YOU_KNOW_FACTS: DidYouKnowFact[] = [
  {
    fact: 'About 95% of cybersecurity breaches are caused by human error',
    source: 'The Knowledge Academy'
  },
  {
    fact: 'A hacker attack happens every 39 seconds',
    source: 'The Knowledge Academy'
  },
  {
    fact: 'The global cybersecurity market size is forecasted to grow to $248.26 billion by 2023',
    source: 'The Knowledge Academy'
  },
  {
    fact: '43% of cyber attacks target small businesses',
    source: 'The Knowledge Academy'
  },
  {
    fact: '95% of cybersecurity breaches are due to human error',
    source: 'The Knowledge Academy'
  },
  {
    fact: 'The average cost of a data breach is $3.92 million as of 2019',
    source: 'The Knowledge Academy'
  },
  {
    fact: '71% of breaches were financially motivated',
    source: 'The Knowledge Academy'
  },
  {
    fact: '52% of breaches featured hacking',
    source: 'The Knowledge Academy'
  },
  {
    fact: '28% of breaches involved malware',
    source: 'The Knowledge Academy'
  },
  {
    fact: '32% of breaches involved phishing',
    source: 'The Knowledge Academy'
  },
  {
    fact: '94% of malware is delivered via email',
    source: 'The Knowledge Academy'
  },
  {
    fact: 'The cybersecurity unemployment rate is 0%',
    source: 'The Knowledge Academy'
  },
  {
    fact: 'There will be 3.5 million unfilled cybersecurity jobs by 2021',
    source: 'The Knowledge Academy'
  },
  {
    fact: 'The average time to identify a breach is 206 days',
    source: 'The Knowledge Academy'
  },
  {
    fact: 'The average lifecycle of a breach is 314 days',
    source: 'The Knowledge Academy'
  }
];

export const EMAILJS_CONFIG = {
  publicKey: 'g4HFQoyJMSXHuCazn',
  templateId: 'template_6dyrw0g'
};