import classes from "./header.module.css";

function Header(props) {
  return (
    <picture className={classes.header_picture}>
      <source
        srcSet={"./images/bg-header-desktop.svg"}
        media="(min-width: 1000px)"
      />
      <img src={"./images/bg-header-mobile.svg"} alt="header-background" />
    </picture>
  );
}

export default Header;
