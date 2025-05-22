import { Box, HStack, Text, Menu, Button } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useColors } from "../../hooks/useColors";

const Header = () => {
  const { textColor, subAltColor } = useColors();

  return (
    <Box display="flex" flexDirection="column" h="100%">
      <Box boxSizing="border-box" w="100%" top={0} zIndex={1} p={5}>
        <HStack alignItems="center" justifyContent="space-between" h="100%">
          <Text fontWeight="bold" fontSize="lg">
            CineMatch Together
          </Text>

          <Menu.Root>
            <Menu.Trigger asChild>
              <Button
                variant="outline"
                size="md"
                color={textColor}
                backgroundColor={subAltColor}
                _focus={{ outline: "none", boxShadow: "none" }}
              >
                <GiHamburgerMenu />
              </Button>
            </Menu.Trigger>

            <Menu.Positioner>
              <Menu.Content color={textColor} backgroundColor={subAltColor} borderRadius="2xl">
                <Menu.Item
                  color={textColor}
                  value="profile"
                  fontSize="lg"
                  py={3}
                  px={6}
                  asChild
                >
                  <Link to="/recommendation">Рекомендации</Link>
                </Menu.Item>
                <Menu.Item
                  color={textColor}
                  value="settings"
                  fontSize="lg"
                  py={3}
                  px={6}
                  asChild
                >
                  <Link to="/history">История просмотра</Link>
                </Menu.Item>
                <Menu.Item
                  color={textColor}
                  value="logout"
                  fontSize="lg"
                  py={3}
                  px={6}
                  asChild
                >
                  <Link to="/adding">Добавление фильма</Link>
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Menu.Root>
        </HStack>
      </Box>
      <Box flex={1} overflow="auto">
        <Outlet />
      </Box>
    </Box>
  );
};

export { Header };
