import s from "./footer.module.scss";

const Footer = () => {
  return <footer className={s.footer}>&copy;{new Date().getFullYear()}</footer>;
};

export default Footer;
