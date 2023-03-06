export interface iUserContext {
  userRegister: (data: iRegisterUser) => Promise<void>;
  userLogin: (data: iLoginUser) => Promise<void>;
}

export interface iUserProviderProps {
  children: React.ReactNode;
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
