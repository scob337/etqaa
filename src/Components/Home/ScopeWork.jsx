import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ScopeWork = () => {
  const { t } = useTranslation();

  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const listRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.2 });
  const isImageInView = useInView(imageRef, { once: true, amount: 0.3 });
  const isContentInView = useInView(contentRef, { once: true, amount: 0.3 });
  const isListInView = useInView(listRef, { once: true, amount: 0.2 });

  const scopeItems = t('Scop.items', { returnObjects: true });

  return (
    <motion.div 
      ref={sectionRef}
      initial={{ opacity: 0 }} 
      animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }} 
      transition={{ duration: 0.5 }}
      className="w-full my-6"
    >
      <motion.div 
        ref={containerRef}
        initial={{ y: 50, opacity: 0 }} 
        animate={isContainerInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }} 
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative flex flex-col md:flex-row w-full bg-cyber-primary shadow-lg border border-cyber-gray-dark rounded-lg overflow-hidden"
      >
        <motion.div 
          ref={imageRef}
          initial={{ x: -30, opacity: 0 }} 
          animate={isImageInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden group"
        >
          <img
            src="https://securitypact.net/wp-content/uploads/2024/09/Identity-and-Access-Management-IAM-Solution.jpg"
            alt="Cybersecurity Operations"
            className="h-full w-full rounded-md md:rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-primary via-transparent to-transparent opacity-40"></div>
        </motion.div>

        <motion.div 
          ref={contentRef}
          initial={{ x: 30, opacity: 0 }} 
          animate={isContentInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 md:p-8"
        >
          <h1 className="text-[40px] md:text-[50px] font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            {t('Scop.title')}
          </h1>
          <motion.ul 
            ref={listRef}
            initial={{ opacity: 0 }} 
            animate={isListInView ? { opacity: 1 } : { opacity: 0 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
            className="space-y-3 text-white text-sm md:text-base"
          >
            {scopeItems.map((item, index) => (
              <motion.li 
                key={index}
                initial={{ y: 10, opacity: 0 }} 
                animate={isListInView ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }} 
                transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                className="flex items-center space-x-3"
              >
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ScopeWork;
