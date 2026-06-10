"use client";

import { Loader } from "@/components/ui/loader";
import { pageLoaderStyles as styles } from "@/styles/page-loader.styles";

export function PageLoader() {
  return (
    <div className={styles.wrapper}>
      <Loader variant="orbiting-spheres" size="xl" />
    </div>
  );
}
