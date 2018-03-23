import dva from "dva";

import products from "./models/products";
import cart from "./models/cart";
import router from "./router";

// Init and persist store
const app = dva({
  initialState: JSON.parse(localStorage.getItem("store") || "{}"),
  onStateChange: () =>
    localStorage.setItem("store", JSON.stringify(app._store.getState())),
});

// Models
app.model(products);
app.model(cart);

// Router
app.router(router);

// Start
app.start("#root");
