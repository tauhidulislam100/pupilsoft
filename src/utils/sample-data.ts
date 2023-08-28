import { BiGridSmall } from 'react-icons/bi';
import { FeatureItem, TechStuck, WebFeature } from '../interfaces';

/** Dummy quotes data. */

export const platformData: FeatureItem[] = [
  {
    id: 1,
    title: 'Web',
    description: {
      main: 'A web app',
    },
  },
  {
    id: 2,
    title: 'IOS Mobile',
    description: {
      main: 'An iPhone/ iPad app',
    },
  },
  {
    id: 3,
    title: 'Android Mobile',
    description: {
      main: 'An Android Phone / Tablet app',
    },
  },
  {
    id: 4,
    title: 'Hybrid Mobile',
    description: {
      main: 'An IOS and an Android app',
    },
  },
];

export const techStackData: TechStuck[] = [
  {
    id: 1,
    end: 'front',
    type: 'framework',
    title: 'React',
    logoUrl: '/img/react_logo.png',
  },
  {
    id: 2,
    end: 'front',
    type: 'tools_lib',
    title: 'Redux',
    logoUrl: '/img/redux.webp',
  },
  {
    id: 2,
    end: 'front',
    type: 'tools_lib',
    title: 'Javascript',
    logoUrl: '/img/javascript.webp',
  },
  {
    id: 2,
    end: 'front',
    type: 'tools_lib',
    title: 'Nodejs',
    logoUrl: '/img/nodejs.webp',
  },
  {
    id: 2,
    end: 'front',
    type: 'tools_lib',
    title: 'MongoDB',
    logoUrl: '/img/mongodb.webp',
  },
];

export const webQuotes: WebFeature[] = [
  {
    id: 3,
    title: 'How big is your app?',
    estimateTitle: 'App Size',
    multiSelect: false,
    features: [
      {
        id: 1,
        isSelected: false,
        title: 'Small',
        description: {
          main: 'Your app probably has around 2-3 key feature screens',
          explanation: ' (excluding any static content, sign in, sign up etc.)',
        },
        estimatedCost: 15,
      },
      {
        id: 2,
        isSelected: false,
        title: 'Small',
        description: {
          main: 'Your app probably has around 2-3 key feature screens',
          explanation: ' (excluding any static content, sign in, sign up etc.)',
        },
        estimatedCost: 15,
      },
      {
        id: 3,
        isSelected: false,
        title: 'Small',
        description: {
          main: 'Your app probably has around 2-3 key feature screens',
          explanation: ' (excluding any static content, sign in, sign up etc.)',
        },
        estimatedCost: 15,
      },
    ],
  },
  {
    id: 4,
    title: 'What level of UI would you like?',
    estimateTitle: 'UI level',
    multiSelect: false,
    features: [
      {
        id: 1,
        isSelected: false,
        title: 'MVP',
        description: {
          main: 'Design based on UI kit with minimal branding, able to fulfill key operations.',
        },
        estimatedCost: 10,
      },
      {
        id: 2,
        isSelected: false,
        title: 'Basic',
        description: {
          main: 'Partial use of UI kit + customized design.',
        },
        estimatedCost: 20,
      },
      {
        id: 3,
        isSelected: false,
        title: 'Polished',
        description: {
          main: `Fully customized design that doesn't/almost doesn't use ready-made solutions.`,
        },
        estimatedCost: 14,
      },
    ],
  },
  {
    id: 5,
    title: 'Users & Accounts',
    estimateTitle: 'Users & Accounts',
    multiSelect: true,
    value: [],
    features: [
      {
        id: 1,
        isSelected: false,
        title: 'Email / Password Sign Up',
        description: {
          main: 'Ability to log in using Email and password.',
        },
        estimatedCost: 10,
      },
      {
        id: 2,
        isSelected: false,
        title: 'Facebook Sign Up',
        description: {
          main: 'Ability to log in using Facebook profile.',
        },
        estimatedCost: 20,
      },
      {
        id: 3,
        isSelected: false,
        title: 'Twitter Sign Up',
        description: {
          main: `Ability to log in using Twitter profile.`,
        },
        estimatedCost: 14,
      },
      {
        id: 4,
        isSelected: false,
        title: 'Google Sign Up',
        description: {
          main: `Ability to log in using Google profile.`,
        },
        estimatedCost: 14,
      },
      {
        id: 5,
        isSelected: false,
        title: 'LinkedIn Sign Up',
        description: {
          main: `Ability to log in using LinkedIn profile.`,
        },
        estimatedCost: 14,
      },
      {
        id: 6,
        isSelected: false,
        title: 'Github Sign Up',
        description: {
          main: `Ability to log in using Github profile.`,
        },
        estimatedCost: 14,
      },
    ],
  },
];
