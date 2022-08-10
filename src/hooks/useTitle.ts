import { useAppDispatch, useAppSelector } from 'state';
import { setTitle } from 'state/store/store/global.store';

/**
 *
 * @returns title of the page
 * @returns setAppTitle - function to set the title of the page
 */
const useTitle = () => {
  const dispatch = useAppDispatch();
  const { title } = useAppSelector((state) => state.globalState);

  /**
   *
   * @param appTitle - title of the page
   */
  const setAppTitle = (appTitle: string): void => {
    dispatch(setTitle(appTitle));
  };

  return { setAppTitle, title };
};

export default useTitle;
