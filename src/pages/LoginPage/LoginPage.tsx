import { Box, Button, Center, Container, Flex } from "@chakra-ui/react";
import { YandexIcon } from "../../assets/icons/YandexIcon";
import { useColors } from "../../hooks/useColors";
import { AuthenticationService } from "../../apis/core-api";

export const LoginPage = () => {
  const { textColor, subAltColor } = useColors();

  const yandexAuth = AuthenticationService.redirectToOauth2Yandex;

  return (
    <Center h="100%">
      <Container
        boxShadow="xl"
        borderRadius="lg"
        width="70%"
        maxWidth="400px"
        padding="2em"
        backgroundColor={subAltColor}
      >
        <Flex direction="column" align="center">
          <Box
            fontSize="2xl"
            fontWeight="bold"
            color={textColor}
            mb="1em"
            textAlign="center"
          >
            Войти через Яндекс
          </Box>
          <Button color={textColor} size="lg" onClick={yandexAuth}>
            <YandexIcon />
            Авторизоваться
          </Button>
        </Flex>
      </Container>
    </Center>
  );
};
