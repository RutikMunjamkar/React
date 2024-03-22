/*
parent>(child1+child2)>h1+h2
*/
// Parent is ReactElement() which is nothing but object which converted to HTML Tag using the 
// react while rendering
// If we need the siblings then pass them as an array of objects

const parent=React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child1"},
        [React.createElement("h1",{},"This is First Tag"),React.createElement("h1",{},"This is Second Tag")]
    ),
    React.createElement(
        "div",
        {id:"child2"},
        [React.createElement("h1",{},"This is First Tag"),React.createElement("h1",{},"This is Second Tag")]
    )]
)
ReactDOM.createRoot(document.getElementById("root")).render(parent);

// As I can see that The code looks much complex than actully creating the elements in Html 
// Hence we use JSX in React to make our life easier