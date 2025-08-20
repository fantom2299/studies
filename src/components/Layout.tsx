// components/Layout.tsx
'use client';

import {useSidebar} from '@/Context/SidebarContext';
import Sidebar from '@/components/Sidebar/sidebar';
import BannerSection from '@/components/BannerSection/BannerSection';
import styles from '@/components/Layout.module.css';


interface LayoutProps {
  children: React.ReactNode;
  showBanner?: boolean;
  bannerProps?: {
    title: string;
    subtitle?: string;
    imageUrl: string;
    imageAlt: string;
    ctaText?: string;
    ctaLink?: string;
    theme?: 'light' | 'dark';
    height?: 'small' | 'medium' | 'large' | 'full';
  };
}


export default function Layout({
                                 children,
                                 showBanner = false,
                                 bannerProps
                               }: LayoutProps)  {
  const {isOpen, sidebarWidth} = useSidebar();

  return (
    <div className={styles.container}>
      <Sidebar/>

      <main
        className={`${styles.mainContent} ${isOpen ? styles.sidebarOpen : ''}`}
        style={isOpen ? {
          width: `calc(100% - ${sidebarWidth}px)`,
          marginLeft: `${sidebarWidth}px`
        } : {}}
      >

        {/* Баннер секция */}
        {showBanner && bannerProps && (
          <div className={styles.bannerContainer}>
            <BannerSection {...bannerProps} />
          </div>
        )}

        {/* Основной контент */}
        <div className={styles.contentWrapper}>
          {children}
        </div>

      </main>
    </div>
  );
}