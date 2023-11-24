import { getUsers, createUser } from "../api";

interface IAuthProvider {
  isAuthenticated: boolean;
  username: string | null;
  password: string | null;
  signIn(username: string, password: string): Promise<void>;
  signUp(username: string, password: string): Promise<void>;
  signOut(): Promise<void>;
}

export const authProvider: IAuthProvider = {
  isAuthenticated: false,
  username: null,
  password: null,
  async signIn(username: string, password: string) {
    try {
      const users = (await getUsers()).data;
      const isMatch = users.some(
        (user) => user.username === username && user.password === password
      );
      if (isMatch) {
        authProvider.isAuthenticated = true;
        authProvider.username = username;
        authProvider.password = password;
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      throw new Error('Authentication failed');
    }
  },
  async signUp(username: string, password: string) {
    try {
      const requestData = { data: [{ username: username, password: password }]};
      if (await createUser(requestData)) {
        authProvider.isAuthenticated = true;
        authProvider.username = username;
        authProvider.password = password;
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      throw new Error("Registration failed");
    }
  },
  async signOut() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    authProvider.isAuthenticated = false;
    authProvider.username = "";
    authProvider.password = "";
  },
}