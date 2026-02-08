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
import { LuMenu } from "react-icons/lu";
import { ColorModeButton } from "@/components/ui/color-mode";

const links = ["about-me", "experience", "education", "participations", "technologies"] as const;

const Header: FC<{
  onClick: (
    link: "about-me" | "experience" | "education" | "participations" | "technologies"
  ) => void;
}> = ({ onClick }) => {
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
      shadow={{ _dark: "lg", _light: "md" }}
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
        <MenuTrigger hideFrom="md" asChild>
          <IconButton variant="subtle" aria-label="Toggle Menu" outline="none">
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
      <ColorModeButton variant="subtle" />
    </HStack>
  );
};

export default Header;
