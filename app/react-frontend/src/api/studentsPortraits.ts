import axios, { AxiosError } from "axios";
import { GridRowId } from "@mui/x-data-grid";
import { studentsEndpoint } from "./endpoints";

export const getStudentPortrait = async (id: GridRowId) => {
  try {
    const response = await axios.get<Blob>(
      `${studentsEndpoint}/${id}/portrait`, { responseType: "blob" }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}

export const uploadStudentPortrait = async (id: GridRowId, file: File) => {
  const formData = new FormData();
  formData.append('portrait', file);
  const headers = { "Content-Type": "multipart/form-data" };
  try {
    const response = await axios.post(
      `${studentsEndpoint}/${id}/portrait`, formData, { headers }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}

export const deleteStudentPortrait = async (id: GridRowId) => {
  const headers = { "Accept": "application/json" };
  try {
    const response = await axios.delete(
      `${studentsEndpoint}/${id}/portrait`, { headers }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
}