import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Network, Server, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Vajra: React.FC = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
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
              <span className="gradient-text">Vajra</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Optimizing IXP route servers and Satellite for seamless connectivity
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
            Features
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <Network className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">IXP Optimization</h3>
              <p className="text-gray-400">
                Dynamic BGP route server configuration and intelligent traffic management for Internet Exchange Points
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <Zap className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Low Latency</h3>
              <p className="text-gray-400">
                Optimized signal processing and routing algorithms for minimal latency in satellite communications
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <Globe className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Industry Applications</h3>
              <p className="text-gray-400">
                Suitable for military intelligence, defense, telecommunications, and various industrial applications
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section bg-black">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Technical Specifications
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
                  <Server className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Dynamic BGP route server configuration</span>
                </li>
                <li className="flex items-center">
                  <Network className="w-6 h-6 text-blue-500 mr-3" />
                  <span>VLAN network isolation</span>
                </li>
                <li className="flex items-center">
                  <Lock className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Automated peering session establishment</span>
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
                  <Shield className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Intelligent routing policy management</span>
                </li>
                <li className="flex items-center">
                  <Zap className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Satellite signal processing and optimization</span>
                </li>
                <li className="flex items-center">
                  <Globe className="w-6 h-6 text-blue-500 mr-3" />
                  <span>Real-time traffic analysis and adjustment</span>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Network?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the power of Vajra in your infrastructure
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

export default Vajra;