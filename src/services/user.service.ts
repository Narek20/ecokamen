import { userEndpoints } from '@/utils/constants/endpoints';
import { axiosInstance } from './axios.service';
import { IResponse } from '@/types/response.types';

export const getUser = async (): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(userEndpoints.GET_USER);

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const updateUser = async (
  {
    fullName,
    email,
    phone,
  }: {
    fullName: string;
    email: string;
    phone: string;
  },
  userId: string
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.put(userEndpoints.UPDATE_USER + userId, {
      fullName,
      phone,
      email,
    });

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const subscribeForNews = async (email: string): Promise<IResponse> => {
  try {
    const data = await axiosInstance.post(userEndpoints.SUBSCRIBE_FOR_NEWS, {
      email,
    });

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};
