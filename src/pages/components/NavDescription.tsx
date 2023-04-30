import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  IconButton,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { ArrowRight, Code } from "@phosphor-icons/react";

export const NavDescription = () => {
  return (
    <Card maxW="32rem" mt="70" align="center" variant="unstyled">
      <CardHeader
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading mb={4}>Bubble Sort</Heading>
        <Tooltip
          hasArrow
          defaultIsOpen
          placement="top"
          label="Veja o código"
        >
          <IconButton
            variant="unstyled"
            aria-label="dúvida"
            icon={<Code size={32} />}
          />
        </Tooltip>
      </CardHeader>

      <CardBody>
        <Text fontSize="lg" textAlign="justify" mt="24">
          O Bubble Sort é um algoritmo de ordenação que percorre uma lista
          várias vezes, comparando elementos adjacentes e trocando-os de posição
          caso estejam na ordem errada. A cada passagem, o maior elemento vai
          &quot;subindo&quot; até o final da lista, assim como uma bolha de ar
          sobe na água.
        </Text>
      </CardBody>

      <CardFooter>
        <VStack mt="12">
          <Tooltip
            hasArrow
            defaultIsOpen
            placement="top"
            label="Próximo algoritmo"
          >
            <IconButton
              variant="outline"
              rounded="full"
              p="30px"
              aria-label="next algorithm"
              icon={<ArrowRight size={32} />}
            />
          </Tooltip>
        </VStack>
      </CardFooter>
    </Card>
  );
};
