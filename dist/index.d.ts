export declare function clickOutside(
  node: HTMLElement,
  handler: (event?: MouseEvent) => void
): {
  destroy: () => void;
};
