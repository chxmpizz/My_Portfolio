import MERN_AI from "../assets/MERN_AI.png"
import ToDoList from "../assets/ToDoList.png"
const Projects = () => {
  return (
    <div className="flex flex-col my-10 text-5xl items-center justify-center w-full overflow-hidden">
      <h1 className="text-5xl font-bold">
        Projects
      </h1> 
       <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mx-auto px-10 mt-10">
          <div className="flex flex-col items-center justify-center border-3 rounded-2xl px-1 py-5 mb-10 w-[100%] h-full">
            <img src={MERN_AI} alt="MERN AI" className="w-[80%] rounded-2xl shadow-lg mb-5 max-sm:w-[90%]"/>
            <h1 className="text-xl font-bold text-center">MERN AI</h1>
            <p className="text-lg font-semibold text-center mt-5 w-[70%]">
              A Generate Image AI Web Application Project using The MERN Stack such as React.js with TailwindCSS for User Interface 
              and Node.js , Express.js for Backend and MongoDB for database management. This project is a web application that allows users to generate images using AI.
              Tha Web uses OpenAI API to generate based on the text prompt provided by the user. 
            </p>
          </div>
          <div className="flex flex-col items-center justify-center border-3 rounded-2xl px-1 py-5 mb-10 w-[100%] h-full">
            <img src={ToDoList} alt="ToDoList" className="w-[80%] rounded-2xl shadow-lg mb-5 max-sm:w-[90%]"/>
            <h1 className="text-xl font-bold text-center">ToDoList(Developing)</h1>
            <p className="text-lg font-semibold text-center mt-5 w-[70%]">
              The To Do List Web Application Project using Next.js(Typescript) and TailwindCSS for User Interfaces, ShadCN/UI for UI components
              The Backend using Node.js , Express.js and PostgreSQL for database management Prisma for ORM interacting with database. This project is a web application that allows users to create, read, update, and delete tasks.
            </p>
          </div>
      </div>
    </div>
  )
}

export default Projects