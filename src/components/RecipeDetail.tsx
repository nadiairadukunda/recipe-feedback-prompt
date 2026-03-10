import { ChevronLeft, Share2, Heart, Plus } from "lucide-react";
import { Star } from "lucide-react";
import thaiBasilChicken from "@/assets/thai-basil-chicken.jpg";

const RecipeDetail = () => {
  return (
    <div className="relative">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 pt-3">
        <button className="p-2 rounded-full bg-card/80 backdrop-blur-sm">
          <ChevronLeft size={20} className="text-foreground" />
        </button>
        <div className="flex gap-2">
          <button className="p-2 rounded-full bg-card/80 backdrop-blur-sm">
            <Share2 size={18} className="text-foreground" />
          </button>
          <button className="p-2 rounded-full bg-card/80 backdrop-blur-sm">
            <Heart size={18} className="text-foreground" />
          </button>
          <button className="p-2 rounded-full bg-card/80 backdrop-blur-sm">
            <Plus size={18} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="w-full aspect-square">
        <img
          src={thaiBasilChicken}
          alt="Thai Basil Chicken Stir-Fry"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-5 pt-5 pb-24">
        <h1 className="text-2xl font-display text-foreground leading-tight">
          Thai Basil Chicken Stir-Fry
        </h1>

        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1">
            <span className="text-sm text-muted-foreground">💬 13</span>
          </div>
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} size={14} className="fill-star-filled text-star-filled" />
            ))}
            <Star size={14} className="fill-star-empty text-star-empty" />
            <span className="text-sm text-foreground font-medium ml-1">4.4</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4 flex-wrap">
          <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-tag-yellow text-tag-yellow-foreground">
            Easily stored 🍲
          </span>
          <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-tag-blue text-tag-blue-foreground">
            Freezable ❄️
          </span>
          <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-tag-red text-tag-red-foreground">
            Reheatable 🔥
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-5" />

        {/* Author */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-muted-foreground">
            RH
          </div>
          <span className="text-sm font-medium text-foreground">Romany Henry</span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          An easy chicken stir fry recipe inspired by pad krapow gai. It's spicy, speedy, and a friend to your weekly rotation.{" "}
          <button className="font-medium text-foreground underline underline-offset-2">
            Read more
          </button>
        </p>

        <div className="flex gap-5 mt-4 text-sm text-muted-foreground">
          <span>🕐 10 mins prep</span>
          <span>🕐 20 mins cook</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
