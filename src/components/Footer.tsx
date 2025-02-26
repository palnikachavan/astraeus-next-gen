import React from 'react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/50 backdrop-blur-md py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <address className="not-italic">
              <p>{COMPANY_INFO.address}</p>
              <p className="mt-2">
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © {COMPANY_INFO.year} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;