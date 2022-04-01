const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.type),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { anyProp: "yolo" }, "adopt me!"),
    React.createElement(Pet, {
      name: "luna",
      type: "dogel",
      breed: "havenesse",
    }),
    React.createElement(Pet, { name: "Azor", type: "Pies", breed: "Doberman" }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
