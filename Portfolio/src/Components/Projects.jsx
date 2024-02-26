import img1 from "../assets/chatapp.png";
import img2 from "../assets/movieRe.png";
import img3 from "../assets/ecommerce.png";
import img4 from "../assets/gojo.png";
const Projects = (props) => {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Projects
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
        <a
          href="https://github.com/snmath-pi/mernStackRealTimeChat"
          target="_blank"
        >
          <img
            data-aos="fade-up"
            height={250}
            width={250}
            className="flex items-center justify-center  rounded-3xl  p-2 border-2 border-fuchsia-800 b_glow"
            src={img1}
            alt=""
          />
        </a>
        <a
          href="https://github.com/snmath-pi/moviesrecommendersystem"
          target="_blank"
        >
          <img
            data-aos="fade-up"
            height={250}
            width={250}
            className="flex items-center justify-center  rounded-3xl  p-2 border-2 border-fuchsia-800 b_glow"
            src={img2}
            alt=""
          />
        </a>
        <a href="https://snx03ecommerceweb.netlify.app/" target="_blank">
          <img
            data-aos="fade-up"
            height={250}
            width={250}
            className="flex items-center justify-center  rounded-3xl  p-2 border-2 border-fuchsia-800 b_glow"
            src={img3}
            alt=""
          />
        </a>
        <a
          href="https://snmath-pi.github.io/Flappy-Gojo.github.io/"
          target="_blank"
        >
          <img
            data-aos="fade-down"
            height={250}
            width={250}
            className="flex items-center justify-center  rounded-3xl  p-2 border-2 border-fuchsia-800 b_glow"
            src={img4}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
