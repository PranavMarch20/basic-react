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

// React.createElement() is used to create a React element(object) which is then converted to html and rendered to the DOM by ReactDOM.render()
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Pranav from react"),
    React.createElement("h2", {}, "learning react"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Pranav from react"),
    React.createElement("h2", {}, "learning react"),
  ]),
]);

console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// console.log(heading);   // JS object

const root = ReactDOM.createRoot(document.getElementById("root"));  //craetes a root object where the react element will be rendered

root.render(parent); // converts the heading object to HTML and renders it to the DOM

// since creating complex html structure using React.createElement() is cumbersome, JSX is used to write html like syntax in JS files. JSX is a syntactic sugar for React.createElement() function. - but JSX is not understood by the browser, so it needs to be transpiled to JS using babel, which converts JSX to React.createElement() function calls.
