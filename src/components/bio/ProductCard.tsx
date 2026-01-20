import { Button } from "@/components/ui/button";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price?: string;
  buttonText: string;
  buttonLink?: string;
}

const ProductCard = ({
  imageUrl,
  title,
  description,
  price,
  buttonText,
  buttonLink = "#",
}: ProductCardProps) => {
  return (
    <div className="w-full bg-card border border-border rounded-2xl p-4 space-y-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden bg-muted">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-1">
          <h3 className="font-semibold text-foreground text-sm md:text-base line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">
            {description}
          </p>
          {price && (
            <p className="text-foreground font-semibold text-sm">{price}</p>
          )}
        </div>
      </div>

      {/* CTA Button */}
      <a href={buttonLink} target="_blank" rel="noopener noreferrer" className="block">
        <Button 
          className="w-full rounded-full bg-[hsl(170,100%,19%)] hover:bg-[hsl(170,100%,15%)] text-white font-medium py-5"
        >
          {buttonText}
        </Button>
      </a>
    </div>
  );
};

export default ProductCard;
