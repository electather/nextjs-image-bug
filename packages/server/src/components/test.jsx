import phone from "./Phone.png";
import Image from "next/image";

export function Test() {
  return (
    <div>
      <h1>Test</h1>
      <Image
        priority
        src={phone}
        alt="Picture of the author"
        width="253px"
        height="257px"
        layout="fixed"
      />
      <test-checkbox name="test" label="test" />
    </div>
  );
}
