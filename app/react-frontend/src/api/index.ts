import {
  getUsers,
  createUser,
  type IUser,
  type IUserApiExchange,
} from "./users";

import {
  getStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  type IStudent,
  type IStudentApiRequest,
  type IStudentApiResponse,
} from "./students";

import {
  uploadStudentPortrait,
  getStudentPortrait,
  deleteStudentPortrait,
} from "./studentsPortraits";


export {
  getUsers, createUser,
  getStudents, createStudent, getStudent, updateStudent, deleteStudent,
  uploadStudentPortrait, getStudentPortrait, deleteStudentPortrait,
};

export type {
  IUser, IUserApiExchange,
  IStudent, IStudentApiRequest, IStudentApiResponse,
};