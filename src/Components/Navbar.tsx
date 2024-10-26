import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/iconwebp.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface NavBarProps {
  onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch} : NavBarProps) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"40px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
