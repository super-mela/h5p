import { createContext } from 'react';
import { H5PWrapper } from '../h5p/H5PWrapper';

export const H5PContext = createContext<H5PWrapper | undefined>(undefined);
