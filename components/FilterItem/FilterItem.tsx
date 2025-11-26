import styles from './FilterItem.module.css';

type FilterItemProps = {
  iconId: string;
  title: string;
  type?: 'checkbox' | 'radio';
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FilterItem = ({
  iconId,
  title,
  type = 'checkbox',
  value,
  ...rest
}: FilterItemProps) => {
  const safeName = rest.name ? String(rest.name).replace(/\./g, '-') : 'input';
  const id = value ? `${safeName}-${String(value)}` : safeName;
  return (
    <label htmlFor={id} className={styles.filterElement}>
      <span>
        <svg aria-hidden="true" width={16} height={16}>
          <use href={`/symbol-defs.svg#${iconId}`} />
        </svg>
      </span>
      <p>{title}</p>
      <input id={id} type={type} {...rest} />
    </label>
  );
};
export default FilterItem;
