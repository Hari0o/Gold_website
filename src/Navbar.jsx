import "./style.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <a href="#home" className="logo">Gold's $mith</a>
      </div>
      
      <div className="right">

        <a className="nav" href="#home"><h4>Home</h4></a>
        <a className="nav" href="#home"><h4>Recent</h4></a>
        <a className="nav" href="#home"><h4>Cart</h4></a>
   
      </div>
      
    </div>
  );
}

export default Navbar;
