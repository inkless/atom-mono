import type { PropsWithChildren } from 'react';
import { createContext, useContext } from 'react';
import { useStorageState } from '@/hooks/useStorageState';

const AuthContext = createContext<{
  signIn: () => void;
  signOut: () => void;
  setSession: (s: string) => void;
  session?: string | null;
  isLoading: boolean;
}>({
  signIn: () => null,
  signOut: () => null,
  setSession: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  return (
    <AuthContext.Provider
      value={{
        signIn: () => {
          // Perform sign-in logic here
          setSession('auto-sign-token');
        },
        signOut: () => {
          setSession(null);
        },
        setSession,
        session,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
