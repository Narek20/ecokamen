export const userEndpoints = {
  LOGIN: 'users/login',
  REGISTER: 'users/register',
  GET_USER: 'users/',
  UPDATE_USER: 'users/',
};

export const orderEndpoints = {
  GET_CURRENT_ORDERS: 'orders/',
  GET_ORDERS_HISTORY: 'orders/history/',
  GET_ORDER_BY_ID: 'orders/one/',
  PLACE_ORDER: 'orders/',
  DELETE_ORDER: 'orders/',
};

export const stoneEndpoints = {
  GET_STONE: 'stones/',
  GET_STONES_BY_CATEGORY: 'stones/category/',
};

export const basketEndpoints = {
  GET_BASKET_ITEMS: 'basket/',
  ADD_BASKET_ITEM: 'basket/',
  UPDATE_BASKET_ITEM: 'basket/',
  DELETE_BASKET_ITEM: 'basket/',
};
