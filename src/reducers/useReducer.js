//armazenando o avatar da pessoa logada
export const initialState = {
  avatar: "",
  favorites: [],
  appointments: [],
};
//ação que permite trocar o valor
export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setAvatar":
      return { ...state, avatar: action.payload.avatar };
      break;

    default:
      return state;
      break;
  }
};
