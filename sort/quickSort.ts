function quickSort(arr: number[]): number[] {
  quickSortCore(arr);

  return arr;
}

function quickSortCore(arr: number[], start: number = 0, end: number = arr.length - 1): void {
  if (start >= end) {
    return;
  }

  let index: number = partition(arr, start, end);
  quickSortCore(arr, start, index - 1);
  quickSortCore(arr, index + 1, end);
}

function partition(arr: number[], start: number, end: number): number {
  let randomIndex: number = start + Math.floor(Math.random() * (end - start + 1));

  swap(arr, randomIndex, end);
  let small: number = start - 1;
  for (let i: number = start; i < end; i++) {
    // @ts-ignore
    if (arr[i] < arr[end]) {
      small++;

      if (small != i) {
        swap(arr, small, i);
      }
    }
  }
  small++;
  swap(arr, small, end);

  return small;
}

function swap(arr: number[], i: number, j: number): void {
  if (i < 0 || j < 0 || i >= arr.length || j >= arr.length) {
    return;
  }

  // @ts-ignore
  let temp: number = arr[i];
  // @ts-ignore
  arr[i] = arr[j];
  arr[j] = temp;
}

export { quickSort };
