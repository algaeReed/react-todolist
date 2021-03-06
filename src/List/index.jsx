import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Item from "../Item";
export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="w-full shadow border-solid p-2 border-gray-700 mt-4">
        {todos.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            ></Item>
          );
        })}
      </ul>
    );
  }
}
