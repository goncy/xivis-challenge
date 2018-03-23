import {message} from "antd";

export default {
  namespace: "cart",
  state: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    add(state, action) {
      message.success(`${action.payload.name} was added to cart`);

      return {
        ...state,
        list: state.list.concat(action.payload),
      };
    },
    remove(state, action) {
      return {
        ...state,
        list: state.list.filter((_, index) => index !== action.payload),
      };
    },
  },
};
