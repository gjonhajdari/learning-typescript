const classNamesMap = {
  primary: "bg-blue-500 text-white",
  secondary: "bg-gray-200 text-black",
  success: "bg-green-500 text-white",
  ghost: "bg-gray-300 text-black",
};

type ButtonProps = {
  /**
   * This isn't ideal - we have to manually sync
   * the type of variant with the object above.
   *
   * 1. How do we rearrange this code so that we don't
   * have to manually sync the types?
   *
   * Hint: you'll need 'typeof' and 'keyof'.
   */
  variant: keyof typeof classNamesMap;
};

export const Button = (props: ButtonProps) => {
  return <button className={classNamesMap[props.variant]}>Click me</button>;
};

const Parent = () => {
  return (
    <>
      <Button variant="primary"></Button>
      <Button variant="secondary"></Button>
      <Button variant="success"></Button>
      <Button variant="ghost"></Button>

      {/* @ts-expect-error */}
      <Button variant="something"></Button>
      {/* @ts-expect-error */}
      <Button></Button>
    </>
  );
};
