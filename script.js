// React.createElement(type,{props},children);
// // JSX code ------***************for my reference only----------************
// <type {props} >{children}</type

// element: The element that needs to be rendered in the DOM.
// here its  app
// containerElement: Where to render in the dom-------------****for my reference only**********.
//here it root

const app = React.createElement(
  "div",
  null,
  React.createElement("h1", null, "Topics covered"),

  React.createElement(
    "p",
    null,
    "The following is a list of all the topics we cover in the MDN learning area."
  ),
  React.createElement(
    "a",
    {
      href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    "Getting Started with Web on MDN"
  ),
  React.createElement(
    "p",
    null,
    "Provides a practical introduction to web development for complete beginners."
  ),
  React.createElement(
    "a",
    {
      href: "https://developer.mozilla.org/en-US/docs/Learn/HTML",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    "Structuring the Web on MDN"
  ),
  React.createElement(
    "p",
    null,
    "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."
  ),
  React.createElement(
    "a",
    {
      href: "https://developer.mozilla.org/en-US/docs/Learn/CSS",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    "Styling the Web on MDN"
  ),
  React.createElement(
    "p",
    null,
    "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."
  )
);
// React DOM: React DOM contains the arguments that are necessary to render react elements in the browser.****----for my own reference-----------***************

// ReactDOM.render(element,containerElement);

ReactDOM.render(app, document.getElementById("root"));
