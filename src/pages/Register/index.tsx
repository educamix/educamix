import logo from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import 'tailwindcss/tailwind.css'
import React, { useState } from 'react'
import { saveUser } from '../../utils/auth'
import { newUser } from '../../services/newUser'

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const navigate = useNavigate()

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (registerPassword !== confirmPassword) {
      alert('As senhas não coincidem')
      return;
    }
    setIsLoading(true)

    try {
      const response = await newUser({
        email: registerEmail,
        name: name,
        password: registerPassword,
        role: 'student',
      })
      console.log('response', response)
      if (!response) {
        console.log('Erro ao cadastrar usuário')
        return;
      }
      saveUser({name: response.Name, email: response.Email, role: response.Role, _id: '0'})
      navigate('/')
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
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
            Criar uma nova conta
          </h2>
        </div>

        <form onSubmit={handleRegisterSubmit} className="w-full flex flex-col gap-9">
          <div className="flex flex-col gap-4">
            <div className={clsx(
              'bg-white/20 rounded-full py-2 px-3 transition-all',
              'outline-2 outline outline-white/25',
              'focus-within:bg-white/30 focus-within:outline-white/35',
            )}
            >
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-white"
              />
            </div>

            <div className={clsx(
              'bg-white/20 rounded-full py-2 px-3 transition-all',
              'outline-2 outline outline-white/25',
              'focus-within:bg-white/30 focus-within:outline-white/35',
            )}
            >
              <input
                type="email"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-white"
              />
            </div>

            <div className={clsx(
              'bg-white/20 rounded-full py-2 px-3 transition-all',
              'outline-2 outline outline-white/25',
              'focus-within:bg-white/30 focus-within:outline-white/35',
            )}
            >
              <input
                type="password"
                placeholder="Senha"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-white"
              />
            </div>       

            <div className={clsx(
              'bg-white/20 rounded-full py-2 px-3 transition-all',
              'outline-2 outline outline-white/25',
              'focus-within:bg-white/30 focus-within:outline-white/35',
            )}
            >
              <input
                type="password"
                placeholder="Confirme a Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-white"
              />
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
              Cadastre-se
            </button>
            <Link
              to="/login"
              className={clsx(
                'font-inter text-em-10 text-em-light-pink',
              )}
            >
              Já tem uma conta? Faça login
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
