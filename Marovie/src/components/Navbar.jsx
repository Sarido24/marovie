export default function Navbar() {
  return (
    <>
      <div className="navbar w-[95%] justify-evenly m-auto mt-2 rounded-md bg-blue font-poppins text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Marovie</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              p
              rounded-mdlaceholder="Search"
              className="input input-bordered w-24 md:w-auto text-black"
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
