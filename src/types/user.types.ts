export type IUser = {
  _id?: string;
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  phone: string;
  password: string;
  repeatPassword?: string;
};
