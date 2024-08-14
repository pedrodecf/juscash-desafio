import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import { Toaster } from './components/UI/Toaster'
import { AuthProvider } from './contexts/AuthContext'
import { LeadProvider } from './contexts/LeadContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JusCash - Gerenciador de Leads',
  description:
    'Um aplicativo de gerenciamento de leads que permite aos usuários organizar e acompanhar o status de seus leads, utilizando uma interface intuitiva e armazenamento local para persistência de dados.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthProvider>
          <LeadProvider>
            {children}
            <Toaster />
          </LeadProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
