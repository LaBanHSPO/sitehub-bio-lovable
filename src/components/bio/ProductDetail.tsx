import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/i18n/LanguageContext";

interface ProductDetailProps {
  product: {
    imageUrl: string;
    title: string;
    description: string;
    price?: string;
    buttonText: string;
  };
  onBack: () => void;
}

const ProductDetail = ({ product, onBack }: ProductDetailProps) => {
  const { t } = useLanguage();
  
  return (
    <div className="flex-1">
      {/* Hero Image with Back Button */}
      <div className="relative w-full bg-foreground rounded-2xl overflow-hidden mb-6">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-background flex items-center justify-center hover:bg-muted transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Product Hero Image */}
        <div className="w-full aspect-[16/9] md:aspect-[2/1] flex items-center justify-center p-8">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="max-h-full max-w-[60%] object-contain"
          />
        </div>

        {/* Product Title on Image */}
        <div className="px-6 pb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-background">
            {product.title}
          </h1>
        </div>
      </div>

      {/* Price */}
      {product.price && (
        <p className="text-[hsl(170,100%,19%)] font-bold text-2xl md:text-3xl mb-6">
          {product.price}
        </p>
      )}

      {/* Testimonial Quote */}
      <div className="border-l-4 border-muted pl-4 mb-6">
        <p className="text-muted-foreground italic text-sm md:text-base leading-relaxed">
          {t("testimonial")}{" "}
          <span className="font-semibold text-foreground not-italic">
            {t("testimonialAuthor")}
          </span>
        </p>
      </div>

      <Separator className="my-6" />

      {/* Content Section */}
      <div className="space-y-4 text-foreground">
        <p>{t("statsIntro")}</p>
        <p className="font-semibold">{t("stat1")}</p>
        <p className="font-semibold">{t("stat2")}</p>
        <p className="font-semibold">{t("stat3")}</p>
        <p className="text-muted-foreground">{t("statsNote1")}</p>
        <p className="text-muted-foreground">{t("statsNote2")}</p>
        <p className="text-muted-foreground">{t("statsNote3")}</p>
      </div>

      <Separator className="my-6" />

      {/* Enrollment Section */}
      <div className="space-y-4">
        <p className="font-medium">{t("enrollBelow")}</p>
        <p className="text-muted-foreground">
          {t("addMentalMonetization")}
        </p>
        <p className="italic text-muted-foreground">
          {t("mentalMonetizationNote")}
        </p>
        <p className="text-muted-foreground">{t("discountNote")}</p>
      </div>

      {/* One Time Offer Box */}
      <div className="mt-8 border-2 border-dashed border-[hsl(170,100%,19%)] rounded-lg p-4 md:p-6">
        <div className="text-center space-y-2">
          <p className="text-destructive font-bold uppercase tracking-wide text-sm">
            {t("oneTimeOffer")}
          </p>
          <p className="text-sm text-muted-foreground">
            {t("addCourse")}(
            <span className="line-through">{t("originalValue")}</span>)
          </p>
          <Button className="w-full bg-[hsl(170,100%,19%)] hover:bg-[hsl(170,100%,15%)] text-primary-foreground rounded-md py-5">
            <span className="mr-2">→</span>
            <Checkbox className="mr-2 border-primary-foreground data-[state=checked]:bg-primary-foreground data-[state=checked]:text-[hsl(170,100%,19%)]" />
            {t("yesOffer")}
          </Button>
        </div>
      </div>

      {/* Join Section */}
      <div className="mt-10 space-y-6">
        <h2 className="text-[hsl(170,100%,19%)] text-xl md:text-2xl font-semibold text-center">
          {t("joinStudents")}
        </h2>

        {/* Form */}
        <div className="space-y-4">
          <Input
            placeholder={t("enterName")}
            className="bg-muted/50 border-border py-6 text-base"
          />
          <Input
            placeholder={t("enterEmail")}
            type="email"
            className="bg-muted/50 border-border py-6 text-base"
          />
        </div>

        {/* Total Price */}
        <div className="flex items-center justify-between py-2">
          <span className="font-medium">{t("total")} :</span>
          <div className="flex-1 border-b border-dashed border-muted-foreground mx-4" />
          <span className="text-[hsl(170,100%,19%)] font-bold text-xl">
            US{product.price || "$150"}
          </span>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-3 gap-3">
          <div className="border border-[hsl(170,100%,19%)] rounded-lg p-3 text-center">
            <div className="w-5 h-5 mx-auto mb-1 text-[hsl(170,100%,19%)]">💳</div>
            <span className="text-sm text-[hsl(170,100%,19%)]">{t("card")}</span>
          </div>
          <div className="border border-border rounded-lg p-3 text-center">
            <div className="w-5 h-5 mx-auto mb-1">🏦</div>
            <span className="text-sm text-muted-foreground">{t("bank")}</span>
          </div>
          <div className="border border-border rounded-lg p-3 text-center">
            <div className="w-5 h-5 mx-auto mb-1">G</div>
            <span className="text-sm text-muted-foreground">Google Pay</span>
          </div>
        </div>

        {/* Secure Checkout */}
        <div className="flex items-center gap-2 text-[hsl(170,100%,19%)] text-sm">
          <span>🔒</span>
          <span>{t("secureCheckout")}</span>
          <span>∨</span>
        </div>

        {/* Card Details */}
        <div className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">
              {t("cardNumber")}
            </label>
            <Input
              placeholder="1234 1234 1234 1234"
              className="bg-background border-border"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">
                {t("expirationDate")}
              </label>
              <Input placeholder="MM / YY" className="bg-background border-border" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">
                {t("securityCode")}
              </label>
              <Input placeholder="CVC" className="bg-background border-border" />
            </div>
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1 block">
              {t("country")}
            </label>
            <Input
              placeholder={t("selectCountry")}
              className="bg-background border-border"
            />
          </div>
        </div>

        {/* Enroll Button */}
        <Button className="w-full bg-[hsl(170,100%,19%)] hover:bg-[hsl(170,100%,15%)] text-primary-foreground rounded-lg py-6 text-lg font-semibold">
          {t("enrollNow")}
        </Button>
      </div>

      {/* Footer spacing */}
      <div className="h-10" />
    </div>
  );
};

export default ProductDetail;
