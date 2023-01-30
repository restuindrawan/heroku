import { Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="px-6 pt-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Heroku</span>
              <svg className='h-10' id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195.12 226.05">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path fill="#D61D1D" class="cls-1" d="m116.17,40.49c8.55-.67,28.49,3.78,28.45-10.01-.85-8.53,4.12-28.16-9.56-28.87-9.83-.02-28.32-5.85-29.31,8.89.91,8.88-4.46,30.19,10.42,29.99ZM174.73,6.68c-4.79-.82-9.59-1.55-14.4-2.22.89,39.96-8.14,36.43,34.1,36.02.91-15.61.1-32.79-19.7-33.8Zm4.22,46.65h-51.74c-9.2,0-14.93,9.95-10.34,17.91,0,0,3.93,6.78,3.93,6.78,9.91,19.29,37.71,7.48,33.59,14.47,0,0-53.87,47.67-53.87,47.67-2.07,1.83-5.18,1.83-7.25-.01C16.43,70.57,40.72,109.56,37,5.77c-.67-.58-.99-.87-1.66-1.45C19.21,5.36.18,10.43.32,30.06c1.22,28.23-4.68,87.59,8.24,113.43,0,0,0,0,0,0,13.6,39.67,51.51,65.24,88.43,82.56,70.31-31.15,103.47-79.41,97.43-157.25,0-8.54-6.92-15.47-15.47-15.47Zm-120.45,36.61h31.55V.11c-16.43-.67-36.96.95-37.35,22,0,0,0,62.03,0,62.03,0,3.2,2.6,5.8,5.8,5.8Z"/>
                </g>
              </svg>
            </a>
          </div>
          <div className="flex lg:hidden">
            <a href="https://github.com/restuindrawan">
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://avatars.githubusercontent.com/u/57904667" alt=""/>
            </a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://github.com/restuindrawan">
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://avatars.githubusercontent.com/u/57904667" alt=""/>
            </a>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  )
}
