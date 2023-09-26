import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import Router from './router'
import client from './services/queryClient'
import store, { persister } from './store'
import { PersistGate } from 'redux-persist/integration/react'

export const App = () => {
  return <Provider store={store}>
   <PersistGate persistor={persister}>
    <QueryClientProvider client={client}>
      <Router />
    </QueryClientProvider>
   </PersistGate>
  </Provider>
}
