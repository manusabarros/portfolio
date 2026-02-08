import { FC } from "react";
import NextImage from "next/image";
import { Box, Center, Heading, Image, Text, VStack } from "@chakra-ui/react";

const Technology: FC<{
  title: string;
  imageSrc: string;
  imageAlt: string;
  technologies: string[];
}> = ({ title, imageSrc, imageAlt, technologies }) => {
  return (
    <VStack flex={1} gap={3}>
      <Center w="80px" h="80px" bgColor="fg" borderRadius="full">
        <Box w="40px" h="40px" pos="relative">
          <Image objectFit="contain" _dark={{ filter: "invert(1)" }} asChild>
            <NextImage src={imageSrc} alt={imageAlt} fill />
          </Image>
        </Box>
      </Center>
      <Heading size="lg">{title}</Heading>
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
