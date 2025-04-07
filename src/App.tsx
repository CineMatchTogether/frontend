import { Provider } from "./components/ui/provider";
import { Box } from "@chakra-ui/react";
import { useColors } from "./hooks/useColors";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "./utils/const";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { refreshAction } from "./store/userProcess/userActions";
import { OAuthLoginHandlerPage } from "./pages/OAuthLoginHandlerPage/OAuthLoginHandlerPage";

function App() {
  const { bgColor } = useColors();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshAction());
  });

  return (
    <>
      <Provider>
        <Box h="100vh" w="100vw" backgroundColor={bgColor}>
          <HashRouter>
            <Routes>
              <Route path={AppRoute.Login} element={<LoginPage />} />
              <Route path={AppRoute.Main} element={<MainPage />} />
              <Route
                path={AppRoute.OAuthHandler}
                element={<OAuthLoginHandlerPage />}
              />
            </Routes>
          </HashRouter>
        </Box>
      </Provider>
    </>
  );
}

export default App;
