import { SET_API_DATA } from "./constant"



export const reduxSagaReducer = (data = [], action) => {
    switch (action.type) {
            case SET_API_DATA:
                return action.data
        default:
            return data
    }
}