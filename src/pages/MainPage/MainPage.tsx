import { Center, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AuthControllerService, UserDto } from "../../core-api";


export const MainPage = () => {

    const [user, setUser] = useState<UserDto>();

    useEffect(() => {
        AuthControllerService.refreshtoken()
        .then((usr) => {
            setUser(usr);
        });
    }, []);

    return (
        <Center h="100%">
            <Text w="70%" textWrap="wrap" textAlign="center">
                {user?.username}
                <br/>
                {user.roles[0]}
            </Text>
        </Center>
    );
}