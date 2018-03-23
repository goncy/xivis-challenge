import request from "../utils/request";

const URL = "https://api.myjson.com/bins/wyjyh";

const products = {
  fetch: function() {
    return request(URL);
  },
};

export default products;
