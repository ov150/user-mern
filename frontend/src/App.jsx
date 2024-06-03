import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth"
import { auth } from "./firebase";
import { useGetUserMutation, useLoginMutation } from "./redux/api/userApi";
import { useEffect } from "react";
import { userExist, userNotExist } from "./redux/reducer/userReducer";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("logged in");
        // const data = await getUser(user.uid);
        const getUser = useGetUserMutation();
        const res = await getUser(user.uid)
        // axios.get(`http://localhost:4000/api/v1/user/${id}`)
        //  getUser(user.uid);
        dispatch(userExist(res.user))
      }
      else{
        console.log("not logged in");
        dispatch(userNotExist())
      }
    })
  },[])

  const [login] = useLoginMutation()

  const handleSub = async () =>{
    try {
      const provider = new GoogleAuthProvider();
      const {user} = await signInWithPopup(auth, provider);
      const res = await login({
        username: user.displayName,
        email: user.email,
        photo: user.photoURL,
        uid:user.uid,
      })
      if("data" in res){
        console.log(res.data.message);
      }
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <button onClick={handleSub}>google</button>
    </>
  )
}

export default App
