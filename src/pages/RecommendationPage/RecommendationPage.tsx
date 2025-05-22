import { Center } from "@chakra-ui/react";
import { RecMovieList } from "../../modules/movie/RecMovieList/RecMovieList";

const RecommendationPage = () => {
  return (
    <Center h="100%">
      <RecMovieList />
    </Center>
  );
};

export { RecommendationPage };
