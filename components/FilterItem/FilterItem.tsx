type FilterItemProps = {
  iconId: string;
  title: string;
  type?: 'checkbox' | 'radio';
  value?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const FilterItem = ({ iconId, title, type, ...rest }: FilterItemProps) => {
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
      <input id={id} type={type} {...rest} />
    </label>
  );
};
export default FilterItem;
