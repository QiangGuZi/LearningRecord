function mergeSort(array: number[]): number[] {
  mergeSortCore(array, 0, array.length - 1);

  return array;
}

function mergeSortCore(array: number[], left: number, right: number) {
  if (left >= right) {
    return;
  }

  const middle = Math.floor((left + right) / 2);
  mergeSortCore(array, left, middle);
  mergeSortCore(array, middle + 1, right);
  merge(array, left, middle, right);
}

function merge(array: number[], left: number, middle: number, right: number): void {
  let temp: number[] = new Array(right - left + 1);
  /**
   * i: index of left array
   * j: index of right array
   * k: index of temp array
   * @type {number}
   */
  let i: number = left, j: number = middle + 1, k: number = 0;

  while (i <= middle && j <= right) {
    // foolish check!
    // @ts-ignore
    if (array[i] <= array[j]) {
      // @ts-ignore
      temp[k++] = array[i++];
    } else {
      // @ts-ignore
      temp[k++] = array[j++];
    }
  }

  while (i <= middle) {
    // @ts-ignore
    temp[k++] = array[i++];
  }
  while (j <= right) {
    // @ts-ignore
    temp[k++] = array[j++];
  }

  // change origin array
  for (let x = 0; x < temp.length; x++) {
    // @ts-ignore
    array[left + x] = temp[x];
  }
}


export { mergeSort };
