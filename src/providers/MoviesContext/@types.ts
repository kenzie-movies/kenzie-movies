export interface iMoviesContext {
  movies: iGetMovies[];
  modalMovie: boolean;
  modalUser: boolean;
  setModalMovie: React.Dispatch<React.SetStateAction<boolean>>;
  setModalUser: React.Dispatch<React.SetStateAction<boolean>>;
  setMovies: React.Dispatch<React.SetStateAction<iGetMovies[]>>;
  searchMovie: string;
  setSearchMovie: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
  movieFilter: iGetMovies[];
  editMovie: (movieId: number, data: iGetEditMovie) => Promise<void>;
  modalEditOpen: boolean;
  setModalEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showModalEditMovie: (movieId: number) => iGetMovies | undefined;
  editingMovie: iGetEditMovie;
  movieVerify: (movieId: number) => Promise<void>;
  deleteMovie: (movieId: number) => Promise<void>;
  showModalInfoMovie: (movieId: number) => iGetMovies | undefined;
  addMovie: (data: iGetEditMovie) => Promise<void>;
  setModalInfoOpen: (value: React.SetStateAction<boolean>) => void;
  modalInfoOpen: boolean;
  infoMovie: iGetEditMovie;
  addFavoriteMovie: (movieId: number) => void;
  removedMovie: (movieId: number) => void;
  myMoviesAdd: iGetMovies[];
  myFavoriteMovies: iGetMovies[];
}

export interface iMoviesProviderProps {
  children: React.ReactNode;
}

export interface iGetMovies {
  name: string;
  synopsis: string;
  cover: string;
  banner: string;
  release: string;
  duration: string;
  genre: string;
  classification: string;
  verified: boolean;
  userId: number;
  id: number;
}

export interface iSearchValue {
  search: string;
}

export type iGetEditMovie = Omit<iGetMovies, "userId">;

export interface iGetMoviesUser {
  email: string;
  password: string;
  name: string;
  passwordConfirmation: string;
  avatarLink: string;
  id: number;
  movies: [];
}
