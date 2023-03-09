export interface iMoviesProvider {
    movies: iGetMovies | [];
    setMovies: React.Dispatch<React.SetStateAction<iGetMovies | []>>;
    modalMovie: boolean;
    setModalMovie:React.Dispatch<React.SetStateAction<boolean>>;
    modalUser:boolean;
    setModalUser:React.Dispatch<React.SetStateAction<boolean>>;
  }
  
export interface iMoviesProviderProps {
    children: React.ReactNode;
  }

export interface iGetMovies {
    name: string;
    synopsis:string; 
    cover: string;
    release: string;
    duration: string;
    genre: string;
    classification:string;
    verified: boolean;
    userId: number;
    id: number;
}
