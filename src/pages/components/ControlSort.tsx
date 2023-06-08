import { SortingContext } from "@app/hooks/SortProvider";
import {
  ArrayProps,
  DEFAULT_COLOR,
  UPPER_COLOR,
  generateRandomArray,
} from "@app/utils";
import {
  Box,
  Button,
  Container,
  HStack,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { ArrowCounterClockwise, Play, Rewind } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { Graphics } from "./graphics/Graphics";

export const ControlSort = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [steps, setSteps] = useState<ArrayProps[][]>([]);
  const [array, setArray] = useState<ArrayProps[]>(generateRandomArray(20, 30));
  const { sortType } = useContext(SortingContext);

  // actions button
  const [play, setPlay] = useState(false);
  const [finished, setFinished] = useState(false);

  const bubbleSort = async (array: ArrayProps[], speed: number) => {
    let swap = false;
    let steps: ArrayProps[][] = [[...array]];

    do {
      swap = false;

      for (let i = 0; i < array.length; i++) {
        if (array[i].value > array[i + 1]?.value) {
          const temp = array[i];

          array[i] = array[i + 1];
          array[i + 1] = temp;

          temp.color = UPPER_COLOR;

          setCurrentStep((prev) => prev + 1);
          swap = true;

          setArray([...array]);
          steps.push([...array]);
          await new Promise((resolve) => setTimeout(resolve, 500 / speed));
          array[i].color = DEFAULT_COLOR;
          array[i + 1].color = DEFAULT_COLOR;
        }
      }
    } while (swap);

    setSteps(steps);
    handleFishAlgorithm();
  };

  const insertionSort = async (array: ArrayProps[], speed: number) => {
    let steps: ArrayProps[][] = [[...array]];

    for (let i = 1; i < array.length; i++) {
      let j = i - 1;
      let temp = array[i];

      while (j >= 0 && array[j].value > temp.value) {
        array[j + 1] = array[j];
        j--;
      }

      array[j + 1] = temp;

      // Representar a posição do elemento inserido com a cor YELLOW
      if (j + 1 !== i) {
        array[i].color = UPPER_COLOR;
      }

      setCurrentStep((prev) => prev + 1);

      setArray([...array]);
      steps.push([...array]);
      await new Promise((resolve) => setTimeout(resolve, 500 / speed));
      array[i].color = DEFAULT_COLOR;
    }
    setSteps(steps);
    handleFishAlgorithm();
  };

  const continueSteps = async () => {
    for (let i = currentStep; i < steps.length; i++) {
      setArray(steps[i]);
      setCurrentStep(i);
      await new Promise((resolve) => setTimeout(resolve, 500 / speed));
    }
    handleFishAlgorithm();
  };

  const handleDefineSpeed = (value: number) => {
    setSpeed(value);
  };

  const handleBackClick = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setArray(steps[currentStep - 1]);
    }
  };

  const handlePlayAlgorithm = () => {
    if (!!steps.length) {
      continueSteps();
    } else {
      switch (sortType) {
        case "bubble":
          setPlay(true);
          bubbleSort(array, speed);
          break;
        case "insertion":
          setPlay(true);
          insertionSort(array, speed);
          break;

        default:
          break;
      }
    }
  };

  const handleRewindAlgorithm = () => {
    setArray(generateRandomArray(20, 30));
    setCurrentStep(0);

    setFinished(false);
    setPlay(false);
    setSteps([]);
  };

  const handleFishAlgorithm = () => {
    setFinished(true);
    setPlay(false);
  };

  return (
    <Container mt="-24" maxW="md" centerContent>
      <Graphics array={array} handleDefineSpeed={handleDefineSpeed} />
      <HStack
        spacing="24px"
        mt="2.5"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <IconButton
            size="md"
            colorScheme="facebook"
            mt="24px"
            isDisabled={!finished}
            _disabled={{
              cursor: "not-allowed",
              opacity: 0.4,
              bg: "gray",
            }}
            aria-label="Back Algorithm"
            onClick={handleBackClick}
            icon={<Rewind size={18} />}
          ></IconButton>
        </Box>
        <Box>
          <IconButton
            size="md"
            colorScheme="facebook"
            isDisabled={play}
            _disabled={{
              cursor: "not-allowed",
              opacity: 0.4,
              bg: "gray",
            }}
            mt="24px"
            onClick={handlePlayAlgorithm}
            aria-label="Play Algorithm"
            icon={<Play size={18} />}
          ></IconButton>
        </Box>

        <Box>
          <Tooltip
            hasArrow
            placement="top-start"
            label="Generate a new Elements"
          >
            <IconButton
              size="md"
              colorScheme="facebook"
              mt="24px"
              isDisabled={!finished && play}
              _disabled={{
                cursor: "not-allowed",
                opacity: 0.4,
                bg: "gray",
              }}
              onClick={handleRewindAlgorithm}
              aria-label="restart Algorithm"
              icon={<ArrowCounterClockwise size={18} />}
            />
          </Tooltip>
        </Box>

        <Box>
          <Button
            size="md"
            colorScheme="facebook"
            mt="24px"
            variant="outline"
            aria-label="Steps Algorithm"
          >
            <span>Steps: {currentStep}</span>
          </Button>
        </Box>
      </HStack>
    </Container>
  );
};
