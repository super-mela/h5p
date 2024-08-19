import { useLocalStorage } from 'usehooks-ts';
import { UserData } from '../types/UserData';
import { userDataLocalStorageKey } from '../utils/user-data.utils';

/**
 * Read the stored data from local storage based on the current default storage key.
 * Return a UserData object with correct types and a function to update it.
 */
export const useLocalStorageUserData = (): [
  UserData,
  (updatedUserData: UserData) => void,
] => {
  const [localStorageUserData, setLocalStorageUserData] =
    useLocalStorage<UserData>(userDataLocalStorageKey, {});

  return [localStorageUserData, setLocalStorageUserData];
};
