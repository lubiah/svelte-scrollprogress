/**
 * Debounces a function, ensuring it is only called once after a delay.
 *
 * @param func The function to debounce.
 * @returns The debounced function.
 */
export const debounce = <T extends (...args: any[]) => void>(func: T): (() => void) => {
  let timeout: number;

  /**
   * Debounced function.
   *
   * @returns {void}
   */
  return function (this: any) {
    const context = this;
    const args = Array.from(arguments);

    if (timeout) {
      window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(function () {
      func.apply(context, args);
    });
  };
};
