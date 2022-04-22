import { RiImageLine } from "react-icons/ri";

export default {
  name: "figure",
  title: "Figure",
  type: "image",
  icon: RiImageLine,
  options: {
    hotspot: true
  },
  fields: [
    {
      name: "alt",
      title: "Alternative text (for screen readers)",
      type: "string",
      options: {
        isHighlighted: true
      }
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
      options: {
        isHighlighted: true
      }
    }
  ]
};
