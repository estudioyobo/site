import styled from "styled-components";

export const Placeholder = styled.span`
  opacity: ${({ opacity }) => opacity};
  position: absolute;
  top: 1.8rem;
  z-index: 10;
  font-size: 1.25rem;
  pointer-events: none;
  padding: 0.5rem;
  display: flex;
  overflow: hidden;
  font-weight: bold;
  & span {
    flex: none;
    white-space: pre;
  }
`;

export const Group = styled.div`
  width: 100%;
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 0 1.5rem 0;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
  display: flex;
  overflow: hidden;
  & span {
    opacity: 0;
    flex: none;
    white-space: pre;
  }
`;

export const Input = styled.input`
  display: block;
  font-size: 1.25rem;
  padding: 0.5rem;
  width: 100%;
  border: 0;
  background: white;
  position: relative;
  font-weight: bold;
`;

export const Textarea = styled.textarea`
  display: block;
  font-size: 1.25rem;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  border: 0;
  background: white;
  position: relative;
  font-weight: bold;
`;
