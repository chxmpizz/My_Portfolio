const Contact = () => {
  return (
    <div className="mt-15 text-5xl flex flex-col items-center justify-center w-full h-[100%] overflow-hidden">
      <h1 className="text-5xl font-bold">
        Contact
      </h1>
          <div className="px-5 py-8  border-t-1 flex lg:flex-row items-center justify-between w-[90%] mt-10 max-sm:flex-col max-sm:gap-5 max-sm:items-center
           sm:flex-col sm:gap-5 sm:items-center">
            <p className="text-xl font-bold max-sm:text-md sm:text-md">
              rattasat.onn@gmail.com 
            </p>
            <p className="text-center text-xl font-bold max-sm:text-md  sm:text-md">
              68/4,KhlongNung , KhlongLuang , PathumThani 12120
            </p>
            <p className="text-xl font-bold max-sm:text-md sm:text-md">
              063-527-8329
            </p>
          </div>
    </div>
  )
}

export default Contact