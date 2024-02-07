import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
        I am a web developer and a designer based in Nigeria. 
          I have a passion for creating beautiful and functional websites using 
          the latest technologies and best practices. I have a bachelor's degree 
          in computer science and a certificate in web development. I have experience 
          in working with HTML, CSS, Javascript, Bootstrap, jQuery,  WordPress, and more.
           I am always eager to learn new skills and tools to improve my craft
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
