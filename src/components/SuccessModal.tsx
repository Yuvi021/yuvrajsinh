// src/components/SuccessModal.tsx
import { motion } from "framer-motion";

const SuccessModal = ({ onClose }:any) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h2 className="text-lg font-bold text-green-600">Message Sent!</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Your message has been sent successfully. We will get back to you soon!
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default SuccessModal;
