import {AnimatePresence, motion} from "framer-motion";
import {useState} from 'react';

const  ChildCard = ({name, confidence, knowledge, age}) => {

    const [isOpen, setIsOpen] = useState(false);

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <>
        {isOpen && <div className="fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-50" />}
        {/*add child modal, POSTS to 'api/user/(userId)/child*/}
          <AnimatePresence>
            {isOpen && (
              <motion.div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-40 shadow-md"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={modalVariants}>
                <div className="bg-white flex flex-col p-10">
                    {confidence}
                    {knowledge}
                   <button
                      className="bg-red-400 text-white rounded px-4 py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      Close
                    </button>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border p-4 m-4 hover:bg-gray-50 transition-all duration-150 cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-green-700">{name}</div>
                    <p className="text-black text-base">aged {age}</p>
            </div>
        </div> 

        </>
    )
}

export default ChildCard;
