import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="hero bg-gradient-to-r from-purple-400 rounded-lg bg-base-200 min-h-screen">
            
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center ml-5 md:w-1/2 lg:text-left">
      <h1 className="text-3xl text-center font-bold">Contact info</h1>
      <div className="flex items-center text-xl text-green-500 gap-5">
      <FaLocationDot />
      <p className="mt-4 text-[16px] text-black font-medium">
      ROTARGAON-3000, BISHWAMBARPUR, SUNAMGNJ, <br /> SYLHET DEVIATION, BANGLADESH
      </p>
      </div>
      <div className="flex items-center text-xl text-green-500 gap-5">
      <MdEmail /> 
      <p className=" text-[16px]  text-black font-medium">
      mhrhabibdev@gmail.com
      </p>
      </div>
      <div className="flex items-center text-xl text-green-500 gap-5">
      <FaPhoneAlt />
      <p className=" text-[16px]  text-black font-medium">
      +8801749959977
      
      </p>
      </div>
    </div>
    <div className="divider lg:divider-horizontal"></div>
    <div className="divider divider-start"></div>
    <div className="card bg-base-100 bg-gradient-to-r from-slate-400 md:w-1/2 shrink-0 shadow-2xl">
      <form className="card-body">
      <div className="divider"></div>
      <h1 className="text-3xl text-center font-bold">Send us a message</h1>
      <div className="divider"></div>
       <div className="grid grid-cols-2 gap-5">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Your name</span>
          </label>
          <input type="text" placeholder="Your name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your email</span>
          </label>
          <input type="email" placeholder="Your email" className="input input-bordered" required />
         
        </div>
       <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number</span>
          </label>
          <input type="number" min={0} placeholder="Phone number" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company name</span>
          </label>
          <input type="text" placeholder="Company name" className="input input-bordered" required />
         
        </div>
       </div>
       <label className="form-control">
  <div className="label">
    <span className="label-text">Description</span>
   
  </div>
  <textarea className="textarea textarea-bordered h-24" placeholder="Description"></textarea>
 
</label>
        <div className="form-control mt-6">
          <button className="btn btn-outline btn-success">SEND</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Contact;