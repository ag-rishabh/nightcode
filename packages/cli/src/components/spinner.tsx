import { useEffect, useState } from "react";
import { useTheme } from "../providers/theme";

const FRAMES = [
  "▰▱▱▱▱▱▱",
  "▰▰▱▱▱▱▱",
  "▰▰▰▱▱▱▱",
  "▰▰▰▰▱▱▱",
  "▰▰▰▰▰▱▱",
  "▰▰▰▰▰▰▱",
  "▰▰▰▰▰▰▰",
  "▰▱▱▱▱▱▱",
];
const INTERVAL_MS = 80;

export function Spinner() {
  const { colors } = useTheme();
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setFrame((f) => (f + 1) % FRAMES.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return <text fg={colors.primary}>{FRAMES[frame]}</text>;
}
