import styled from 'styled-components';

export const ImageList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px 0px 0px 0px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MessageEmpty = styled.p`
  padding-top: 250px;
  font-size: 70px;
  color: #30611e;
  margin: 0 auto;
`;

export const MessageError = styled.p`
  padding-top: 250px;
  text-align: center;
  width: 700px;
  font-size: 50px;
  color: #e83737;
  margin: 0 auto;
`;
