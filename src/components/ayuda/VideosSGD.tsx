"use client";

import { videosSGD } from "@/lib/videosSGD";
import Videos from "./Videos";

export default function VideosSGD() {
  return <Videos videos={videosSGD} />;
}
