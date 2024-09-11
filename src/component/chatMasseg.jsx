import { addDoc, collection, getDocs ,query, where  , onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {  useLocation, useNavigate } from "react-router-dom";



export default function ChatMassege() {
    const myName = localStorage.getItem('userName')

    const [message, setMessage] = useState([]);
    const [chatList, setChatList] = useState([])
    

    const navigate = useNavigate();
    const { state } = useLocation()


   
    

    useEffect(() => {
        try {

            const q = query(collection(db, "chat"), where(state.uid, "==", true), where(state.myUid, "==", true));
            const unsubscribe = onSnapshot(q, (docSnap) => {
                const list = [];
                docSnap.forEach((doc) => {
                    list.push(doc.data());
                });
                const sortList = list.sort((a,b) => a.createdAt - b.createdAt)
                setChatList(sortList);
                
                
                
                
                
                return () => unsubscribe()
            });
        } catch (e){
            console.error("Error fetching documents: ", e);
        }
    },[]);

   






    const sandMsg = async () => {
        if (message !== '') {
            
            
            try {
            const docRef = await addDoc(collection(db, "chat"), {
                message: message,
                [state.myUid]: true,
                [state.uid]: true,
                sandereUid : state.myUid,
                createdAt: new Date(),
                sandereName : myName,
            });

            setMessage('')
            // console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }else{
        alert('Write a message to send')
        // Swal.fire("SWrite a message to send");
    }
        
    }



    return (
        <>
            <div className=" p-2 border-b bg-white border-gray-600 flex justify-between fixed w-full  px-4 items-center">
                <div className="flex justify-center items-center gap-3 ">
                    <img onClick={() => { navigate('/chatId') }} width="30" height="50" src="https://img.icons8.com/ios/50/circled-left--v1.png" alt="circled-left--v1" />
                    <img width="64" height="64" src="https://img.icons8.com/nolan/64/user-default.png" alt="user-default" />
                    <h1 className="font-semibold text-lg">{state.name.slice(0, 1).toUpperCase()}{state.name.slice(1)}</h1>
                </div>
                <button className="font-semibold text-lg" >Logout</button>
            </div>
            <div className="w-full pt-24 h-[80vh] md:h-[90vh] overflow-y-auto flex flex-col gap-8 p-4 ">
            {chatList.map((item ,index) => (
                
                <div key={index} className={` flex ${item.sandereUid == state.myUid ? 'justify-end' : 'justify-start '}`}>
                       <div className=" border p-2 flex  justify-between  gap-1  shadow-md shadow-slate-400 border-slate-600  rounded">
                        <h1 className="font-medium py-1 px-4 text-xl">{item.message.slice(0,1).toUpperCase()}{item.message.slice(1)}</h1>
                      {/* <h1 className="text-sm  text-gray-500 self-end">{moment(item.createdAt).startOf('seconds').fromNow() }</h1> */}
                        </div>
                </div>
               
            ))}
            </div>
            <div className="w-full h-[10vh]   pt-3  fixed flex items-center justify-center gap-3 p-1">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} className="w-[70%] border  border-gray-500 rounded px-6 py-2   " placeholder="Enter Message" />
                <button onClick={sandMsg} className="w-40 p-2 text-white font-semibold bg-blue-600 rounded-md">Sand</button>
            </div>

        </>
    )
}