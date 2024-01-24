import styled from 'styled-components';


export const BackgroundContainer = styled.div<{ backgroundImage: string }>`
  background-image: url(${props => props.backgroundImage});
  background-size: 100%;
  background-repeat: repeat;
  padding: 2rem;
  height: calc(100% - 2rem);
  overflow-y: scroll;
  * {
  box-sizing: border-box;
  font-family: 'VT323', Osaka, Meiryo, 'MS PGothic', arial, helvetica, clean, sans-serif;
}
`;

export const TranslucentBox = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2rem;
  // border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 100%;
  height: fit-content;
  overflow-y: scroll;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 24px;

`;

export const Title = styled.h1`
  font-size: 52px;
  font-weight: bold;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  font-size: 42px;
`}
`;

export const Logo = styled.img`
  height: 60px; // or any other size
  width: 60px; // maintain aspect ratio
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
  font-size: 32px;
`;

export const CollectionContainer = styled.div`
display: flex;
flex-direction: row;
witdth: auto;
height: 80%;
${({ theme }) => theme.mediaWidth.upToMedium`
  flex-direction: column-reverse;
  height: 100%;
`}
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 16px;
  max-width: 320px;
  height: 80%;
  width: 100%;
  gap: 1rem;
`;

export const CollectionName = styled.div`
  font-size: 27px;
  font-weight: bold;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  padding: 10px;
  font-size: 33px
  width: 100%;
`}
`;

export const MintOption = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  gap: 1px;
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
  border: 3px solid #D97ADA;
  font-size: 20px;
  ${({ theme }) => theme.mediaWidth.upToMedium`
  width: 50%;
`}
`;

export const MintButton = styled.button`
  background-color: #D97ADA;
  color: white;
  padding: 12px 30px;
  border: none;
  cursor: pointer;
  font-size: 20px
`;

export const MintCost = styled.div`
  font-size: 22px;
  padding: 0 3px;
`

export const MintLabel = styled.span`
  padding: 3px;
  font-size: 22px;
  font-weight: bold;
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

export const CollectionImage = styled.img`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const MintDetails = styled.div`
  font-size: 20px;
`
export const MintDetailsHeading = styled.div`
font-size: 22px;
font-weight: bold;
`
export const RefLinkButton = styled.button`
  font-size: 22px;
  background-color: #D97ADA;
  color: white;
  padding: 12px 30px;
  border: none;
  cursor: pointer;
`;

