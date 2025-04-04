import { UserDto } from "../../apis/core-api";
import { State } from "../../types/state";
import { NameSpace } from "../../utils/const";

export const getUser = (state: State): UserDto => state[NameSpace.User].user; 