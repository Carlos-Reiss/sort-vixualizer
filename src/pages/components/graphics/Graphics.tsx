import { DEFAULT_COLOR } from "@app/utils";
import {
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
} from "@chakra-ui/react";
import { Reorder } from "framer-motion";

export const Graphics = ({
  array,
  handleDefineSpeed,
}: {
  array: number[];
  handleDefineSpeed: (value: number) => void;
}) => {
  return (
    <Reorder.Group
      axis="x"
      values={array}
      onReorder={() => {}}
      style={{
        width: "780px",
        height: "450px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        padding: "10px",
      }}
    >
      {array.map((item, index) => (
        <Reorder.Item
          dragListener={false}
          value={item}
          key={index}
          style={{
            height: `${item * 10}px`,
            width: "40px",
            backgroundColor: `${DEFAULT_COLOR}`,
            marginRight: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Reorder.Item>
      ))}

      <Slider
        aria-label="slider-ex-3"
        orientation="vertical"
        defaultValue={1}
        min={1}
        max={5}
        maxH="200px"
        onChange={(value) => handleDefineSpeed(value)}
      >
        <SliderMark value={1} mb="-2.5" ml="3.5" fontSize="sm">
          1x
        </SliderMark>

        <SliderMark value={2} mb="-2.5" ml="3.5" fontSize="sm">
          2x
        </SliderMark>

        <SliderMark value={3} mb="-2.5" ml="3.5" fontSize="sm">
          3x
        </SliderMark>

        <SliderMark value={4} mb="-2.5" ml="3.5" fontSize="sm">
          4x
        </SliderMark>

        <SliderMark value={5} mb="-2.5" ml="3.5" fontSize="sm">
          5x
        </SliderMark>

        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip hasArrow bg="teal.500" color="white" placement="top">
          <SliderThumb bg="gray.500" />
        </Tooltip>
      </Slider>
    </Reorder.Group>
  );
};
