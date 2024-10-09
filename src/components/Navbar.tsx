import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink: FC<{name: string, path: string}> = ({name, path}) => <NavLink className={({isActive}) => isActive ? 'border-b-4 border-white py-8' : ''} to={path}>{name}</NavLink>

export default function Navbar() {
  return (
    <>
      <nav className="font-mono bg-red-600 fixed lg:flex lg:justify-between lg:fixed lg:h-36 lg:text-white lg:top-0 lg:left-0 lg:right-0 z-10  " >
        <div className="w-[45vw] p-0 ml-16 mt-16 flex items-center gap-16">
          <img className="w-12 h-12" src="/shared/logo.svg" alt="space logo" />
          <p className=" lg:w-[40vw] lg:border-[1px] lg:border-solid lg:border-white"></p>
        </div>

        <ul className="backdrop-blur-lg bg-transparent w-[60vw] gap-[2vw] mt-12 flex items-center justify-around">
          <li>
              <CustomLink name="00 Home" path="/"/>
          </li>
          <li>
              <CustomLink path="/destination" name='01 Destination' />
          </li>
          <li>
              <CustomLink path="/crew" name='02 Crew' />
          </li>
          <li>
              <CustomLink path="/technology" name='04 Technology' />
          </li>
        </ul>
      </nav>
    </>
  );
}
