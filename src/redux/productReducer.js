import { SET_API_DATA } from "./constant"



export const productData = (data = [], action) => {
    switch (action.type) {
            case SET_API_DATA:
                return action.data
        default:
            return data
    }
}