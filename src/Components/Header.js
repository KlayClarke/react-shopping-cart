import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="row center block">
      <div>
        <Link to={"/"} className="header-link">
          Home
        </Link>
      </div>
      <div className="right">
        <Link to={"/products"} className="header-link">
          Products
        </Link>
        <Link to={"/cart"} className="header-link">
          Cart
        </Link>
      </div>
    </header>
  );
}
