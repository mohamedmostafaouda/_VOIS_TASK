import { Data, Filter } from '@types';

export const filterSchools = (
  data: Data[],
  { country, camp }: { country: string; camp: string },
  currentValue: string = '',
): Filter => {
  const filteredData = Array.from(
    new Set(
      data
        .filter((item: Data) => item.country === country && item.camp === camp)
        .map((e) => e.school),
    ),
  );

  return {
    data: filteredData,
    filterValue: filteredData.includes(currentValue) ? currentValue : filteredData[0],
  };
};

export const filterCamps = (data: Data[], { country }: { country: string }, currentValue: string =''): Filter => {
  const filteredData = Array.from(
    new Set(data.filter((item: Data) => item.country === country).map((e) => e.camp)),
  );

  return {
    data: filteredData,
    filterValue: filteredData.includes(currentValue) ? currentValue : filteredData[0],
  };
};
