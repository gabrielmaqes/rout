import {useContext} from 'react';
import {Context} from '../context/Context';

export const useDI = () => useContext(Context);
