import { Card, VStack, Text, HStack, Badge, Button } from "@chakra-ui/react";
import { MovieDto } from "../../../apis/movies-api";
import LazyImage from "../../../components/Image/Image";
import { useState } from "react";
import { useColors } from "../../../hooks/useColors";
import { UserControllerService } from "../../../apis/core-api";
import { LuCheck, LuPlus } from "react-icons/lu";

interface MovieCardProps {
    movie: MovieDto;
  }

export const AddedMovieCard = ({ movie }: MovieCardProps) => {
    const {
        name = "Без названия",
        year,
        kpRating,
        imdbRating,
        posterUrl,
        shortDescription = "Описание отсутствует",
        id,
      } = movie;
    
      const { subAltColor, textColor, subColor, mainColor } = useColors();
      const [isAdded, setIsAdded] = useState(false);
    
      const handleAddWatched = async () => {
        if (!id) {
          return;
        }
    
        try {
          await UserControllerService.addWatchedMovie({
            requestBody: id,
          });
          setIsAdded(true);
        } catch (error) {
          console.log(error);
        } 
      };
    
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
    
            <HStack gap={4} width="100%">
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

            <Button
              colorScheme={subAltColor}
              backgroundColor={mainColor}
              marginLeft="auto"
              fontSize="sm"
              size="xs"
              height="24px"
              borderRadius="4px"
              p={1}
              onClick={handleAddWatched}
            >
              {isAdded ? <LuCheck /> : <LuPlus />}
            </Button>
            </HStack>
          </VStack>
        </Card.Root>
      );
  };