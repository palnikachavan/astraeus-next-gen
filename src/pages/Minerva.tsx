import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Lock, Search, Zap, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Minerva: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
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
              <span className="gradient-text">Minerva</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Advanced cybersecurity analysis and vulnerability detection powered by AI
            </p>
            <Link to="/contact" className="btn btn-primary">
              Request Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-900/50 backdrop-blur-md">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Key Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <Brain className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-400">
                Advanced machine learning algorithms for real-time threat detection and analysis
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <Search className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Vulnerability Scanning</h3>
              <p className="text-gray-400">
                Comprehensive system scanning to identify potential security vulnerabilities
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <AlertTriangle className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Threat Prevention</h3>
              <p className="text-gray-400">
                Proactive threat prevention with automated response capabilities
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="section bg-black">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Technical Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <Lock className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Security Analysis</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Real-time threat detection</li>
                    <li>Behavioral analysis</li>
                    <li>Pattern recognition</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <Zap className="w-6 h-6 text-purple-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Low-latency processing</li>
                    <li>Scalable architecture</li>
                    <li>High-throughput analysis</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section bg-gray-900/50 backdrop-blur-md">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Use Cases
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-gray-400">
                Protect large-scale corporate networks and sensitive data with advanced threat detection
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4">Government Systems</h3>
              <p className="text-gray-400">
                Secure critical infrastructure and classified information with military-grade protection
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-4">Financial Services</h3>
              <p className="text-gray-400">
                Safeguard financial transactions and customer data with real-time monitoring
              </p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Enhance Your Security?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the power of AI-driven cybersecurity with Minerva
            </p>
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
              Schedule a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Minerva;