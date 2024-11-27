import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import Marketplace from '@/components/Marketplace/marketplace';

const MarketPlace = () =>{
    return(
        <main className="flex flex-col min-h-screen">
            <Navbar />
            <Marketplace />
            <Footer />

        </main>
    )
}

export default MarketPlace;