import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/login/firebase/Firebase.init";

initializeAuthentication();
const GoogleProvider = new GoogleAuthProvider();

const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading,setLoading ] = useState(true);
    // signInWithPopup(auth ,GoogleProvider)
    // .then (result =>{
    //     setUser(result.user);
    // })

    const signInUsingGoogle = () => {
        setLoading(true);
      return  signInWithPopup(auth, GoogleProvider)
            // .then(result => {
            //     setUser(result.user);
            // })
    }
    const logout = () => {
        setLoading(true)
        signOut(auth)
        
            .then(() => {

                setUser({});
            })
            .finally((setLoading(false)))
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('insite state change', user);
                setUser(user);
            }
            else{
                setUser({})
            }
            setLoading(false);

        })
    }, [])
    return {
        user,
        signInUsingGoogle,
        logout,
        loading
    }

}
export default useFirebase;