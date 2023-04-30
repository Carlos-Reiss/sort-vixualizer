import { Grid, GridItem, Text } from "@chakra-ui/react";
import Head from "next/head";
import { ControlSort } from "./components/ControlSort";
import { NavDescription } from "./components/NavDescription";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sort Vixualizer</title>
        <meta name="description" content="add description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          padding: "8rem",
          minHeight: "100vh",
        }}
      >
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={"100px 300px 120px"}
          gridTemplateColumns={"1fr 2fr"}
          h="200px"
          gap="10"
          color="blackAlpha.700"
          maxWidth={{ base: "100%", md: "1470px" }}
          ml="auto"
          mr="auto"
        >
          <GridItem
            pl="2"
            w="100%"
            position="fixed"
            zIndex={9}
            top={0}
            left={0}
            area={"header"}
          >
            <Header />
          </GridItem>
          <GridItem
            h="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            area={"nav"}
          >
            <NavDescription />
          </GridItem>
          <GridItem pl="2" area={"main"}>
            <ControlSort />
          </GridItem>
          <GridItem
            position="fixed"
            left={0}
            bottom={0}
            w="100%"
            pl="2"
            bg="white"
            area={"footer"}
          >
            <Text align="right">@_carlosreiss</Text>
          </GridItem>
        </Grid>
      </main>
    </>
  );
}
