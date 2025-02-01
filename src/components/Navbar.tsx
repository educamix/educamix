import { Link } from 'react-router-dom'
import clsx from 'clsx'
import House from '../assets/svg/House'
import { ReactNode } from 'react'
import Trophy from '../assets/svg/Trophy'
import Person from '../assets/svg/Person'
import Stats from '../assets/svg/Stats'
import Logout from '../assets/svg/Logout'

interface MenuItemProps {
  linkTo: string
  isActive: boolean
  children: ReactNode
  highlightColor:
    | 'em-light-blue'
    | 'em-purple'
    | 'em-light-pink'
    | 'em-pink'
    | 'em-salmon'
}

function MenuItem({
  highlightColor,
  linkTo,
  isActive,
  children,
}:MenuItemProps) {
  return (
    <Link
      to={linkTo}
      className={clsx(
        'hover:opacity-100 transition-all',
        isActive
          ? `text-${highlightColor} opacity-100`
          : 'text-white opacity-80',
      )}
    >
      {children}
    </Link>
  )
}

function Navbar() {
  return (
    <div
      className={clsx(
        'fixed w-11/12 mx-auto flex items-center justify-center gap-4 bottom-2',
        'h-10 bg-white/10 rounded-full shadow-xl shadow-em-light-blue/5',
      )}
    >
      <MenuItem
        linkTo="/"
        highlightColor="em-light-blue"
        isActive
      >
        <House />
      </MenuItem>

      <MenuItem
        linkTo="/rank"
        highlightColor="em-purple"
        isActive
      >
        <Trophy />
      </MenuItem>

      <MenuItem
        linkTo="/profile"
        highlightColor="em-light-pink"
        isActive
      >
        <Person />
      </MenuItem>

      <MenuItem
        linkTo="/stats"
        highlightColor="em-pink"
        isActive
      >
        <Stats />
      </MenuItem>

      <MenuItem
        linkTo="/logout"
        highlightColor="em-purple"
        isActive
      >
        <Logout />
      </MenuItem>
    </div>
  )
}

export { Navbar }
