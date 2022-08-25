import { getData } from '@redux/actions/data';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { AnyAction } from 'redux';

export const useFetchData = () => {
  const dispatch = useAppDispatch();
  const loaded = useAppSelector((state) => state.data.loaded);
  const data = useAppSelector((state) => state.data.data);

  if (!loaded) {
    dispatch(getData() as unknown as AnyAction);
  }

  return { loaded, data };
};
