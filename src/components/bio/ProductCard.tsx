import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price?: string;
  buttonText: string;
  isExternal?: boolean;
  onClick?: () => void;
}

const ProductCard = ({
  imageUrl,
  title,
  description,
  price,
  buttonText,
  isExternal = false,
  onClick,
}: ProductCardProps) => {
  return (
    <div className="w-full bg-card border border-border rounded-2xl p-5 flex flex-col hover:shadow-lg transition-shadow">
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
