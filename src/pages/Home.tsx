import Intern from '../assets/intern1.jpg'
const Home = () => {
  return (
    <div className='flex items-center lg:justify-around h-screen sm:my-10 mx-6 
    lg:flex-row 
    md:justify-around 
    sm:flex-col sm:justify-around
    max-sm:my-20 max-sm:mx-5 max-sm:flex-col max-sm:justify-around '>
      <img src={Intern} alt="intern" className='mt-10 lg:w-90 rounded-2xl md:w-70 sm:w-60 max-sm:w-65'/>
      <div className='flex flex-col justify-center items-center mt-5 md:w-[80%] lg:w-[50%] sm:w-[90%]'>
            <h1 className='text-3xl font-bold text-center max:sm:text-xl'>
              Hello , I'm Rattasat Onnomdee 
            </h1>
              <p className='text-2xl font-semibold text-center mt-10 max-sm:text-md'>
                I'm a software engineer with a passion for Developing a Full Stack Web Application.
                I specialize Technologies such as React.JS, Next.JS, Node.JS, Express.JS, and MongoDB,
                also I can use Tailwind CSS ,ShadCN/UI and Magic UI for UI design.
                I'm self-motivated, and always eager to learn new technologies and improve my skills.
                and I'm currently looking for an internship opportunity as a Full Stack Developer 
                to use my skills to develop an organization or company.
              </p>
      </div>
    </div>
  )
}

export default Home