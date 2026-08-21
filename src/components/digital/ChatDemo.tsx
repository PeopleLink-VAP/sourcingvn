import { useEffect, useState } from "react";
import { ArrowRight, Bot } from "lucide-react";

const script = [
  { from: "user", text: "Hi, I'd like to know which sourcing service is right for my business." },
  {
    from: "bot",
    text: "Absolutely. Are you looking for a supplier, a specific product, or help managing an existing sourcing project?",
  },
  { from: "user", text: "I need to find a manufacturer in Vietnam." },
  {
    from: "bot",
    text: "Got it. I can help you start a supplier search. What product are you looking to manufacture?",
  },
];

export const ChatDemo = () => {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (visible >= script.length) return;
    const timer = setTimeout(() => setVisible((v) => v + 1), 1100);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-secondary/50">
        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary" />
        </span>
        <div>
          <p className="text-sm font-medium text-foreground">Sourcing Assistant</p>
          <p className="text-[11px] text-muted-foreground">Online · replies instantly</p>
        </div>
      </div>

      <div className="p-4 lg:p-5 space-y-3 min-h-[240px]">
        {script.slice(0, visible).map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
            <p
              className={`max-w-[80%] text-sm leading-relaxed rounded-2xl px-4 py-2.5 ${
                msg.from === "user"
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-secondary text-foreground rounded-bl-sm"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
        {visible < script.length && (
          <div className="flex gap-1 pl-1">
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 animate-pulse"
                style={{ animationDelay: `${d * 0.15}s` }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-border p-4 flex items-center justify-between gap-4">
        <span className="text-xs text-muted-foreground">Suggested next step</span>
        <span className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          Start supplier request
          <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </div>
  );
};
