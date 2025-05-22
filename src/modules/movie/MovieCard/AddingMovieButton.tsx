import { Button } from "@chakra-ui/react/button";
import { useColors } from "../../../hooks/useColors";
import { LuCheck, LuPlus } from "react-icons/lu";
import { useState } from "react";
import { UserControllerService } from "../../../apis/core-api";

interface AddingMovieButtonProps {
  id: number;
}

const AddingMovieButton = ({ id }: AddingMovieButtonProps) => {
  const { subAltColor, mainColor } = useColors();

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
  );
};

export { AddingMovieButton };
