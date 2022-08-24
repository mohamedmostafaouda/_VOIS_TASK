import { Data, Filter, FilterOutput, Months, ShowAllSchools } from '@types';

export const filterSchools = (
  data: Data[],
  { country, camp }: { country: string; camp: string },
  currentValue = '',
): Filter => {
  const filteredData = Array.from(
    new Set(
      data
        .filter((item: Data) => item.country === country && item.camp === camp)
        .map((e) => e.school),
    ),
  );

  filteredData.push(ShowAllSchools);

  return {
    data: filteredData,
    filterValue: filteredData.includes(currentValue) ? currentValue : filteredData[0],
  };
};

export const filterCamps = (
  data: Data[],
  { country }: { country: string },
  currentValue = '',
): Filter => {
  const filteredData = Array.from(
    new Set(data.filter((item: Data) => item.country === country).map((e) => e.camp)),
  );

  return {
    data: filteredData,
    filterValue: filteredData.includes(currentValue) ? currentValue : filteredData[0],
  };
};

export const filterData = (
  data: Data[],
  {
    countryFilter,
    campFilter,
    schoolFilter,
  }: { countryFilter: string; campFilter: string; schoolFilter: string },
): FilterOutput => {
  const schoolMap = new Map<string, number>();

  const filteredData = data.filter(
    (item: Data) =>
      item.camp === campFilter &&
      item.country === countryFilter &&
      (item.school === schoolFilter || schoolFilter === ShowAllSchools),
  );

  filteredData.forEach((item: Data) => {
    const previousValue = schoolMap.get(item.school) ?? 0;
    schoolMap.set(item.school, previousValue + item.lessons);
  });

  const totalLessons: number = data.reduce((prev, curr) => {
    if (curr.camp === campFilter && curr.country === countryFilter) {
      return prev + curr.lessons;
    } else return prev;
  }, 0);

  const schoolGraphPoints = new Map<string, Map<keyof Months, number>>();

  filteredData.forEach((item: Data) => {
    //  Check if this school was registered before
    const points = schoolGraphPoints.get(item.school);

    if (points) {
      //  Check if this month was registered before
      const value = points.get(item.month) ?? 0;
      points.set(item.month, value + item.lessons);
      schoolGraphPoints.set(item.school, points);
    } else {
      schoolGraphPoints.set(
        item.school,
        new Map<keyof Months, number>().set(item.month, item.lessons),
      );
    }
  });

  return {
    schoolLessons: schoolMap,
    totalLessons,
    campName: campFilter,
    schoolGraph: schoolGraphPoints,
  };
};
