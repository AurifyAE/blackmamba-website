import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Newsletter Section */}
      <section className="bg-[#A97C50] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-15">
          <div className="text-center">
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6">
              Join Our Community
            </h2>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email to receive updates"
                className="flex-1 px-4 py-3 rounded-4xl border border-white focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-300 text-sm sm:text-base"
              />
              <button className="bg-white text-[#A97C50] px-6 py-3 rounded-4xl font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Section */}
      <section className="bg-black text-white py-8 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-15 lg:px-30">
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-8">
            {/* Contact & Social Column - Top for mobile and tablet */}
            <div className="order-1 lg:order-1 col-span-3 lg:col-span-1">
              <div className="mb-6">
                <Image
                  src="/images/logo.svg"
                  alt="BlackMamba Real Estate"
                  width={180}
                  height={50}
                  className="mb-4"
                />
                <div className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>805, Tamani Arts Tower,</p>
                  <p>Business Bay</p>
                  <p className="mt-2">+971 50 110 0678</p>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Image src="/images/instagram.svg" alt="" width={30} height={30} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Image src="/images/linkedin.svg" alt="" width={30} height={30} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Image src="/images/facebook.svg" alt="" width={30} height={30} />
                </a>
              </div>
            </div>

            {/* Company Column */}
            <div className="order-2 lg:order-2">
              <h3 className="text-base md:text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Explore Column */}
            <div className="order-3 lg:order-3">
              <h3 className="text-base md:text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <Link href="/shobha-waves" className="text-gray-300 hover:text-white transition-colors">
                    Shobha Waves
                  </Link>
                </li>
                <li>
                  <Link href="/dunya-properties" className="text-gray-300 hover:text-white transition-colors">
                    Dunya Properties
                  </Link>
                </li>
                <li>
                  <Link href="/azizi-developments" className="text-gray-300 hover:text-white transition-colors">
                    Azizi Developments
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Column */}
            <div className="order-4 lg:order-4">
              <h3 className="text-base md:text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms-conditions" className="text-gray-300 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-black text-white py-4 sm:py-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 md:px-15 lg:px-30">
          <div className="flex flex-col items-center justify-between gap-4 sm:gap-6">
            <hr className="w-full border-t border-gray-800" />
            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                Copyright © 2025 BlackMamba Real Estate. All Rights Reserved.
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-[11px] sm:text-xs">
                Made by{" "}
                <a
                  href="https://creative3r.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-gray-400 transition-colors"
                >
                  3RCreative
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
