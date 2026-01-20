import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative text-center space-y-8 animate-fade-in px-4">
        {/* Decorative sparkles */}
        <div className="flex justify-center gap-4 mb-4">
          <Sparkles className="w-6 h-6 text-primary animate-bounce" style={{ animationDelay: "0s" }} />
          <Sparkles className="w-8 h-8 text-primary animate-bounce" style={{ animationDelay: "0.2s" }} />
          <Sparkles className="w-6 h-6 text-primary animate-bounce" style={{ animationDelay: "0.4s" }} />
        </div>

        {/* Main Title with gradient */}
        <h1 className="relative">
          <span className="block text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter">
            <span className="text-gradient">Hello</span>
          </span>
          <span className="block text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter mt-2">
            <span className="text-gradient-reverse">World</span>
          </span>
          
          {/* Glow effect behind text */}
          <div className="absolute inset-0 text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter blur-2xl opacity-30 -z-10">
            <span className="block text-primary">Hello</span>
            <span className="block text-primary mt-2">World</span>
          </div>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto font-medium">
          Được xây dựng với React + Vite ✨
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary rounded-full" />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-primary rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Index;
