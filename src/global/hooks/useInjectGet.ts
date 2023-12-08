import {useRef} from 'react';
import {useDI} from './useDI';

export function useInjectGet<T>(token: string): T {
  return useRef<T>(useDI().container.get<T>(token)).current;
}
