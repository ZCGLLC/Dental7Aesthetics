import Image, { type ImageProps } from "next/image";
import { asset } from "@/lib/paths";

type SiteImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

/**
 * next/image does not reliably prepend basePath for unoptimized static export,
 * so we resolve public asset URLs ourselves for GitHub Pages.
 */
export function SiteImage({ src, alt, ...props }: SiteImageProps) {
  return <Image src={asset(src)} alt={alt} {...props} />;
}
