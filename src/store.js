import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

import rootReducer from "./reducer";

// Configures the store
export default function configureStore() {
  const middleware = [];
  if(process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger({
      collapsed: true
    }));
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  )

  return store;
}