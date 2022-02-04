/**Challenge 1:
 * create a navbar in jsx
 * -use the semantic nav element as the parent wrapper
 * -have an h1 element with the brand name of your website
 * -insert an unordered list for the other nav elements
 *      -inside the ul, have 3 lis for "Pricing", About, and Contact
 * -Plain looking html
 */
/* const NavBar = (
  <nav>
    <h1>React Static Page</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
); */

/**Challenge 2:
 * find out what happens if we try to append JSX to our div#root using .append() instead of ReactDOM
 * 1. Create a sample page in JSX and save them in variables
 * 2. Select the div with the root id, and use .append() to append your JSX
 * 3. See if you can guess what will show up in the browser before running the code
 * 4. See if you can explain what actually shows up in the browser
 */
/* const page = (
  <div>
    <h1>append JSX with append function</h1>
    <p>1. What will show up in the browser before running the code?</p>
    <p>
      It will show [object Object], a string representation of a regular
      javascript object.
    </p>
    <p>2. Explain what actually show up in the browser:</p>
    <p>JSX returns plain JavaScript object.</p>
  </div>
);

//document.getElementById("root").append(JSON.stringify(page)); */

/**
 * Challenge 3: starting from scratch, build and render the HTML for our section project. Check the Google slide for what you're trying to build.
 */
function Page() {
  //custom component
  return (
    <div>
      <img src="./tomhoangdev.jpg" />
      <h1>Fun Facts about Tom</h1>
      <ul>
        <li>is Front-End React Developer.</li>
        <li>is graduated from Cal Poly Pomona with B.S. Computer Science.</li>
        <li>like reading coding book.</li>
        <li>like cooking and travel.</li>
      </ul>
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));

const page = ( //JSX component
  <div>
    <img src="./tomhoangdev.jpg" />
    <h1>Fun Facts about Tom</h1>
    <ul>
      <li>is Front-End React Developer.</li>
      <li>is graduated from Cal Poly Pomona with B.S. Computer Science.</li>
      <li>like reading coding book.</li>
      <li>like cooking and travel.</li>
    </ul>
  </div>
);

//ReactDOM.render(page, document.getElementById("root"));
