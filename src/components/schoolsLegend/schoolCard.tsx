import { toggleGraph } from '@redux/actions/data';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { ToggleGraphTypes } from '@types';
import * as React from 'react';
import { LegendInfo } from './legendInfo';
import styles from './styles/schoolCard.scss';

type Props = {
  schoolName: string;
  lessonsCount: number;
  color: string;
};

export const SchoolCard = ({ schoolName, lessonsCount, color }: Props) => {
  const dispatch = useAppDispatch();
  const hiddenGraphs = useAppSelector((state) => state.data.hiddenGraphs);
  const enabled = !hiddenGraphs.includes(schoolName);
  const showGraph = enabled ? ToggleGraphTypes.HIDE_GRAPH : ToggleGraphTypes.SHOW_GRAPH;

  return (
    <div
      onClick={() => {
        dispatch(toggleGraph(schoolName, showGraph));
      }}
      style={enabled ? { color } : undefined}
      className={styles.cardContainer}
    >
      <div style={enabled ? { borderColor: color } : undefined} className={styles.toggleContainer}>
        <div
          style={enabled ? { background: color } : undefined}
          className={styles.toggleBullet}
        ></div>
      </div>
      <LegendInfo
        color={enabled ? color : undefined}
        placeName={schoolName}
        number={lessonsCount}
      />
    </div>
  );
};
