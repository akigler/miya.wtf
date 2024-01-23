import TitleBar from '@/components/TitleBar'
import WindowWrapper from '@/components/WindowWrapper'
import Pages from '@/constants/pages'
import { useAppDispatch } from '@/store/hooks'
import { closeWindow, minimizeWindow } from '@/store/windows/actions'
import { useFullscreen } from '@/store/windows/hooks'
import miyaBackground from '@/assets/miya_minter_background.jpeg'
import miyaCollectionImage from '@/assets/miya_minter_collection.png'
import miyaLogo from '@/assets/134321870.png'
import { goerli } from 'viem/chains'
import {
  mainnet,
  useAccount,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';
import contractABI from './abi.json';
import { useEffect, useState } from 'react';



import * as S from './Nft.styles'
import { any } from 'zod'
import { TransactionReceipt } from 'viem'
// import { FACTORY_CONTRACT, FACTORY_CONTRACT } from '@/constants/contracts'
// import { FACTORY_CONTRACT } from '@/constants/contracts'
// import { FACTORY_CONTRACT } from '@/constants/contracts'

const contractAddress = '0x228F90DC6e1FaFb7a6E96254Ba502363AD7eB66e';
const page = Pages.nft

export default function MintPage() {
    // Network
    const { chain } = useNetwork()
  
    // Account
    const { isConnected, address } = useAccount()
    const [txnHash, setTxnHash] = useState('');
    // const [txnHash, setTxnHash] = useState<TransactionReceipt | undefined>()
    // Prepare the contract write
  const { config } = usePrepareContractWrite({
    address: contractAddress,
    chainId: chain?.id,
    abi: contractABI,
    functionName: 'mint', // Replace with your contract's function name
    args: [address, 1], // Replace with the appropriate arguments for your function
    // Add other necessary properties like `value` if your function requires ETH
  });
  // console.log('config: ', config)
  

  // const handleMint = async () => {
  //   const { data: writeContractResult } = useContractWrite(config);
  //   if (!isConnected || !writeContractResult) {
  //     console.log({isConnected: isConnected, writeContractResult: writeContractResult})
  //     return;
  //   }
  //   console.log('writeContractResult: ', writeContractResult)
  //   try {
  //     const { isLoading: isApproving } = useWaitForTransaction({
  //       hash: writeContractResult ? writeContractResult.hash : undefined,
  //       onSuccess(data) {
  //         setTxnHash(data)
  //         // refetch()
  //       },
  //     })
  //     // const tx = await writeContractResult();
  //     console.log('Transaction sent:', txnHash);
  //   } catch (error) {
  //     console.error('Error minting:', error);
  //   }
  // };
  const { write, error: writeError } = useContractWrite(config);

    const { data: txData, isLoading: isTxLoading } = useWaitForTransaction({
        hash: txnHash,
    });

    const handleMint = async () => {
        if (!isConnected || !write) {
            console.error('Not connected or contract write not available');
            return;
        }

        try {
            const tx = await write();
            console.log(txData)
            // setTxnHash(tx.hash);
        } catch (error) {
            console.error('Error minting:', error);
        }
    };

    useEffect(() => {
        if (txData) {
            // Handle successful transaction
            console.log('Transaction succeeded:', txData);
        }
    }, [txData]);

    // Handle write errors
    useEffect(() => {
        if (writeError) {
            console.error('Error with writing contract:', writeError);
        }
    }, [writeError]);

    
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
        <S.MintButton onClick={handleMint}>Mint</S.MintButton>
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
