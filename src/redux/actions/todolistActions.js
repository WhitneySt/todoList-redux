import { todoTypes } from "../type/todolistTypes"

// export const listAction = () => {
//     return {
//         type: todoTypes.LIST_TODO,
//     }
// }

export const updateStatusAction = (id) => {
    return {
        type: todoTypes.UPDATE_STATUS,
        payload: id
    }
}

export const createTodoAction = (newTask) => {
    return {
        type: todoTypes.CREATE_TODO,
        payload: {
            ...newTask
        }
    }
}

export const deleteTodoAction = (id) => {
    return {
        type: todoTypes.DELETE_TODO,
        payload: id
    }
}

export const handleIsEditAction = (task) => {
    return {
        type: todoTypes.HANDLE_ISEDIT,
        payload: {
            ...task
        }
    }
}

export const updateTodoAction = (updatedTask) => {
    return {
        type: todoTypes.UPDATE_TODO,
        payload: {
            ...updatedTask
        }
    }
    
}

export const filterTodoAction = (status) => {
    return {
        type: todoTypes.FILTER_STATUS,
        payload: status
    }
}