import { NavLink } from "react-router-dom";
import Links from "../utils/Links";
import { useDashboardContext } from "../pages/DashboardLayout";

const NavLinks = ({ isBigSideBar }) => {
  const { toggleSideBar, user } = useDashboardContext();

  return (
    <div className="nav-links">
      {Links.map((link) => {
        const { text, path, icon } = link;
        const { role } = user;
        if (path === "admin" && role !== "admin") return;
        return (
          <NavLink
            onClick={isBigSideBar ? null : toggleSideBar}
            to={path}
            key={text}
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
