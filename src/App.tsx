import { Provider } from "./components/ui/provider";
import { Box } from "@chakra-ui/react";
import { useColors } from "./hooks/useColors";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppRoute, AuthorizationStatus } from "./utils/const";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { useAppDispatch } from "./hooks";
import { refreshAction } from "./store/userProcess/userActions";
import { OAuthLoginHandlerPage } from "./pages/OAuthLoginHandlerPage/OAuthLoginHandlerPage";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import { HistoryPage } from "./pages/HistoryPage/HistoryPage";
import { Header } from "./components/Header/Header";
import { RecommendationPage } from "./pages/RecommendationPage/RecommendationPage";
import { AddingPage } from "./pages/AddiingPage/AddingPage";
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
              {/* Только для неавторизованных */}
              <Route
                element={
                  <PrivateRoute
                    requiredStatuses={[AuthorizationStatus.NoAuth]}
                    redirect={AppRoute.History}
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
                <Route element={<Header />}>
                  <Route path={AppRoute.Recommendation} element={<RecommendationPage />} />
                  <Route path={AppRoute.History} element={<HistoryPage />} />
                  <Route path={AppRoute.Adding} element={<AddingPage />} /> 
                </Route>

                <Route
                  path={AppRoute.OAuthHandler}
                  element={<OAuthLoginHandlerPage />}
                />
                <Route path="*" element={<Navigate to={AppRoute.History} />} />
              </Route>
            </Routes>
          </HashRouter>
        </Box>
      </Provider>
    </>
  );
}

export default App;
