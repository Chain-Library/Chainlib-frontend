"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CommunitySection() {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div className="rounded-xl p-8 flex flex-col md:flex-row justify-between items-center md:ml-40 mt-10">
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-6 md:mb-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-[#0F265C]"
          >
            Join Our Community <br /> of Book Lovers
          </motion.h2>
  
          <motion.button 
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold transition"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#2563EB" 
            }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.span
              animate={isHovered ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.2 }}
            >
              Join Community →
            </motion.span>
          </motion.button>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 py-3 px-9 bg-blue-100 rounded-xl flex items-center"
          >
            <div>
              <h4 className="text-blue-900 font-semibold mb-2">Our Community</h4>

              <div className="flex -space-x-3">
                {["/Ellipse 3.png", "/Ellipse 4.png", "/Ellipse 5.png", "/Ellipse 6.png"].map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5, zIndex: 10 }}
                  >
                    <Image 
                      src={src} 
                      width={20} 
                      height={20} 
                      alt="User" 
                      className="w-10 h-10 rounded-full border-2"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
  
            <div className="pl-40">
              <motion.h3 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-2xl font-bold text-blue-900"
              >
                40k+
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-sm text-blue-800"
              >
                Book lovers Joined
              </motion.p>
            </div>
          </motion.div>
        </div>
  
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/community.png" 
              alt="Book Lovers" 
              width={300}
              height={300}
              className="rounded-xl object-cover ml-14 md:ml-10 w-[70%] h-[70%]"
            />
          </motion.div>
        </motion.div>
      </div>
    );
}