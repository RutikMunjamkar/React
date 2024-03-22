// {}==this contains the atributes of the element inside the createElement

// this is not the HTml Tag but the react object
const heading = React.createElement(
    "h1",//type of the tag
    { id: "heading" },//attributes
    "Hello World From React"//children of the tag
);

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//render converts the heading object to the tag and putting into the DOM

const div2=React.createElement(
    "div",
    {id:"box2"},
    "iam the child of the box"
);

const div1=React.createElement(
    "div",
    {id:"box1"},
    "iam the child of the box"
);

ReactDOM.createRoot(document.getElementById("box")).render(div1);

