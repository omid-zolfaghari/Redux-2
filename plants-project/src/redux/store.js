import {legacy_createStore} from "redux";

import plantReducer from "./reducer/plantsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = legacy_createStore(plantReducer, composeWithDevTools())

export default store;