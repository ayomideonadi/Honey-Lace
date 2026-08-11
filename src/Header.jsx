import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="main-nav">
        <div className="brand" aria-label="Honey Lace brand">
          <span className="brand-mark">HoneyLace</span>
        </div>

        <nav className="nav-menu" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/man" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Man</NavLink>
          <NavLink to="/woman" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Woman</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
        </nav>

        <div className="search-box" role="search">
          <input type="text" placeholder="Search anything" aria-label="Search anything" />
          <button type="button" aria-label="Search">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
