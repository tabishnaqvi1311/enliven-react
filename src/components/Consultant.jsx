import { psychologist } from "../constants";
import TransitionEffect from "./TransitionEffect";
const Consultant = () => {
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
              className="flex flex-col items-center gap-2 cursor-pointer">
              <img
                src={list.photo}
                className="rounded-full w-[150px] h-[150px]"
              />
              <p className="text-2xl font-bold">{list.label}</p>
              <p className="text-xl">{list.designation}</p>
              <p>{list.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consultant;
