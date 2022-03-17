//challenge 1: creating and composing stateless functional component
//method 1: using JSX element
const MyComponent = (
        <p>Hello, Im stateless functional component using JSX element.</p>
);

ReactDOM.render(MyComponent, document.getElementById("jsxElement"));

//method 2: using functional declaration, JavaScript Function.
function MyFunctionComponent() {
        return (
                <div>
                        Hello, Im React Function Component using Function Declaration!
                </div>
        );
}
ReactDOM.render(<MyFunctionComponent />, document.getElementById("functionDeclaration"));
/**
 * 
 const DemoComponent = function() {
        return (<></>);
 }
 */

//method 3: using arrow function
const MyArrowComponent = (props) => {
        return <div>{props.content}</div>;
};

/* 
function MyFunction(props) {
        return <div>{props.content}</div>;
}
// Arrow function syntax (shorthand)
const MyArrowComponent = (props) => <div>{props.content}</div>; */

//method 4: using ES6 class syntax
class Tom extends React.Component {
        constructor(props){
                super(props);
        }
        render() {
                return (<div>Hi, Im React Component using ES6 class syntax.</div>);
        }
}