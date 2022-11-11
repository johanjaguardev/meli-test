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
  description: string | null;
  sold_quantity: number | null;
  categories: [string];
  location: string;
}

export type { IItem };
