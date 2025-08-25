import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'سيستم طباعة الأموال - تحقيق 12 ألف دولار خلال 3 أشهر',
  description: 'للمدربين الذين يريدون تحقيق مبيعات مستقرة وثابتة. احصل على سيستم مؤتمت لجذب العملاء وتحويلهم لمشترين.',
  keywords: 'تدريب, مبيعات, تسويق, دخل, أرباح, مدربين',
  authors: [{ name: 'Agency Name' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'سيستم طباعة الأموال - تحقيق 12 ألف دولار خلال 3 أشهر',
    description: 'للمدربين الذين يريدون تحقيق مبيعات مستقرة وثابتة',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'سيستم طباعة الأموال',
    description: 'للمدربين الذين يريدون تحقيق مبيعات مستقرة وثابتة',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-40C0N3KN4Y"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-40C0N3KN4Y');
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&family=Tajawal:wght@200;300;400;500;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-arabic antialiased bg-white">
        {children}
      </body>
    </html>
  )
}