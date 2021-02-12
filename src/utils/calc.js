// Gets an element's width
export const getComputedWidth = (element) => {
  const style = window.getComputedStyle(element);
  return (
    parseInt(style.width) +
    parseInt(style.marginLeft) +
    parseInt(style.marginRight)
  );
};

// Gets an element's height
export const getComputedHeight = (element) => {
  const style = window.getComputedStyle(element);
  return (
    parseInt(style.height) +
    parseInt(style.marginTop) +
    parseInt(style.marginBottom)
  );
};
