import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
import Todo from "./todo/todo"

ReactDOM.render(
  <div>
    <Header />
    <Main />
    <Todo />
    <Footer />
  </div>
  , document.getElementById("root"))

