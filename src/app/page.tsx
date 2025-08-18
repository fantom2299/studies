import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="test">
      <header className="header">
        <button className="menu-toggle" id="menuToggle">
          <i className="fas fa-bars"></i>
        </button>
        <div className="logo">
          <a href="https://casino-sultan-kz.kz/">
            <img src="./Султан Казино - онлайн казино, регистрация и вход в Sultan Casino_files/logo.svg"
                 alt="Sultan Games 365" width="130" height="30"/>
          </a>
        </div>
        <div className="header-content">
          <ul className="desktop-nav">
            <li><a target="_blank" rel="nofollow"
                                 href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                                 className="nav-ref-link" data-ref="casino">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2"></circle>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"></circle>
                  <circle cx="12" cy="7" r="1" fill="currentColor"></circle>
                  <circle cx="16" cy="12" r="1" fill="currentColor"></circle>
                   <circle cx="12" cy="17" r="1" fill="currentColor"></circle>
                 <circle cx="8" cy="12" r="1" fill="currentColor"></circle>
              </svg>
              Казино</a></li>
            <li><a target="_blank" rel="nofollow"
                                 href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                                 className="nav-ref-link" data-ref="bonuses">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="6" width="16" height="4" stroke="currentColor" stroke-width="2"
                      stroke-linejoin="round"></rect>
                <rect x="6" y="10" width="12" height="12" stroke="currentColor" stroke-width="2"
                      stroke-linejoin="round"></rect>
                <path d="M12 6V22" stroke="currentColor" stroke-width="2"></path>
                <path
                  d="M12 6C13.1046 6 14 4.88071 14 3.5C14 2.11929 13.1046 1 12 1C10.8954 1 10 2.11929 10 3.5C10 4.88071 10.8954 6 12 6Z"
                  stroke="currentColor" stroke-width="2"></path>
              </svg>
              Бонусы</a></li>
            <li><a target="_blank" rel="nofollow"
                                 href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                                 className="nav-ref-link" data-ref="slots">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"></rect>
                <rect x="6" y="8" width="4" height="4" rx="1" fill="currentColor"></rect>
                <rect x="12" y="8" width="4" height="4" rx="1" fill="currentColor"></rect>
                <rect x="6" y="14" width="4" height="4" rx="1" fill="currentColor"></rect>
                <rect x="12" y="14" width="4" height="4" rx="1" fill="currentColor"></rect>
                <path d="M18 8H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M18 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                <path d="M18 16H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
              </svg>
              Слоты</a></li>
            <li><a target="_blank" rel="nofollow"
                                 href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                                 className="nav-ref-link" data-ref="live">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12L22 6V18L16 12Z" fill="currentColor"></path>
                <rect x="2" y="6" width="14" height="12" rx="1" stroke="currentColor" stroke-width="2"></rect>
                <circle cx="9" cy="12" r="2" fill="currentColor"></circle>
              </svg>
              Live Ставки</a></li>
            <li><a target="_blank" rel="nofollow"
                                 href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                                 className="nav-ref-link" data-ref="aviator">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 16L11 8L9 3L15 5L19 1L21 7L16 9L20 16L15 14L12 21L10 13L3 16Z" stroke="currentColor"
                      stroke-width="2" stroke-linejoin="round"></path>
              </svg>
              Aviator</a></li>
            <li><a target="_blank" rel="nofollow"
                                 href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                                 className="nav-ref-link" data-ref="fast">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L4 14H11L11 22L20 10H13L13 2Z" stroke="currentColor" stroke-width="2"
                      stroke-linejoin="round"></path>
              </svg>
              Быстрые Игры</a></li>
          </ul>

          <div className="header-actions">

            <div className="user-actions">
              <a target="_blank" rel="nofollow"
                               href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                               className="login" id="loginBtn">Войти</a>
              <a target="_blank" rel="nofollow"
                               href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                               className="register" id="registerBtn">Регистрация</a>
            </div>
          </div>
        </div>

      </header>

       {/*Sidebar Menu */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <a href="https://casino-sultan-kz.kz/">

              <img src="./Султан Казино - онлайн казино, регистрация и вход в Sultan Casino_files/logo.svg"
                   alt="Sultan Games 365" width="130" height="30"/>
            </a>
          </div>
          <button className="close-btn" id="closeMenu">
            <i className="fas fa-times"></i>
          </button>
        </div>


        <ul id="primary-menu" className="sidebar-menu">
          <li id="menu-item-2893"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-22 current_page_item menu-item-2893">
            <a href="https://casino-sultan-kz.kz/" aria-current="page">Sultan Casino</a></li>
          <li id="menu-item-2894" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2894"><a
            href="https://casino-sultan-kz.kz/process-registracii/">Sultan casino регистрация</a></li>
          <li id="menu-item-2913" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2913"><a
            href="https://casino-sultan-kz.kz/vhod/">Султан казино вход</a></li>
          <li id="menu-item-2912" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2912"><a
            href="https://casino-sultan-kz.kz/promokod/">Sultan games промокод</a></li>
          <li id="menu-item-2914" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2914"><a
            href="https://casino-sultan-kz.kz/dostupnoe-zerkalo/">Султан казино рабочее зеркало</a></li>
          <li id="menu-item-2915" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2915"><a
            href="https://casino-sultan-kz.kz/app-sultan/">Султан казино скачать</a></li>
          <li id="menu-item-2929"
              className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2929"><a
            href="https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/">Султан казино слоты</a></li>
        </ul>
        <div className="language-selector">
          <i className="fas fa-globe"></i>
          <select>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>

        <a target="_blank" rel="nofollow"
                         href="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
                         className="support-link">
        <i className="fas fa-headset"></i> Служба поддержки 24/7
      </a>

      </div>

      {/*Overlay */}
      <div className="overlay" id="overlay"></div>
    </div>
  );
}
