import { useContext } from "react";
import { TasksContext } from "../context/tasks";

export const useTasks = () => {
    const context = useContext(TasksContext)

    if(!context){
        throw new Error("The hook useTasks must be used inside a TasksProvider")
    }

    return context
}