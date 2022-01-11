import React, { Component } from "react";

export default class Item extends Component {
  state = {
    mouse: false,
  };
  /**
   * 鼠标移入移除
   * @param {*} flag
   * @returns
   */
  handleMouse = (flag) => {
    return () => {
      console.log(flag);
      this.setState({ mouse: flag });
    };
  };
  /**
   * 选中取消勾选状态
   */
  handleCheck = (id) => {
    return (event) => {
      console.log(id, event.target.checked);
      this.props.updateTodo(id, event.target.checked);
    };
  };
  /**
   * 删除
   */
  handleClick = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this item?")) {
      this.props.deleteTodo(id);
    }
  };

  render() {
    const { id, name, done, time } = this.props;
    const { mouse } = this.state;
    console.log(name);
    return (
      <li
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
        className="h-8 leading-8 "
      >
        <div className="flex ">
          <div className="flex w-3/5  ">
            <label>
              <input
                type="checkbox"
                checked={done}
                onChange={this.handleCheck(id)}
              />
            </label>
            <span className="ml-4 "> {name}</span>
          </div>

          <div className="flex justify-around  w-2/5  ">
            <span> {time}</span>
            <button
              className=" opacity-0  hover:opacity-100 bg-gray-400 px-4 rounded text-blue-200 "
              onClick={() => {
                this.handleClick(id);
              }}
            >
              删除
            </button>
          </div>
        </div>
      </li>
    );
  }
}
