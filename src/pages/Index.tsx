import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import RecipeDetail from "@/components/RecipeDetail";
import FeedbackPrompt from "@/components/FeedbackPrompt";
import BottomNav from "@/components/BottomNav";
import { toast } from "sonner";
import thaiBasilChicken from "@/assets/thai-basil-chicken.jpg";

const Index = () => {
  const [showPrompt, setShowPrompt] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      <RecipeDetail />
      <BottomNav />

      <AnimatePresence>
        {showPrompt && !submitted && (
          <FeedbackPrompt
            recipeName="Thai Basil Chicken Stir-Fry"
            recipeImage={thaiBasilChicken}
            onSubmit={(data) => {
              setSubmitted(true);
              setShowPrompt(false);
              toast.success(
                `Thanks! You rated this ${data.rating}/5${data.comment ? " and left a tip" : ""}.`,
                { duration: 3000 }
              );
              console.log("Feedback submitted:", data);
            }}
            onDismiss={() => setShowPrompt(false)}
            onDidNotCook={() => {
              setShowPrompt(false);
              toast("Got it — we won't count that as a cook.", { duration: 3000 });
              console.log("Negative confirmation: user did not cook");
            }}
          />
        )}
      </AnimatePresence>

      {/* Re-trigger button for demo */}
      {!showPrompt && (
        <button
          onClick={() => {
            setSubmitted(false);
            setShowPrompt(true);
          }}
          className="fixed top-4 right-4 z-30 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold shadow-lg"
        >
          Show prompt again
        </button>
      )}
    </div>
  );
};

export default Index;
