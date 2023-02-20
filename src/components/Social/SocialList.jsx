import {
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsWhatsapp,
  BsGithub
} from 'react-icons/bs';
import LinkSocial from '../../atoms/LinkSocial/LinkSocial';

const SocialList = () => {
  return (
    <div className="flex flex-row w-full md:justify-start justify-center items-center md:mt-8 mt-14 md:ml-2 md:mb-0 mb-8 ">
      <ul className="flex flex-row sm:w-[80%] xl:w-[68%] w-[90%]  justify-between items-center">
        <LinkSocial
          url="https://www.linkedin.com/in/federicomigliore/"
          icon={<BsLinkedin size={28} />}
          hoverColor="text-blue-400/90"
        />
        <LinkSocial
          url="https://www.facebook.com/federico.migliore.11/"
          icon={<BsFacebook size={28} />}
          hoverColor="text-blue-500"
        />
        <LinkSocial
          url="https://www.instagram.com/federix_aegon/"
          icon={<BsInstagram size={28} />}
          hoverColor="text-orange-600"
        />
        <LinkSocial
          url="https://wa.me/393792302349"
          icon={<BsWhatsapp size={28} />}
          hoverColor="text-green-400"
        />
        <LinkSocial
          url="https://github.com/MrRobot-fm"
          icon={<BsGithub size={28} />}
          hoverColor="text-gray-500"
        />
      </ul>
    </div>
  );
};

export default SocialList;
