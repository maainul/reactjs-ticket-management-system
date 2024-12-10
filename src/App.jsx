import BusIcon from "./assets/bus-svgrepo-com.svg";
import AirIcon from "./assets/airplane-front-svgrepo-com.svg";
import BoatIcon from "./assets/boat-sail-schooner-svgrepo-com.svg";
import TrainIcon from "./assets/train-svgrepo-com.svg";
import PhoneIcon from "./assets/phone-call-answer-svgrepo-com.svg";

function App() {
  return (
    <>
      <nav className="px-96">
        <div className="">
          <ul className="flex py-6 gap-8 items-center">
            <li className="hover:cursor-pointer">
              <img
                class="h-10 w-auto"
                src="https://images.squarespace-cdn.com/content/v1/63a025ccce60b95e510d43cb/d5b04565-7340-4ab9-837a-50715f09b7a5/Group+41.png"
                alt="Your Company"
              />
            </li>
            <li className="flex hover:ring-1 hover:ring-green-400 rounded-lg px-4 hover:cursor-pointer">
              <img src={BusIcon} alt="bus Icon" className="w-6" />
              <a className="py-2 px-1  hover:cursor-pointer ring-green-400  font-semibold">
                Bus
              </a>
            </li>
            <li className="flex hover:ring-1 hover:ring-green-400 rounded-lg px-4 hover:cursor-pointer">
              <img src={AirIcon} alt="bus Icon" className="w-6" />
              <a className="py-2 px-1 hover:cursor-pointer font-semibold ">
                Air
              </a>
            </li>
            <li className="flex hover:ring-1 hover:ring-green-400 rounded-lg px-4 hover:cursor-pointer">
              <img src={BoatIcon} alt="train Icon" className="w-6" />
              <a className="py-2 px-1 hover:cursor-pointer  font-semibold ">
                Lunch
              </a>
            </li>
            <li className="flex hover:ring-1 hover:ring-green-400 rounded-lg px-4 hover:cursor-pointer">
              <img src={TrainIcon} alt="train Icon" className="w-4" />
              <a className="py-2 px-1  font-semibold ">Train</a>
            </li>
            <li className="flex ml-auto bg-orange-400 hover:ring-orange-400 rounded-3xl px-4 py-2 hover:ring-1 hover:cursor-pointer">
              <img
                src={PhoneIcon}
                alt="train Icon"
                className="w-4 text-white"
              />
              <a className="hover:cursor-pointer font-semibold  text-white pl-2">
                01254
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
