import VideoPreview from "../src/components/videoPreview";
import { RiVideoLine } from "react-icons/ri";

export default {
  name: "video",
  title: "Video",
  type: "object",
  preview: {
    select: {
      url: "url",
      caption: "caption"
    },
    component: VideoPreview
  },
  icon: RiVideoLine,
  fields: [
    {
      type: "url",
      name: "url",
      title: "URL"
    },
    {
      type: "string",
      name: "caption",
      title: "Pie de foto"
    }
  ]
};
