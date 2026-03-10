import { Search, SlidersHorizontal } from "lucide-react";

const categories = ["All", "Quick & Easy", "Healthy", "Comfort", "Veggie", "Asian"];

const feedItems = [
  { title: "Smoky Black Bean Tacos", time: "25 min", rating: "4.6", color: "bg-accent/20" },
  { title: "Lemon Herb Salmon", time: "30 min", rating: "4.8", color: "bg-primary/10" },
  { title: "Mushroom Risotto", time: "45 min", rating: "4.5", color: "bg-secondary" },
  { title: "Crispy Tofu Bowl", time: "20 min", rating: "4.3", color: "bg-accent/20" },
  { title: "One-Pot Pasta", time: "25 min", rating: "4.7", color: "bg-primary/10" },
  { title: "Thai Green Curry", time: "35 min", rating: "4.9", color: "bg-secondary" },
];

const HomeFeed = () => {
  return (
    <div className="px-4 pt-12 pb-24">
      {/* Header */}
      <div className="mb-5">
        <p className="text-sm text-muted-foreground">Good evening 👋</p>
        <h1 className="text-2xl font-display text-foreground">What's for dinner?</h1>
      </div>

      {/* Search */}
      <div className="flex gap-2 mb-5">
        <div className="flex-1 flex items-center gap-2 px-3 py-2.5 rounded-xl bg-secondary border border-border">
          <Search size={16} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Search recipes...</span>
        </div>
        <button className="p-2.5 rounded-xl bg-secondary border border-border">
          <SlidersHorizontal size={16} className="text-muted-foreground" />
        </button>
      </div>

      {/* Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto no-scrollbar">
        {categories.map((cat, i) => (
          <span
            key={cat}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
              i === 0
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-muted-foreground"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* Feed grid */}
      <div className="grid grid-cols-2 gap-3">
        {feedItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-border overflow-hidden"
          >
            <div className={`${item.color} aspect-[4/3]`} />
            <div className="p-3">
              <h3 className="text-sm font-medium text-foreground leading-tight mb-1">
                {item.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{item.time}</span>
                <span className="text-xs text-muted-foreground">★ {item.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;
