// export default function Header() {
//     return (
//         <header className="header">
//             <button className="menu-toggle" id="menuToggle">
//                 <i className="fas fa-bars"></i>
//             </button>
//             <div className="logo">
//                 <a href="https://casino-sultan-kz.kz/">
//                     <img src=""
//                          alt="Sultan Games 365" width="130" height="30"/>
//                 </a>
//             </div>
//             <div className="header-content">
//                 <ul className="desktop-nav">
//                     <li><a target="_blank" rel="nofollow"
//                            href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
//                            className="nav-ref-link" data-ref="casino">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></circle>
//                             <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"></circle>
//                             <circle cx="12" cy="7" r="1" fill="currentColor"></circle>
//                             <circle cx="16" cy="12" r="1" fill="currentColor"></circle>
//                             <circle cx="12" cy="17" r="1" fill="currentColor"></circle>
//                             <circle cx="8" cy="12" r="1" fill="currentColor"></circle>
//                         </svg>
//                         Казино</a></li>
//                     <li><a target="_blank" rel="nofollow"
//                            href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
//                            className="nav-ref-link" data-ref="bonuses">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <rect x="4" y="6" width="16" height="4" stroke="currentColor" stroke-width="2"
//                                   stroke-linejoin="round"></rect>
//                             <rect x="6" y="10" width="12" height="12" stroke="currentColor" stroke-width="2"
//                                   stroke-linejoin="round"></rect>
//                             <path d="M12 6V22" stroke="currentColor" stroke-width="2"></path>
//                             <path
//                                 d="M12 6C13.1046 6 14 4.88071 14 3.5C14 2.11929 13.1046 1 12 1C10.8954 1 10 2.11929 10 3.5C10 4.88071 10.8954 6 12 6Z"
//                                 stroke="currentColor" stroke-width="2"></path>
//                         </svg>
//                         Бонусы</a></li>
//                     <li><a target="_blank" rel="nofollow"
//                            href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
//                            className="nav-ref-link" data-ref="slots">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"></rect>
//                             <rect x="6" y="8" width="4" height="4" rx="1" fill="currentColor"></rect>
//                             <rect x="12" y="8" width="4" height="4" rx="1" fill="currentColor"></rect>
//                             <rect x="6" y="14" width="4" height="4" rx="1" fill="currentColor"></rect>
//                             <rect x="12" y="14" width="4" height="4" rx="1" fill="currentColor"></rect>
//                             <path d="M18 8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
//                             <path d="M18 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
//                             <path d="M18 16H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
//                         </svg>
//                         Слоты</a></li>
//                     <li><a target="_blank" rel="nofollow"
//                            href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
//                            className="nav-ref-link" data-ref="live">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M16 12L22 6V18L16 12Z" fill="currentColor"></path>
//                             <rect x="2" y="6" width="14" height="12" rx="1" stroke="currentColor" stroke-width="2"></rect>
//                             <circle cx="9" cy="12" r="2" fill="currentColor"></circle>
//                         </svg>
//                         Live Ставки</a></li>
//                     <li><a target="_blank" rel="nofollow"
//                            href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
//                            className="nav-ref-link" data-ref="aviator">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M3 16L11 8L9 3L15 5L19 1L21 7L16 9L20 16L15 14L12 21L10 13L3 16Z" stroke="currentColor"
//                                   stroke-width="2" stroke-linejoin="round"></path>
//                         </svg>
//                         Aviator</a></li>
//                     <li><a target="_blank" rel="nofollow"
//                            href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
//                            className="nav-ref-link" data-ref="fast">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M13 2L4 14H11L11 22L20 10H13L13 2Z" stroke="currentColor" stroke-width="2"
//                                   stroke-linejoin="round"></path>
//                         </svg>
//                         Быстрые Игры</a></li>
//                 </ul>
//
//                 <div className="header-actions">
//
//                     <div className="user-actions">
//                         <a target="_blank" rel="nofollow"
//                            href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
//                            className="login" id="loginBtn">Войти</a>
//                         <a target="_blank" rel="nofollow"
//                            href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
//                            className="register" id="registerBtn">Регистрация</a>
//                     </div>
//                 </div>
//             </div>
//
//         </header>


'use client'

import { useEffect, useState, useCallback } from "react";
import Sidebar from "@/components/Sidebar/sidebar"
import Link from 'next/link';
import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import styles from '@/components/Headers/headers.module.css'; // Рекомендуется CSS Modules

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);


    const openMenu = useCallback(() => setIsOpen(true), []);
    const closeMenu = useCallback(() => setIsOpen(false), []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }, [isOpen]);

    const navItems = [
        {
            name: "Казино",
            href: "https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor"></circle>
                    <circle cx="12" cy="12" r="5" stroke="currentColor"></circle>
                    <circle cx="12" cy="7" r="1" fill="currentColor"></circle>
                    <circle cx="16" cy="12" r="1" fill="currentColor"></circle>
                    <circle cx="12" cy="17" r="1" fill="currentColor"></circle>
                    <circle cx="8" cy="12" r="1" fill="currentColor"></circle>
                </svg>
            )
        },
        {
            name: "Бонусы",
            href: "https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="6" width="16" height="4" stroke="currentColor" strokeWidth="2"
                          strokeLinejoin="round"></rect>
                    <rect x="6" y="10" width="12" height="12" stroke="currentColor" strokeWidth="2"
                          strokeLinejoin="round"></rect>
                    <path d="M12 6V22" stroke="currentColor" strokeWidth="2"></path>
                    <path
                        d="M12 6C13.1046 6 14 4.88071 14 3.5C14 2.11929 13.1046 1 12 1C10.8954 1 10 2.11929 10 3.5C10 4.88071 10.8954 6 12 6Z"
                        stroke="currentColor" strokeWidth="2"></path>
                </svg>
            )
        },
        {
            name: "Слоты",
            href: "https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"></rect>
                    <rect x="6" y="8" width="4" height="4" rx="1" fill="currentColor"></rect>
                    <rect x="12" y="8" width="4" height="4" rx="1" fill="currentColor"></rect>
                    <rect x="6" y="14" width="4" height="4" rx="1" fill="currentColor"></rect>
                    <rect x="12" y="14" width="4" height="4" rx="1" fill="currentColor"></rect>
                    <path d="M18 8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M18 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                    <path d="M18 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                </svg>
            )
        },
        {
            name: "Live Ставки",
            href: "https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 12L22 6V18L16 12Z" fill="currentColor"></path>
                    <rect x="2" y="6" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="2"></rect>
                    <circle cx="9" cy="12" r="2" fill="currentColor"></circle>
                </svg>
            )
        },
        {
            name: "Aviator",
            href: "https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 16L11 8L9 3L15 5L19 1L21 7L16 9L20 16L15 14L12 21L10 13L3 16Z" stroke="currentColor"
                          strokeWidth="2" strokeLinejoin="round"></path>
                </svg>
            )
        },
        {
            name: "Быстрые Игры",
            href: "https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ=",
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L4 14H11L11 22L20 10H13L13 2Z" stroke="currentColor" strokeWidth="2"
                          strokeLinejoin="round"></path>
                </svg>
            )
        },
    ];

    return (
        <>
            <header className={styles.header}>
                <button className={styles.menuToggle}
                        id="menuToggle"
                        onClick={openMenu}
                        aria-expanded={isOpen}
                        aria-controls="sidebar">
                    <FontAwesomeIcon icon={faBars}/>
                </button>

                <div className={styles.logo}>
                    <Link href="https://casino-sultan-kz.kz/">
                        <Image
                            src="/logo.svg"
                            alt="Sultan Games 365"
                            width={130}
                            height={30}
                            priority
                            className={styles.logoImage}
                        />
                    </Link>
                </div>



                <div className={styles.headerContent}>
                    <nav className={styles.desktopNav}>
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.href}
                                        target="_blank"
                                        rel="nofollow noopener noreferrer"
                                        className={styles.navRefLink}
                                        data-ref={item.name.toLowerCase()}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className={styles.headerActions}>
                        <div className={styles.userActions}>
                            <Link
                                href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className={styles.login}
                                id="loginBtn"
                            >
                                Войти
                            </Link>

                            <Link
                                href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                                target="_blank"
                                rel="nofollow noopener noreferrer"
                                className={styles.register}
                                id="registerBtn"
                            >
                                Регистрация
                            </Link>
                        </div>
                    </div>
                </div>

            </header>


            <Sidebar isOpen={isOpen} onClose={closeMenu} />
        </>



    );


}







