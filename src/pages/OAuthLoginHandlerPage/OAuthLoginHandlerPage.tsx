import { useEffect, useLayoutEffect, useState } from "react";
import {
  connectSocket,
  disconnectSocket,
} from "../../store/webSocketsProcess/webSocketsProcess";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getHistoryMessages,
  getOauthMessages,
  getWebSocketConnection,
} from "../../store/webSocketsProcess/selectors";
import { MessageType } from "../../store/webSocketsProcess/WebSocketMessage";
import { sendMessage } from "../../store/webSocketsProcess/actions";
import { Badge, Button, Center, Spinner, Timeline } from "@chakra-ui/react";
import { LuCheck } from "react-icons/lu";
import { useColors } from "../../hooks/useColors";
import { Link } from "react-router-dom";
import { AppRoute } from "../../utils/const";

export const OAuthLoginHandlerPage = () => {
  const dispatch = useAppDispatch();
  const oauthMessages = useAppSelector(getOauthMessages);
  const historyMessages = useAppSelector(getHistoryMessages);
  const isConnected = useAppSelector(getWebSocketConnection);

  const [oauthSent, setOauthSent] = useState(false);
  const [historySent, setHistorySent] = useState(false);

  const { mainColor, bgColor } = useColors();

  useLayoutEffect(() => {
    dispatch(connectSocket());

    return () => {
      dispatch(disconnectSocket());
    };
  }, []);

  // Отправка статуса авторизации
  useEffect(() => {
    if (isConnected && !oauthSent) {
      setTimeout(() => {
        dispatch(sendMessage({ messageType: MessageType.FetchKinopoiskId }));
        setOauthSent(true);
      }, 3000);
    }
  }, [isConnected, oauthSent]);

  // Отправка History после OAuth
  useEffect(() => {
    if (oauthMessages.length > 0 && !historySent) {
      dispatch(sendMessage({ messageType: MessageType.FetchKinopoiskHistory }));
      setHistorySent(true);
    }
  }, [oauthMessages, historySent]);

  const oauthDone = oauthMessages.length > 0;
  const historyDone =
    historyMessages.length > 0
      ? !historyMessages[historyMessages.length - 1].content.hasNextPage
      : false;
  const countFetched =
    historyMessages.length > 0
      ? historyMessages[historyMessages.length - 1].content.pageInfo
      : "0";

  return (
    <Center h="100%" alignItems="center" flexDirection="column" gap={8}>
      <Timeline.Root size="xl" w="max-content">
        {/* Step 1: OAuth */}
        <Timeline.Item>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator>
              {oauthDone ? <LuCheck /> : <Spinner />}
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content padding="0">
            <Timeline.Title>
              Ищем вас на Кинопоиске{" "}
              {oauthDone ? (
                <Badge colorPalette="teal">Готово</Badge>
              ) : (
                <Badge>Ожидается</Badge>
              )}
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>

        {/* Step 2: История */}
        <Timeline.Item>
          <Timeline.Connector alignContent="center">
            <Timeline.Separator />
            <Timeline.Indicator>
              {historyDone ? <LuCheck /> : oauthDone ? <Spinner /> : null}
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content padding="40px 0">
            <Timeline.Title>
                Загрузка истории с Кинопоиска
                <br />
                (Выгружено {countFetched} фильмов)
              {historyDone ? (
                <Badge colorPalette="teal">Готово</Badge>
              ) : (
                <Badge>Ожидается</Badge>
              )}
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>

        {/* Step 2: Успех */}
        <Timeline.Item>
          <Timeline.Connector >
            <Timeline.Separator />
            <Timeline.Indicator>
              {historyDone ? <LuCheck /> : historyDone ? <Spinner /> : null}
            </Timeline.Indicator>
          </Timeline.Connector>
          <Timeline.Content >
            <Timeline.Title>Успех</Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline.Root>
      
      <Link to={`${AppRoute.Main}`}>
        <Button disabled={!historyDone} backgroundColor={mainColor} color={bgColor}>Продолжить</Button>
      </Link>
    </Center>
  );
};
