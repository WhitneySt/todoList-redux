import { todoTypes } from "../type/todolistTypes"

export const listAction = () => {
    return {
        type: todoTypes.LIST_TODO,
    }
}