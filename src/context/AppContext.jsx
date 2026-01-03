import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const productsData = [
  {
    id: 1,
    name: "Blue Sapphire Tennis Necklace",
    category: "Necklaces",
    price: 70000,
    offerPrice: 50000,
    rating: 4,
    image:
      "https://i.pinimg.com/1200x/e2/1c/a9/e21ca9af8bfc7818f525f0123a3179a6.jpg",
  },
  {
    id: 2,
    name: "Emerald Gem Necklace",
    category: "Necklaces",
    price: 85000,
    offerPrice: 65000,
    rating: 5,
    image:
      "https://i.pinimg.com/736x/3a/f4/e3/3af4e3652a640bdcc98a6e9157b39aa2.jpg",
  },
  {
    id: 3,
    name: "Gold Engagement Rings",
    category: "Rings",
    price: 95000,
    offerPrice: 75000,
    rating: 5,
    image:
      "https://i.pinimg.com/736x/23/d6/04/23d60413192f88392dfcb7dcaf2d2193.jpg",
  },
  {
    id: 4,
    name: "Aqua Marine Bubble Heart Necklace",
    category: "Necklaces",
    price: 45000,
    offerPrice: 35000,
    rating: 4,
    image:
      "https://i.pinimg.com/1200x/59/9d/a8/599da8af325251af7545377bfb790622.jpg",
  },
];

export const AppContext = createContext();

export const AppContextProvider = ({children})=>{
    const navigate = useNavigate();
    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [productsState, setProductsState] = useState([])//fixed

    const fetchProducts = async ()=> {
        setProductsState(productsData)
    }

    useEffect(()=>{
      fetchProducts()
    },[])


    const value = {
      navigate,
      user,
      setUser,
      setIsSeller,
      isSeller,
      showUserLogin,
      setShowUserLogin,
      products: productsState
    };

    return <AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>;
}

export const useAppContext = ()=>{
    return useContext(AppContext)
}