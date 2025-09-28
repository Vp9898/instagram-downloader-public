// src/app/page.tsx
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Link2, Instagram, Video, Music, User, Globe, Sparkles, Zap } from 'lucide-react';

export default function InstagramDownloader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleExtract = async () => {
    setIsLoading(true);
    // your API call
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Neon Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-purple-500 rounded-full opacity-20 blur-[10rem] animate-pulse"></div>

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center p-6">
        <div className="flex items-center gap-3">
          <Instagram className="w-8 h-8 text-purple-400" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            InstaGrab
          </h1>
        </div>
        <button className="bg-white/10 backdrop-blur-sm rounded-full p-2 hover:bg-white/20 transition-all">
          <Globe className="w-5 h-5" />
        </button>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 pb-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">AI-Powered Downloader</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
            Download Anything
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              From Instagram
            </span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Reels, videos, stories, photos, and profile pictures — all in one place,
            all in high quality, all free.
          </p>
        </motion.div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-2xl"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-2xl p-1">
              <div className="flex items-center gap-4 p-4">
                <Link2 className="w-5 h-5 text-gray-500" />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://instagram.com/reel/..."
                  className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleExtract}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Zap className="w-5 h-5" />
                  )}
                  Download
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full max-w-4xl">
          {[
            { icon: Video, title: '4K Videos', desc: 'Crystal clear reels and videos' },
            { icon: Music, title: 'MP3 Audio', desc: 'Extract audio instantly' },
            { icon: User, title: 'HD Profiles', desc: 'High-res profile pictures' }
          ].map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feat.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-400 text-sm">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Footer Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </div>
  );
}