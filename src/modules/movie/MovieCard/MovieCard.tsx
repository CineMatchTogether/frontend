import { VStack, Text, HStack, Badge, Card } from "@chakra-ui/react";
import { MovieDto } from "../../../apis/movies-api";
import { useColors } from "../../../hooks/useColors";
import { LazyImage } from "../../../components/Image/Image";
import { useEffect, useState } from "react";
import { MovieRegressionControllerService } from "../../../apis/core-api";

interface MovieCardProps {
  movie: MovieDto;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const {
    name = "Без названия",
    year,
    kpRating,
    imdbRating,
    posterUrl,
    shortDescription = "Описание отсутствует",
  } = movie;

  const { subAltColor, textColor, subColor, mainColor } = useColors();

  const[recRat, setRecRat] = useState("-");

  useEffect(() => {
    movie.enName && MovieRegressionControllerService.predict({title: movie.enName}).then(r => setRecRat(r));
  },[])

  return (
    <Card.Root
      width="400px"
      height="fit-content"
      maxW="80vw"
      borderRadius="2xl"
      boxShadow="md"
      bg={subAltColor}
    >
      <LazyImage src={posterUrl || ""} />

      <VStack p={4} align="start" gap={2} h="100%">
        <Text fontSize="xl" fontWeight="bold" color={textColor}>
          {name} {year && `(${year})`}
        </Text>

        <Text fontSize="sm" color={subColor} flex="1" marginBottom={2}>
          {shortDescription}
        </Text>

        <HStack gap={4}>
          {kpRating && (
            <Badge
              color={subAltColor}
              backgroundColor={mainColor}
              fontSize="sm"
              p={1}
            >
              KP: {kpRating.toFixed(1)}
            </Badge>
          )}
          {imdbRating && (
            <Badge
              color={subAltColor}
              backgroundColor={mainColor}
              fontSize="sm"
              p={1}
            >
              IMDb: {imdbRating.toFixed(1)}
            </Badge>
          )}
          <Badge
              color={subAltColor}
              backgroundColor={mainColor}
              fontSize="sm"
              p={1}
            >
              Predict: {recRat}
            </Badge>
        </HStack>
      </VStack>
    </Card.Root>
  );
};
