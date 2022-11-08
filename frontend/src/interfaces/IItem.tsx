interface IItem {
  id: string;
  price: {
    currency: string;
    amount: number;
    decimal: number;
  };
  title: string;
  picture: string;
  condition: string;
  free_shipping: boolean;
  description?: string;
  sold_quantity?: number;
  categories: [string];
}

export type { IItem };
