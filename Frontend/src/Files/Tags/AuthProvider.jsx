import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"
const AuthContext = createContext();

export const AuthProvider = ({children}) => {

  // Variables ========================================================

  const [Logged, setLogged] = useState("");

  // ========================================================
  // ========================================================
  // ========================================================


  // API ========================================================

  const onStart = async () => {

    console.log("onStart Started");

    try
    {
      const response = await axios.get("http://localhost:5000/api/user/onstart", {

        headers: {"Content-Type": "application/json"},
        withCredentials: true

      })

      const result = response.data;
      console.log(result);

      if(result.code==1)
      {
        alert("Session Expired. Please Login Again.")
        setLogged(false)
        // window.location.href = ("/login")
      }
      else if(result.code==2)
      {
        alert("Unexpected error from VerifyToken Middleware. try connecting support")
        setLogged(false)
      }
      else if(result.code==3)
      {
        setLogged(true)
      }
      else if(result.code==4)
      {
        alert("Unexpected error")
        setLogged(false)
      }
    }
    catch(err)
    {
      console.log("myErr onStart :=== " + err);
    }
    finally
    {
      console.log("onStart Ended");
    }

  }

  useEffect(() => {

    const LoggedValue = setLogged(localStorage.getItem("Logged"))
    if(LoggedValue === "true")
    {
      setLogged(true);
    }
    else if(LoggedValue === "false")
    {
      setLogged(false);
    }
    else
    {
      setLogged("");
    }

    onStart()

  }, [])

  useEffect(() => {

    localStorage.setItem("Logged", Logged);

  }, [Logged])

  // ========================================================
  // ========================================================
  // ========================================================




  return(
    
    <AuthContext.Provider value={{Logged, setLogged}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {

  return useContext(AuthContext);

}