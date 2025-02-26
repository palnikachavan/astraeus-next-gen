import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[30vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Privacy Policy</span>
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {COMPANY_INFO.year}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="section bg-gray-900/50 backdrop-blur-md">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="prose prose-invert max-w-none"
            >
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-blue-500 mr-4" />
                  <h2 className="text-3xl font-bold">Information Collection</h2>
                </div>
                <p className="text-gray-300">
                  We collect information that you provide directly to us, including when you create an account,
                  make a purchase, sign up for our newsletter, or communicate with us. This may include your name,
                  email address, postal address, phone number, and payment information.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-green-500 mr-4" />
                  <h2 className="text-3xl font-bold">Data Security</h2>
                </div>
                <p className="text-gray-300">
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure,
                  or access.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-purple-500 mr-4" />
                  <h2 className="text-3xl font-bold">Data Usage</h2>
                </div>
                <p className="text-gray-300">
                  We use the information we collect to provide, maintain, and improve our services, to process
                  your transactions, to send you technical notices and support messages, and to communicate with
                  you about products, services, offers, and events.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-red-500 mr-4" />
                  <h2 className="text-3xl font-bold">Your Rights</h2>
                </div>
                <p className="text-gray-300">
                  You have the right to access, correct, or delete your personal information. You can also object
                  to or restrict certain processing of your information or request portability of your information.
                  To exercise these rights, please contact us at {COMPANY_INFO.email}.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;