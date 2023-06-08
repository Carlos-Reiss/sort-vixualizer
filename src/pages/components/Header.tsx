import { Divider, Heading, Stack } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Stack bg="white" spacing={6}>
      <Heading as="h2" ml="20" mt="5" size="lg">
        Sort ViXualizer
      </Heading>
      <Divider />
    </Stack>
  );
};
