import { User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ProfileToggleProps {
  isVisible: boolean;
  onToggle: () => void;
}

const ProfileToggle = ({ isVisible, onToggle }: ProfileToggleProps) => {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onToggle}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full shadow-lg border-border bg-card hover:bg-muted transition-all"
      aria-label={isVisible ? "Hide profile" : "Show profile"}
    >
      <AnimatePresence mode="wait">
        {isVisible ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <X className="w-5 h-5 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="user"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <User className="w-5 h-5 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};

export default ProfileToggle;
