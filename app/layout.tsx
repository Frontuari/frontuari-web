import './globals.css';
import type { Metadata } from 'next';

// Aquí configuramos el SEO básico de tu Landing Page
export const metadata: Metadata = {
    title: 'Frontuari, C.A. | Innovación y Compromiso Tecnológico',
    description: 'Transformamos procesos operativos mediante soluciones de software corporativo a medida. Escalabilidad y eficiencia estructural.',
    icons: {
      icon: '/icon.png',
    },
};

import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            {/* El body adopta las fuentes y colores base definidos en globals.css y tailwind.config */}
            <body className="antialiased">
                {children}
                <FloatingWhatsApp />
            </body>
        </html>
    );
}