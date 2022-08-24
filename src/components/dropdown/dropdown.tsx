import * as React from 'react';
import styles from './styles/dropdown.scss';
import DropdownArrow from 'assets/icons/dropdownArrow.svg';
import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { FilterType } from '@types';
import { changeFilter } from '@redux/actions/data';

type Props = {
  label: string;
  filterName: FilterType;
};

export const Dropdown = ({ label, filterName }: Props): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const { data, filterValue }: { data: string[]; filterValue: string } = useAppSelector(
    (state) => state.data[filterName]
  );
  
  const dispatch = useAppDispatch();

  const handleClickOutside = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target as HTMLButtonElement)) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleChange = React.useCallback((item: string) => {
    dispatch(changeFilter(item, filterName))
  }, [dispatch]);

  return (
    <div>
      <label className={styles.label}>{label}</label>

      <div ref={ref} className={styles.dropdownSelectorContainer} onClick={() => setOpen(!open)}>
        <div className={styles.dropdownHeroItem}>
          <span>{filterValue}</span>
          <DropdownArrow className={styles.openedArrow} />
        </div>

        {open && (
          <div className={styles.optionsContainer}>
            {data.map((item: string, index) => {
              return (
                <div key={index} onClick={() => handleChange(item)} className={styles.option}>
                  {item}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
