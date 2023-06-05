import { basketEndpoints } from '@/utils/constants/endpoints';
import { axiosInstance } from './axios.service';
import { IResponse } from '@/types/response.types';
import { IBasket } from '@/types/basket.types';

export const getBasketItems = async (userId: string): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(
      basketEndpoints.GET_BASKET_ITEMS + userId
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const addBasketItem = async (itemInfo: IBasket): Promise<IResponse> => {
  try {
    const data = await axiosInstance.post(
      basketEndpoints.GET_BASKET_ITEMS,
      itemInfo
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const updateBasketItem = async (userId: string): Promise<IResponse> => {
  try {
    const data = await axiosInstance.put(basketEndpoints.UPDATE_BASKET_ITEM);

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const removeBasketItem = async (
  userId: string,
  stoneId: string
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.delete(
      basketEndpoints.DELETE_BASKET_ITEM + userId + '/' + stoneId
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const removeAllBasketItems = async (
  userId: string
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.delete(
      basketEndpoints.DELETE_BASKET_ITEM + userId
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};
