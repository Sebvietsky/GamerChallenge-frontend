import { BannerDesktop } from "./banner-desktop";
import { BannerMobile } from "./banner-mobile";

export function Banner() {
  return (
    <>
      {/* MOBILE */}
      <div className="lg:hidden">
        <BannerMobile />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <BannerDesktop />
      </div>
    </>
  );
}
