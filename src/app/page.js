import Image from "next/image";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
//import { MDBFooter } from "mdb-react-ui-kit";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/tekstac_2018.jpg";
import web2 from "../../public/itrack.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import React from "react";

//'use client';
// import { useState } from "react";

// export default function DarkModeCode() {

//    const [darkMode, setDarkMode] = useState(false);
//    return (
//     <div>
//       <BsFillMoonStarsFill
//                   onClick={() => setDarkMode(!darkMode)}
//                   className="cursor-pointer"
//                 />
//     </div>
//   )
// }// className={darkMode ? "dark" : ""}

export default function Home() {
  //const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <main className=" px-10  min-h-screen ">
        <section className="bg-white-500 min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons ">Developedby</h1>
            <ul className="flex items-center">
              <li>
                {/* <DarkModeCode></DarkModeCode> */}
                {/* {" "}
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer"
                />{" "} */}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-green-500 text-white px-4 py-2 rounded-md ml-8"
                  href="Dinesh_Durai_Resume_2023.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-2">
            <h2 className="text-5xl py-2 text-teal-500 font-medium">
              Dinesh Durai
            </h2>
            <h3 className="text-2xl py-2">Team Lead and Moodle Developer</h3>
            <p className="text-md py-5 leading-5 text-gray-800">
              Freelancer Providing solution on edutech. Having 8+ years of
              proven experience in Software Development and Edutech space.
              Excellent reputation for resolving problems, providing scalable
              stable system and improving customer satisfaction.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.linkedin.com/in/dinesh-durai-752b46104/">
              <AiFillLinkedin />
            </a>
            <a href="https://www.youtube.com/@dineshdurai9820">
              <AiFillYoutube />
            </a>
            <a href="https://github.com/Dineshdurai">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
            <Image
              src={deved}
              alt="portfolio-image"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </section>
        <section className="">
          <div>
            <h3 className="text-3xl py-1">Services I Offer</h3>
            <p className="text-md py-5 leading-5 text-gray-800">
              Since the beginning of my journey as Moodle Developer, I have
              worked with varies clients across the glob{" "}
              <span className="text-teal-500">
                {" "}
                Capgemini, CTS, Accenture, ACD, RANZCO, CICM{" "}
              </span>{" "}
              and etc.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services, Moodle Consultancy, Moodle
              Development, Integration and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            {/* <div className=" text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div>
                <Image
                  class="object-center"
                  src={design}
                  width={100}
                  height={100}
                  alt="portfolio-image"
                />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div> */}
            <div className="text-left shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={code}
                width={100}
                height={100}
                alt="portfolio-image"
              />
              <h3 className="text-center text-lg font-medium pt-8 pb-2 ">
                Setup you Dream LMS Site
              </h3>
              <p className="text-center py-2">
                Do you have an idea for your next great LMS website? Let us make
                it a reality.
              </p>
              <h4 className="py-4 text-teal-600">Moodle Services </h4>
              <p className="text-gray-800 text-left py-1">
                Microsoft 365/Azure AD to Moodle
              </p>
              <p className="text-gray-800 text-left py-1">
                Wordpress to Moodle SSO
              </p>
              <p className="text-gray-800 text-left py-1">
                Zoho CRM Moodle Integration
              </p>
              <p className="text-gray-800 text-left py-1">
                VPL Plugin Installing and Jail server Setup
              </p>
              <p className="text-gray-800 text-left py-1">
                Payment Gateway Integration
              </p>
              <p className="text-gray-800 text-left py-1">
                Moodle Setup and Hosting in AWS
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={consulting}
                width={100}
                height={100}
                alt="portfolio-image"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Consulting On Moodle LMS
              </h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600 text-left">
                Consulting Services
              </h4>
              <p className="text-gray-800 text-left py-1">
                Improve LMS performance
              </p>
              <p className="text-gray-800 text-left py-1">Best Practices</p>
              <p className="text-gray-800 text-left py-1">
                Root Cause Analysis
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I have done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                alt="portfolio-image"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                alt="portfolio-image"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                alt="portfolio-image"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                alt="portfolio-image"
              />
            </div>
          </div>
        </section>
      </main>

      <footer bgColor="light" className="text-center text-lg-left">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright Designed & Developed By:{" "}
          <a
            className="text-dark"
            href="https://dineshportfolio-app.vercel.app/"
          >
            Dinesh Durai
          </a>
        </div>
      </footer>
    </div>
  );
}

// export default function App() {
//   return (
//     <MDBFooter bgColor='light' className='text-center text-lg-left'>
//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         &copy; {new Date().getFullYear()} Copyright:{' '}
//         <a className='text-dark' href='https://mdbootstrap.com/'>
//           MDBootstrap.com
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }
