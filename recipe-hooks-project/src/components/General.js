import styled from "styled-components";

const Wrapper = styled.div`
  height: 90vh;
  padding: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: blue;
`;

const Section = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 90%;
  padding-bottom: 1.5em;
  margin: auto;
`;
const Title = styled(Section)`
  height: 1em;
  font-size: 1.5em;
  font-weight: 500;
  margin: auto;
  justify-content: center;
  padding-top: 1.5em;
`;

export {Wrapper, Title, Section};
