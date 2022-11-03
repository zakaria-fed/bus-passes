import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ userName, handleAuth }) => {
  const navigate = useNavigate();

  const btnClicked = () => {
    handleAuth(false);
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" href="#" aria-current="page">
            Bus passes <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item m-auto">
          <a className="nav-link" href="#">
            Welcome <b>{userName}</b> 👋
          </a>
        </li>
        <li className="ms-4 nav-item">
          <button className="btn btn-danger" onClick={btnClicked}>
          Log out
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
