import React, { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import { RootStore, RootStoreProvider, setupRootStore } from 'Store';
import { AppNavigation } from 'Presentation/Navigation';

const App = () => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  useEffect(()=>{
    const loadPreviusSession = async () => {
      const store = await setupRootStore()
      setRootStore(store)
    }
    
    loadPreviusSession()
  },[])

  if(!rootStore) {
    return <Container>
      Loading ...
    </Container>
  }

  return (
    <RootStoreProvider value={rootStore}>
      <AppNavigation />
    </RootStoreProvider>
  );
}

export default App;
