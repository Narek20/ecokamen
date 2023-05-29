export interface IOrder {
  stoneId: string;
  userId: string;
  price: number;
  state: string;
  quantity: number;
  deliveryPrice: number;
}

export enum OrderDetails {
  PERSONAL_DETAILS = 'personalDetails',
  DELIVERY_DETAILS = 'deliveryDetails',
  PAYMENT_DETAILS = 'paymentDetails',
  PRODUCT_IDS = 'productIds',
}

export interface IOrderDetails {
  personalDetails: {
    fullName: string,
    email: string,
    phone: string,
    address: string,
  },
  deliveryDetails: string,
  paymentDetails: string,
  productIds: string[] | [],
}