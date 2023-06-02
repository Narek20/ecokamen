export interface IOrder {
  stoneIds: string[];
  userId: string;
  price: string;
  state: string;
  quantity: number;
  deliveryPrice: number;
  payed: boolean;
  paymentType: string;
  buyerFullName: string;
  buyerEmail: string;
  buyerPhone: string;
  buyerAddress: string;
  createdAt: string;
}

export enum OrderDetails {
  PERSONAL_DETAILS = 'personalDetails',
  DELIVERY_DETAILS = 'deliveryDetails',
  PAYMENT_DETAILS = 'paymentDetails',
  PRODUCT_IDS = 'productIds',
}

export interface IOrderDetails {
  personalDetails: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  deliveryDetails: string;
  paymentDetails: string;
  productIds: string[] | [];
  userId: string;
  totalPrice: number;
}
