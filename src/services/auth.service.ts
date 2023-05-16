import { IUser } from '@/types/user.types';
import { userEndpoints } from '@/utils/constants/endpoints';
import { axiosInstance } from './axios.service';
import { IResponse } from '@/types/response.types';

export const userLogin = async (
  email: string,
  password: string
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.post(userEndpoints.LOGIN, {
      email,
      password,
    });
    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const userRegister = async (newUserData: IUser): Promise<IResponse> => {
  try {
    const data = await axiosInstance.post(userEndpoints.REGISTER, {
      ...newUserData
    });

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};
