import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white shadow-sm">
        {/* Footer Content */}
        <div className="border-t border-gray-200 pt-6 pb-6 border-b">
          <p className="text-s text-gray-500 text-center">
            © {currentYear} Lawrence Babelonia. All rights reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
