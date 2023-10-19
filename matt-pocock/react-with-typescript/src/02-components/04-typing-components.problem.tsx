import React from "react";

export type ButtonProps = {
  className: string;
};

export const Button = ({ className }: ButtonProps) => {
  return <button className={className}></button>;
};

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  );
};
