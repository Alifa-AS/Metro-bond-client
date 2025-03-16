import { ShieldCheck, Lock, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import SectionTitle from "../../../Components/SectionTitle";

const Privacy = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 my-10">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle
          heading="Safety & Privacy"
          subHeading=" We prioritize your safety with top-notch security measures."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {/* Privacy Protection */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center">
              <ShieldCheck size={40} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mt-4">
              100% Privacy Protected
            </h3>
            <p className="text-gray-500 mt-2">
              Your personal details remain secure and confidential.
            </p>
          </motion.div>

          {/* Secure Encryption */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center">
              <Lock size={40} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mt-4">
              End-to-End Encryption
            </h3>
            <p className="text-gray-500 mt-2">
              All communications are securely encrypted for privacy.
            </p>
          </motion.div>

          {/* Safe Browsing */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center">
              <EyeOff size={40} className="text-red-600" />
            </div>
            <h3 className="text-xl font-semibold mt-4">Safe Browsing</h3>
            <p className="text-gray-500 mt-2">
              Only verified users can access and communicate.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Privacy;
