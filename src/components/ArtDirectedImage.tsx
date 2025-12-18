// ref: https://nextjs.org/docs/app/api-reference/components/image#art-direction

import type { ImgHTMLAttributes } from "react";

import { getImageProps } from "next/image";

import { twBreakpoints, type TwBreakpoint } from "@/constants/breakpoints";
import { cn } from "@/lib/utils";
import type { Prettify } from "@/types/global";

type QueryType = "min" | "max";

type ImageProps = {
  src: string;
  width: number;
  height: number;
  quality?: number;
};

type BreakpointSource = {
  breakpoint: TwBreakpoint;
  type?: QueryType;
} & ImageProps;

type ArtDirectedImage = {
  alt: string;
  sizes?: string;
  defaultImg: ImageProps;
  sources?: BreakpointSource[];
} & ImgHTMLAttributes<HTMLImageElement>;

type ArtDirectedImageProps = Prettify<ArtDirectedImage>;

const ArtDirectedImage = ({
  alt,
  sizes = "100vw",
  defaultImg,
  sources = [],
  ...imgProps
}: ArtDirectedImageProps) => {
  // default image
  const { props: defaultImgProps } = getImageProps({
    ...defaultImg,
    alt,
    sizes,
  });

  // art direction sources
  const sourceProps = sources.map(s => {
    const { type = "min", breakpoint, src, width, height, quality } = s;

    const breakpointValue = twBreakpoints[breakpoint];
    const media = `(${type}-width: ${breakpointValue})`;

    const { props } = getImageProps({
      alt,
      sizes,
      src,
      width,
      height,
      quality,
    });

    return { media, srcSet: props.srcSet };
  });

  return (
    <picture>
      {sourceProps.map((sp, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <source key={index} media={sp.media} srcSet={sp.srcSet} />
      ))}

      <img
        {...defaultImgProps}
        {...imgProps}
        alt={alt}
        className={cn("block w-full h-auto object-cover", imgProps.className)}
      />
    </picture>
  );
};

export default ArtDirectedImage;
