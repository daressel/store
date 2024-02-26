export type TScreenType = 'medium' | 'small' | 'large';

export type TCategory = {
  id: string;
  name: string;
  description?: string;
  parentId: string;
};

export type TProduct = {
  id: string;
  name: string;
  description?: string;
  count: number;
  price: number;
  categories: string[];
  kWords: string[];
};
