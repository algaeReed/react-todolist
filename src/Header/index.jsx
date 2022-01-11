import React, { Component } from "react";
import { nanoid } from "nanoid";

export default class Header extends Component {
  handKeyup = (event) => {
    const { target, keyCode } = event;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") return alert("输入不能为空");
    console.log(target.value);

    let dataTodo = {
      id: nanoid(),
      name: target.value,
      done: false,
      time:
        new Date().getFullYear() +
        "-" +
        new Date().getMonth() +
        1 +
        "-" +
        new Date().getDate() +
        "   " +
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds(),
    };

    console.log(dataTodo);
    this.props.insertTodo(dataTodo);
    target.value = "";
  };
  render() {
    return (
      <div className="w-full">
        <input
          className="w-full h-10"
          type="text"
          placeholder="点击请输入，键入Enter确认"
          onKeyUp={this.handKeyup}
        ></input>
      </div>
    );
  }
}
