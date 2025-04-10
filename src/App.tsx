import { Provider } from "./components/ui/provider";
import { Box } from "@chakra-ui/react";
import { useColors } from "./hooks/useColors";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "./utils/const";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { useAppDispatch } from "./hooks";
import { refreshAction } from "./store/userProcess/userActions";
import { OAuthLoginHandlerPage } from "./pages/OAuthLoginHandlerPage/OAuthLoginHandlerPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";

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
          <BrowserRouter>
            <Routes>
              {/* Только для неавторизованных */}
              <Route
                element={
                  <PrivateRoute
                    requiredStatuses={[AuthorizationStatus.NoAuth]}
                    redirect={AppRoute.Main}
                  />
                }
              >
                <Route path={AppRoute.Login} element={<LoginPage />} />
                <Route path="*" element={<Navigate to={AppRoute.Login} />} />
              </Route>

              {/* Только для авторизованных */}
              <Route
                element={
                  <PrivateRoute
                    requiredStatuses={[AuthorizationStatus.Auth]}
                    redirect={AppRoute.Login}
                  />
                }
              >
                <Route path={AppRoute.Main} element={<MainPage />} />
                <Route
                  path={AppRoute.OAuthHandler}
                  element={<OAuthLoginHandlerPage />}
                />
                <Route path="*" element={<Navigate to={AppRoute.Main} />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </Box>
      </Provider>
    </>
  );
}

export default App;
