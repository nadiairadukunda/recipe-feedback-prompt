import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

interface StarRatingProps {
  rating: number;
  onRate: (rating: number) => void;
  size?: number;
}

const StarRating = ({ rating, onRate, size = 32 }: StarRatingProps) => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="flex gap-1.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.button
          key={star}
          whileTap={{ scale: 1.3 }}
          whileHover={{ scale: 1.1 }}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onRate(star)}
          className="focus:outline-none"
        >
          <Star
            size={size}
            className={`transition-colors ${
              star <= (hovered || rating)
                ? "fill-star-filled text-star-filled"
                : "fill-star-empty text-star-empty"
            }`}
          />
        </motion.button>
      ))}
    </div>
  );
};

export default StarRating;
