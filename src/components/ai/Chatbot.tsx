"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { chatbotIntents } from "@/lib/constants";

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hi! I'm Aura, your AI beauty concierge. How can I help you find the perfect salon or service in Ahmedabad today?" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    // Mock AI delay
    setTimeout(() => {
      const lowerInput = userMsg.toLowerCase();
      let aiResponse = "I can definitely help with that! Let me search our Ahmedabad directory for the best matches. Could you tell me your preferred area (like Satellite, Vastrapur) or your budget?";

      for (const intent of chatbotIntents) {
        if (intent.keywords.some(kw => lowerInput.includes(kw))) {
          aiResponse = intent.response;
          break;
        }
      }

      setMessages((prev) => [...prev, { role: "ai", text: aiResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-gold text-white shadow-[0_8px_30px_rgba(212,175,55,0.4)] z-50 hover:scale-105 transition-transform duration-200 cursor-pointer ${isOpen ? 'hidden' : 'flex'} items-center justify-center`}
      >
        <Sparkles className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[550px] max-h-[80vh] bg-surface dark:bg-navy-light border border-border dark:border-white/10 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gold to-yellow-600 p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Aura AI Concierge</h3>
                  <p className="text-[10px] opacity-80">Online • Ahmedabad Beauty Expert</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-surface-alt dark:bg-navy">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" 
                      ? "bg-gold text-white rounded-br-none" 
                      : "bg-white dark:bg-navy-light border border-border dark:border-white/5 text-text-primary dark:text-white rounded-bl-none"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border dark:border-white/10 bg-surface dark:bg-navy-light">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask me anything..."
                  className="w-full pl-4 pr-12 py-3 rounded-xl bg-surface-alt dark:bg-navy border border-border dark:border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 p-2 rounded-lg bg-gold text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
