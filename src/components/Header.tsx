"use client";

import { FC } from "react";
import {
  Button,
  HStack,
  IconButton,
  MenuContent,
  MenuItem,
  MenuPositioner,
  MenuRoot,
  MenuTrigger,
  Portal,
} from "@chakra-ui/react";
import { useColorMode } from "@/components/ui/color-mode";
import { LuMenu, LuMoon, LuSun } from "react-icons/lu";

const links = ["about-me", "experience", "education", "participations", "technologies"] as const;

const Header: FC<{
  onClick: (
    link: "about-me" | "experience" | "education" | "participations" | "technologies"
  ) => void;
}> = ({ onClick }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      as="header"
      justify="space-between"
      px={5}
      w="100%"
      h={14}
      pos="fixed"
      top={0}
      zIndex={2}
      shadow={colorMode === "dark" ? "dark-lg" : "md"}
      bgColor="bg.subtle"
    >
      <HStack hideBelow="md">
        {links.map(link => (
          <Button
            key={link}
            textTransform="capitalize"
            h="unset"
            p={0}
            color="fg"
            bgColor="unset"
            _hover={{ color: "gray.500" }}
            onClick={() => onClick(link)}
          >
            {link.replace("-", " ")}
          </Button>
        ))}
      </HStack>
      <MenuRoot>
        <MenuTrigger hideFrom="md">
          <IconButton variant="subtle">
            <LuMenu />
          </IconButton>
        </MenuTrigger>
        <Portal>
          <MenuPositioner>
            <MenuContent>
              {links.map(link => (
                <MenuItem
                  key={link}
                  value={link}
                  fontSize="sm"
                  textTransform="capitalize"
                  onClick={() => setTimeout(() => onClick(link), 0)}
                >
                  {link.replace("-", " ")}
                </MenuItem>
              ))}
            </MenuContent>
          </MenuPositioner>
        </Portal>
      </MenuRoot>
      <IconButton variant="subtle" aria-label="Change Theme" onClick={toggleColorMode}>
        {colorMode === "dark" ? <LuSun /> : <LuMoon />}
      </IconButton>
    </HStack>
  );
};

export default Header;
