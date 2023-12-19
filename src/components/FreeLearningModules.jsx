import { freeLearningModules } from "../constants";
import TransitionEffect from "../components/TransitionEffect";
const FreeLearningModules = () => {
  return (
    <div className="w-full p-3">
      <TransitionEffect />
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3 className="text-primary">Features</h3>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-16 mt-10">
          {freeLearningModules.map((list, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 border-2 rounded-xl border-primary p-3 cursor-pointer">
              <div>
                <img
                  src={list.image}
                  className="w-[300px] h-[300px] rounded-xl"
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <p className="text-2xl font-bold">{list.label}</p>
                <p className="lg:w-[15rem] text-center">{list.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeLearningModules;
