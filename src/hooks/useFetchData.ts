import { getData } from '@redux/actions/data';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { useEffect } from 'react';

export const useFetchData = () => {
  const dispatch = useAppDispatch();
  const loaded = useAppSelector((state) => state.data.loaded);
  const data = useAppSelector((state)=>state.data.data);
  
  if (!loaded) {
    dispatch(getData() as any);
  }
  
  return {loaded, data}
};
