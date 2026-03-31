import React from "react";
import Link from "next/link";

/* ================= CONFIG (SCALABLE) ================= */
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "https://3w-task1-fronted.vercel.app/Home" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "GitHub", href: "https://github.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Email", href: "mailto:rajatmaurya.dev@gmail.com" },
];

/* ================= COMPONENT ================= */
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">Postify</h2>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              AI-powered blogging platform to create, manage, and scale content
              with modern backend architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"  // 🔥 security best practice
                    className="hover:text-white transition duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Postify. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;