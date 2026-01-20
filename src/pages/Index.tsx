import { Sun } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Sun Icon with glow effect */}
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
          <Sun className="w-16 h-16 text-primary animate-spin-slow" />
        </div>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight">
          Hello <span className="text-primary">World</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-md mx-auto">
          Chào mừng bạn đến với React + Vite! ☀️
        </p>

        {/* Decorative line */}
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
      </div>
    </div>
  );
};

export default Index;
