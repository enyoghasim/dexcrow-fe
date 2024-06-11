export const isEmpty = (...args) => {
  return args.some((arg) => {
    if (typeof arg === 'string') {
      return arg.trim() === '';
    }
    return arg === null || arg === undefined;
  });
};
