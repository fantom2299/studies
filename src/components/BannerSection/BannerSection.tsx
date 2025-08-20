// components/BannerSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BannerSection.module.css';

interface BannerSectionProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  overlay?: boolean;
  theme?: 'light' | 'dark';
  height?: 'small' | 'medium' | 'large' | 'full';
}

export default function BannerSection({
                                        title,
                                        subtitle,
                                        imageUrl,
                                        imageAlt,
                                        ctaText,
                                        ctaLink,
                                        overlay = true,
                                        theme = 'dark',
                                        height = 'medium'
                                      }: BannerSectionProps) {
  return (
    <section className={`${styles.banner} ${styles[height]} ${styles[theme]}`}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className={styles.image}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        />

        {overlay && <div className={styles.overlay} />}
      </div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        {ctaText && ctaLink && (
          <div className={styles.ctaContainer}>
            <Link href={ctaLink} className={styles.ctaButton}>
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}