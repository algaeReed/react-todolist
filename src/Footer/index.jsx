import React, { Component } from "react";

export default class Fotter extends Component {
  handleCheckAllDone = (event) => {
    this.props.checkAllTodos(event.target.checked);
  };
  /**
   * 删除所有
   */
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((pre, current) => {
      return pre + (current.done ? 1 : 0);
    }, 0);

    const totalCount = todos.length;
    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={
              doneCount === totalCount && totalCount !== 0 ? true : false
            }
            onChange={this.handleCheckAllDone}
          ></input>
        </label>
        <span>已经完成{doneCount}</span>/<span>全部{totalCount}</span>
        <button onClick={this.handleClearAllDone}>Clear All</button>
      </div>
    );
  }
}
