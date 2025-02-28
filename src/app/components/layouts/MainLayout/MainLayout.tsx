'use client'
import { useState, useCallback } from 'react'
import Navbar from '../../Navbar'
import MobileNavbar from '../../MobileNavbar/MobileNavbar'
import Footer from '../../Footer'
import { ReactNode } from 'react';
import '../../style.css'

const MainLayout = ({ children }: { children: ReactNode }) => {
    const [mobileMenu, setMobileMenu] = useState(false)
    const handleDismissMobileMenu = useCallback(() => {
        setMobileMenu(false)
    }, [setMobileMenu])

    const handlePresentMobileMenu = useCallback(() => {
        setMobileMenu(true)
    }, [setMobileMenu])

    return (
      <div className="herosection">
        <Navbar
          onPresentMobileMenu={handlePresentMobileMenu}
          onDismissMobileMenu={handleDismissMobileMenu}
          visible={mobileMenu}
        />
        <MobileNavbar
          visible={mobileMenu}
          onDismissMobileMenu={handleDismissMobileMenu}
        />
        {children}
        <div>
          <Footer />
        </div>
      </div>
    );
}

export default MainLayout