// hooks/useIsAdmin.ts
import { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react'
import { checkIsAdmin } from './services';

export function useIsAdmin() {
   const { isSignedIn } = useAuth(); // Hook z Clerk, sprawdzający stan logowania użytkownika
   const [isAdmin, setIsAdmin] = useState(false);

   useEffect(() => {
      const fetchIsAdmin = async () => {
         try {
            const res = await checkIsAdmin();
            setIsAdmin(res);
         } catch (error) {
            console.error('Error checking admin status:', error);
            setIsAdmin(false); // W przypadku błędu ustaw isAdmin na false
         }
      };

      // Jeśli użytkownik jest zalogowany, sprawdzaj jego status admina
      if (isSignedIn) {
         fetchIsAdmin();
      } else {
         setIsAdmin(false); // Gdy użytkownik jest wylogowany, ustaw isAdmin na false
      }
   }, [isSignedIn]); // Dodaj `isSignedIn` jako zależność, aby reagować na zmiany stanu zalogowania

   return { isAdmin };
}
