import { useAppSelector } from '@redux/hooks';

export const useGetPointData = (country: string, camp: string, school: string, month: string) => {
  const data = useAppSelector((state) => state.data.data);
  const totalLessons = data.reduce((prev, curr) => {
    return curr.school === school &&
      curr.camp === camp &&
      curr.country === country &&
      curr.month == month
      ? prev + curr.lessons
      : prev;
  }, 0);

  return { country, camp, school, month, totalLessons };
};
