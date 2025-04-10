import { UserDto } from "../../apis/core-api";
import { State } from "../../types/state";
import { AuthorizationStatus, NameSpace } from "../../utils/const";

export const getUser = (state: State): UserDto => state[NameSpace.User].user; 
export const getUserAuthStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;;