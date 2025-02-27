import { BsTelephone } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { IoHeartOutline } from "react-icons/io5";
import { CiShoppingBasket } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const DesktopHeader = () => (
  <header className="w-[1440px] mx-auto">
    <div className="flex justify-between bg-primary px-[100px] py-[10px] items-center text-white">
      <p className="">Лого</p>

      <nav>
        <ul className="flex gap-[10px]">
          <li className="p-[10px]">
            <a href="/" className="">
              Про нас
            </a>
          </li>

          <li className="p-[10px]">
            <a href="/" className="">
              Доставка та оплата
            </a>
          </li>

          <li className="p-[10px]">
            <a href="/" className="">
              Рецепти
            </a>
          </li>

          <li className="p-[10px]">
            <a href="/" className="">
              Блог
            </a>
          </li>

          <li className="p-[10px]">
            <a href="/" className="">
              Калькулятор калорій
            </a>
          </li>
        </ul>
      </nav>

      <a href="tel:+0800123456" className="">
        <div className="flex items-center text-primary bg-white  py-[10px] px-5 rounded-[4px]">
          <BsTelephone className=" mr-[10px]" />
          <p>0 (800) 12 34 56</p>
        </div>
      </a>
    </div>

    <div className="flex justify-between px-[100px] py-4 items-center">
      <button className="flex text-lg items-center bg-primary text-white py-[10px] px-[46px] mr-14 rounded-md uppercase">
        <BiCategory className="mr-5" />
        Каталог
      </button>

      <div className="flex-grow mx-6">
        <input
          type="text"
          placeholder="Пошук "
          className="w-full h-[48px] px-4 py-2 border border-primary rounded-md "
        />
      </div>

      <div className="flex items-center gap-6">
        <div className="cursor-pointer ">UA</div>

        <ul className="flex gap-4">
          <li className="">
            <button className="border border-primary text-primary p-[10px] rounded-lg ">
              <IoHeartOutline className="w-[26px] h-[26px]" />
            </button>
          </li>
          <li className="">
            <button className="border border-primary text-primary p-[10px] rounded-lg ">
              <CiShoppingBasket className="w-[26px] h-[26px]" />
            </button>
          </li>
          <li className="">
            <button className="border border-primary text-primary p-[10px] rounded-lg ">
              <CiUser className="w-[26px] h-[26px]" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default DesktopHeader;
