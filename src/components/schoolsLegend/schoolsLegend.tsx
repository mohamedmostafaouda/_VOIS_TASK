import * as React from 'react';
import { SchoolCard } from './schoolCard';

type Props = {
  schoolsMap: Map<string, number>;
  chartColors: string[];
};

type SchoolLegend = {
  schoolName: string;
  lessons: number;
};

const converMapToArray = (map: Map<string, number>): SchoolLegend[] => {
  const arr: SchoolLegend[] = [];
  map.forEach((value: number, key: string) => {
    arr.push({ schoolName: key, lessons: value });
  });
  return arr;
};

export const SchoolsLegend = ({ schoolsMap, chartColors }: Props) => {
  const schoolData = converMapToArray(schoolsMap);
  return (
    <div>
      {schoolData.map((school: SchoolLegend, index: number) => {
        return (
          <SchoolCard
            key={index}
            schoolName={school.schoolName}
            lessonsCount={school.lessons}
            color={chartColors[index]}
          />
        );
      })}
    </div>
  );
};
