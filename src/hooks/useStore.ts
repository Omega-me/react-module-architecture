import { useAppSelector } from 'state';

/**
 *
 * @returns
 */
const useStore = () => {
  const store = useAppSelector((store) => store);
  return { ...store };
};

export default useStore;
