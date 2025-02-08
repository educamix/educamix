import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import House from '../assets/svg/House'
import Trophy from '../assets/svg/Trophy'
import Person from '../assets/svg/Person'
import Stats from '../assets/svg/Stats'
import Logout from '../assets/svg/Logout'
import { getUserRole, logout } from '../services/user.service'

interface MenuItemProps {
  linkTo: string;
  children: React.ReactNode;
  isActive?: boolean;
  highlightColor: 'em-light-blue' | 'em-purple' | 'em-light-pink' | 'em-pink' | 'em-salmon';
}

function MenuItem({ highlightColor, linkTo, children, isActive = false }: MenuItemProps) {
  return (
    <Link
      to={linkTo}
      className={clsx(
        'hover:opacity-100 transition-all',
        isActive ? `text-${highlightColor} opacity-100` : 'text-white opacity-80'
      )}
    >
      {children}
    </Link>
  )
}

function Navbar() {
  const role = getUserRole()
  const location = window.location.pathname
  const navigate = useNavigate()
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false)

  const handleLogoutConfirm = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <div
        className={clsx(
          'fixed w-11/12 mx-auto flex items-center justify-center gap-4 bottom-2',
          'h-10 bg-white/10 rounded-full shadow-xl shadow-em-light-blue/5'
        )}
      >
        <MenuItem linkTo="/" highlightColor="em-light-blue" isActive={location === '/'}>
          <House />
        </MenuItem>
        <MenuItem linkTo="/ranking" highlightColor="em-purple" isActive={location === '/rank'}>
          <Trophy />
        </MenuItem>
        <MenuItem linkTo="/profile" highlightColor="em-light-pink" isActive={location === '/profile'}>
          <Person />
        </MenuItem>
        {role && role === 'teacher' && (
          <>
        <MenuItem linkTo="/summary" highlightColor="em-pink" isActive={location === '/stats'}>
          <Stats />
        </MenuItem>
          </>
          )}
        <button onClick={() => setLogoutModalOpen(true)} className="text-white opacity-80 hover:opacity-100">
          <Logout />
        </button>
      </div>

      {isLogoutModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Tem certeza que deseja sair?</h2>
            <div className="mt-4 flex justify-end gap-4">
              <button onClick={() => setLogoutModalOpen(false)} className="px-4 py-2 bg-gray-300 rounded">Cancelar</button>
              <button onClick={handleLogoutConfirm} className="px-4 py-2 bg-red-500 text-white rounded">Sim</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export { Navbar }