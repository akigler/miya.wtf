import TitleBar from '@/components/TitleBar'
import WindowWrapper from '@/components/WindowWrapper'
import Pages from '@/constants/pages'
import { useAppDispatch } from '@/store/hooks'
import { closeWindow, minimizeWindow } from '@/store/windows/actions'
import { useFullscreen } from '@/store/windows/hooks'
import miyaBackground from '@/assets/miya_minter_background.jpeg'
import miyaCollectionImage from '@/assets/miya_minter_collection.png'
import miyaLogo from '@/assets/134321870.png'

import * as S from './Nft.styles'


const page = Pages.nft

export default function MintPage() {
  const [fullscreen, toggleFullscreen] = useFullscreen('nft')
  const dispatch = useAppDispatch()
  const close = () => dispatch(closeWindow({ value: 'nft' }))
  const minimize = () => dispatch(minimizeWindow({ value: 'nft' }))

  return (
    <WindowWrapper>
      <TitleBar
        closeBtn
        onClose={(e) => {
          if (e.cancelable) e.stopPropagation()
          close()
        }}
        fullscreen={fullscreen}
        fullscreenBtn
        onFullscreen={() => toggleFullscreen()}
        minimizeBtn
        onMinimize={(e) => {
          if (e.cancelable) e.stopPropagation()
          minimize()
        }}
      >
        {page?.label}
      </TitleBar>
      <S.BackgroundContainer backgroundImage={miyaBackground}>
      <S.TranslucentBox>
        <S.Header>
          <S.TitleContainer>
            <S.Logo src="src/assets/134321870.png" alt="Miya Logo" />
            <S.Title>MIYA MINT</S.Title>
          </S.TitleContainer>
          <S.MintCount>MINTED: 123 / 6969</S.MintCount>
          </S.Header>
          <S.CollectionContainer>
        <S.Section>

          <S.CollectionName>Collection: Miya WTF</S.CollectionName>
          <S.MintOption>
        <S.MintLabel>Free Mint</S.MintLabel>
        <S.MintInputContainer>
        <S.MintInput type="number" defaultValue={1} min={1} />
        <S.MintButton>Mint</S.MintButton>
        </S.MintInputContainer>
      </S.MintOption>
      
      <S.MintOption>
        <S.MintLabel>Paid Mint</S.MintLabel>
        <S.MintInputContainer>
        <S.MintInput type="number" defaultValue={1} min={1} />
        <S.MintButton>Mint</S.MintButton>
        </S.MintInputContainer>
        
      </S.MintOption>
    </S.Section>
    
    <S.ImageContainer>
      <S.CollectionImage src="src/assets/miya_minter_collection.png" alt="Miya NFT" />
    </S.ImageContainer>
    </S.CollectionContainer>
  </S.TranslucentBox>
</S.BackgroundContainer>
        
    </WindowWrapper>
  )
}
