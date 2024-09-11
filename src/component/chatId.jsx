import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import profile from '../component/img/images.png'
import { useNavigate } from "react-router-dom";
import Navbar, { ChatNavbar } from "./navebar";


function ChatS() {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [myUid, setMyUid] = useState('');
    const [userName, setUserName] = useState('')

    useEffect(() => {
        getUsers()
    },[])

    let getUsers = async () => {
        const uid = localStorage.getItem('userUid');
        setMyUid(uid)
        let listC = []
        const querySnapshot = await getDocs(collection(db, "user"));
        querySnapshot.forEach((doc) => {
            listC.push(doc.data());
            if (doc.data().uid == uid) {
                localStorage.setItem('userName' , doc.data().name)
            }
        });
        setUsers(listC)
        console.log(users);

    }

    const filterUserList = users.filter((e)=>{
        return e.uid!== myUid
    })

    return (
        <>
        <Navbar />
            
        <div className="w-[100%] h-[100vh] bg-slate-100 p-2 flex flex-col items-center pt-20 ">
            {filterUserList.map(item => (
                
                <div key={item.uid} onClick={()=>{navigate('/chatMasseg' , {state : {...item , myUid } })}} className="w-[80%] border mt-7 cursor-pointer  shadow-md shadow-slate-500 border-slate-600 flex justify-between px-5 py-1 rounded">
                    <div className="flex gap-2">
                    <img width="64" height="64" src={"https://img.icons8.com/nolan/64/user-default.png" }alt="user-default"/>
                    <div className="flex flex-col text-lg p-3  ">
                        <h1 className="font-medium text-xl">{item.name.slice(0,1).toUpperCase()}{item.name.slice(1)}</h1>
                        <h1 className="text-sm">{item.email}</h1>
                    </div>
                    </div>

                    <button className="text-blue-600 font-semibold  hover:underline ">Massage</button>

                </div>
               
            ))}
        </div>
        </>
    )
}

export default ChatS