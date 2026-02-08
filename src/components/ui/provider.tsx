"use client";

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: "500" });
const nunitoBold = Nunito({ subsets: ["latin"], weight: "700" });

const config = defineConfig({
  globalCss: {
    body: {
      ...nunito.style,
      bgColor: "bg.subtle",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: nunitoBold.style.fontFamily,
        },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
