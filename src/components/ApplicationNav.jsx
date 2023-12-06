import { NavLink } from 'react-router-dom';
import '../styles/application-nav.scss';

const ApplicationNav = () => {
  return (
    <header className="app-header">
      <nav className="app-navigation">
        <div className="wrapper">
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'menu-item-active' : ''
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/basic"
                className={({ isActive }) =>
                  isActive ? 'menu-item-active' : ''
                }
              >
                Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/custom"
                className={({ isActive }) =>
                  isActive ? 'menu-item-active' : ''
                }
              >
                Custom
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/playlist"
                className={({ isActive }) =>
                  isActive ? 'menu-item-active' : ''
                }
              >
                Playlist
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/redesign"
                className={({ isActive }) =>
                  isActive ? 'menu-item-active' : ''
                }
              >
                Redesigned
              </NavLink>
            </li>
          </ul>
        </div>

        {/* <div className="wrappper">
          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'menu-item-active' : '')}
            >
              Home
            </NavLink>
            <NavLink
              to="/basic"
              className={({ isActive }) => (isActive ? 'menu-item-active' : '')}
            >
              Basic
            </NavLink>
            <NavLink
              to="/custom"
              className={({ isActive }) => (isActive ? 'menu-item-active' : '')}
            >
              Custom
            </NavLink>
            <NavLink
              to="/playlist"
              className={({ isActive }) => (isActive ? 'menu-item-active' : '')}
            >
              Playlist
            </NavLink>
            <NavLink
              to="/redesign"
              className={({ isActive }) => (isActive ? 'menu-item-active' : '')}
            >
              Redesigned
            </NavLink>
          </div>
        </div> */}
      </nav>
    </header>
  );
};

export default ApplicationNav;
