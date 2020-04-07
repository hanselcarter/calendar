import {
  useSelector as originalUseSelector,
  useDispatch as originalUseDispatch,
} from "react-redux";
//this is in case I want to mock store, by doing this I do not have to mock all redux add ons
export const useSelector = (state) => originalUseSelector(state);
export const useDispatch = () => originalUseDispatch();
