import { defineStyleConfig, extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: "500" });
const nunitoBold = Nunito({ subsets: ["latin"], weight: "700" });

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: true,
};

const Heading = defineStyleConfig({ baseStyle: nunitoBold.style });

export const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        ...nunito.style,
        backgroundColor: props.colorMode === "dark" ? "gray.800" : "gray.50",
        color: props.colorMode === "dark" ? "gray.50" : "gray.800",
      },
    }),
  },
  components: { Heading },
});
