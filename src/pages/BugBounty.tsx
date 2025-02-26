import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Shield, Target, Award, CheckCircle, AlertTriangle, Lock, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const BugBounty: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">We are Bug Hunters!</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Leveraging the expertise of ethical hackers worldwide
            </p>
            <Link to="/contact" className="btn btn-primary">
              Join Our Program
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section bg-gray-900/50 backdrop-blur-md">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Bug Bounty Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Proactive Security</h3>
              <p className="text-gray-400">
                Identify vulnerabilities before malicious actors exploit them
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <Target className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Cost-Effective</h3>
              <p className="text-gray-400">
                Pay only for actual vulnerabilities found, ensuring high ROI
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <CheckCircle className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Compliance</h3>
              <p className="text-gray-400">
                Meet regulatory requirements (e.g., GDPR, HIPAA)
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section bg-black">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            How It Works
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-4xl font-bold text-blue-500 mb-4">01</div>
              <h3 className="text-xl font-bold mb-2">Scope Definition</h3>
              <p className="text-gray-400">Define the assets and systems to test</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-4xl font-bold text-green-500 mb-4">02</div>
              <h3 className="text-xl font-bold mb-2">Ethical Hacking</h3>
              <p className="text-gray-400">Deploy skilled researchers to identify vulnerabilities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-4xl font-bold text-purple-500 mb-4">03</div>
              <h3 className="text-xl font-bold mb-2">Actionable Reporting</h3>
              <p className="text-gray-400">Provide detailed reports with remediation strategies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="text-4xl font-bold text-red-500 mb-4">04</div>
              <h3 className="text-xl font-bold mb-2">Continuous Testing</h3>
              <p className="text-gray-400">Evolve security alongside your infrastructure</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-900/50 backdrop-blur-md">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Program Benefits
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Bug className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Global network of skilled ethical hackers</span>
                </li>
                <li className="flex items-center">
                  <Lock className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Comprehensive vulnerability assessment</span>
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Real-time threat detection and reporting</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Award className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Competitive reward structure</span>
                </li>
                <li className="flex items-center">
                  <Zap className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Quick response and remediation</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Enhanced security posture</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Platform?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our bug bounty program and strengthen your security posture
            </p>
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BugBounty;