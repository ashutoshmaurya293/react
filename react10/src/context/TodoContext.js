import { createContext,useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed:false,
        }
    ],
    addTod: (todo)=> {},
    updateTodo: (id,todo)=> {},
    deleteTodo: (id)=> {},
    toggleComplet: (id)=> {}
})

export const useTodo = () => {
    return useContext(createContext)
}

export const TodoProvider = TodoContext.Provider