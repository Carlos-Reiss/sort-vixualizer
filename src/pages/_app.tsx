import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    body: {
      fontFamily: "body",
      color: "gray.800",
      bg: "gray.800",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: "gray.400",
    },
    "*, *::before, &::after": {
      borderColor: "gray.200",
      wordWrap: "break-word",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
