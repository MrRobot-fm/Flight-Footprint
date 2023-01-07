import styles, { layout } from '../styled/style';
import { motion } from 'framer-motion';
import { ContactForm, SocialList } from '../components';

const ContactMe = () => {
  return (
    <motion.section
      className={`flex md:flex-row flex-col-reverse items-center md:items-start sm:py-24 py-8 xl:py-52 ${styles.paddingX} text-primary dark:text-greySection `}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { type: 'tween', duration: 1.5 }
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div
        className={`${layout.sectionImgReverseStart} ${layout.sectionImgReverseCenter} w-full`}
      >
        <ContactForm />
      </div>
      <div className="flex-[1.2] flex flex-col items-start justify-start">
        <h2 className="font-bold text-[2.4rem]">Contact Me</h2>
        <p className={`${styles.paragraph}  max-w-[605px]  mt-2`}>
          If you are interested in contacting me for job offers or simply
          because you want to browse my socials or give me feedback, you can use
          the contact form which will send a message to my email address, or
          alternatively click on the icons below to view my projects on GitHub
          or be directed to my social pages.
        </p>
        <SocialList />
      </div>
    </motion.section>
  );
};

export default ContactMe;
