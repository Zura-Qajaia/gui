import { useState } from "react";
import Navigation from "../components/Navigation";
import SideNavigation from "../components/SideNavigation";
import image1 from "./../../public/images/about-1.png";
import image2 from "./../../public/images/about-2.png";
import image3 from "./../../public/images/about-3.png";
import TextArea from "../components/TextArea";

export default function Home() {
  const [text, setText] = useState(" ");
  const [showKeyboard, setShowKeyboard] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <div className="flex flex-row flex-grow">
        <div className="flex flex-col w-1/4 border-r-2 border-solid border-slate-400">
          <SideNavigation />
        </div>
        <div className="flex-grow">
          <main className="ml-4 mt-4 bg-slate-300 p-4">
            <h1 className="mb-4 text-2xl ml-12">Welcome to Chegg, Zura!</h1>
            <h3 className="p-2 ml-12">
              Expert help combined with AI, available 24/7.
            </h3>
            <TextArea
              text={text}
              showKeyboard={showKeyboard}
              setText={setText}
              setShowKeyboard={setShowKeyboard}
            />
            <div className="flex flex-row ml-16">
              <div>
                <h1 className="p-2 ml-10 text-2xl font-bold">
                  Study smarter with Chegg.
                </h1>
                <p className="vertical-text ml-16 w-1/3">
                  91% of Chegg customers say they get better grades when they
                  use Chegg to understand their coursework.
                </p>
              </div>
              <div className="ml-12">
                <div className="flex flex-row bg-white mt-3 rounded-md shadow-md w-60 h-16">
                  <img src={image1} alt="100 million+ expert solutions" />
                  <span className="mt-3 ml-2">
                    100 million+ expert solutions
                  </span>
                </div>
                <div className="flex flex-row bg-white mt-3 rounded-md shadow-md w-60 h-16">
                  <img src={image2} alt="Save solutions for study time" />
                  <span className="mt-3 ml-2">
                    Save solutions for study time
                  </span>
                </div>
                <div className="flex flex-row bg-white mt-3 rounded-md shadow-md w-60 h-16">
                  <img src={image3} alt="Math help and grammar checks" />
                  <span className="mt-3 ml-2">
                    Math help and grammar checks
                  </span>
                </div>
              </div>
            </div>
          </main>
          <h5 className="mt-6 text-xs ml-5 w-70">
            'Chegg survey fielded between Sept. 24 – Oct. 12, 2023 among U.S.
            customers who used Chegg Study or Chegg Study Pack in Q2 2023 and Q3
            2023. Respondent base (n=611) among approximately 837,000 invites.
            Individual results may vary. Survey respondents were entered into a
            drawing to win 1 of 10 $300 e-gift cards.'
          </h5>
        </div>
      </div>
    </div>
  );
}
