// export default function Sidebar() {
//     return (
//
//         <div className="sidebar" id="sidebar">
//             <div className="sidebar-header">
//                 <div className="sidebar-logo">
//                     <a href="https://casino-sultan-kz.kz/">
//
//                         <img src="./Султан Казино - онлайн казино, регистрация и вход в Sultan Casino_files/logo.svg"
//                              alt="Sultan Games 365" width="130" height="30"/>
//                     </a>
//                 </div>
//                 <button className="close-btn" id="closeMenu">
//                     <i className="fas fa-times"></i>
//                 </button>
//             </div>
//
//
//             <ul id="primary-menu" className="sidebar-menu">
//                 <li id="menu-item-2893"
//                     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-22 current_page_item menu-item-2893">
//                     <a href="https://casino-sultan-kz.kz/" aria-current="page">Sultan Casino</a></li>
//                 <li id="menu-item-2894"
//                     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2894"><a
//                     href="https://casino-sultan-kz.kz/process-registracii/">Sultan casino регистрация</a></li>
//                 <li id="menu-item-2913"
//                     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2913"><a
//                     href="https://casino-sultan-kz.kz/vhod/">Султан казино вход</a></li>
//                 <li id="menu-item-2912"
//                     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2912"><a
//                     href="https://casino-sultan-kz.kz/promokod/">Sultan games промокод</a></li>
//                 <li id="menu-item-2914"
//                     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2914"><a
//                     href="https://casino-sultan-kz.kz/dostupnoe-zerkalo/">Султан казино рабочее зеркало</a></li>
//                 <li id="menu-item-2915"
//                     className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2915"><a
//                     href="https://casino-sultan-kz.kz/app-sultan/">Султан казино скачать</a></li>
//                 <li id="menu-item-2929"
//                     className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2929"><a
//                     href="https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/">Султан казино слоты</a></li>
//             </ul>
//             <div className="language-selector">
//                 <i className="fas fa-globe"></i>
//                 <select>
//                     <option value="ru">Русский</option>
//                     <option value="en">English</option>
//                 </select>
//             </div>
//
//             <a target="_blank" rel="nofollow"
//                href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
//                className="support-link">
//                 <i className="fas fa-headset"></i> Служба поддержки 24/7
//             </a>
//
//         </div>
//
//     // <div className="overlay" id="overlay"></div>
// )
// }


// 'use client'
//
// import React from "react";
//
//
// interface SidebarProps {
//     isOpen: boolean;
//     onClose: () => void;
// }
//
// export default function Sidebar({ isOpen, onClose }: SidebarProps) {
//     return (
//         <>
//             {/* Оверлей */}
//             <div
//                 className={`overlay ${isOpen ? "visible" : ""}`}
//                 onClick={onClose}
//             />
//
//             {/* Сайдбар */}
//             <div className={`sidebar ${isOpen ? "open" : ""}`} id="sidebar">
//                 <div className="sidebar-header">
//                     <div className="sidebar-logo">
//                         <a href="https://casino-sultan-kz.kz/">
//                             <img
//                                 src="/logo.svg"
//                                 alt="Sultan Games 365"
//                                 width={130}
//                                 height={30}
//                             />
//                         </a>
//                     </div>
//                     <button className="close-btn" onClick={onClose}>
//                         ✕
//                     </button>
//                 </div>
//
//                 <ul className="sidebar-menu">
//                     <li><a href="https://casino-sultan-kz.kz/">Sultan Casino</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/process-registracii/">Регистрация</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/vhod/">Вход</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/promokod/">Промокод</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/dostupnoe-zerkalo/">Зеркало</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/app-sultan/">Скачать</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/">Слоты</a></li>
//                 </ul>
//
//                 <div className="language-selector">
//                     🌐
//                     <select>
//                         <option value="ru">Русский</option>
//                         <option value="en">English</option>
//                     </select>
//                 </div>
//
//                 <a
//                     target="_blank"
//                     rel="nofollow"
//                     href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGx..."
//                     className="support-link"
//                 >
//                     🎧 Служба поддержки 24/7
//                 </a>
//             </div>
//         </>
//     );
// }


// 'use client';
//
// import React from 'react';
// import cls from './sidebar.module.css'; // ВАЖНО: импортируем модуль
//
// interface SidebarProps {
//     isOpen: boolean;
//     onClose: () => void;
// }
//
// export default function Sidebar({ isOpen, onClose }: SidebarProps) {
//     return (
//         <>
//             {/* Оверлей */}
//             <div
//                 className={`${cls.overlay} ${isOpen ? cls.visible : ''}`}
//                 onClick={onClose}
//                 aria-hidden={!isOpen}
//             />
//
//             {/* Сайдбар */}
//             <aside
//                 id="sidebar"
//                 className={`${cls.sidebar} ${isOpen ? cls.open : ''}`}
//                 role="dialog"
//                 aria-modal="true"
//                 aria-label="Меню навигации"
//             >
//                 <div className={cls.sidebarHeader}>
//                     <div className={cls.sidebarLogo}>
//                         <a href="https://casino-sultan-kz.kz/">
//                             <img src="/logo.svg" alt="Sultan Games 365" width={130} height={30} />
//                         </a>
//                     </div>
//                     <button className={cls.closeBtn} onClick={onClose} aria-label="Закрыть меню">
//                         ✕
//                     </button>
//                 </div>
//
//                 <ul className={cls.sidebarMenu}>
//                     <li><a href="https://casino-sultan-kz.kz/">Sultan Casino</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/process-registracii/">Sultan Casino регистрация</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/vhod/">Султан казино вход</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/promokod/">Sultan games промокод</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/dostupnoe-zerkalo/">Султан казино рабочее зеркало</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/app-sultan/">Султан казино скачать</a></li>
//                     <li><a href="https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/">Султан казино слоты</a></li>
//                 </ul>
//
//                 <div className={cls.languageSelector}>
//                     <span>🌐</span>
//                     <select>
//                         <option value="ru">Русский</option>
//                         <option value="en">English</option>
//                     </select>
//                 </div>
//
//                 {/*<a*/}
//                 {/*    target="_blank"*/}
//                 {/*    rel="nofollow noopener noreferrer"*/}
//                 {/*    href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="*/}
//                 {/*    className={cls.supportLink}*/}
//                 {/*>*/}
//                 {/*    🎧 Служба поддержки 24/7*/}
//                 {/*</a>*/}
//             </aside>
//         </>
//     );
// }


// components/Sidebar.tsx
'use client';

import {useSidebar} from '@/Context/SidebarContext';
import styles from '@/components/Sidebar/sidebar.module.css';

export default function Sidebar() {
    const {isOpen, closeSidebar} = useSidebar();

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={closeSidebar}
                    aria-hidden="true"
                />
            )}

            {/* Sidebar */}
            <aside
                className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
                aria-hidden={!isOpen}
            >

                <div className={styles.sidebarHeader}>
                    <div className={styles.sidebarLogo}>
                        <a href="https://casino-sultan-kz.kz/">
                            <img src="/logo.svg" alt="Sultan Games 365" width={130} height={30}/>
                        </a>
                    </div>

                    <button
                        className={styles.closeButton}
                        onClick={closeSidebar}
                        aria-label="Закрыть меню"
                    >
                        ×
                    </button>

                </div>


                <nav className={styles.sidebarNav}>
                    <ul className={styles.sidebarMenu}>
                        <li><a href="https://casino-sultan-kz.kz/">Sultan Casino</a></li>
                        <li><a href="https://casino-sultan-kz.kz/process-registracii/">Sultan Casino регистрация</a>
                        </li>
                        <li><a href="https://casino-sultan-kz.kz/vhod/">Султан казино вход</a></li>
                        <li><a href="https://casino-sultan-kz.kz/promokod/">Sultan games промокод</a></li>
                        <li><a href="https://casino-sultan-kz.kz/dostupnoe-zerkalo/">Султан казино рабочее зеркало</a>
                        </li>
                        <li><a href="https://casino-sultan-kz.kz/app-sultan/">Султан казино скачать</a></li>
                        <li><a href="https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/">Султан казино слоты</a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
}