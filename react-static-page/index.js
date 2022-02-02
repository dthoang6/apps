/**
 * create a navbar in jsx
 * -use the semantic nav element as the parent wrapper
 * -have an h1 element with the brand name of your website
 * -insert an unordered list for the other nav elements
 *      -inside the ul, have 3 lis for "Pricing", About, and Contact
 * -Plain looking html
 */
const NavBar = (
  <nav>
    <h1>React Static Page</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(NavBar, document.getElementById("root"));
