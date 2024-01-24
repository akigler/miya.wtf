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
  useContractRead
} from 'wagmi';
import contractABI from './abi.json';
import { useEffect, useState } from 'react';



import * as S from './Nft.styles'
import { any } from 'zod'
import { TransactionReceipt } from 'viem'
import { useSsr } from 'usehooks-ts'

const contractAddress = '0x228F90DC6e1FaFb7a6E96254Ba502363AD7eB66e';
const page = Pages.nft

export default function PaidMint() {
    // Network
    const { chain } = useNetwork()
  
    // Account
    const { isConnected, address } = useAccount()
    const [txnHash, setTxnHash] = useState('');

  const { config } = usePrepareContractWrite({
    address: contractAddress,
    chainId: chain?.id,
    abi: contractABI,
    functionName: 'mint', // Replace with your contract's function name
    args: [address, 1], // Replace with the appropriate arguments for your function
  });
  
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

    // Inside your component
const { data: totalSupplyData, isLoading: isTotalSupplyLoading } = useContractRead({
  address: contractAddress,
  abi: contractABI,
  functionName: 'totalSupply',
  watch: true // This will refetch the data when the chain changes
});



  return (
      <S.MintOption>
        <S.MintLabel>Paid Mint</S.MintLabel>
        <S.MintInputContainer>
        <S.MintInput type="number" defaultValue={1} min={1} />
        <S.MintButton onClick={handleMint}>Mint</S.MintButton>
        </S.MintInputContainer>
        <S.MintCost>0.069 Ξ each</S.MintCost>
      </S.MintOption>
  )
}
