import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

interface MascotProps {
  message?: string;
  position?: "left" | "right";
  className?: string;
}

export const Mascot = ({ 
  message = "Need help with your project?", 
  position = "right", 
  className = "" 
}: MascotProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed bottom-6 ${position === "right" ? "right-6" : "left-6"} z-40 ${className}`}
    >
      <div className="relative">
        {/* Message bubble */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ 
            opacity: isExpanded ? 1 : 0, 
            y: isExpanded ? 0 : 10,
            scale: isExpanded ? 1 : 0.9
          }}
          className={`absolute bottom-full ${position === "right" ? "right-0" : "left-0"} mb-4 ${isExpanded ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-5 max-w-xs border border-gray-100 relative">
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-3 h-3 text-gray-500" />
            </button>
            
            <p className="text-sm text-navy font-medium mb-3">{message}</p>
            
            <a
              href="/start-project"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:text-teal/80 transition-colors"
            >
              Start a conversation
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
            
            {/* Speech bubble tail */}
            <div 
              className={`absolute -bottom-2 ${position === "right" ? "right-6" : "left-6"} w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-100`}
            />
          </div>
        </motion.div>
        
        {/* Modern floating button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-teal to-teal/80 shadow-lg flex items-center justify-center overflow-hidden"
          >
            {/* Animated ring */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full border-2 border-teal"
            />
            
            <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
          </motion.div>
          
          {/* Notification dot */}
          {!isExpanded && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-coral rounded-full border-2 border-white"
            />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};
