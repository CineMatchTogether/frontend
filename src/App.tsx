import { Provider } from './components/ui/provider'
import { Box } from '@chakra-ui/react'
import { useColors } from './utils/useColors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './utils/const';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MainPage } from './pages/MainPage/MainPage';

function App() {
  const { bgColor } = useColors();

  return (
    <>
      <Provider>
        <Box h="100vh" w="100vw" backgroundColor={bgColor}>
          <BrowserRouter>
            <Routes>
              <Route path={AppRoute.Login} element={<LoginPage />} />
              <Route path={AppRoute.Main} element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Provider >
    </>
  )
}

export default App
