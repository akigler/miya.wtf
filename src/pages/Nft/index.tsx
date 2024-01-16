import TitleBar from '@/components/TitleBar'
import WindowWrapper from '@/components/WindowWrapper'
import Pages from '@/constants/pages'
import { useAppDispatch } from '@/store/hooks'
import { closeWindow, minimizeWindow } from '@/store/windows/actions'
import { useFullscreen } from '@/store/windows/hooks'
import miyaBackground from '@/assets/miya_minter_background.jpeg'
import miyaCollectionImage from '@/assets/miya_minter_collection.png'


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
      <div 
      style={{ backgroundImage: `url(${miyaBackground})`,
       backgroundSize: '100%',
      // backgroundRepeat: 'no-repeat',
      // backgroundPosition: 'center center',
      padding: '2rem',
        minHeight: '100vh',
     }}>
      <div style={{backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: '2rem', 
    // margin: '2rem', 
    borderRadius: '0.5rem', 
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
       <header style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', 
          paddingBottom: '24px',
        }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>MIYA MINT</h1>
          <div style={{ fontSize: '16px' }}>MINTED: 123 / 6969</div>
        </header>
        <div style={{ display: 'flex' }}>
        <div style={{
  display: 'flex',
  flexDirection: 'column', 
  alignItems: 'center', 
  padding: '16px', 
  borderRadius: '8px', 
  maxWidth: '320px', 
  width: '100%', 
  gap: '1rem', 
}}>
  {/* Collection Name */}
  <div style={{ fontSize: '20px', fontWeight: 'bold', margin: '0.5rem 0' }}>
    Collection: Miya WTF
  </div>

  {/* Free Mint Option */}
  <div>
    <label style={{ padding: '3px', fontSize: '16px', fontWeight: 'bold' }}>Free Mint</label>
  <div style={{ width: '100%', display: 'flex', gap: '10px', alignItems: 'center' }}>
    <input
      type="number"
      defaultValue={1}
      min={1}
      style={{
        flex: 1,
        padding: '10px',
        borderRadius: '4px',
        border: '3px solid #D97ADA' // Light grey border
      }}
    />
    <button style={{
      backgroundColor: '#D97ADA', // Light purple background
      color: 'white',
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}>
      Mint
    </button>
  </div>
  <span style={{ padding: '3px', fontSize: '16px', fontWeight: 'bold' }}>0.0 Ξ each</span>
  </div>

    {/* Paid Mint Option */}
  <div>
    <label style={{ padding: '3px', fontSize: '16px', fontWeight: 'bold' }}>Paid Mint</label>
  <div style={{ width: '100%', display: 'flex', gap: '10px', alignItems: 'center' }}>
    <input
      type="number"
      defaultValue={1}
      min={1}
      style={{
        flex: 1,
        padding: '10px',
        borderRadius: '4px',
        border: '3px solid #D97ADA' // Light grey border
      }}
    />
    <button style={{
      backgroundColor: '#D97ADA', // Light purple background
      color: 'white',
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    }}>
      Mint
    </button>
  </div>
  <span style={{ padding: '3px', fontSize: '16px', fontWeight: 'bold' }}>0.0 Ξ each</span>
  </div>
</div>




          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* Miya Image Section */}
            <img 
              src="src/assets/miya_minter_collection.png"
              alt="Miya NFT" 
              style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
        {/* <div className="flex justify-between items-start"> */}
        {/* <div className="flex-1"> */}
            {/* <section>
              <h2 className="text-2xl font-semibold mb-4">Collection: Miya WTF</h2>
              <div className="mb-6">
                <label className="block mb-2">Free mint</label>
                <div className="flex">
                  <input type="number" className="border p-2 mr-2 w-full" defaultValue={1} min={1} />
                  <button className="bg-purple-500 text-white px-4 py-2">Mint</button>
                </div>
              </div>
              <div className="mb-6">
                <label className="block mb-2">Paid mint</label>
                <div className="flex">
                  <input type="number" className="border p-2 mr-2 w-full" defaultValue={1} min={1} />
                  <span className="self-center">0.069 Ξ each</span>
                </div>
              </div>
              <button className="bg-purple-500 text-white px-4 py-2 w-full">Mint</button>
            </section>
            <section className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Details:</h3>
              <p>Do you want to get F'd out of your Miya?</p>
              <div className="mt-4">
                <button className="bg-purple-500 text-white px-4 py-2 w-full">Wallet</button>
              </div>
            </section>
          </div>
          <div className="flex-1 flex justify-center items-center">
            {/* Place for the Miya Image */}
            {/* <img src="src/assets/miya_minter_collection.png" alt="Miya NFT" className="rounded-lg shadow-lg" /> */}
          {/* </div> */} 
        </div>
        
      </div>
        
    </WindowWrapper>
  )
}
