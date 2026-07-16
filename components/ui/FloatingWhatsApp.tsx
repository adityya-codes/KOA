"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/data";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${BRAND.whatsapp}?text=Hi!%20I%20want%20to%20pre-book%20an%20adventure%20package.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </motion.a>
  );
}
