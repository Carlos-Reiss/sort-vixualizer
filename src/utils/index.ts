export const DEFAULT_COLOR = "#393e41";
export const UPPER_COLOR = "#00adb5";
export const LOWER_COLOR = "#ff2e63";

export interface ArrayProps {
  value: number;
  color: string;
}

export function generateRandomArray(length: number, maxValue: number) {
  const array: ArrayProps[] = [];

  // Cria um array com todos os números possíveis
  const possibleValues = Array.from({ length: maxValue }, (_, i) => i + 1);

  for (let i = 0; i < length; i++) {
    // Seleciona um índice aleatório do array de valores possíveis
    const randomIndex = Math.floor(Math.random() * possibleValues.length);

    // Remove o número do array de valores possíveis e adiciona ao array final
    const value = possibleValues.splice(randomIndex, 1)[0];

    array.push({ value, color: DEFAULT_COLOR });
  }

  return array;
}
