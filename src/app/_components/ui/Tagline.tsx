"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import { FaLock } from "react-icons/fa";
import Vision from "../Vision";

export default function DecentralizedELibrary() {
  return (
    <section className="bg-white p-6 mx-auto pt-10 md:px-40">
      <div className="flex flex-col md:flex-row items-start md:justify-between mb-16 gap-8">
        <Vision />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#F5FAFD] p-8 rounded-lg flex flex-col items-center text-center pt-24"
        >
          <div>
            <Image src="/Layer_1.png" alt="Decentralized Publishing" width={120} height={120} className="object-contain" />
          </div>
          <div className="pt-[60%] text-left">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Decentralized Publishing</h2>
            <p className="text-gray-600">
              Publish your work directly on the blockchain uncensorable, permanent, and fully yours.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#F5FAFD] p-6 rounded-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <Image src="/stark.png" alt="Earn Without Intermediaries" width={100} height={100} className="object-contain" />
            </div>
            <div className="pt-[20%] text-left">
              <h2 className="text-xl font-bold text-blue-900 mb-2">Earn Without Intermediaries</h2>
              <p className="text-gray-600">
                Get paid instantly and transparently. No third parties, no hidden cuts
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-[#F5FAFD] p-6 rounded-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="text-blue-500">
                <FaLock size={40} />
              </div>
            </div>
            <div className="pt-[20%] text-left">
              <h2 className="text-xl font-bold text-blue-900 mb-2">Secure Ownership</h2>
              <p className="text-gray-600">
                Your content and earnings are protected with blockchain-backed security
              </p>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#F5FAFD] p-6 rounded-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <Image src="/Global.png" alt="Global Audience Reach" width={85} height={85} className="object-contain" />
            </div>
            <div className="pt-[20%] text-left">
              <h2 className="text-xl font-bold text-blue-900 mb-2">Global Audience Reach</h2>
              <p className="text-gray-600">
                Connect with readers worldwide, anytime, without platform limits
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#F5FAFD] p-6 rounded-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <Image src="/book.png" alt="Own What You Read" width={90} height={90} className="object-contain" />
            </div>
            <div className="pt-[5%] text-left">
              <h2 className="text-xl font-bold text-blue-900 mb-2">Own What You Read</h2>
              <p className="text-gray-600">
                Books become digital collectibles read, collect, and showcase your favorites.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
