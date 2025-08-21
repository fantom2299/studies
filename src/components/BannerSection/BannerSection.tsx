// // components/BannerSection.tsx
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import styles from './BannerSection.module.css';
//
// interface BannerSectionProps {
//     title?: string;
//     subtitle?: string;
//     imageUrl: string;
//     imageAlt: string;
//     ctaText?: string;
//     ctaLink?: string;
//     overlay?: boolean;
//     theme?: 'light' | 'dark';
//     height?: 'small' | 'medium' | 'large' | 'full';
//     // Новые пропсы для вашего контента
//     depositAmount?: string;
//     bonusAmount?: string;
//     freeSpins?: string;
// }
//
// export default function BannerSection({
//                                           title,
//                                           subtitle,
//                                           imageUrl,
//                                           imageAlt,
//                                           ctaText,
//                                           ctaLink,
//                                           overlay = true,
//                                           theme = 'dark',
//                                           height = 'medium',
//                                           // Новые параметры
//                                           depositAmount = "5 000 Руб",
//                                           bonusAmount = "9000 Руб",
//                                           freeSpins = "100 фриспинов"
//                                       }: BannerSectionProps) {
//     return (
//         <section className={`${styles.banner} ${styles[height]} ${styles[theme]}`}>
//             <div className={styles.imageContainer}>
//                 <Image
//                     src={imageUrl}
//                     alt={imageAlt}
//                     fill
//                     className={styles.image}
//                     priority
//                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
//                 />
//
//                 {overlay && <div className={styles.overlay} />}
//             </div>
//
//             <div className={styles.content}>
//                 {/* Стандартный контент */}
//                 {(title || subtitle) && (
//                     <div className={styles.textContainer}>
//                         {title && <h1 className={styles.title}>{title}</h1>}
//                         {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
//                     </div>
//                 )}
//
//                 {/* Специальный контент для казино */}
//                 <div className={styles.heroContent}>
//                     <p className={styles.heroContentTitle}>
//                         Первый депозит<br />{depositAmount}
//                     </p>
//                     <p className={styles.heroContentText}>
//                         ПОЛУЧИ<br />{bonusAmount} + {freeSpins}
//                     </p>
//                 </div>
//
//                 {/* Кнопка CTA */}
//                 {ctaText && ctaLink && (
//                     <div className={styles.ctaContainer}>
//                         <Link
//                             href={ctaLink}
//                             className={styles.ctaButton}
//                             target="_blank"
//                             rel="nofollow noopener noreferrer"
//                         >
//                             {ctaText}
//                         </Link>
//                     </div>
//                 )}
//             </div>
//         </section>
//     );
// }



// components/BannerSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BannerSection.module.css';

interface BannerSectionProps {
    title?: string;
    subtitle?: string;
    imageUrl: string;
    imageAlt: string;
    overlayImageUrl?: string; // Новая пропса для второго изображения
    overlayImageAlt?: string;
    overlayPosition?: 'center' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    ctaText?: string;
    ctaLink?: string;
    overlay?: boolean;
    theme?: 'light' | 'dark';
    height?: 'small' | 'medium' | 'large' | 'full';
    depositAmount?: string;
    bonusAmount?: string;
    freeSpins?: string;
}

export default function BannerSection({
                                          title,
                                          subtitle,
                                          imageUrl,
                                          imageAlt,
                                          overlayImageUrl,
                                          overlayImageAlt = "Overlay image",
                                          overlayPosition = 'center',
                                          ctaText,
                                          ctaLink,
                                          overlay = true,
                                          theme = 'dark',
                                          height = 'medium',
                                          depositAmount = "5 000 Руб",
                                          bonusAmount = "9000 Руб",
                                          freeSpins = "100 фриспинов"
                                      }: BannerSectionProps) {
    return (
        <section className={`${styles.banner} ${styles[height]} ${styles[theme]}`}>
            <div className={styles.imageContainer}>
                {/* Основное фоновое изображение */}
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className={styles.backgroundImage}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1400px) 80vw, 1400px"
                />

                {/* Второе изображение поверх */}
                {overlayImageUrl && (
                    <div className={`${styles.overlayImageContainer} ${styles[overlayPosition]}`}>
                        <Image
                            src={overlayImageUrl}
                            alt={overlayImageAlt}
                            width={800}
                            height={408}
                            className={styles.overlayImage}
                        />
                    </div>
                )}

                {overlay && <div className={styles.overlay} />}
            </div>

            <div className={styles.content}>
                {/* Контент */}
                <div className={styles.heroContent}>
                    <p className={styles.heroContentTitle}>
                        Первый депозит<br />{depositAmount}
                    </p>
                    <p className={styles.heroContentText}>
                        ПОЛУЧИ<br />{bonusAmount} + {freeSpins}
                    </p>
                </div>

                {ctaText && ctaLink && (
                    <div className={styles.ctaContainer}>
                        <Link
                            href={ctaLink}
                            className={styles.ctaButton}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                        >
                            {ctaText}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}