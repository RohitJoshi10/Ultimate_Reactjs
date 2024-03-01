function customRender(reactElement, container) {
  /*
  const domElemnet = document.createElement(reactElement.type);
  domElemnet.innerHTML = reactElement.children;
  domElemnet.setAttribute("href", reactElement.props.href);
  domElemnet.setAttribute("target", reactElement.props.target);

  container.appendChild(domElemnet);
  */

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop == "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);
