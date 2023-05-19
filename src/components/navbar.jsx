
function  Navbar(props) {
  return (
    <div>
  <div className="container">
    <nav >
      <div className="navbar">
      <h1>{props.title}</h1>
      <ul className="navbar">
        <li>Home</li>
        <li>Contact Us</li>
        <li>About</li>
      </ul>
      </div>
    </nav>
  </div>
</div>
  )
}

export default Navbar
