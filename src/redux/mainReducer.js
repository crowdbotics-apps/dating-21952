import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2161385Reducer from '../features/SignIn2161385/redux/reducers'
import SignIn2161371Reducer from '../features/SignIn2161371/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2161385: SignIn2161385Reducer,
SignIn2161371: SignIn2161371Reducer,

});