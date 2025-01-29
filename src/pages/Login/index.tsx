import logo from '../../assets/logo.svg'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import 'tailwindcss/tailwind.css'
import { useState } from 'react'

export default function Login() {
  const [inputUser, setInputUser] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  return (
    <div className={clsx(
      'flex flex-col items-center pt-20 gap-9 w-11/12 max-w-80 mx-auto',
      'animate-fade-down ease-in',
    )}
    >
      <img
        src={logo}
        alt="abstract image of platform logo"
        width={110}
        height={85}
      />

      <div className="flex flex-col gap-16 w-full">
        <div className="flex flex-col gap-1">
          <h1 className={clsx(
            'text-em-pink font-fredoka text-xl font-medium text-center',
          )}
          >
            Bem vindo à Educamix
          </h1>
          <h2 className={clsx(
            'text-em-light-pink font-inter text-xs text-center',
          )}
          >
            Desafie-se! Aprenda! Divirta-se!
          </h2>
        </div>

        <form className="w-full flex flex-col gap-9">
          <div className="flex flex-col gap-4">
            <div className={clsx(
              'bg-white/20 rounded-full py-2 px-3 transition-all',
              'outline-2 outline outline-white/25',
              'focus-within:bg-white/30 focus-within:outline-white/35',
            )}
            >
              <input
                type="text"
                placeholder="Usuário"
                value={inputUser}
                onChange={(e) => setInputUser(e.target.value)}
                className="w-full bg-transparent outline-none text-white"
              />
            </div>

            <div className={clsx(
              'bg-white/20 rounded-full py-2 px-3 flex gap-2',
              'outline-2 outline outline-white/25',
              'focus-within:bg-white/30 focus-within:outline-white/35',
            )}
            >
              <input
                type={isPasswordVisible
                  ? 'text'
                  : 'password'}
                placeholder="Senha"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
                className="w-full bg-transparent outline-none text-white"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible
                  ? <EyeSlash color="#fff" size={16} />
                  : <Eye color="#fff" size={16} />}

              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className={clsx(
                'rounded-md bg-em-pink h-10 flex justify-center items-center',
                'w-full font-inter text-xs font-bold text-white',
              )}
            >
              Acessar
            </button>
            <Link
              to="/register"
              className={clsx(
                'font-inter text-em-10 text-em-light-pink',
              )}
            >
              Não tenho uma conta
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
