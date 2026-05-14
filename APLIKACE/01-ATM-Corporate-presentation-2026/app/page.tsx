import { readFileSync } from "fs";
import path from "path";
import type { SlideData } from "./slides";
import Presentation from "./presentation";

export default function Page() {
  const filePath = path.join(process.cwd(), "data", "slides.json");
  const slides: SlideData[] = JSON.parse(readFileSync(filePath, "utf-8"));
  return <Presentation slides={slides} />;
}
