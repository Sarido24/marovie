export default function Navbar() {
  return (
    <>
      <div className="navbar h-full w-full justify-between m-auto bg-black border-b-2 border-cyan-950 font-poppins absolute rounded-lg">
        <div className="flex justify-between w-[35%]">
          <div>
            <a className="btn btn-ghost text-sm md:text-xl lg:text-2xl  text-red">MAROVIE</a>
          </div>
        </div>
        <div className=" gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              rounded-mdlaceholder="Search"
              className="input border-slate-300 placeholder-slate-400 focus:outline-none focus:ring focus:ring-rose-600 w-30 text-black "
            />
          </div>
          <div className="dropdown dropdown-end text-black">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Profile Picture"
                  src="https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Home</a>
              </li>
              <li>
                <a className="justify-between">
                  Popular
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Genre</a>
              </li>
              <li>
                <a>Subscribe</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
