import { useColorModeValue } from "../components/ui/color-mode";

export const useColors = () => {
    const bgColor = useColorModeValue("#141221", "#141221");
    const mainColor = useColorModeValue("#fd77d7", "#fd77d7");
    const textColor = useColorModeValue("#dde5ed", "#dde5ed");
    const subColor = useColorModeValue("#676e8a", "#676e8a");
    const subAltColor = useColorModeValue("#1e1d2f", "#1e1d2f")
  
    return { bgColor, mainColor, textColor, subColor, subAltColor};
  };
