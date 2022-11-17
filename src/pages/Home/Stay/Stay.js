import React from 'react';

const Stay = () => {
    return (
        <div>
            <form>
              <label class="block">
                 <span class="block text-sm font-medium text-slate-700">Username</span>
                 <input type="text" value="tbone" disabled class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                 invalid:border-pink-500 invalid:text-pink-600
                 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"/>
             </label>
  
           </form>
           {/* <progress className="progress progress-accent w-56" value="0" max="100"></progress>
          <progress className="progress progress-accent w-56" value="10" max="100"></progress>
          <progress className="progress progress-accent w-56" value="40" max="100"></progress>
          <progress className="progress progress-accent w-56" value="70" max="100"></progress>
          <progress className="progress progress-accent w-56" value="100" max="100"></progress> */}
        </div>
    );
};

export default Stay;