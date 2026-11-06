// Core domain types for future packing and trip features.

export type Trip = {
  id: string;
  name: string;
  destination: string;
  startDate: string;
  endDate: string;
};

export type PackingCategory =
  | 'clothing'
  | 'toiletries'
  | 'documents'
  | 'electronics'
  | 'health'
  | 'activities'
  | 'miscellaneous';

export type PackingItem = {
  id: string;
  name: string;
  category: PackingCategory;
  packed: boolean;
  quantity?: number;
};
