import { LOGO_URL } from "../../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-sub-container">
        <div className="main-header-logo">
          <div className="header-logo">
            <img className="main-logo" src={LOGO_URL} alt="" />
          </div>
          <div className="company-name">Namaste <br />Food</div>
        </div>
        <div className="menu-container">
          <div className="menu-items">Account</div>
          <div className="menu-items">Wishlist</div>
          <div className="menu-items">About</div>
          <div className="menu-items">Cart</div>
          <div className="menu-items">Orders</div>
        </div>
      </div>
    </div>
  )
}

export default Header;