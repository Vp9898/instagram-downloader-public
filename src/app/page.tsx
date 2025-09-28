"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Link2, Instagram, Play, Image, User, Globe, CheckCircle } from 'lucide-react';

export default function InstagramDownloader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleExtract = async () => {
    console.log('Extracting:', url);
    setIsLoading(true);
    // كود الـ API سيوضع هنا لاحقاً
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafafa] via-[#f0f2f5] to-[#e6e9ef]">
      {/* Header Bar */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/60 sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Instagram className="w-7 h-7 text-[#E4405F]" />
            <span className="text-xl font-bold text-gray-800">InstaSave</span>
          </div>
          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            <Globe className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-24 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4 text-green-700" />
            100% Free • No Login Required
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Download Instagram
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FFDC80]">
              Videos & Photos
            </span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            Save Instagram videos, photos, reels and stories in high quality. Fast,
            secure, and completely free to use.
          </p>

          {/* Feature List */}
          <ul className="space-y-3 mb-8">
            {[
              'HD & 4K quality downloads',
              'MP3 audio extraction',
              'Private content support',
              'Unlimited downloads'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-200/80 p-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Paste Instagram URL</h2>
            <p className="text-gray-500">Copy and paste the Instagram post, reel, or story URL below</p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://www.instagram.com/p/..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E4405F] focus:border-transparent"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleExtract}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FFDC80] text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Download className="w-5 h-5" />
              )}
              Download
            </motion.button>
          </div>

          {/* Supported Types */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: Play, label: 'Reels' },
              { icon: Image, label: 'Photos' },
              { icon: User, label: 'Stories' }
            ].map((type, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                  <type.icon className="w-5 h-5 text-[#E4405F]" />
                </div>
                <span className="text-xs text-gray-600">{type.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <div className="bg-white border-t border-gray-200/80">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-3 gap-4 text-center">
          {[
            { num: '10M+', label: 'Downloads' },
            { num: '50K+', label: 'Daily Users' },
            { num: '4.9★', label: 'User Rating' }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-gray-900">{stat.num}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}