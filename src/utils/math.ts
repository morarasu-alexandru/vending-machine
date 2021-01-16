export const generateNumberList = (
  startNumber: number,
  endNumber: number
): number[] => {
  let result: number[] = [];

  for (let i = startNumber; i <= endNumber; i++) {
    result.push(i);
  }

  return result;
};
