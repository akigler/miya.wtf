import styled from 'styled-components';

export const BackgroundContainer = styled.div<{ backgroundImage: string }>`
  background-image: url(${props => props.backgroundImage});
  background-size: 100%;
  background-repeat: repeat;
  padding: 2rem;
  min-height: 100vh;
  overflow-y: scroll;
`;

export const TranslucentBox = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2rem;
  // border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 24px;
`;


export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
`;

export const Logo = styled.img`
  height: 50px; // or any other size
  width: 50px; // maintain aspect ratio
  margin-right: 10px; // adjust spacing between logo and title text
  background: none;
  border: none;
  `;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center; // Center the content if needed
`;


export const MintCount = styled.div`
  font-size: 16px;
`;

export const CollectionContainer = styled.div`
display: flex;
flex-direction: row;
witdth: 100%;
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  borderRadius: 8px;
  max-width: 320px;
  height: 100%;
  width: 100%;
  gap: 1rem;
`;

export const CollectionName = styled.div`
  fontSize: 20px;
  fontWeight: bold;
  margin: 0.5rem 0;
`;

export const MintOption = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  gap: 10px;
  alignItems: center;
`;

export const MintInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
  `

export const MintInput = styled.input`
  flex: 1;
  padding: 10px;
  borderRadius: 4px;
  border: 3px solid #D97ADA;
`;

export const MintButton = styled.button`
  background-color: #D97ADA;
  color: white;
  padding: 12px 30px;
  borderRadius: 4px;
  border: none;
  cursor: pointer;
`;

export const MintLabel = styled.span`
  padding: 3px;
  fontSize: 16px;
  fontWeight: bold;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

export const CollectionImage = styled.img`
  borderRadius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 100%;
`;

