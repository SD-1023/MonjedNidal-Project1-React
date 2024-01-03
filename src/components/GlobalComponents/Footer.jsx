import styled from "styled-components";

const StyledFooter = styled.footer`
  position: sticky;
  text-align: center;
  color: var(--body-text);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block: 1rem;
`;
const FooterIcon = styled("ion-icon")`
  padding: 0rem 0.2rem;
  font-size: 22px;
  color: var(--heart-color);
`;
function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        Developed with
        <FooterIcon name="heart"></FooterIcon> © 2023
      </FooterContent>
    </StyledFooter>
  );
}

export default Footer;
