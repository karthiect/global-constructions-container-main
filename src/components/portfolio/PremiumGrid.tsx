import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import './PremiumGrid.css';

interface SubCategory {
  name: string;
  image: string;
}

interface PremiumGridProps {
  subcategories: SubCategory[];
}

export const PremiumGrid: React.FC<PremiumGridProps> = ({ subcategories }) => {
  const [selectedImage, setSelectedImage] = useState<SubCategory | null>(null);

  return (
    <>
      <div className="premium-grid-container px-6">
        {subcategories.map((sub, idx) => (
          <motion.div
            key={sub.name}
            layoutId={`image-${sub.name}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 0.8, 
              delay: idx * 0.05, 
              ease: [0.23, 1, 0.32, 1] 
            }}
            className={`premium-item item-${idx % 6}`}
            onClick={() => setSelectedImage(sub)}
          >
            <img 
              src={sub.image} 
              alt={sub.name} 
              referrerPolicy="no-referrer" 
            />
            <div className="premium-overlay">
              <h3 className="premium-title">{sub.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="projection-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div 
              layoutId={`image-${selectedImage.name}`}
              className="projection-content w-[90vw] 
             max-w-4xl
             h-[80vh]
             rounded-2xl
             overflow-hidden
             flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="projection-close"
                onClick={() => setSelectedImage(null)}
              >
                &times;
              </button>
              
<div className="relative w-full h-full overflow-hidden rounded-2xl">

  {/* IMAGE */}
  <img
    src={selectedImage.image}
    alt={selectedImage.name}
    referrerPolicy="no-referrer"
    className="
      w-full
      h-full
      object-cover
      bg-black
      select-none
    "
  />

  {/* TITLE OVERLAY */}
  <div className="
    absolute
    bottom-0
    left-0
    w-full
    p-4 sm:p-6 md:p-8
    bg-linear-to-t
    from-black/70
    via-black/30
    to-transparent
  ">
    <h2 className="
      text-white
      text-xl
      sm:text-2xl
      md:text-4xl
      lg:text-5xl
      font-black
      uppercase
      tracking-tight
      drop-shadow-lg
    ">
      {selectedImage.name}
    </h2>
  </div>

</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
