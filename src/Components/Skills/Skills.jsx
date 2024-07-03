import Image from 'next/image';
import React from 'react';

const Skills = () => {
    return (
        <div className='bg-gradient-to-r from-purple-300 '>
          <div className='mt-5 w-[95%] md:w-[70%] mx-auto py-7  '>
            <h1 className='text-center md:text-5xl font-bold text-3xl'>My Skills</h1>
            {/* skill card */}
            <div className='grid grid-cols-2 gap-4 mt-7 md:grid-cols-4 lg:grid-cols-5'>
                {/* 1st card */}
            <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl font-bold pb-4 text-sky-500">
      HTML
    </h2>
  </div>
</div>
{/* end card */}
   {/* 2 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl pb-4 font-bold text-sky-500">
      CSS
    </h2>
  </div>
</div>
{/* end card */}
   {/* 3 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl pb-4 font-bold text-sky-500">
    JAVASCRIPT
    </h2>
  </div>
</div>
{/* end card */}
   {/* 4 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase font-bold text-sky-500">
    Tailwind
    </h2>
  </div>
</div>
{/* end card */}
   {/* 5 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl PB-4 font-bold text-sky-500">
    Bootstrap
    </h2>
  </div>
</div>
{/* end card */}
   {/* 6 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg1MndL-Xp1JcnqaB0YOqTp6zDjrwYyGKsPA&s"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase pb-4 font-bold text-sky-500">
    React
    </h2>
  </div>
</div>
{/* end card */}
   {/*7 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://logowik.com/content/uploads/images/firebase.jpg"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase pb-4 font-bold text-sky-500">
    Firebase
    </h2>
  </div>
</div>
{/* end card */}
   {/* 8 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp&w=256"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase pb-4 font-bold text-sky-500">
    Node.js
    </h2>
  </div>
</div>
{/* end card */}
   {/* 9 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRowZegHoWUDnNWl6HnOGIXUeaOgfmPIulBfQ&s"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase pb-4 font-bold text-sky-500">
    Express.js
    </h2>
  </div>
</div>
{/* end card */}
   {/* 10 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase pb-4 font-bold text-sky-500">
    MongoDB
    </h2>
  </div>
</div>
{/* end card */}
   {/* 11 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOYMtSMKxVApuqB5E7IjY9KuS15wUF4jtYg&s"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase pb-4 font-bold text-sky-500">
    Next.js
    </h2>
  </div>
</div>
{/* end card */}
   {/* 12 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase pb-4 font-bold text-sky-500">
    github
    </h2>
  </div>
</div>
{/* end card */}
   {/* 13 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfPeVpXBDNMY2Mio-NN9lZSb9jOaw2CBs4Q&s"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase pb-4 font-bold text-sky-500">
    figma
    </h2>
  </div>
</div>
{/* end card */}
   {/* 14 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1wXbNHu71FIVcwPD6BwGrIwG9KGYqFOTug&s"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase pb-4 font-bold text-sky-500">
    daisy ui
    </h2>
  </div>
</div>
{/* end card */}
   {/* 15 card */}
   <div className="card bg-base-100 w-auto shadow-xl">
  <figure>
    <Image height={200} width={200} className='h-36'
      src="https://miro.medium.com/v2/resize:fit:493/1*HHGc3cQgpSVes0maUAnYog.png"
      alt="Shoes" />
  </figure>
  <div className="text-center">
    <h2 className="text-2xl uppercase pb-4 font-bold text-sky-500">
    material ui
    </h2>
  </div>
</div>
{/* end card */}
  

            </div>
        </div>
        </div>
    );
};

export default Skills;