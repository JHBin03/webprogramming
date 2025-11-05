import { Star } from "lucide-react";
import { useState } from "react";

interface StarRatingProps {
  initialRating?: number;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

export const StarRating = ({ initialRating = 0, onRatingChange, readonly = false }: StarRatingProps) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (value: number) => {
    if (!readonly) {
      setRating(value);
      onRatingChange?.(value);
    }
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => handleClick(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(0)}
          disabled={readonly}
          className={`transition-transform ${!readonly && 'hover:scale-110'} ${readonly ? 'cursor-default' : 'cursor-pointer'}`}
        >
          <Star
            className={`w-6 h-6 ${
              star <= (hover || rating)
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-muted-foreground'
            }`}
          />
        </button>
      ))}
    </div>
  );
};
