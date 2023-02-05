import NextImage from "next/image";
import { chakra } from "@chakra-ui/react";

const Image = chakra(NextImage, {
  shouldForwardProp: prop =>
    [
      "src",
      "alt",
      "height",
      "width",
      "loader",
      "fill",
      "sizes",
      "quality",
      "priority",
      "placeholder",
      "style",
      "onLoadingComplete",
      "onLoad",
      "onError",
      "loading",
      "blurDataURL",
      "unoptimized",
    ].includes(prop),
});

export default Image;
