import { useContext } from 'react';
import { H5PContext } from '../contexts/H5PContext';
import { H5PWrapper } from '../h5p/H5PWrapper';

export const useH5PInstance = (): H5PWrapper | undefined => {
  return useContext(H5PContext);
};
