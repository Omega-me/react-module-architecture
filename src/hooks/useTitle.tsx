import { useAppDispatch, useAppSelector } from "src/state";
import { setTitle } from "src/state/store/slices/global.store";

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
