'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function ApplyPage() {
  useEffect(() => {
    // Load the external script for the calendar embed
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.type = 'text/javascript'
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            احجز استشارة مجانية
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            اختر الوقت المناسب لك واحجز استشارة مجانية لمناقشة كيفية تحقيق 12 ألف دولار خلال 3 أشهر
          </p>
        </motion.div>

        {/* Calendar Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <iframe 
            src="https://api.leadconnectorhq.com/widget/booking/7TW9uC6bUaDPRE4vIQ2I" 
            style={{ 
              width: '100%', 
              border: 'none', 
              overflow: 'hidden',
              minHeight: '600px'
            }} 
            scrolling="no" 
            id="7TW9uC6bUaDPRE4vIQ2I_1756144638591"
          ></iframe>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">استشارة فورية</h3>
              <p className="text-gray-300">احجز واحصل على رد خلال 24 ساعة</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">خطة مخصصة</h3>
              <p className="text-gray-300">استراتيجية مصممة خصيصاً لمشروعك</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">مجاناً تماماً</h3>
              <p className="text-gray-300">لا توجد أي رسوم أو التزامات مخفية</p>
            </div>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-center mt-16"
        >
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
          >
            ← العودة للصفحة الرئيسية
          </a>
        </motion.div>
      </div>
    </main>
  )
}