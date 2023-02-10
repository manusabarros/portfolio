import { Center, Text, useColorMode } from "@chakra-ui/react";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Center
      as="footer"
      w="100%"
      h={14}
      pos="absolute"
      bottom={0}
      bgColor={colorMode === "dark" ? "gray.700" : "white"}
    >
      <Text fontSize={14}>Made with ❤️ by Manu Sabarrós</Text>
      <Text pos="absolute" right={4} color="gray.400">
        v{publicRuntimeConfig?.version}
      </Text>
    </Center>
  );
};

export default Footer;
