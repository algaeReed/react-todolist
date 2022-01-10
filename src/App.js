import React, { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import List from "./List";

export default class Fotter extends Component {
  state = {
    todos: [{ id: 1, name: "aaa", done: false }],
  };
  componentDidMount = () => {
    // const { todos } = this.state;
    console.log("componentDidMount");
    const t = localStorage.getItem("todos");
    if(t&&t.length>0){
      const newTodos = JSON.parse(t).map((item) => {
        return item;
      });
  
      this.setState({ todos: newTodos });
    }
  
    // console.log(JSON.parse(this.state.todos));
    // let obj = [{ id: 1, name: "aaaaa", done: false }];
    // localStorage.setItem("todos", JSON.stringify(obj));
  };

  /**
   *
   * @param {*object} todo
   */
  insertTodo = (dataTodo) => {
    console.log(dataTodo);

    const { todos } = this.state;
    const newTodos = [dataTodo, ...todos];
    console.log(newTodos);
    this.setState({ todos: newTodos });

    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
  /**
   * 更新todos
   * @param {*} id
   * @param {*} done
   */
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((t) => {
      if (t.id === id) {
        return { ...t, done };
      } else {
        return t;
      }
    });

    this.setState({
      todos: newTodos,
    });
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  /**
   * 删除一条todo
   * @param {*} id
   */
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodos = todos.filter((t) => {
      return t.id !== id;
    });
    this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  /**
   *全选
   * @param {*} done
   */
  checkAllTodos = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((t) => {
      return { ...t, done: done };
    });
    console.log(newTodos);
    this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  /**
   * 清除选中
   */
  clearAllDone = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((t) => {
      return !t.done;
    });
    this.setState({ todos: newTodos });
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="mx-auto  w-6/12 h-auto p-6 mt-10 shadow-md ">
        <Header className="header" insertTodo={this.insertTodo}></Header>
        <List
          className="list"
          todos={todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        ></List>
        <Footer
          className="footer"
          todos={todos}
          checkAllTodos={this.checkAllTodos}
          clearAllDone={this.clearAllDone}
        ></Footer>
      </div>
    );
  }
}
