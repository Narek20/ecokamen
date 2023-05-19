import { stoneEndpoints } from '@/utils/constants/endpoints';
import { axiosInstance } from './axios.service';
import { IResponse } from '@/types/response.types';

export const getStoneByName = async (stoneName: string): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(stoneEndpoints.GET_STONE + stoneName);

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};

export const getStonesByCategory = async (
  categoryName: string
): Promise<IResponse> => {
  try {
    const data = await axiosInstance.get(
      stoneEndpoints.GET_STONES_BY_CATEGORY + categoryName
    );

    return data.data;
  } catch (err: any) {
    return {
      success: false,
      message: err.message,
    };
  }
};
