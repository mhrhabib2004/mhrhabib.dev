import Image from "next/image";

const MyEducation = () => {
    return (
        <div>
            <h1 className=" hero py-10 md:text-5xl bg-gradient-to-r from-purple-300 to-purple-800 md:-mt-6 font-bold text-center text-2xl">My Education</h1>
            <div className=" bg-gradient-to-r from-purple-300  ">
                
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image alt="college pic" height={300} width={400}
      src="https://i.ibb.co/fpTTTNZ/sunamganj-college.jpg"
      className="rounded-lg md:ml-6 w-1/2 shadow-2xl" />
    <div className="w-1/2 md:ml-10">
      <h1 className="text-2xl font-bold">I am currently studying in</h1>
      <h1 className="text-3xl mt-1 font-bold">Sunamganj Government College</h1>
      <p className="py-6 w-[80%]">
      My journey to college began with higher secondary education.Currently, I am a second-year student in the Bangla Department of this college . Bangla and computer science are among my favorite subjects, so I am actively working on programming alongside my studies.
      </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default MyEducation;