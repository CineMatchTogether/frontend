import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieControllerService, MovieDto } from "../../apis/movies-api";
import { UserControllerService } from "../../apis/core-api";


export const fetchUserWatchHistory = createAsyncThunk<Array<MovieDto>>(
    "movies/user-history",
    async () => {
        try {
          const movieIds = await UserControllerService.getWatchHistory();
          
          const movies = await MovieControllerService.getMany1({ ids: movieIds });
          
          return movies; 
        } catch (error) {
          console.log(error);
          return [];
        }
      }
)