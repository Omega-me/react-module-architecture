import { APP_TITLE, APP_TEST_PAGE_TITLE } from 'common/labels';
import { useTitle } from 'hooks';
import { Link } from 'react-router-dom';
import s from './header.module.scss';

const Header = () => {
  const { setAppTitle } = useTitle();
  const handleClick = (appTitle: string) => {
    setAppTitle(appTitle);
  };
  return (
    <nav className={s.header}>
      <ul className={s.header__list}>
        <li>
          <Link onClick={() => handleClick(APP_TITLE)} to={'/'}>
            Home Page
          </Link>
        </li>
        <li>
          <Link onClick={() => handleClick(APP_TEST_PAGE_TITLE)} to={'/test'}>
            Test page
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
