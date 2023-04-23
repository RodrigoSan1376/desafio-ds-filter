import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { useState } from "react";
import { findByPrice } from "./services/product-service";
import { ContextListCount } from "./utils/context-listing";


export default function App() {  

  const [contextListCount, setContextListCount] = useState<number>(findByPrice(0, Number.MAX_VALUE).length);

  return (
    <ContextListCount.Provider value={{ contextListCount, setContextListCount }}>    
      <Header />
      <ListingBody />
    </ContextListCount.Provider>
  )
}
