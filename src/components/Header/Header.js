import { ReactComponent as IMDBLogo } from "./IMDB_Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <IMDBLogo height={48} width={100} className="logo" />
    </div>
  );
};
export default Header;
