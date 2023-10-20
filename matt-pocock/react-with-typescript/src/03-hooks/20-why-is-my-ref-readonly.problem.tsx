import { useRef } from "react";

export const Component = () => {
  const firstOverload = useRef<string>("12345");
  firstOverload.current = "asf98hfao";

  const secondOverload = useRef<string>(null); // Readonly
  secondOverload.current = "OAJS*Ha9hfa";

  const thirdOverload = useRef<string>();
  thirdOverload.current = "shdad7h7as";

  const ref = useRef<string>();
  // Why is this not allowed?
  ref.current = "Hello";

  return null;
};
