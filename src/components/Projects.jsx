import Project from "./Project";
import shoppingImage from "../assets/shopping-site.png";
import cvBuilderImage from "../assets/cv-builder.png";
import todoListImage from "../assets/todo-list.png";
import clubHouseImage from "../assets/club-house.png";
const Projects = () => {
  return (
    <section className="mb-24 flex flex-col justify-center items-center w-full">
      <h2 className="text-4xl text-gray-800 font-bold">I have built,</h2>
      <div className="w-[100%] md:w-[100%] lg:w-[75%] mt-16 mb-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Project
          imageSource={shoppingImage}
          title="Shopping Site"
          githubLink="https://github.com/madesh02104/react-projects/tree/main/shopping-site"
          liveLink="https://madesh02104-kadai.netlify.app/"
        />
        <Project
          imageSource={cvBuilderImage}
          title="CV Builder"
          githubLink="https://github.com/madesh02104/react-projects/tree/main/cv-builder"
          liveLink="https://madesh02104-cv-builder.netlify.app/"
        />
        <Project
          imageSource={todoListImage}
          title="Todo List"
          githubLink="https://github.com/madesh02104/javascript-projects/tree/main/todo-list"
          liveLink="https://madesh02104.github.io/javascript-projects/todo-list/dist"
        />
        <Project
          imageSource={clubHouseImage}
          title="Club House"
          githubLink="https://github.com/madesh02104/ClubHouse?tab=readme-ov-file"
          liveLink="https://clubhouse-production-046c.up.railway.app/"
        />
      </div>
      <a
        href="https://github.com/madesh02104"
        target="_blank"
        className=" text-lg mr-16 hover:text-emerald-500"
      >
        View more on github &#8594;
      </a>
    </section>
  );
};

export default Projects;
