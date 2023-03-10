export interface iMoviesContext {
  movies: iGetMovies[];
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
}

export interface iMoviesProviderProps {
  children: React.ReactNode;
}

export interface iGetMovies {
  name: string;
  synopsis: string;
  cover: string;
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
