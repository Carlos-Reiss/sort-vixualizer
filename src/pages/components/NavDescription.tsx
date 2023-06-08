import { SortingAlgorithm, SortingContext } from "@app/hooks/SortProvider";
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
import { useContext, useEffect, useState } from "react";

interface SortProps {
  type: SortingAlgorithm;
  title: string;
  message: string;
}

const sorts: SortProps[] = [
  {
    type: "bubble",
    title: "Bubble Sort",
    message:
      'O Bubble Sort é um algoritmo de ordenação que percorre uma lista várias vezes, comparando elementos adjacentes e trocando-os de posição caso estejam na ordem errada. A cada passagem, o maior elemento vai "subindo" até o final da lista, assim como uma bolha de ar sobe na água.',
  },
  {
    type: "insertion",
    title: "Insertion Sort",
    message:
      "O Insertion Sort é um algoritmo de ordenação que percorre uma lista, inserindo cada elemento em sua posição adequada. Ele percorre a lista da esquerda para a direita e, à medida que avança, vai deixando os elementos mais à esquerda ordenados.",
  },
];

export const NavDescription = () => {
  const [currentSort, setCurrentSort] = useState(0);

  const { changeSortType } = useContext(SortingContext);

  const handleNextSort = () => {
    setCurrentSort((prev) => (prev + 1) % sorts.length);
  };

  useEffect(() => {
    changeSortType(sorts[currentSort].type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSort]);

  return (
    <Card maxW="32rem" mt="70" align="center" variant="unstyled">
      <CardHeader
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading mb={4}>{sorts[currentSort].title}</Heading>
        <Tooltip hasArrow defaultIsOpen placement="top" label="Veja o código">
          <IconButton
            variant="unstyled"
            aria-label="dúvida"
            icon={<Code size={32} />}
          />
        </Tooltip>
      </CardHeader>

      <CardBody>
        <Text fontSize="lg" textAlign="justify" mt="24">
          {sorts[currentSort].message}
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
              onClick={handleNextSort}
              aria-label="next algorithm"
              icon={<ArrowRight size={32} />}
            />
          </Tooltip>
        </VStack>
      </CardFooter>
    </Card>
  );
};
