const FilterItem = ({
  name,
  iconId,
  value,
  onChangeValue,
  title,
}: {
  name: string;
  iconId: string;
  value: boolean;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}) => {
  return (
    <label>
      <svg aria-hidden="true" width={16} height={16}>
        <use href={`/public/symbol-defs.svg${iconId}`} />
      </svg>
      <span>{title}</span>
      <input
        onChange={onChangeValue}
        checked={value}
        name={name}
        type="checkbox"
      />
    </label>
  );
};
export default FilterItem;
