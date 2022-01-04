import { useWallet } from 'use-wallet'
import { Text } from '@chakra-ui/react'
import AdminPanel from '../components/Admin/AdminPanel'

export default function Admin() {
  const wallet = useWallet()

  return (
    <div>
      <main>
        {wallet.status === 'connected' ? (
          <AdminPanel />
        ) : (
          <Text textAlign="center" py={16} fontWeight="thin" fontSize="3xl" letterSpacing={1.5}>Connect your wallet to manage grants.</Text>
        )}
      </main>
    </div >
  )
}
