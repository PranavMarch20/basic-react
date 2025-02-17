/* <div id="parent">
    <div id="child">
        <h1>Pranav from react</h1>
        <h2>learning react</h2>
    </div>
    <div id="child2">
        <h1>Pranav from react</h1>
        <h2>learning react</h2>
    </div>
</div>; */

import React from "react";
import ReactDOM from "react-dom/client";

//! React.createElement() is used to create a React element(object) which is then converted to html and rendered to the DOM by ReactDOM.render()
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Pranav from react"),
//     React.createElement("h2", {}, "by Pranav Kumar Singh"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "This is Pranav Learning React 🚀"),
//     React.createElement("h2", {}, "Trying HMR"),
//   ]),
// ]);

// console.log(parent);

//! in Core a react element is created like this only, since this is lengthy we use jsx which is also in the back converted to this format only, and this is converted into a js object , which is then converted to html and rendered on DOM
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// console.log(heading);   // JS object

// const root = ReactDOM.createRoot(document.getElementById("root"));  //creates a root object where the react element will be rendered

// root.render(parent); // converts the heading object to HTML and renders it to the DOM

//! since creating complex html structure using React.createElement() is cumbersome, JSX is used to write html like syntax in JS files. JSX is a syntactic sugar for React.createElement() function. - but JSX is not understood by the browser, so it needs to be transpiled to JS using babel, which converts JSX to React.createElement() function calls.

const root = ReactDOM.createRoot(document.getElementById("root"));

// React element using jsx
const jsxHeading = (
  <h1 id="heading" className="head">
    This is JSX 🚀
  </h1>
);
//? JSX - transpiled by babel before it reaches browser engine
//? in JSX, when writing attributes we use camelCase

// root.render(jsxHeading);

//! React Component
// class based component - older way
// functional component - newer way

// react functional component
const HeadingComponent = () => {
  return <h3>React Functional component 1</h3>;
};

// how to inject a react element inside a react element - using curly braces
const elem = (
  <span>
    This a React Element
  </span>
);

const cf = (
  <h1 className="CodeForces">
    {elem}
    SixPackPenguin
  </h1>
);


//* most used syntax
// component composition - nesting components (how to inject a component inside another component)
//! how to inject a react element inside a react component - using curly braces
const HeadingComponent2 = () => (
  <div id="head">
    {cf}
    <h2>{console.log("Pranav in JS")}</h2>
    <HeadingComponent />
    <HeadingComponent />
    <HeadingComponent></HeadingComponent>
    {HeadingComponent()}
    <h1>React Functional component 2 using shorthand syntax</h1>
  </div>
);

// injecting react functional component inside a react element
const rand = (<div>
  <h2>React element</h2>
  <HeadingComponent/>
</div>)

//both are same, the second one is a shorthand syntax for the first one
// const fn1 = () => {
//   return true;
// };

// const fn2 = () => true;

// root.render(rand);
root.render(<HeadingComponent2/>); //?  < /> makes babel understand that it is a react component, so it needs to be transpiled differently
