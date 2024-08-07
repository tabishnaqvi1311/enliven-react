import { games } from "../constants";
import { useEffect, useState, useTransition } from "react";
import TabButton from "./TabButton";
import { AnimatePresence, motion } from "framer-motion";
import ChildCard from "./ChildCard";
// import { Circle } from "rc-progress";
const Dashboard = () => {

  const [username, setUsername] = useState("");
  const [tab, setTab] = useState("Child 1");
  const [startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState();

  const [children, setChildren] = useState([]);

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const user = localStorage.getItem("uid");

  const getUserEmail = async () => {
    const response = await fetch(`http://localhost:8181/api/user/${user}`);
    const json = await response.json();
    setUsername(json.email.split("@")[0]);

    const getChildren = await fetch(`http://localhost:8181/api/user/${user}/children`);
    const childrenjson = await getChildren.json();
    setChildren(childrenjson)

  }

  const createChild = async () => {
    const response = await fetch(`http://localhost:8181/api/user/${user}/child`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age })
    });
    const json = await response.json();
    console.log(json);
  }

  // const children = [];


  const modalVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  useEffect(() => {
    getUserEmail();
  }, [])

  return (
    <div className="w-full p-3">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-start justify-start mt-3">
          <h3 className="text-primary">Dashboard</h3>
          <p className="text-lg">Welcome, {username}</p>
        </div>

        <div className="flex items-center justify-center mt-10 ">
          <h3>Games</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-16 mt-10">
          {games.map((list, index) => (
            <div key={index} className="border-2 border-primary rounded-xl p-5">
              <div className="flex flex-col items-center gap-3">
                <img src={list.photo} className="w-[200px] h-[200px]" />
                <p className="text-xl font-bold">{list.label}</p>
              </div>
            </div>
          ))}
        </div>

        <hr className="mt-10" />

        <div className="flex flex-col justify-center items-center mt-10">

            <div className="flex md:flex-row flex-col">
            {children.length !== 0 && children.map((child) => (
                <ChildCard name={child.name} confidence={child.confidence} knowledge={child.knowledge} age={child.age}/>
            ))}
            </div>
      

          <button className="text-lg font-bold text-gray-600 border p-2 border-dashed rounded-xl border-gray-400 hover:bg-slate-100 transition-all duration-150 " onClick={() => setIsOpen(prev => !prev)}>+ ADD CHILD
          </button>

          {isOpen && <div className="fixed top-0 left-0 w-full h-full z-40 bg-black bg-opacity-50" />}
        {/*add child modal, POSTS to 'api/user/(userId)/child*/}
          <AnimatePresence>
            {isOpen && (
              <motion.div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-40 shadow-md"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={modalVariants}>
                <div className="bg-white p-8 rounded">
                  <div className="text-2xl text-center py-2">Enter Name</div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name of child"
                    className="border border-gray-400 rounded p-2 mb-2 text-lg"
                  />
                  <div className="text-2xl text-center py-2">Enter Age</div>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Enter age of child"
                    className="border border-gray-400 rounded p-2 mb-2 text-lg"
                  />
                  <div className="flex flex-row gap-5 justify-center py-2">
                    <button
                      className="bg-[#8bc53f] text-white rounded px-4 py-2"
                      onClick={createChild}
                    >
                      Add
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

export default Dashboard;
