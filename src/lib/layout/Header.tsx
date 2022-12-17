import { Box, Flex, Text } from "@chakra-ui/react";

import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" justifyContent="center">
      <Text as="h1">Cardano transaction decoder</Text>
      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
