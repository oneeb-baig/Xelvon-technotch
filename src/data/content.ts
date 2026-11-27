import type { NavItem, ServiceItem, StatItem } from '../types';

export const COMPANY = {
  name: 'XELVON (Private) Limited',
  shortName: 'XELVON',
  address: 'Gulberg III, Lahore, PK 54660',
  phoneDisplay: '+92 42 3789 7420',
  phoneHref: 'tel:+924237897420',
  whatsappDisplay: '+92 333 433 3611',
  whatsappHref: 'https://wa.me/923334333611',
  email: 'info@xelvon.com.pk',
  emailHref: 'mailto:info@xelvon.com.pk',
  supportHours: 'Help desk 24/7',
};

export interface ServiceCategoryLink {
  id: string;
  title: string;
  href: string;
  summary: string;
}

export const SERVICE_CATEGORIES: ServiceCategoryLink[] = [
  {
    id: 'software',
    title: 'Software & Web',
    href: '/services#software',
    summary:
      'Custom software, web and mobile products engineered to last, with security reviewed at every step.',
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security & IT',
    href: '/services#cybersecurity',
    summary:
      'Incident response & DFIR · Penetration testing · Security audits & hardening · 24/7 SOC & monitoring',
  },
  {
    id: 'cloud',
    title: 'Infrastructure & Cloud',
    href: '/services#cloud',
    summary: 'Cloud migration · Network design · Backup & recovery',
  },
  {
    id: 'support',
    title: 'Managed IT & Support',
    href: '/services#support',
    summary: '24/7 help desk · Managed services · IT consulting',
  },
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    hasDropdown: true,
    children: [
      {
        title: 'Software & Web',
        description:
          'High-performance web apps, custom software, and digital products.',
        href: '/services#software',
      },
      {
        title: 'Cyber Security & IT',
        description:
          'Detect, contain, recover, and harden your business assets.',
        href: '/services#cybersecurity',
      },
      {
        title: 'Infrastructure & Cloud',
        description:
          'Cloud migration, network design, and scalable server architecture.',
        href: '/services#cloud',
      },
      {
        title: 'Managed IT & Support',
        description:
          'Round-the-clock help desk and continuous system monitoring.',
        href: '/services#support',
      },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const TRUST_TICKS = [
  '24/7 help desk',
  'Engineers in Lahore',
  'Reply within one business day',
];

export const SERVICES: ServiceItem[] = [
  
  {
    id: 'software',
    title: 'Software & Web Development',
    category: 'Engineering',
    description:
      'Custom software architectures and web applications built for high performance and reliability.',
    bullets: [
      'Web & e-commerce applications',
      'Custom enterprise software',
      'Mobile iOS & Android apps',
      'API integrations & payment gateways',
      'AI & automation workflows',
      'Product studio & rapid MVP delivery',
    ],
    icon: 'code',
  },
  {
    id: 'cybersecurity',
    title: 'Cyber Security & Incident Response',
    category: 'Security',
    description:
      'Detect, contain, recover, and harden your infrastructure against modern cyber threats.',
    bullets: [
      'Threat detection & continuous monitoring',
      'Incident response & recovery playbooks',
      'Vulnerability assessments & penetration testing',
      'Compliance auditing & cloud security hardening',
      'Zero-trust access architecture',
      'Security awareness & staff training',
    ],
    icon: 'shield',
    featured: true,
  },
  {
    id: 'cloud',
    title: 'Infrastructure & Cloud',
    category: 'Cloud',
    description:
      'Cloud migration, network design, Kubernetes orchestration, and resilient architecture.',
    bullets: [
      'AWS, Azure, and Google Cloud migration',
      'Infrastructure as Code (Terraform, Ansible)',
      'CI/CD pipeline automation',
      'High-availability disaster recovery',
      'Cost optimization & cloud audit',
    ],
    icon: 'cloud',
  },
  {
    id: 'support',
    title: 'Managed IT & Support',
    category: 'Managed IT',
    description:
      'Dedicated technical engineers maintaining uptime, endpoint security, and IT infrastructure.',
    bullets: [
      '24/7/365 dedicated helpdesk',
      'Proactive monitoring & incident escalation',
      'Network administration & hardware lifecycle',
      'SLA-backed response commitments',
    ],
    icon: 'headset',
  },
];

export const STATS: StatItem[] = [
  { value: '99.9%', label: 'System Uptime SLA' },
  { value: '< 1 hr', label: 'Critical Response Time' },
  { value: '50+', label: 'Enterprise Deployments' },
  { value: '24/7', label: 'Active Threat Monitoring' },
];