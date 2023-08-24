// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { ReactNode } from 'react';

export type WebFeature = {
  id: number;
  title: string;
  estimateTitle: string;
  value?: number | number[];
  multiSelect: boolean;
  features: FeatureItem[];
};

export type FeatureItem = {
  id: number;
  title: string;
  icon?: ReactNode;
  description: {
    main: string;
    explanation?: string;
  };
  isSelected?: boolean;
  estimatedCost?: number;
};
