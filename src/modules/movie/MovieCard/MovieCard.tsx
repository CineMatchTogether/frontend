import { VStack, Text, HStack, Badge, Card, Box } from "@chakra-ui/react";
import { MovieDto } from "../../../apis/movies-api";
import { useColors } from "../../../hooks/useColors";
import { LazyImage } from "../../../components/Image/Image";
import { useState } from "react";
import { MovieCardType } from "./const";
import { AddingMovieButton } from "./AddingMovieButton";

interface MovieCardProps {
  movie: MovieDto;
  movieCardType?: MovieCardType;
}

export const MovieCard = ({
  movie,
  movieCardType = MovieCardType.Default,
}: MovieCardProps) => {
  const {
    name = "Без названия",
    year,
    kpRating,
    imdbRating,
    posterUrl,
    shortDescription = "Описание отсутствует",
    description = "Описание отсутствует",
    id,
  } = movie;

  const { subAltColor, textColor, subColor, mainColor } = useColors();

  const [expanded, setExpanded] = useState(false);

  return (
    <Card.Root
      width="400px"
      maxW="80vw"
      borderRadius="2xl"
      boxShadow="md"
      bg={subAltColor}
    >
      <LazyImage src={posterUrl || ""} />

      <Box h="100%" overflow="hidden">
        <VStack p={4} align="start" gap={2} h="100%">
          <Text fontSize="xl" fontWeight="bold" color={textColor}>
            {name} {year && `(${year})`}
          </Text>

          <Text
            fontSize="sm"
            color={subColor}
            flex="1"
            marginBottom={2}
            overflow="hidden"
            style={
              !expanded
                ? {
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    cursor: "pointer",
                  }
                : { cursor: "pointer" }
            }
            onClick={() => setExpanded((prev) => !prev)}
          >
            {shortDescription || description}
            {!expanded && (
              <Box as="span" color="blue.400">
                ...
              </Box>
            )}
          </Text>

          <HStack justifyContent="space-between" width="100%">
            <HStack gap={4}>
              {kpRating ? (
                <Badge
                  color={subAltColor}
                  backgroundColor={mainColor}
                  fontSize="sm"
                  p={1}
                >
                  KP: {kpRating.toFixed(1)}
                </Badge>
              ) : null}
              {imdbRating ? (
                <Badge
                  color={subAltColor}
                  backgroundColor={mainColor}
                  fontSize="sm"
                  p={1}
                >
                  IMDb: {imdbRating.toFixed(1)}
                </Badge>
              ) : null}
            </HStack>
            {movieCardType === MovieCardType.Added && (
              id && <AddingMovieButton id={id} />
            )}
          </HStack>
        </VStack>
      </Box>
    </Card.Root>
  );
};
