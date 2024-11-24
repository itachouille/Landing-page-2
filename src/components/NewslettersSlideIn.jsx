import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useState } from "react";

const NewsletterSlideIn = () => {
  const [showSlideIn, setShowSlideIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSlideIn(true), 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowSlideIn(false);
  };

  return (
    <AnimatePresence>
      {showSlideIn && (
        <motion.div
          key="newsletter"
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 300 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed bottom-4 right-4 w-80 rounded-lg border border-gray/20 bg-white p-4 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
            <button onClick={handleClose} className="text-gray hover:text-gray">
              ✕
            </button>
          </div>
          <p className="mt-2 text-sm text-gray">
            Stay updated with our latest news, tips, and exclusive offers.
          </p>
          <input
            type="email"
            placeholder="Entrez votre email"
            className="mt-3 w-full rounded-md border border-orange p-2 focus:ring focus:ring-orange"
          />
          <button
            onClick={() => setShowSlideIn(false)}
            className="mt-3 w-full rounded-md border bg-orange py-2 text-white transition-all hover:border-orange hover:bg-white hover:text-orange"
          >
            Subscribe
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterSlideIn;
