export interface iUserContext {
  user: iUser | null;
  userRegister: (data: iRegisterUser) => Promise<void>;
  userLogin: (data: iLoginUser) => Promise<void>;
  userLogOut: () => void;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}
export interface iUser {
  id: number;
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  avatarLink: string;
  isAdmin: boolean;
}

export interface iRegisterUser {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  avatarLink: string;
}

export interface iLoginUser {
  email: string;
  password: string;
}

export interface iResponseUser {
  accessToken: string;
  user: iUser;
}
