import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Flame, Sparkles, Clock } from "lucide-react";

export type BadgeType = "new" | "hot" | "limited";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price?: string;
  buttonText: string;
  isExternal?: boolean;
  badge?: BadgeType;
  badgeText?: string;
  onClick?: () => void;
}

const badgeConfig: Record<BadgeType, { icon: React.ReactNode; className: string }> = {
  new: {
    icon: <Sparkles className="w-3 h-3" />,
    className: "bg-blue-500 hover:bg-blue-500 text-white border-0",
  },
  hot: {
    icon: <Flame className="w-3 h-3" />,
    className: "bg-orange-500 hover:bg-orange-500 text-white border-0",
  },
  limited: {
    icon: <Clock className="w-3 h-3" />,
    className: "bg-purple-500 hover:bg-purple-500 text-white border-0",
  },
};

const ProductCard = ({
  imageUrl,
  title,
  description,
  price,
  buttonText,
  isExternal = false,
  badge,
  badgeText,
  onClick,
}: ProductCardProps) => {
  return (
    <div className="relative w-full bg-card border border-border rounded-2xl p-5 flex flex-col hover:shadow-lg transition-shadow">
      {/* Badge */}
      {badge && badgeText && (
        <Badge 
          className={`absolute -top-2 -right-2 flex items-center gap-1 px-2 py-1 text-xs font-semibold ${badgeConfig[badge].className}`}
        >
          {badgeConfig[badge].icon}
          {badgeText}
        </Badge>
      )}

      <div className="flex gap-4 flex-1">
        {/* Product Image */}
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-1.5">
          <h3 className="font-semibold text-foreground text-base leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
          {price && (
            <p className="text-[hsl(170,100%,19%)] font-bold text-base">{price}</p>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <div className="block mt-4">
        <Button 
          onClick={onClick}
          className={`w-full rounded-full font-semibold py-6 text-base flex items-center justify-center gap-2 ${
            isExternal 
              ? "bg-transparent border-2 border-[hsl(170,100%,19%)] text-[hsl(170,100%,19%)] hover:bg-[hsl(170,100%,19%)]/10" 
              : "bg-[hsl(170,100%,19%)] hover:bg-[hsl(170,100%,15%)] text-white"
          }`}
        >
          {buttonText}
          {isExternal && <ExternalLink className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
