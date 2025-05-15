import Intern from '../assets/intern1.jpg'
const Home = () => {
  return (
    <div className='flex flex-row items-center h-screen justify-around'>
      <img src={Intern} alt="intern" className='w-80 rounded-2xl '/>
      <div className='flex flex-col justify-center items-center w-[50%]'>
            <h1 className='text-4xl font-bold text-center'>
              Hello , I'm Rattasat Onnomdee 
            </h1>
              <p className='text-2xl font-semibold text-center mt-10'>
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