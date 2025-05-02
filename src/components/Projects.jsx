import Project from "./Project";
import shoppingImage from "../assets/shopping-site.png";
import cvBuilderImage from "../assets/cv-builder.png";
import clubHouseImage from "../assets/club-house.png";
import myBlogSite from "../assets/my-blog-site.png";

const Projects = () => {
  return (
    <section className="mb-24 flex flex-col justify-center items-center w-full">
      <h2 className="text-4xl text-gray-800 font-bold">I have built,</h2>
      <div className="w-[100%] md:w-[100%] lg:w-[75%] mt-16 mb-8 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Project
          imageSource={myBlogSite}
          title="Personal Blog Site"
          githubLink="https://github.com/madesh02104/MyBlogSite"
          liveLink="https://madesh-blogs-user.netlify.app"
        />
        <Project
          imageSource={clubHouseImage}
          title="Club House"
          githubLink="https://github.com/madesh02104/ClubHouse?tab=readme-ov-file"
          liveLink="https://clubhouse-production-046c.up.railway.app/"
        />
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
