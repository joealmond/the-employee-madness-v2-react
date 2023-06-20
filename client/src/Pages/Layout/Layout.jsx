import { Outlet, Link, useLocation } from "react-router-dom";

import "./Layout.css";

const Layout = () => {
  const location = useLocation()

  if (location.pathname.includes("division")) {
    return (
      <div className="Layout">
        <nav>
          <ul>
            <li className="grow">
              <Link to="/">Divisions</Link>
            </li>
            <li>
              <Link to="/divisions/create">
                <button type="button">Create Division</button>
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    )} else  {
      return (
        <div className="Layout">
          <nav>
            <ul>
              <li className="grow">
                <Link to="/divisions">Employees</Link>
              </li>
              <li>
                <Link to="/create">
                  <button type="button">Create Employee</button>
                </Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      )};
  }
export default Layout;
