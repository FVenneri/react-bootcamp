import styled from "styled-components";
import {Section} from "./Profile";

const Wrapper = styled.div`
  height: 90vh;
  padding: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: blue;
`;

const Title = styled(Section)`
  height: 1em;
  font-size: 1.5em;
  font-weight: 500;
  margin: auto;
  justify-content: center;
  padding-top: 1.5em;
`;

export {Wrapper, Title};