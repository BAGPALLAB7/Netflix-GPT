import { useDispatch } from "react-redux"
import {toggleGPTSearch} from "../utils/store/gptSlice"

const useToggleGPT = () => {
    const dispatch = useDispatch();
    dispatch(toggleGPTSearch());
}

export default useToggleGPT;