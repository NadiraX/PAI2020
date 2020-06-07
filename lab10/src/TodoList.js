import React from "react"
import TodoItem from "./TodoItem"

function TodoList(list)
{
    let todoItems = list.list.map(item => <TodoItem
        key={item.id}
        item={item}
        handleChange = {()=>
        {
            list.handleChange(item.id)
        }
        }
        />)

    return(
        <div>
            {todoItems}
        </div>
    )
}
export default TodoList