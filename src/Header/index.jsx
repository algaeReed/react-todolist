import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Header extends Component {
  handKeyup = (event) => {
    const { target, keyCode } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") return alert("输入不能为空");
    console.log(target.value);

    let dataTodo = { id: nanoid(), name: target.value, done: false };
    this.props.insertTodo(dataTodo);
    target.value = "";
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="请输入"
          onKeyUp={this.handKeyup}
        ></input>
      </div>
    );
  }
}
