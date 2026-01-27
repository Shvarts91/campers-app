import { Star } from '../Star/Star';

type RatingProps = {
  value: number;
  max?: number;
};

export const Rating = ({ value, max = 5 }: RatingProps) => {
  return (
    <div style={{ display: 'flex', gap: 4 }}>
      {Array.from({ length: max }, (_, i) => (
        <Star key={i} filled={i < value} />
      ))}
    </div>
  );
};
