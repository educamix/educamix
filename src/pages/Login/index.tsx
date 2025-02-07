import logo from '../../assets/logo.svg'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import 'tailwindcss/tailwind.css'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'
import { AuthContextType } from '../../types/user'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { authenticateUser } = useContext(AuthContext) as AuthContextType

  const navigate = useNavigate()

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorMessage('')

    authenticateUser({ email, password }).then(isUserAuthenticated => {
      if (isUserAuthenticated?.name) {
        navigate('/')
      } else {
        setErrorMessage('Credenciais incorretas')
      }

      setIsLoading(false)
      setTimeout(() => formReset(), 3000)
    })
  }

  const formReset = () => {
    setEmail('')
    setPassword('')
    setErrorMessage('')
  }

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
          <h1 className="text-em-pink font-fredoka text-xl font-medium text-center">
            Bem vindo à Educamix
          </h1>
          <h2 className="text-em-light-pink font-inter text-xs text-center">
            Desafie-se! Aprenda! Divirta-se!
          </h2>
        </div>

        <form className="w-full flex flex-col gap-6" onSubmit={handleLoginSubmit}>
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent outline-none text-white"
              />
              <button
                type="button"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                {isPasswordVisible ? <EyeSlash color="#fff" size={16} /> : <Eye color="#fff" size={16} />}
              </button>
            </div>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-xs text-center">{errorMessage}</p>
          )}

          <div className="flex flex-col gap-3">
            <button
              type="submit"
              disabled={isLoading}
              className={clsx(
                'rounded-md bg-em-pink h-10 flex justify-center items-center',
                'w-full font-inter text-xs font-bold text-white',
                { 'opacity-50 cursor-not-allowed': isLoading },
              )}
            >
              {isLoading
                ? 'Carregando...'
                : 'Acessar'}
            </button>
            <Link to="/register" className="font-inter text-em-10 text-em-light-pink">
              Não tenho uma conta
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
