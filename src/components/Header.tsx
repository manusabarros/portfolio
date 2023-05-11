import { FC } from "react";
import {
  Button,
  Hide,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

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
      bgColor={colorMode === "dark" ? "gray.800" : "gray.50"}
    >
      <Show breakpoint="(min-width: 480px)">
        <HStack>
          {links.map(link => (
            <Button
              key={link}
              h="unset"
              fontSize={14}
              p={0}
              fontWeight="normal"
              textTransform="capitalize"
              bgColor="unset"
              _hover={{ bgColor: "unset", color: "gray.500" }}
              onClick={() => onClick(link)}
            >
              {link.replace("-", " ")}
            </Button>
          ))}
        </HStack>
      </Show>
      <Menu>
        <Hide breakpoint="(min-width: 480px)">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            bgColor={colorMode === "dark" ? "whiteAlpha.50" : "blackAlpha.50"}
            _hover={{ bgColor: colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200" }}
            _active={{ bgColor: colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200" }}
          />
        </Hide>
        <MenuList>
          {links.map(link => (
            <MenuItem
              key={link}
              fontSize={14}
              textTransform="capitalize"
              _focus={{ bgColor: colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200" }}
              onClick={() => setTimeout(() => onClick(link), 0)}
            >
              {link.replace("-", " ")}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <IconButton
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        aria-label="Change Theme"
        bgColor={colorMode === "dark" ? "whiteAlpha.50" : "blackAlpha.50"}
        _hover={{ bgColor: colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.200" }}
        onClick={toggleColorMode}
      />
    </HStack>
  );
};

export default Header;
