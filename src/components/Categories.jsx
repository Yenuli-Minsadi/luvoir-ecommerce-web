import React from "react";
import { useAppContext } from "../context/AppContext";
import bracelet from "../assets/bracelet.jpeg";

// Define your categories data
const categoriesData = [
  { text: "Necklaces", path: "necklaces", bgColor: "#f5f5dc", image: bracelet },
  { text: "Bracelets", path: "bracelets", bgColor: "#f5f5dc", image: bracelet },
  { text: "Rings", path: "rings", bgColor: "#f5f5dc", image: bracelet },
  { text: "Earrings", path: "earrings", bgColor: "#f5f5dc", image: bracelet },

  // Add more categories as needed
];

const Categories = () => {
  const { navigate } = useAppContext();

  return (
    <div className="mt-6">
      <p className="text-2xl md:text-3xl font-medium">Categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
        {categoriesData.map((category, index) => {
          return (
            <div
              key={index}
              className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
              style={{ backgroundColor: category.bgColor }}
              onClick={() => {
                navigate(`/products/${category.path.toLowerCase()}`);
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={category.image}
                alt={category.text}
                className="group-hover:scale-110 transition max-w-28"
              />
              <p className="text-sm font-medium">{category.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
