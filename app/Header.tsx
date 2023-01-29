import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      textAlign={{ base: "left", md: "left", lg: "center" }}
      pl="15px"
      bg="#c41018;"
      pt="90px"
      pb="250px"
      color="white"
    >
      <Heading>
      <Text> pricing for your business By Rayyan Naveed</Text>
      </Heading>
      <Text pt="10px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
