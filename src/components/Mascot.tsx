import { motion } from "framer-motion";
import mascotImage from "@/assets/images/mascot.png";

interface MascotProps {
  message?: string;
  position?: "left" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Mascot = ({ 
  message, 
  position = "right", 
  size = "md",
  className = "" 
}: MascotProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32"
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed bottom-6 ${position === "right" ? "right-6" : "left-6"} z-40 ${className}`}
    >
      <div className="relative">
        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`absolute bottom-full ${position === "right" ? "right-0" : "left-0"} mb-3 bg-white rounded-2xl shadow-lg p-4 max-w-xs`}
          >
            <p className="text-sm text-navy font-medium">{message}</p>
            <div 
              className={`absolute -bottom-2 ${position === "right" ? "right-6" : "left-6"} w-4 h-4 bg-white transform rotate-45`}
            />
          </motion.div>
        )}
        
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-sunshine to-sunshine-muted p-1 shadow-lg cursor-pointer hover:scale-110 transition-transform`}
        >
          <img 
            src={mascotImage} 
            alt="Lan - Your sourcing assistant" 
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
