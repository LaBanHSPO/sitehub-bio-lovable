import { Button } from "@/components/ui/button";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price?: string;
  buttonText: string;
  buttonLink?: string;
  onClick?: () => void;
}

const ProductCard = ({
  imageUrl,
  title,
  description,
  price,
  buttonText,
  buttonLink = "#",
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
          className="w-full rounded-full bg-[hsl(170,100%,19%)] hover:bg-[hsl(170,100%,15%)] text-white font-semibold py-6 text-base"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
