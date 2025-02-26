import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Scale, Shield, AlertTriangle, Lock, Globe, FileCheck, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[30vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Terms and Conditions</span>
            </h1>
            <p className="text-xl text-gray-300">
              Last updated: {COMPANY_INFO.year}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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
                  <FileText className="w-8 h-8 text-blue-500 mr-4" />
                  <h2 className="text-3xl font-bold">1. Agreement to Terms</h2>
                </div>
                <p className="text-gray-300">
                  These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and {COMPANY_INFO.name} ("we," "us" or "our"), concerning your access to and use of our services and website. By accessing or using our services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, then you may not access our services.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Scale className="w-8 h-8 text-green-500 mr-4" />
                  <h2 className="text-3xl font-bold">2. Intellectual Property Rights</h2>
                </div>
                <p className="text-gray-300">
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Lock className="w-8 h-8 text-purple-500 mr-4" />
                  <h2 className="text-3xl font-bold">3. User Representations</h2>
                </div>
                <p className="text-gray-300">
                  By using our services, you represent and warrant that: (1) you have the legal capacity to accept these Terms and Conditions; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access our services through automated or non-human means; (4) you will not use our services for any illegal or unauthorized purpose; and (5) your use of our services will not violate any applicable law or regulation.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-yellow-500 mr-4" />
                  <h2 className="text-3xl font-bold">4. Prohibited Activities</h2>
                </div>
                <p className="text-gray-300">
                  You may not access or use the Site for any purpose other than that for which we make the Site available. As a user of the Site, you agree not to:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-300">
                  <li>Systematically retrieve data or content to create a collection, database, or directory</li>
                  <li>Trick, defraud, or mislead us or other users</li>
                  <li>Circumvent, disable, or interfere with security features of the Site</li>
                  <li>Engage in unauthorized framing of or linking to the Site</li>
                  <li>Upload or transmit viruses, Trojan horses, or other malicious code</li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <FileCheck className="w-8 h-8 text-red-500 mr-4" />
                  <h2 className="text-3xl font-bold">5. Service Terms</h2>
                </div>
                <p className="text-gray-300">
                  Our services, including but not limited to Vajra and Minerva platforms, are subject to specific terms of use. By using these services, you agree to:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-300">
                  <li>Use the services only for their intended purposes</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Report any unauthorized use or security breaches</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-indigo-500 mr-4" />
                  <h2 className="text-3xl font-bold">6. Bug Bounty Program Terms</h2>
                </div>
                <p className="text-gray-300">
                  Participation in our Bug Bounty program is subject to additional terms and conditions. Participants must:
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-300">
                  <li>Follow responsible disclosure guidelines</li>
                  <li>Not exploit vulnerabilities beyond proof-of-concept</li>
                  <li>Maintain confidentiality about discovered vulnerabilities</li>
                  <li>Comply with program scope and rules</li>
                </ul>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-teal-500 mr-4" />
                  <h2 className="text-3xl font-bold">7. Term and Termination</h2>
                </div>
                <p className="text-gray-300">
                  These Terms and Conditions shall remain in full force and effect while you use our services. We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions. Upon termination, your right to use our services will immediately cease.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-orange-500 mr-4" />
                  <h2 className="text-3xl font-bold">8. Disclaimer</h2>
                </div>
                <p className="text-gray-300">
                  Our services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-pink-500 mr-4" />
                  <h2 className="text-3xl font-bold">9. Contact Information</h2>
                </div>
                <p className="text-gray-300">
                  For any questions about these Terms and Conditions, please contact us at:
                </p>
                <address className="mt-4 text-gray-300 not-italic">
                  <p>{COMPANY_INFO.name}</p>
                  <p>{COMPANY_INFO.address}</p>
                  <p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-blue-400 hover:text-blue-300">
                      {COMPANY_INFO.email}
                    </a>
                  </p>
                </address>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;