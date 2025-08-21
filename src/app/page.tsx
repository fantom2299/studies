import Headers from "@/components/Headers/header";
import BannerSection from "@/components/BannerSection/BannerSection";



export default function Home() {
  return (
    <>
      <Headers />
        {/*<BannerSection*/}
        {/*    imageUrl="/images/header-banner.png"*/}
        {/*    imageAlt="Casino Banner"*/}
        {/*    depositAmount="5 000 Руб"*/}
        {/*    bonusAmount="9000 Руб"*/}
        {/*    freeSpins="100 фриспинов"*/}
        {/*    ctaText="Внести депозит"*/}
        {/*    ctaLink="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="*/}
        {/*    theme="dark"*/}
        {/*    height="large"*/}
        {/*/>*/}

      <BannerSection
          imageUrl="/images/header-banner.png"
          imageAlt="Casino Background"
          overlayImageUrl="/images/header-banner-img.png"
          overlayImageAlt="Bonus Badge"
          overlayPosition="top-right"
          depositAmount="5 000 Руб"
          bonusAmount="9000 Руб"
          freeSpins="100 фриспинов"
          ctaText="Внести депозит"
          ctaLink="https://casino-sultan-kz.kz/goto/your-link"
          theme="dark"
          height="large"
      />

    </>
  );
}
