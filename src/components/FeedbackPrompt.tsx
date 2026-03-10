import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, Check, Pencil } from "lucide-react";
import StarRating from "./StarRating";

interface FeedbackPromptProps {
  recipeName: string;
  recipeImage: string;
  onSubmit: (data: { rating: number; comment: string; saved: boolean }) => void;
  onDismiss: () => void;
  onDidNotCook: () => void;
}

const FeedbackPrompt = ({
  recipeName,
  recipeImage,
  onSubmit,
  onDismiss,
  onDidNotCook,
}: FeedbackPromptProps) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [saved, setSaved] = useState(false);
  const [step, setStep] = useState<"rate" | "comment" | "like" | "saved">("rate");

  const handleRate = (value: number) => {
    setRating(value);
    setTimeout(() => setStep("comment"), 400);
  };

  const handleCommentSubmit = () => {
    if (rating >= 4) {
      setStep("like");
    } else {
      onSubmit({ rating, comment, saved: false });
    }
  };

  const handleSubmit = () => {
    onSubmit({ rating, comment, saved });
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-overlay z-40"
        onClick={onDismiss}
      />

      {/* Bottom card */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-2xl max-w-md mx-auto"
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-border" />
        </div>

        {/* Close */}
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-secondary transition-colors"
        >
          <X size={18} className="text-muted-foreground" />
        </button>

        <div className="px-6 pb-8 pt-2">
          <AnimatePresence mode="wait">
            {step === "rate" && (
              <motion.div
                key="rate"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center"
              >
                {/* Recipe thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
                  <img
                    src={recipeImage}
                    alt={recipeName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-sm text-muted-foreground mb-1">
                  You made
                </p>
                <h2 className="text-xl font-display text-foreground mb-1">
                  {recipeName}
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  How was it? Help others decide.
                </p>

                <StarRating rating={rating} onRate={handleRate} size={36} />

                <button
                  onClick={onDidNotCook}
                  className="mt-6 text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
                >
                  I didn't cook this
                </button>
              </motion.div>
            )}

            {step === "comment" && (
              <motion.div
                key="comment"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col"
              >
                {/* Compact header with rating */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={recipeImage}
                      alt={recipeName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-base text-foreground truncate">
                      {recipeName}
                    </h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <StarRating rating={rating} onRate={setRating} size={16} />
                      <span className="text-xs text-muted-foreground ml-1">{rating}/5</span>
                    </div>
                  </div>
                </div>

                {/* Comment */}
                <label className="text-sm font-medium text-foreground mb-2">
                  Share any tips or thoughts
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="E.g. I added extra chilli — highly recommend!"
                  className="w-full rounded-xl border border-input bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  rows={3}
                />

                {/* Submit */}
                <button
                  onClick={handleCommentSubmit}
                  className="mt-5 w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>

                <button
                  onClick={() => {
                    if (rating >= 4) {
                      setStep("like");
                    } else {
                      onSubmit({ rating, comment: "", saved: false });
                    }
                  }}
                  className="mt-2 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Skip
                </button>
              </motion.div>
            )}

            {step === "like" && (
              <motion.div
                key="like"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center"
              >
                {/* Recipe thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden mb-4">
                  <img
                    src={recipeImage}
                    alt={recipeName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-xl font-display text-foreground mb-1">
                  Glad you enjoyed it!
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Would you like to save this recipe?
                </p>

                <button
                  onClick={() => {
                    setSaved(true);
                    onSubmit({ rating, comment, saved: true });
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <Heart size={16} className="fill-current" />
                  Save to Liked
                </button>

                <button
                  onClick={() => onSubmit({ rating, comment, saved: false })}
                  className="mt-3 text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  No thanks
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
};

export default FeedbackPrompt;
