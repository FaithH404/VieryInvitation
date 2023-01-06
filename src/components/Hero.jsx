import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} ${styles.flexCenter}`}>
      <div className={`text-white`}>
        <div className={`${styles.flexCenter} text-gradient`}>
          <h1 className="font-poppins font-medium text-[30px] leading-[23.4px]">VIERY INVITATION</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
