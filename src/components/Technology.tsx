import { FC } from "react";
import { Box, Center, Heading, Text, useColorMode, VStack } from "@chakra-ui/react";
import Image from "@/components/Image";

const Technology: FC<{
  title: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
}> = ({ title, imageSrc, imageAlt, technologies }) => {
  const { colorMode } = useColorMode();

  return (
    <VStack flex={1} spacing={3}>
      <Center
        width="80px"
        height="80px"
        bgColor={colorMode === "dark" ? "gray.50" : "gray.800"}
        borderRadius="full"
      >
        <Box width="40px" height="40px" pos="relative">
          {colorMode === "dark" ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              filter="invert(1)"
              // @ts-ignore
              fill
            />
          ) : (
            <Image
              src={imageSrc}
              alt={imageAlt}
              // @ts-ignore
              fill
            />
          )}
        </Box>
      </Center>
      <Heading size="sm" fontSize="lg">
        {title}
      </Heading>
      <VStack>
        {technologies.map(tech => (
          <Text key={tech} whiteSpace="nowrap">
            {tech}
          </Text>
        ))}
      </VStack>
    </VStack>
  );
};

export default Technology;
