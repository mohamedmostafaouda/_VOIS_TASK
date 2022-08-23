import * as React from 'react';
import styles from './styles/dropdown.scss';
import DropdownArrow from 'assets/icons/dropdownArrow.svg';

type Props<T> = {
  label: string;
  placeholder: string;
  onChange: (selectedItem: T) => void;
  data: Array<T>;
  itemRenderer: (item: T) => string | number;
};

export const Dropdown = <T,>({
  label,
  placeholder,
  onChange,
  data,
  itemRenderer,
}: Props<T>): JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<T>();
  const ref = React.useRef<HTMLDivElement>(null);

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

  const handleChange = React.useCallback(
    (item: T) => {
      onChange(item);
      setSelectedItem(item);
    },
    [setSelectedItem],
  );

  return (
    <div>
      <label className={styles.label}>{label}</label>

      <div ref={ref} className={styles.dropdownSelectorContainer} onClick={() => setOpen(!open)}>
        <div className={styles.dropdownHeroItem}>
          <span>{(selectedItem && itemRenderer(selectedItem)) ?? placeholder}</span>
          <DropdownArrow className={styles.openedArrow} />
        </div>

        {open && (
          <div className={styles.optionsContainer}>
            {data.map((item: T) => {
              return (
                <div onClick={() => handleChange(item)} className={styles.option}>
                  {itemRenderer(item)}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
