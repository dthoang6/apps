//creating and composing stateless functional component
//method 1: JSX element
const MyComponent = (
        <p>Hello, Im stateless functional component using JSX element.</p>
);

ReactDOM.render(MyComponent, document.getElementById("jsxElement"));

//method 2: functional component
function MyFunctionComponent() {
        return (
                <div>
                        Hello, Im React Function Component using Function Declaration.!
                </div>
        );
}
ReactDOM.render(<MyFunctionComponent />, document.getElementById("functionDeclaration"));
