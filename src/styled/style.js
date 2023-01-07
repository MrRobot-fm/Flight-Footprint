const styles = {
  boxWidth: 'xl:max-w-[1750px] w-full',

  heading2:
    'font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] ',
  paragraph:
    'font-normal dark:text-tertiary text-secondary text-[20px] leading-[28px]',

  flexCenter: 'flex justify-center items-center',
  flexColStart: 'flex flex-col justify-start items-center',
  flexRowStart: 'flex flex-row justify-start items-start',
  flexRowStartMd: 'flex flex-row md:justify-start items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6'
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY} ${styles.paddingX}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY} ${styles.paddingX}`,

  sectionImgReverseStart: `flex-1 flex ${styles.flexRowStartMd} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImgReverseCenter: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexColStart} flex-col`
};

export default styles;
