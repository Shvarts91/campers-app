type FilterItemProps = {
  iconId: string;
  title: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FilterItem = ({ iconId, title, ...rest }: FilterItemProps) => {
  const id = rest.name?.replace(/\./g, '-');
  return (
    <label
      htmlFor={id}
      style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
    >
      <svg aria-hidden="true" width={16} height={16}>
        <use href={`/symbol-defs.svg#${iconId}`} />
      </svg>
      <span>{title}</span>
      <input id={id} type="checkbox" {...rest} />
    </label>
  );
};
export default FilterItem;
