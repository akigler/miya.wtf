import TitleBar from '@/components/TitleBar'
import WindowWrapper from '@/components/WindowWrapper'
import Pages from '@/constants/pages'
import { useAppDispatch } from '@/store/hooks'
import { closeWindow, minimizeWindow } from '@/store/windows/actions'
import { useFullscreen } from '@/store/windows/hooks'

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
    </WindowWrapper>
  )
}
