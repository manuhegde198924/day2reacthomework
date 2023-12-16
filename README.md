 create a straightforward web page using ReactJS with the assistance of Content Delivery Network (CDN) links. 
 ReactJS is a powerful JavaScript library that allows us to build interactive and dynamic user interfaces. By leveraging CDNs,
 we can quickly access the necessary React libraries without the need for complex development setups.
 Use the React.createElement to create the Element And for rendering it use React.render.
 my netifly hosted link:https://manojhegde2ndreactappusingcdnreact.netlify.app/
React.createElement is a fundamental method of React JS. The main use of React.createElement is the Creation of a React component. 
It is the JavaScript format for creating react components.
Also, the JSX react component when transpired invokes this only method for creating the component.
React.createElement(type,{props},children); 
// JSX code 
<type {props} >{children}</type>
Parameters: React.createElement() takes three arguments. They are:

    type: the type of the HTML element (h1,p, button, etc).
    props: properties of the object({style:{size:10px}} or Eventhandlers, classNames,etc).
    children: anything that needs to be enclosed by that component.

React DOM: React DOM contains the arguments that are necessary to render react elements in the browser.

ReactDOM.render(element,containerElement);
