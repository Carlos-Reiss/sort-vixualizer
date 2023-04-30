import { generateRandomArray } from "@app/utils";
import { Box, Button, Container, HStack, IconButton } from "@chakra-ui/react";
import {
  ArrowCounterClockwise,
  Pause,
  Play,
  Rewind,
} from "@phosphor-icons/react";
import { useState } from "react";
import { Graphics } from "./graphics/Graphics";

export const ControlSort = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [steps, setSteps] = useState<number[][]>([]);
  const [array, setArray] = useState<number[]>(generateRandomArray(20, 20));

  // actions button
  const [play, setPlay] = useState(false);
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);

  const bubbleSort = async (array: number[], speed: number) => {
    let swap = false;
    let steps: number[][] = [[...array]];

    do {
      swap = false;

      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          const temp = array[i];

          array[i] = array[i + 1];
          array[i + 1] = temp;

          // array[i].color = LOWER_COLOR;
          // array[i + 1].color = UPPER_COLOR;

          setCurrentStep((prev) => prev + 1);
          swap = true;

          setArray([...array]);
          steps.push([...array]);
          await new Promise((resolve) => setTimeout(resolve, 500 / speed));
          // array[i].color = DEFAULT_COLOR;
          // array[i + 1].color = DEFAULT_COLOR;
        }
      }
    } while (swap);

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

  const handlePauseAlgorithm = () => {
    setPaused(true);
  };

  const handlePlayAlgorithm = () => {
    setPlay(true);
    if (!!steps.length) {
      continueSteps();
    } else {
      bubbleSort(array, speed);
    }
  };

  const handleRewindAlgorithm = () => {
    setArray(generateRandomArray(20, 20));
    setCurrentStep(0);
    setPaused(false);
    setFinished(false);
    setPlay(false);
    setSteps([]);
  };

  const handleFishAlgorithm = () => {
    setFinished(true);
    setPlay(false);
    setPaused(false);
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
            isDisabled={!finished && !paused}
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
          <IconButton
            size="md"
            colorScheme="facebook"
            mt="24px"
            isDisabled={!play}
            _disabled={{
              cursor: "not-allowed",
              opacity: 0.4,
              bg: "gray",
            }}
            aria-label="Pause Algorithm"
            onClick={handlePauseAlgorithm}
            icon={<Pause size={18} />}
          ></IconButton>
        </Box>

        <Box>
          <IconButton
            size="md"
            colorScheme="facebook"
            title="generate a new elements"
            mt="24px"
            isDisabled={!finished && play && !paused}
            _disabled={{
              cursor: "not-allowed",
              opacity: 0.4,
              bg: "gray",
            }}
            onClick={handleRewindAlgorithm}
            aria-label="restart Algorithm"
            icon={<ArrowCounterClockwise size={18} />}
          ></IconButton>
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
