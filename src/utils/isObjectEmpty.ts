export const isObjectEmpty = <T extends object>(objectName: T) => {
  return (
    Object.keys(objectName).length === 0 && objectName.constructor === Object
  );
};
