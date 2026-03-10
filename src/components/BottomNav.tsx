import { Search, Heart, List } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-30 max-w-md mx-auto">
      <div className="flex items-center justify-around py-2">
        {[
          { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19c0-4 4-7 8-7s8 3 8 7"/><path d="M8 19c0-2 2-4 4-4s4 2 4 4"/><path d="M12 19v0"/></svg>, label: "Discover", active: true },
          { icon: <Search size={22} />, label: "Search", active: false },
          { icon: <List size={22} />, label: "Shopping list", active: false, badge: 1 },
          { icon: <Heart size={22} />, label: "Liked", active: false },
        ].map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 relative ${
              item.active ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            <div className="relative">
              {item.icon}
              {item.badge && (
                <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center font-semibold">
                  {item.badge}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
