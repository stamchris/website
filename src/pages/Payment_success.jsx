import React from "react";
import { new_logo } from "../assets";

const Payment_success = () => {

  const Close_Window = ()=>{   
    window.close();
  } 
    return (
    <div className="flex justify-center h-screen bg-slate-50">
      <div className="flex flex-col items-center  bg-white rounded-lg shadow-lg p-8 m-5">
        <img src={new_logo} alt="logo" className='w-[120px] h-[200px] rounded m-2' />
        <svg
          className="text-green-500 w-16 h-16 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-2xl font-bold mb-4 text-center">Επιτυχής πληρωμή</h2>
        <p className="text-gray-600 text-center">
          Ευχαριστούμε για την πληρωμή σας. Η συναλλαγή σας έχει ολοκληρωθεί επιτυχώς.
        </p>
        <p className="text-gray-600 text-center mt-12 border-t-2">
          Μπορείτε να κλείσετε το παράθυρο τώρα !
        </p>
        <button className="mt-6 bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded" onClick={Close_Window}>Close Window </button>
      </div>
    </div>
    )
}

export default Payment_success