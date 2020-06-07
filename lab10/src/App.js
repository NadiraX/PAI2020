import React from "react"
import todosData from "./todosData"
import './App.css';
import Filter from "./Filter.js"
import TodoList from "./TodoList"
import NewTask from "./NewTask.js"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData,
            done: false,
            idgen:5
        }
        this.handleChange = this.handleChange.bind(this)
        this.addFilter = this.addFilter.bind(this)
        this.addTask = this.addTask.bind(this)
    }
    
    addFilter(){
      this.setState(prevState =>{
        return{
          done: !prevState.done
        }
      }
      )}

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    addTask(task){
      this.setState( prevState=>{
        let valu = null;
        valu = ({
            text: task,
            id: prevState.idgen+1,
            completed: false
        }
        )

        return {
            todos: [...this.state.todos, valu],
            idgen: prevState.idgen+1,
        }

      })
    }
    render() {
      let todos = [];
      if (this.state.done === false){
        todos = this.state.todos;
      }
      else if (this.state.done === true){
        todos = this.state.todos.filter(todo => !todo.completed);
      }
        return (
            <div className="todo-list">
                <Filter addFilter={this.addFilter} filtr={this.state.done}/>
                <TodoList list={todos} handleChange={this.handleChange} showAll={this.state.use}/>
                <NewTask addTask={this.addTask}/>
            </div>
        )
    }
  }
export default App