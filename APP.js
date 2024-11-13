/*const heading = React.createElement("h1",
    {id:"heading",xyz:"abc"},
    "HELLO WORLD");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);*/
const parent = React.createElement(
    "div",
    {id : "parent"},  
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I am in h1 tag"),
         React.createElement("h2",{},"I am in h2 tag"),
        ]
    )
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);