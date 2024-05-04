import { useState } from "react";
import { psychologist } from "../constants";
import TransitionEffect from "./TransitionEffect";
import  {motion, AnimatePresence } from "framer-motion";
const Consultant = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [sendMessageTo, setSendMessageTo] = useState("");

  const handleSend = async(e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:8181/api/mail/send-mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rec: sendMessageTo
      })
    });

    const json = await response.json();
    console.log(json);


  }



  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="w-full p-3">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3 className="text-primary">Consult</h3>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-16 mt-10">
          {psychologist.map((list, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 cursor-pointer" onClick={() => {
                setIsOpen((prev) => !prev);
                setSendMessageTo(list.label);
              }}>
              <img
                src={list.photo}
                className="rounded-full w-[150px] h-[150px]"
              />
              <p className="text-2xl font-bold">{list.label}</p>
              <p className="text-xl">{list.designation}</p>
              <p>{list.experience}</p>

            </div>

          ))}

          {isOpen && <div className="fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-50" />}

          <AnimatePresence>
            {isOpen && (
              <motion.div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-40 shadow-md" 
              initial="hidden"
                animate="visible"
                exit="hidden"
                variants={modalVariants}>
                <div className="bg-white p-8 rounded">
                  <h5 className="text-2xl text-center py-2">Send Message To {sendMessageTo}</h5>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message"
                    className="border border-gray-400 rounded p-2 mb-2 text-lg"
                  />
                  <div className="flex flex-row gap-5 justify-center py-2">
                    <button
                      className="bg-[#8bc53f] text-white rounded px-4 py-2"
                      onClick={handleSend}
                    >
                      Send
                    </button>
                    <button
                      className="bg-red-400 text-white rounded px-4 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Consultant;
