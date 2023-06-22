import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean | undefined;
}

export const Column = styled.span`
  margin: 0px 50px;
`;

export const Page = styled.span<IPageProps>`
  margin: 0px 10px;
  color: ${(props: IPageProps) =>
    props.isActive !== undefined ? "#40e0d0" : "#bdbdbd"};
  font-weight: ${(props: IPageProps) =>
    props.isActive !== undefined ? "bold" : "normal"};
  cursor: ${(props: IPageProps) =>
    props.isActive !== undefined ? "none" : "pointer"};
`;
