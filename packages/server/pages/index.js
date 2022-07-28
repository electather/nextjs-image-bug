import { useState, useEffect } from "react";
import { Test } from "../src/components/test";
export default function Home() {
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setDisabled((i) => !i);
    }, 2000);
  }, []);

  return (
    <div>
      <Test disabled={disabled} />
    </div>
  );
}
