import { Children, FC, ReactNode } from "react";
import NextImage from "next/image";
import { useColorMode } from "@/components/ui/color-mode";
import {
  Box,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  CardRoot,
  CloseButton,
  Dialog,
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogRoot,
  DialogTrigger,
  Heading,
  HStack,
  Image,
  Link,
  Portal,
  Separator,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

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
  const { open, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <CardRoot
      h="100%"
      shadow="unset"
      bgColor="bg.muted"
      borderWidth={1}
      borderColor="border.emphasized"
    >
      <CardHeader p={space}>
        <HStack>
          <Box w="40px" h="40px" pos="relative">
            <Image borderRadius="full" objectFit="contain" asChild>
              <NextImage src={imageSrc} alt={imageAlt} fill />
            </Image>
          </Box>
          <Box>
            <Heading size="sm">{role}</Heading>
            <Link href={companyUrl} target="_blank" fontSize="sm" _hover={{ color: "gray.500" }}>
              {companyName}
            </Link>
          </Box>
        </HStack>
      </CardHeader>
      <CardBody p={space} display="flex" flexDir="column" justifyContent="center">
        {dates.map((date, i) => (
          <Text key={i} fontSize="sm">
            {date}
          </Text>
        ))}
      </CardBody>
      <Separator
        mx={space}
        w={`calc(100% - var(--chakra-space-${space}) * 2)`}
        borderColor={colorMode === "dark" ? "gray.600" : "gray.300"}
      />
      <CardFooter p={space} justifyContent="flex-end">
        <DialogRoot placement="center">
          <DialogTrigger
            h={8}
            fontSize="xs"
            cursor="pointer"
            paddingInline={2.5}
            borderWidth={1}
            borderColor="transparent"
            borderRadius="l2"
            _hover={{ bgColor: "bg.emphasized" }}
          >
            Read more
          </DialogTrigger>
          <Portal>
            <DialogBackdrop />
            <DialogPositioner>
              <DialogContent>
                <DialogHeader>
                  <Heading size="lg">
                    {role} at {companyName}
                  </Heading>
                </DialogHeader>
                <DialogCloseTrigger asChild>
                  <CloseButton />
                </DialogCloseTrigger>
                <DialogBody fontSize="md">{Children.map(arrayChildren, child => child)}</DialogBody>
                <DialogFooter>
                  <Button
                    size="sm"
                    color="fg"
                    bgColor="bg.muted"
                    textDecor="none"
                    _focus={{ outline: "none" }}
                    _hover={{ bgColor: "bg.emphasized" }}
                    asChild
                  >
                    <Link href={companyUrl} target="_blank">
                      Visit Website
                    </Link>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </DialogPositioner>
          </Portal>
        </DialogRoot>
      </CardFooter>
    </CardRoot>
  );
};

export default Experience;
