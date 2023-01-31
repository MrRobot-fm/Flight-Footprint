import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsGithub
} from 'react-icons/bs';

const SocialList = () => {
  return (
    <div className="flex flex-row w-full md:justify-start justify-center items-center md:mt-8 mt-14 md:ml-2 md:mb-0 mb-8 ">
      <ul className="flex flex-row sm:w-[80%] w-[90%]  justify-between items-center">
        <li className="hover:-translate-y-2 active:translate-y-0 ease-in-out duration-700">
          <a
            href="https://www.linkedin.com/in/federicomigliore/"
            target="blank"
            className="hover:text-blue-400/90 ease-in-out duration-700"
          >
            <BsLinkedin size={28} />
          </a>
        </li>

        <li className="hover:-translate-y-2 active:translate-y-0 ease-in-out duration-700">
          <a
            href="https://www.facebook.com/federico.migliore.11/"
            target="blank"
            className="hover:text-blue-500 ease-in-out duration-700"
          >
            <BsFacebook size={28} />
          </a>
        </li>

        <li className="hover:-translate-y-2 active:translate-y-0 ease-in-out duration-700 ">
          <a
            href="https://www.instagram.com/federix_aegon/"
            target="blank"
            className="hover:text-orange-600 ease-in-out duration-700"
          >
            <BsInstagram size={28} />
          </a>
        </li>
        <li className="hover:-translate-y-2 active:translate-y-0 ease-in-out duration-700">
          <a
            href="https://wa.me/393289076191"
            target="blank"
            className="hover:text-green-400 ease-in-out duration-700"
          >
            <BsWhatsapp size={28} />
          </a>
        </li>
        <li className="hover:-translate-y-2 active:translate-y-0 ease-in-out duration-700">
          <a
            href="https://github.com/MrRobot-fm"
            target="blank"
            className="hover:text-gray-500 ease-in-out duration-700"
          >
            <BsGithub size={28} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialList;
