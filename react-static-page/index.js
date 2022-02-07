function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./tomhoangdev.jpg" className="header-img" />
        <ul className="nav-items">
          <li>About</li>
          <li>Work</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
function MainContent() {
  return (
    <div>
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

function Page() {
  //Composable component
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
