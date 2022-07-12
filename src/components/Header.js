import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo" style={{ color: "#48eee4" }}>
          FundsaiQ redux
        </h1>
      </Link>
      {/* <div className="search-box">
        <input
          type="text"
          onChange={(event) => dispatch(productSearch(event.target.value))}
          placeholder="Search Product"
        />
      </div> */}
      {/* <Link to="/">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link> */}
    </div>
  );
};

export default Header;
