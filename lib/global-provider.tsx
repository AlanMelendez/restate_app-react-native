import { createContext, useContext } from "react";
import { getCurrentUser} from "./appwrite"
import { useAppwrite } from "./useAppwrite";


interface User {
    $id:string;
    name:string;
    email:string;
    avatar:string;
}

interface GlobalContextType {
    isLoggedIn: boolean;
    user : User | null;
    loading: boolean;
    refetch: (newParams?: Record<string , string | number>) => Promise<void>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);


export const GlobalProvider = ( {children}: {children: React.ReactNode} ) => {

    const { data:user, loading, refetch} = useAppwrite({
        fn: getCurrentUser,
    })

    const isLoggedIn = !!user; // If user existe {id:1, name:'Jhon'} then isLoggedIn is true... if user is null, undefined, false, 0 or empty... becomes false.

    console.log("User logged: ", user);

    return (
        <GlobalContext.Provider value={{isLoggedIn: false, user: null, loading: false, refetch: async () => {}}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = (): GlobalContextType => {
    const context =  useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }
    return context;
};


export default GlobalProvider;