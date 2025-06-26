import React, { useEffect, useRef, useState } from 'react'
import { ZIM } from "zego-zim-web";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function App() {
  const zpRef = useRef(null);
  const [showPopup, setShowPopup] = useState(true);
  const userID = "user" + Math.floor(Math.random() * 10000);
  const userName = "react_" + userID;
  const appID = 404407161;
  const serverSecret = "bd8f2b425a1a898213ed64c51f6491ea";
  const TOKEN = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, null, userID, userName);

  useEffect(() => {
    const zp = ZegoUIKitPrebuilt.create(TOKEN);
    zpRef.current = zp;
    zp.addPlugins({ ZIM });
  }, [TOKEN]);

  function invite(callType) {
    const targetUser = {
      userID: prompt("Enter the user ID to invite:"),
      userName: prompt("Enter the user name to invite:")
    };
    zpRef.current.sendCallInvitation({
      callees: [targetUser],
      callType,
      timeout: 60,
    }).then((res) => {
      console.warn(res);
    })
      .catch((err) => {
        console.warn(err);
      });
  }

  return (
    <div className="w-full h-screen bg-gradient-to-tl from-blue-900 to-blue-300 flex items-center justify-center">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 text-blue-700">Welcome to the Call App!</h2>
            <p className="mb-6 text-gray-700 text-xl">This is free version. Click continue to start using the app.</p>
            <button className="bg-blue-600 text-white w-[800px] h-[50px] rounded-xl hover:bg-blue-800" onClick={() => setShowPopup(false)}>
              Continue
            </button>
          </div>
        </div>
      )}
      <div className="w-[500px] h-[400px] bg-[#317ad9] border-2 border-gray-400 rounded-tl-[2vw] rounded-br-[2vw] flex flex-col items-center justify-center gap-3">
        <h2 className='text-white text-[20px]'><span className='text-emerald-300'>UserName : </span>{userName}</h2>
        <h2 className='text-white text-[20px]'><span className='text-emerald-300'>UserId : </span>{userID}</h2>

        <button className='bg-black text-xl text-white w-[150px] h-[50px] rounded-xl hover:bg-gray-700 cursor-pointer ease-in-out' onClick={()=>invite(ZegoUIKitPrebuilt.InvitationTypeVoiceCall)}>Voice Call</button>
        <button className='bg-black text-xl text-white w-[150px] h-[50px] rounded-xl hover:bg-gray-700 cursor-pointer ease-in-out' onClick={()=>invite(ZegoUIKitPrebuilt.InvitationTypeVideoCall)}>Video Call</button>
      </div>
    </div>
  )
}

export default App;