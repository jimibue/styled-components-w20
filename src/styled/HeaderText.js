import styled from "styled-components";
const fontSize = (size) => {
  switch (size) {
    case "large":
      return "4rem";
    case "meduim":
      return "3rem";
    case "small":
      return "2rem";
    default:
      return "6.5rem";
  }
};
// const HeaderText = styled.h1`
//   font-size: ${(props) => (props.large ? "4rem" : "2rem")} !important;
//   color: white !important;
//   text-align: center;
// `;

const HeaderText = styled.h1`
  font-size: ${(props) => fontSize(props.fSize)} !important;
  color: white !important;
  text-align: center;
`;

export default HeaderText;
