import { BannerDesktop } from "./banner-desktop";
import { BannerMobile } from "./banner-mobile";

export function Banner() {
  return (
    <>
      {/* MOBILE (< md) */}
      <div className="md:hidden">
        <BannerMobile />
      </div>

      {/* DESKTOP (md+, le burger reste affiché jusqu'à lg via BannerMenu) */}
      <div className="hidden md:block">
        <BannerDesktop />
      </div>
    </>
  );
}
