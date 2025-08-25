'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  PlayCircleIcon, 
  ChevronDownIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowPathIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ClockIcon,
  TrophyIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  ExclamationTriangleIcon,
  FaceSmileIcon,
  HeartIcon,
  BoltIcon
} from '@heroicons/react/24/outline'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 }
}

// VSL Video Component
const VSLVideo = () => {
  const videoRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(videoRef, { once: true })

  return (
    <motion.div
      ref={videoRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-5xl mx-auto"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
        <iframe
          src="https://www.youtube.com/embed/O3sEzjK1jG0?si=6r_6rj6x0XUkzFOl&rel=0&showinfo=0&modestbranding=1"
          title="سيستم طباعة الأموال - تحقيق 12 ألف دولار خلال 3 أشهر"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </motion.div>
  )
}

// CTA Button Component
const CTAButton = ({ children, className = "", variant = "primary", ...props }: any) => {
  const handleClick = () => {
    window.open('/apply', '_blank')
  }

  return (
    <motion.button
      className={`
        group relative overflow-hidden font-bold py-4 px-8 rounded-xl transition-all duration-300 
        ${variant === "primary" 
          ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg hover:shadow-blue-500/25 hover:shadow-2xl" 
          : "bg-gray-800 text-white border border-gray-700 hover:border-blue-500 shadow-md hover:shadow-xl"
        }
        ${className}
      `}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  )
}

// Hero Section
const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 pt-32">
      {/* Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"
      />
      <div className="absolute inset-0 bg-pattern-dots opacity-10"></div>
      
      {/* Floating particles */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 max-w-6xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="inline-block bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-full px-8 py-4 text-lg font-medium text-gray-200 shadow-2xl mt-8"
            style={{
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2), 0 0 20px rgba(59, 130, 246, 0.1)'
            }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  '0 0 0px rgba(59, 130, 246, 0)',
                  '0 0 10px rgba(59, 130, 246, 0.3)',
                  '0 0 0px rgba(59, 130, 246, 0)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              للمدربين الذين يريدون تحقيق مبيعات مستقرة و ثابتة
            </motion.span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold"
            style={{ lineHeight: '1.8' }}
          >
            احصل على سيستم{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              طباعة الاموال
            </span>
            <br />
            لتحقيق{" "}
            <motion.span
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              12 الف دولار
            </motion.span>
            <br />
            خلال 3 اشهر
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            انسخ استراتيجتنا المجربة التي تحقق 13 ضعف من خلال بناء سيستم فانل مؤتمت 
            يجذب عملاءك ويحولهم لمشترين بشكل مستمر و ثابت
          </motion.p>

          {/* VSL Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="py-8"
          >
            <VSLVideo />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="pt-6"
          >
            <CTAButton className="text-xl md:text-2xl py-6 px-12 animate-pulse">
              <RocketLaunchIcon className="w-8 h-8" />
              احجز استشارة الان
            </CTAButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Problem Section
const ProblemsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const problems = [
    {
      content: "انت تجلس تكتب محتوى قيم وتتفاعل مع متابعينك، وبالنهاية لا أحد يشتري منك تحس إنك تعبت على الفاضي وكل يوم تقول: يمكن بكرة يتحسن الوضع بس ما يتحسن.",
      icon: <ChatBubbleBottomCenterTextIcon className="w-12 h-12" />,
      color: "from-red-500 to-orange-500"
    },
    {
      content: "انت ممكن جربت تعمل إعلان ثم صرفت و انتظرت تحمست بس بدون نتيجة النتيجة وحتى لو جاك أحد يسأل، يختفي لما يسمع السعر. تحس إنك تحارب عشان تقنع الناس بقيمة الشي اللي تعبت عليه",
      icon: <CurrencyDollarIcon className="w-12 h-12" />,
      color: "from-orange-500 to-red-500"
    },
    {
      content: "الضغط النفسي؟ إنك كل يوم تحس لازم تظهر، لازم تبيع، لازم تثبت نفسك. وكل هذا بدون خطة واضحة، بدون دخل ثابت، وبدون فريق يدعمك.",
      icon: <ExclamationTriangleIcon className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      content: "يمكن حتى فكرت تستسلم أو ترجع لوظيفة تكرهها و أنت تعرف إنك ما خلقت تمشي في طابور أنت تبغى تبني شي أكبر.",
      icon: <FaceSmileIcon className="w-12 h-12" />,
      color: "from-gray-500 to-gray-600"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            المشاكل التي تواجها انت كمدرب
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-800 hover:border-gray-700">
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-r ${problem.color} text-white flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {problem.icon}
                  </motion.div>
                  <div className="flex-1">
                    <p className="text-lg text-gray-300 leading-relaxed">{problem.content}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto border border-gray-800">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              لا تضيع وقت أكثر. وخليني أشاركك السيستم اللي خلّى مدربين عاديين يضاعفو مبيعاتهم
            </p>
            
            <CTAButton className="text-xl py-6 px-12">
              <TrophyIcon className="w-8 h-8" />
              احجز استشارة الان
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Solutions Section
const SolutionsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const solutions = [
    {
      title: "تبني سيستم يجذب العملاء بدل ما تطاردهم",
      content: "انتبه المحتوى لن يزيد مبيعاتك في طريقة تخلي العميل الصح هو اللي يوصلك جاهز و هي بناء فانل مؤتمت يوصل رسالتك للعميل الصح حتى وأنت نائم.",
      icon: <UserGroupIcon className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "تعلّم كيف تقدم عرض فعلاً يقنع",
      content: "مو كل الناس اللي ترفض، معناها ما تبغى كثير منهم بس ما فهموا قيمة اللي تقدمه. لما تعرف كيف توصل العرض بأسلوب ذكي، طبيعي المبيعات تبدأ تضاعف.",
      icon: <LightBulbIcon className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "توقف عن العشوائية، و احصل على نظام واضح",
      content: "الفرق بين مدرب يكسب 500$ بالشهر، وآخر يحقق 10,000$ مو في المهارة، بل في الخطة لازم يكون عندك مسار واضح: كيف تجذب، كيف تقدّم، وكيف تقفل البيع.",
      icon: <ArrowPathIcon className="w-12 h-12" />,
      color: "from-purple-500 to-violet-500"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            الحل ليس العمل بجهد اكبر الحل ببناء السيستم
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <motion.div
                    className={`p-4 rounded-xl bg-gradient-to-r ${solution.color} text-white flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {solution.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      الحل {index + 1}: {solution.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {solution.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl">🚨</span>
              <h3 className="text-2xl font-bold text-white">CTA واضح:</h3>
            </div>
            <p className="text-xl font-bold text-white mb-8">
              لا تقعد تدور كل يوم على حل جديد لن يفيدك و ابدأ في طريق مجرب، واضح، خطواته محددة.
            </p>
            
            <CTAButton variant="secondary" className="text-xl py-6 px-12 bg-white text-red-600 hover:bg-gray-100">
              <StarIcon className="w-8 h-8" />
              احجز استشارة الان
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Delivery Section
const DeliverySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const deliveries = [
    {
      title: "تسليم 1: سيستم مؤتمت لجذب العملاء",
      content: "نجهز لك فانل احترافي يجذب العملاء بدل ما تطاردهم يشتغل 24/7، يوصل رسالتك ويهيئهم للشراء، حتى وأنت مشغول بحياتك.",
      icon: <BoltIcon className="w-16 h-16" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "تسليم 2: عرض بيع مُقنع يبني ثقة ويقفل",
      content: "نساعدك تكتب عرضك التدريبي بطريقة تلامس عقل وقلب العميل و النتيجة مبيعات أكثر واعتراضات أقل",
      icon: <HeartIcon className="w-16 h-16" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "خطة محتوى ذكية تخدم الفانل",
      content: "ما حنخليك تتعب كل يوم تفكر إيش تنزل نعطيك خطة محتوى بسيطة، تخدم سيستم البيع، وتوفر وقتك.",
      icon: <LightBulbIcon className="w-16 h-16" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "دعم مباشر وخطوات تنفيذ واضحة",
      content: "مو بس نعلمك نمشي معك خطوة بخطوة. من الألف للياء",
      icon: <UserGroupIcon className="w-16 h-16" />,
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            هذا بالضبط اللي بنقدمه لك خطوة بخطوة:
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {deliveries.map((delivery, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <div className="h-full bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500">
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${delivery.color} mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {delivery.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                  {delivery.title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {delivery.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-900 rounded-2xl p-8 max-w-3xl mx-auto border border-gray-800">
            <p className="text-xl text-white font-bold mb-8">
              إنت مش بحاجة تتعب سنين عشان توصل لدخل ثابت
              أنت بس بحاجة سيستم مجرب وشخص يرشدك فيه
            </p>
            
            <CTAButton className="text-xl py-6 px-12">
              <RocketLaunchIcon className="w-8 h-8" />
              احجز استشارة الان
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Transformation Section
const TransformationSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const transformations = [
    {
      title: "تودّع عدم الاستقرار وتعيش براحة",
      content: "بدل ما كل شهر تبدأ من الصفر، السيستم يشتغل ويولّد عملاء جدد باستمرار يعني مبيعات متوقعة، دخل ثابت، وراحة نفسية ما تقدر تشتريها بالفلوس.",
      icon: "🔹"
    },
    {
      title: "تبني مشروع تدريبي حقيقي ليس مجرد 'محاولات'",
      content: "كثير مدربين عندهم شغف بس ما عندهم هيكل واضح. نحن نعطيك البنية اللي تثبت أقدامك، وتخليك تبني براند تدريبي يطول النفس.",
      icon: "🔹"
    },
    {
      title: "تتحول من التسويق اليدوي لتسويق ذكي ومؤتمت",
      content: "ما عاد لازم تسوي كل شيء بنفسك ما رح تعيش حياتك قدام الشاشة تاخذ وقتك، تسافر، ترتاح، وأنت عارف إن فيه سيستم يشتغل ويجيب لك دخل.",
      icon: "🔹"
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            كيف حياتك حتتغير بعد ما تطبق السيستم:
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-black rounded-2xl p-8 border border-gray-800 hover:border-blue-600 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="text-3xl flex-shrink-0">{item.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-white mb-8">
              إذا كنت جاد تبدأ رحلتك نحو مشروع تدريبي مستقر
            </p>
            
            <CTAButton variant="secondary" className="text-xl py-6 px-12 bg-white text-blue-600 hover:bg-gray-100">
              <StarIcon className="w-8 h-8" />
              احجز استشارة الان
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Decision Section
const DecisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            الخيار بين يديك الآن
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800 mb-8">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              إذا كنت مدرب تطمح يكون عندك دخل ثابت، ونظام شغال حتى وانت نايم
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              إذا تعبت من محاولات التسويق العشوائية، ومن انتظار العملاء، ومن الشعور إنك تستحق أكثر
            </p>
            <p className="text-xl text-white font-bold">
              فـهذا السيستم مصمم خصيصًا لك.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 shadow-xl border border-gray-800 mb-8">
            <p className="text-xl text-white font-bold mb-6">
              ما في أسرار ولا لف ودوران.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              خطوات واضحة، نشتغل فيها سوا، خطوة بخطوة.
            </p>
          </div>

          <div className="bg-red-900/50 rounded-2xl p-8 shadow-xl border border-red-800 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              لكن خليني أكون صريح معك:
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              إذا تجاهلت هذا العرض؟
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              رح ترجع لنفس الدوامة تكتب محتوى، تنشر، تنتظر وما في مبيعات.
              أو تشتغل بجهد كبير، وتاخذ القليل.
            </p>
          </div>

          <div className="text-center">
            <CTAButton className="text-2xl py-8 px-16">
              <RocketLaunchIcon className="w-10 h-10" />
              احجز استشارة الان
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const faqs = [
    {
      question: "هل لازم يكون عندي عدد كبير من المتابعين؟",
      answer: "لا. السيستم مبني أساسًا عالجودة مش الكمية. حتى لو عندك 300 متابع بس، نقدر نحولهم لعملاء، لما تكون رسالتك واضحة والسيستم شغال صح."
    },
    {
      question: "كم لازم أكون خبير حتى أطبق السيستم؟",
      answer: "ما تحتاج تكون خبير. أنت تحتاج فقط شغف حقيقي، وخدمة حقيقية، والباقي علينا. نعلمك كل خطوة وندعمك من أول يوم."
    },
    {
      question: "هل أحتاج إعلانات مدفوعة؟",
      answer: "في البداية؟ لا. السيستم فيه طرق عضوية توصل لنتائج ممتازة بدون ما تدفع ريال. ولو حبيت توسّع بالإعلانات، نعلمك كيف تخليها مربحة."
    },
    {
      question: "كم من الوقت يأخذ بناء السيستم؟",
      answer: "عادةً من 14 إلى 21 يوم، وبنعملها سوا خطوة بخطوة. مو محتاج تقعد شهور ولا تطلع لوحدك."
    },
    {
      question: "هل السيستم يشتغل لأي نوع من البرامج التدريبية؟",
      answer: "نعم. السيستم مناسب للكوتشز، والاستشاريين، والموجهين في جميع المجالات. لكن نجاحك مرهون بتطبيقك."
    },
    {
      question: "هل في دعم أو تواصل مباشر؟",
      answer: "أكيد. عندك دعم مباشر، ومجتمع خاص للمشتركين، تقدر تسأل وتاخذ ملاحظات فورية."
    },
    {
      question: "ما هو أول شيء لازم أعمله الآن؟",
      answer: "بس احجز مقعدك. بعد التسجيل، بتوصلك التفاصيل مباشرة ونبدأ الرحلة سوا."
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            أسئلة شائعة
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-black rounded-xl shadow-lg border border-gray-800 overflow-hidden"
            >
              <motion.button
                className="w-full p-6 text-right flex justify-between items-center hover:bg-gray-900 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3 className="text-xl font-bold text-white flex-1">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="w-6 h-6 text-gray-400" />
                </motion.div>
              </motion.button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
              >
                <div className="px-6 pb-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-black rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border border-gray-800">
            <h3 className="text-3xl font-bold text-white mb-4">
              💬 لسّا عندك سؤال؟
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              راسلنا مباشرة، وإحنا معك خطوة بخطوة.
            </p>
            <CTAButton className="text-xl py-6 px-12">
              <ChatBubbleBottomCenterTextIcon className="w-8 h-8" />
              احجز استشارة الان
            </CTAButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Modern Header Component
const ModernHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="flex justify-center pt-6">
        <motion.div
          className={`
            bg-black/80 backdrop-blur-xl border border-gray-800/50 shadow-2xl
            transition-all duration-500 ease-out
            ${isScrolled 
              ? 'rounded-full px-8 py-4 mx-4' 
              : 'rounded-3xl px-16 py-6 mx-6'
            }
          `}
          animate={{
            scale: isScrolled ? 0.95 : 1,
            y: isScrolled ? 0 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex items-center justify-between gap-12">
            <div className="flex items-center gap-8">
              <motion.a
                href="#hero"
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                الرئيسية
              </motion.a>
              <motion.a
                href="#problems"
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                المشاكل
              </motion.a>
              <motion.a
                href="#solutions"
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                الحلول
              </motion.a>
              <motion.a
                href="#delivery"
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                التسليم
              </motion.a>
              <motion.a
                href="#faq"
                className="text-white/90 hover:text-white transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                الأسئلة
              </motion.a>
            </div>
            
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('/apply', '_blank')}
            >
              احجز استشارة الان
            </motion.button>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  )
}

// Main Page Component
export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <main className="overflow-x-hidden bg-black">
      <ModernHeader />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-40 origin-left"
        style={{ scaleX }}
      />
      
      <div id="hero">
        <HeroSection />
      </div>
      <div id="problems">
        <ProblemsSection />
      </div>
      <div id="solutions">
        <SolutionsSection />
      </div>
      <div id="delivery">
        <DeliverySection />
      </div>
      <TransformationSection />
      <DecisionSection />
      <div id="faq">
        <FAQSection />
      </div>
      
      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              ابدأ رحلتك اليوم
            </h2>
            <p className="text-2xl mb-12 text-gray-300">
              لا تدع هذه الفرصة تفوتك. انضم لمئات المدربين الذين حققوا أحلامهم
            </p>
            <CTAButton className="text-2xl py-8 px-16">
              <RocketLaunchIcon className="w-10 h-10" />
              احجز استشارة الان
            </CTAButton>
          </motion.div>
        </div>
      </section>
    </main>
  )
}