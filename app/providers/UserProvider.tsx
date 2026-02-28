import { MyUserContextProvider } from "@/app/hooks/useUser";

interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> =async  ({ children}) => {
    return <MyUserContextProvider>
        {children}
    </MyUserContextProvider>
}

export default UserProvider;