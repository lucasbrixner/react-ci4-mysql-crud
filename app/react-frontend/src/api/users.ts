import axios from "axios";
import { usersEndpoint } from "./endpoints";

export const getUsers = async (): Promise<IUserApiExchange> => {
  const headers = {
    "Accept": "application/json"
  };
  const response = await axios.get<IUserApiExchange>(usersEndpoint, { headers });
  return response.data;
}

export const createUser = async (
  requestData: IUserApiExchange
): Promise<IUserApiExchange> => {
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };
  const response = await axios.post(usersEndpoint, requestData, { headers });
  return response.data;
}

interface IUser {
  username: string;
  password: string;
}

interface IUserApiExchange {
  data: IUser[];
}

export type { IUser, IUserApiExchange };