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
  fullName: string,
  email: string,
  phone: string
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.put(userEndpoints.UPDATE_USER, {
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
