import { Link, NavLink } from "react-router-dom";

const Header = () => {
    // header menu
  const menu = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "hover:bg-inherit hover:text-[#7EBC12]"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "hover:bg-inherit hover:text-[#7EBC12]"
          }
        >
          ABOUT
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "hover:bg-inherit hover:text-[#7EBC12]"
          }
        >
          OUR SKILL
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "hover:bg-inherit hover:text-[#7EBC12]"
          }
        >
          CONTACT
        </NavLink>
      </li>
    </>
  )
    return (
        <>
        <div className="navbar fixed z-10 text-xl font-bold flex flex-row items-center justify-around text-[#7EBC12] p-5 bg-[#1D2833]">
          {/* logo and hamberger icon section */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-none w-52 mt-7"
              >
                {menu}
              </ul>
            </div>
            <div>
              <Link to="/">
                <img className="w-44 ml-8 md:ml-36" src="" alt="" />
              </Link>
            </div>
          </div>
          {/* desktop menu section */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">{menu}</ul>
          </div>
          {/*login options */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
            </div>
          </div>
        </div>
      </>
    );
};

export default Header;