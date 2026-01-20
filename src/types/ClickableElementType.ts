export type ClickableElement = {
  element: HTMLElement;
  clickHandler(event: MouseEvent): void;
  bindEvent(): void;
}