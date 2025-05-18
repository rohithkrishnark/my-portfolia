import { Box } from "@mui/joy";
import { memo } from "react";
import '../../src/App.css'

import aboutpic from '../assets/three.jpeg';
import aboutpic2 from '../assets/two.jpeg';

const About = () => {
  return (
    <Box
      className="flex items-center justify-center bg-black"
      sx={{ width: "100%", height: "100vh" }}>

      <div className="w-2/4 h-full flex items-center justify-end ">
        <div id="one" style={{ backgroundColor: '#212529' }} className="block w-[50%] h-[80%] rounded-md  py-3 flex items-center justify-center ">
          <img src={aboutpic} alt="Image 1" className="fade-img img1 rounded-md" />
          <img src={aboutpic2} alt="Image 2" className="fade-img img2" />
        </div>
      </div>
      <div className="w-3/4 h-full ">
        <div className="w-[80%]  h-1/2  flex items-center flex-col gap-1 justify-center ">
          <div id="two" className="w-[90%] h-[20%]  block flex items-center ">
            <h2 className="font-robotoMono text-6xl text-white font-bold">AB<span className="text-green-400">O</span>UT ME</h2>
          </div>
          <div id="two" className="w-[90%] h-[50%]  block">
            <p className="font-robotoMono text-sm text-white text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam omnis odio eum reprehenderit accusantium ipsam atque delectus repellendus quaerat debitis, incidunt vitae veniam voluptates enim nam non magni quasi officiis.
              Nostrum aspernatur id molestiae velit harum eligendi nulla repellat error facilis maxime dolorem quis exercitationem maiores at, quasi dolor porro optio dicta! Eum ut eligendi molestias fuga, ex voluptatem sunt.
              Ipsam repudiandae sequi voluptate illo autem incidunt molestias eos, voluptates doloribus, odio eum consectetur! Veritatis velit blanditiis porro, soluta ratione itaque? Dolore soluta odio harum eius quibusdam nulla facilis cumque.

            </p>
          </div>
        </div>
        <div className="w-[82%] h-1/2  flex items-start justify-between">
          <div id="three" className="w-[40%] h-[70%] bg-blue-900 block"></div>
          <div id="four" className="w-[60%] h-[70%] bg-yellow-900 block"></div>
        </div>
      </div>
    </Box>
  );
};

export default memo(About);
