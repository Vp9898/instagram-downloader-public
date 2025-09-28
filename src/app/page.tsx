"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Link2, Eye, Sparkles, Instagram, Video, Music, User } from 'lucide-react';

export default function InstagramDownloader() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mediaData, setMediaData] = useState<any>(null);

  const handleExtract = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/download/extract', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await response.json();
      setMediaData(data.data);
    } catch (error) {
      console.error('Error:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-orange-600 relative overflow-hidden">
      {/* خلفية متدرجة بسيطة */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-800/20 to-orange-600/20 opacity-30"></div>
      
      {/* تأثيرات ضوئية */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* الهيدر */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <Instagram className="w-12 h-12 text-white" />
            <h1 className="text-5xl md:text-7xl font-bold text-white bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Instagram Downloader
            </h1>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            حمل مقاطع الفيديو، الريلز، القصص، وصور الملف الشخصية بجودة عالية
          </p>
        </motion.div>

        {/* نموذج الإدخال */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="الصق رابط Instagram هنا..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleExtract}
                disabled={isLoading}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    جاري التحميل...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    استخراج
                  </>
                )}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* مميزات التطبيق */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            { icon: Video, title: 'فيديوهات عالية الجودة', desc: 'حمّل مقاطع الفيديو والريلز بدقة تصل إلى 4K' },
            { icon: Music, title: 'صوت نقي', desc: 'استخرج الصوت بصيغة MP3 بجودة ممتازة' },
            { icon: User, title: 'صور ملف شخصي', desc: 'احصل على صور الملف الشخصي بدقة عالية' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center"
            >
              <feature.icon className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}