import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { getUserAuthStatus } from "../../store/userProcess/selectors";
import { AuthorizationStatus } from "../../utils/const";
import { Box, Spinner } from "@chakra-ui/react";

type PrivateRouteProps = {
  requiredStatuses: AuthorizationStatus[];
  redirect: string;
};

export const PrivateRoute = ({
  requiredStatuses,
  redirect,
}: PrivateRouteProps) => {
  const currentStatus = useAppSelector(getUserAuthStatus);

  const accessAllowed = currentStatus === requiredStatuses[0];

  if (currentStatus === AuthorizationStatus.Unknown) return <Spinner />;

  return accessAllowed ? (
    <Box maxWidth="1400px" margin="auto" w="100%" h="100%">
      <Outlet />
    </Box>
  ) : (
    <Navigate to={redirect} />
  );
};
