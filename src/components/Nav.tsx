import darkTheme from "../theme/dark-removebg-preview.png";
import lightTheme from "../theme/light-removebg-preview.png";
interface Props {
  handleClick: () => void;
  toggle: boolean;
  handleToggleEffect: () => void;
}
const Nav = ({ handleClick, toggle, handleToggleEffect }: Props) => {
  return (
    <div className={`navwrapper ${toggle && "dark-bg"}`}>
      <nav className="nav-component">
        <span className="title">
          <i className="icon bi-folder-fill"></i> Contact Card
        </span>
        <span className="rightside">
          <a onClick={handleClick} className="new-card">
            <i className="icon bi-person-circle"></i> Create card
          </a>
        </span>
      </nav>
      <a className="toogle" onClick={() => handleToggleEffect()}>
        <img src={toggle ? lightTheme : darkTheme} />
      </a>
    </div>
  );
};

export default Nav;
