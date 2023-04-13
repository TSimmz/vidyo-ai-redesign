export type NavLink = {
  id: string;
  text: string;
  subLinks?: {
    id: string;
    text: string;
  }[];
};

export type FooterLink = {
  id: string;
  title: string;
  links: {
    id: string;
    text: string;
    link: string;
  }[];
};

export const navLinks: Array<NavLink> = [
  {
    id: 'useCases',
    text: 'Use Cases',
    subLinks: [
      {
        id: 'podcasters',
        text: 'Podcasters',
      },
      {
        id: 'agencies',
        text: 'Agencies',
      },
      {
        id: 'video-creators',
        text: 'Video Creators',
      },
      {
        id: 'content-marketing',
        text: 'Content Marketing Team',
      },
      {
        id: 'webinars',
        text: 'Repurposing Webinars',
      },
      {
        id: 'video-conferencing',
        text: 'Repurposing Video Conferencing',
      },
    ],
  },
  {
    id: 'features',
    text: 'Features',
    subLinks: [
      {
        id: 'ai-captions',
        text: 'AI Captions (Video Subtitles)',
      },
      {
        id: 'content-repurposing',
        text: 'Content Repurposing',
      },
      {
        id: 'video-resizing',
        text: 'Video Resizing',
      },
      {
        id: 'video-clipping',
        text: 'Video Clipping',
      },
      {
        id: 'auto-video-chapters',
        text: 'Auto Video Chapters',
      },
      {
        id: 'alex-hormozi-captions',
        text: 'Alex Hormozi Captions',
      },
      {
        id: 'cut-magic',
        text: 'CutMagic™ (Scene Change Detection)',
      },
      {
        id: 'grant-cardone-captions',
        text: 'Grant Cardone Captions',
      },
    ],
  },
  {
    id: 'pricing',
    text: 'Pricing',
  },
  {
    id: 'resources',
    text: 'Resources',
    subLinks: [
      {
        id: 'faq',
        text: 'FAQ',
      },
      {
        id: 'video-guides',
        text: 'Video Guides',
      },
      {
        id: 'community-discord',
        text: 'Community Discord',
      },
    ],
  },
];

export const footerLinks: Array<FooterLink> = [
  {
    id: 'features-ft',
    title: 'Features',
    links: [
      {
        id: 'video-subititling-ft',
        text: 'Video Subtitling',
        link: '/',
      },
      {
        id: 'content-repurposing-ft',
        text: 'Content Repurposing',
        link: '/',
      },
      {
        id: 'video-resizing-ft',
        text: 'Video Resizing',
        link: '/',
      },
      {
        id: 'video-clipping-ft',
        text: 'Video Clipping',
        link: '/',
      },
      {
        id: 'auto-video-chapters-ft',
        text: 'Auto Video Chapters',
        link: '/',
      },
      {
        id: 'alex-hormozi-captions-ft',
        text: 'Alex Hormozi-Captions',
        link: '/',
      },
      {
        id: 'cut-magic-ft',
        text: 'Cut Magic (Scene Change Detection)',
        link: '/',
      },
      {
        id: 'grant-cardone-captions-ft',
        text: 'Grant Cardone Captions',
        link: '/',
      },
    ],
  },
  {
    id: 'video-templates',
    title: 'Video Templates',
    links: [
      {
        id: 'facebook-template-ft',
        text: 'Facebook Templates',
        link: '/',
      },
      {
        id: 'tiktok-template-ft',
        text: 'TikTok Templates',
        link: '/',
      },
      {
        id: 'youtube-template-ft',
        text: 'YouTube Templates',
        link: '/',
      },
      {
        id: 'instagram-template-ft',
        text: 'Instagram Templates',
        link: '/',
      },
      {
        id: 'linkedin-template-ft',
        text: 'LinkedIn Templates',
        link: '/',
      },
    ],
  },
  {
    id: 'company-and-resources-ft',
    title: 'Company & Resources',
    links: [
      {
        id: 'about-ft',
        text: 'About',
        link: '/',
      },
      {
        id: 'terms-of-service-ft',
        text: 'Terms of Service',
        link: '/',
      },
      {
        id: 'privacy-policy-ft',
        text: 'Privacy Policy',
        link: '/',
      },
      {
        id: 'pricing-ft',
        text: 'Pricing',
        link: '/',
      },
      {
        id: 'faq-ft',
        text: 'FAQ',
        link: '/',
      },
      {
        id: 'use-cases-ft',
        text: 'Use Cases',
        link: '/',
      },
      {
        id: 'vidyo-blog-ft',
        text: 'vidyo.ai Blog',
        link: '/',
      },
    ],
  },
  {
    id: 'alternative-to-ft',
    title: 'Alternative to',
    links: [
      {
        id: 'repurpose-io-ft',
        text: 'Repurpose.io Alternative',
        link: '/',
      },
      {
        id: 'descript-ft',
        text: 'Descript Alternative',
        link: '/',
      },
      {
        id: 'headliner-app-ft',
        text: 'Headliner.app Alternative',
        link: '/',
      },
      {
        id: 'veed-io-ft',
        text: 'VEED.io Alternative',
        link: '/',
      },
      {
        id: 'snackable-ft',
        text: 'Snackable Alternative',
        link: '/',
      },
      {
        id: 'content-fries-ft',
        text: 'ContentFries Alternative',
        link: '/',
      },
      {
        id: 'capcut-ft',
        text: 'CapCut Alternative',
        link: '/',
      },
      {
        id: 'captions-ai-ft',
        text: 'Captions.ai Alternative',
        link: '/',
      },
    ],
  },
  {
    id: 'repurpose-for-ft',
    title: 'Repurpose For',
    links: [
      {
        id: 'online-webinars-ft',
        text: 'Repurpose Online Webinars',
        link: '/',
      },
      {
        id: 'youtube-clips-ft',
        text: 'Repurpose YouTube Clips',
        link: '/',
      },
      {
        id: 'audio-podcasts-ft',
        text: 'Repurpose Audio Podcasts',
        link: '/',
      },
      {
        id: 'video-podcasts-ft',
        text: 'Repurpose Video Podcasts',
        link: '/',
      },
      {
        id: 'instagram-reels-ft',
        text: 'Repurpose Instagram Reels',
        link: '/',
      },
    ],
  },
];
