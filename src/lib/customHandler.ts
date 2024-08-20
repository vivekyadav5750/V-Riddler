import { setInput } from "@/redux/reducer";
import { useDispatch } from "react-redux";

export const SetInputToNull = () => {
    const dispatch = useDispatch();
    // dispatch({ type: "SET_INPUT" });
    dispatch(setInput(''));
}