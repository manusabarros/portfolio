import { FC } from "react";
import { Center, Text } from "@chakra-ui/react";

const Footer: FC<{ version: string }> = ({ version }) => {
  return (
    <Center
      as="footer"
      w="100%"
      h={14}
      pos="absolute"
      bottom={0}
      bgColor="bg.muted"
      borderTopColor="border.emphasized"
      borderTopWidth={1}
    >
      <Text fontSize={14}>Made with ❤️ by Manu Sabarros</Text>
      <Text pos="absolute" right={4} color="gray.400">
        v{version}
      </Text>
    </Center>
  );
};

export default Footer;
