type NavLink = {
  id: string;
  text: string;
  subLinks?: {
    id: string;
    text: string;
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
