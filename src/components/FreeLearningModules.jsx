import React from "react";
import { Link } from "react-router-dom";
import { freeLearningModules } from "../constants";

// Helper function to create slugs from labels
const createSlug = (label) => label.toLowerCase().replace(/\s+/g, "-");

const FreeLearningModules = () => {
  return (
    <div className="w-full p-3">
      
      <div className="container mx-auto">
        <h3 className="text-primary">Free Learning Modules</h3>
        <div className="flex flex-wrap justify-center gap-16 mt-10">
          {freeLearningModules.map((module, index) => {
            const slug = createSlug(module.label);
            return (
              <Link
                key={index}
                to={`/blog/${slug}`}
                className="flex flex-col items-center gap-3 border-2 rounded-xl border-primary p-3 cursor-pointer"
              >
                <img
                  src={module.image}
                  alt={module.label}
                  className="w-[300px] h-[300px] rounded-xl"
                />
                <div className="flex flex-col items-center gap-2">
                  <p className="text-2xl font-bold">{module.label}</p>
                  <p className="lg:w-[15rem] text-center">{module.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FreeLearningModules;
