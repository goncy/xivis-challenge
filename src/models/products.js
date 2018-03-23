import productsApi from "../services/products";

/**
 * Product
  {
    _id: string,
    index: number,
    price: string,
    picture: string,
    stock: number,
    name: string,
    company: string,
    address: string,
    description: string,
  };
 */

export default {
  namespace: "products",
  state: {
    list: [],
    loading: true,
    error: null,
  },
  reducers: {
    load(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    // Statuses
    start(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    resolve(state) {
      return {
        ...state,
        loading: false,
      };
    },
    reject(state) {
      return {
        ...state,
        loading: false,
        error: "There was an error fetching the products",
      };
    },
  },
  effects: {
    *fetch(action, {call, put}) {
      yield put({type: "start"});

      try {
        const {data: products} = yield call(productsApi.fetch);

        yield put({type: "resolve"});
        yield put({type: "load", payload: products});
      } catch (e) {
        yield put({type: "reject"});
      }
    },
  },
  subscriptions: {
    init({dispatch}) {
      dispatch({type: "fetch"});
    },
  },
};
