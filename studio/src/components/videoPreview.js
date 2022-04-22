import React from "react";
import styled from "styled-components";
const Video = styled.video`
  width: 100%;
`;

export const VideoPreview = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <div>
      <Video src={props.value.url} controls />
      <span>{props.value.caption}</span>
    </div>
  );
});

// Create the default export to import into our schema
export default VideoPreview;
