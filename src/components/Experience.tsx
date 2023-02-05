import { Children, FC, ReactNode } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "@/components/Image";

const space = 3;

const Experience: FC<{
  imageSrc: string;
  imageAlt: string;
  role: string;
  companyName: string;
  companyUrl: string;
  dates: string[];
  children?: ReactNode;
}> = ({ imageSrc, imageAlt, role, companyName, companyUrl, dates, children }) => {
  const arrayChildren = Children.toArray(children);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <>
      <Card
        h="100%"
        shadow="unset"
        borderWidth={1}
        borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
      >
        <CardHeader p={space}>
          <HStack>
            <Box w="40px" h="40px" pos="relative">
              {/* @ts-ignore */}
              <Image src={imageSrc} alt={imageAlt} fill borderRadius="full" />
            </Box>
            <Box>
              <Heading size="sm">{role}</Heading>
              <Link href={companyUrl} target="_blank" fontSize={14} _hover={{ color: "gray.500" }}>
                {companyName}
              </Link>
            </Box>
          </HStack>
        </CardHeader>
        <CardBody p={space} display="flex" flexDir="column" justifyContent="center">
          {dates.map((date, i) => (
            <Text key={i} fontSize={14}>
              {date}
            </Text>
          ))}
        </CardBody>
        <Divider
          mx={space}
          w={`calc(100% - var(--chakra-space-${space}) * 2)`}
          borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
        />
        <CardFooter p={space} justify="end">
          <Button
            size="xs"
            bgColor="transparent"
            onClick={onOpen}
            _hover={{ bgColor: colorMode === "dark" ? "whiteAlpha.200" : "gray.100" }}
          >
            Read more
          </Button>
        </CardFooter>
      </Card>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={18}>
            {role} at {companyName}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>{Children.map(arrayChildren, child => child)}</ModalBody>
          <ModalFooter>
            <Button
              as={Link}
              href={companyUrl}
              target="_blank"
              size="sm"
              _hover={{
                textDecor: "unset",
                bgColor: colorMode === "dark" ? "whiteAlpha.300" : "gray.200",
              }}
            >
              Visit Website
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Experience;
