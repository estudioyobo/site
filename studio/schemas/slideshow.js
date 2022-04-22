import { BiCarousel } from "react-icons/bi";

export default {
  type: "object",
  name: "slideshow",
  title: "Slideshow",
  icon: BiCarousel,
  fields: [
    {
      type: "string",
      name: "title",
      title: "Título"
    },
    {
      type: "array",
      name: "slides",
      title: "Slides",
      of: [{ type: "image" }],
      options: {
        layout: "grid"
      }
    }
  ]
};
