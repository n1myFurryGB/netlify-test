import React from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers } from '@/components/Provider';

export const metadata = {
    title: "Flexibble",
    description: "Showcase and discover remarkable developer projects",
  };

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <Providers>
            <html lang="en">
                <body>
                    {/* <TestNav /> */}
                    <main>
                        {children}
                    </main>
                    <Footer />
                </body>
            </html>
        </Providers>
    )
}