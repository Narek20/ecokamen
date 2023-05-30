import { orderEndpoints } from '@/utils/constants/endpoints';
import { axiosInstance } from './axios.service';
import { IResponse } from '@/types/response.types';
import { IOrderDetails } from '@/types/order.types';

export const getCurrentOrders = async (userId: string): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(
      orderEndpoints.GET_CURRENT_ORDERS + userId
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const getOrdersHistory = async (userId: string): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(
      orderEndpoints.GET_ORDERS_HISTORY + userId
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const getOrdersById = async (orderId: string): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(
      orderEndpoints.GET_ORDER_BY_ID + orderId
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const placeOrder = async (orderData: IOrderDetails): Promise<IResponse> => {
  try {
    const data = await axiosInstance.post(
      orderEndpoints.PLACE_ORDER,
      orderData
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const removeOrder = async (
  orderId: string
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.delete(
      orderEndpoints.DELETE_ORDER + orderId
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};
