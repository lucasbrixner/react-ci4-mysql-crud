import axios, { AxiosError } from "axios";
import { GridRowId } from "@mui/x-data-grid";
import { studentsEndpoint } from "./endpoints";

export const getStudents = async () => {
  const headers = { "Accept": "application/json" };
  try {
    const response = await axios.get<IStudentApiResponse>(
      studentsEndpoint, { headers }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}

export const createStudent = async (requestBody: IStudentApiRequest) => {
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };
  try {
    const response = await axios.post(
      studentsEndpoint, requestBody, { headers }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}

export const getStudent = async (id: GridRowId) => {
  const headers = { "Accept": "application/json" };
  try {
    const response = await axios.get<IStudentApiResponse>(
      `${studentsEndpoint}/${id}`, { headers }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}

export const updateStudent = async (id: GridRowId, requestBody: IStudentApiRequest) => {
  const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
  };
  try {
    const response = await axios.put(
      `${studentsEndpoint}/${id}`, requestBody, { headers }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}

export const deleteStudent = async (id: GridRowId) => {
  const headers = { "Accept": "application/json" };
  try {
    const response = await axios.delete(
      `${studentsEndpoint}/${id}`, { headers }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}

interface IStudent {
  given_name: string;
  surname: string;
  email: string;
  phone: string;
  address_1: string;
  address_2: string;
  city: string;
  state_code: string;
  zip_code: string;
}

interface IStudentApiRequest {
  data: IStudent[];
}

type IIDStudent = IStudent & { id: GridRowId };

interface IStudentApiResponse {
  data: IIDStudent[];
}

export type { IStudent, IStudentApiRequest, IStudentApiResponse };