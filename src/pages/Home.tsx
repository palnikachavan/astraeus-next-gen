import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DID_YOU_KNOW_FACTS } from '../constants';

const Home: React.FC = () => {
  const [facts, setFacts] = useState<typeof DID_YOU_KNOW_FACTS>([]);

  useEffect(() => {
    // Function to get 3 random facts
    const getRandomFacts = () => {
      const shuffled = [...DID_YOU_KNOW_FACTS].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 3);
    };

    // Initial set of facts
    setFacts(getRandomFacts());

    // Update facts every 5 seconds
    const interval = setInterval(() => {
      setFacts(getRandomFacts());
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
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
              <span className="gradient-text">Empowering</span> the Future of Digital Security
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Advanced cybersecurity solutions for the modern enterprise
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn btn-primary">
                Get Started <ArrowRight className="inline-block ml-2" size={20} />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-900/50 backdrop-blur-md">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-400">Comprehensive security for your digital assets</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <Shield className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Vajra</h3>
              <p className="text-gray-400">
                Advanced IXP route servers and satellite connectivity optimization
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="card"
            >
              <Globe className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Minerva</h3>
              <p className="text-gray-400">
                Advanced cybersecurity analysis and vulnerability detection
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="card"
            >
              <Lock className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Bug Bounty</h3>
              <p className="text-gray-400">
                Crowdsourced security testing and vulnerability rewards
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Did You Know Section */}
      <section className="section bg-black">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center"
          >
            Did You Know?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.fact + index} // Added index to key to handle duplicate facts
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card"
              >
                <p className="text-lg mb-4">{fact.fact}</p>
                <p className="text-sm text-gray-400">Source: {fact.source}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Future?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the leading organizations that trust Astraeus Next Gen for their security needs
            </p>
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;