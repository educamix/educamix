import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import 'tailwindcss/tailwind.css'
import React, { useState } from 'react'

export default function Quiz() {
  const [message, setMessage] = useState('')
  const navigate = useNavigate()

  const quiz = [
    {
      disciplina: 'Matemática',
      tema: 'Frações',
      pergunta: 'Qual a soma de 1/2 + 1/3?',
      respostas: ['5/6', '1/2', '2/3', '7/12'],
      correta: '5/6',
    },
  ]

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const selectedAnswer = formData.get('quiz') as string
    setMessage(selectedAnswer === quiz[0].correta
      ? 'Correto'
      : 'Errada')
  }

  return (
    <div
      className={clsx(
        'flex flex-col items-center pt-20 gap-9 w-11/12 max-w-80 mx-auto',
        'animate-fade-down ease-in',
      )}
    >
      <div className="flex flex-col gap-6 w-full">
        <h1 className="text-em-pink font-fredoka text-xl font-medium">{quiz[0].disciplina}</h1>
        <h2 className="text-em-white font-inter text-xs font-bold text-center mt-8">{quiz[0].tema}</h2>
        <form className="w-full flex flex-col gap-9" onSubmit={handleQuizSubmit}>
          <div className="flex flex-col gap-3">
            <label htmlFor="quiz" className="text-em-white font-inter text-xs font-bold">
              {quiz[0].pergunta}
            </label>
            {quiz[0].respostas.map((resposta, index) => (
              <div key={index} className="flex items-center gap-2">
                <input type="radio" id={resposta} name="quiz" value={resposta} className="h-4 w-4" />
                <label htmlFor={resposta} className="text-em-white font-inter text-xs font-bold">
                  {resposta}
                </label>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className={clsx('rounded-md bg-em-green h-10 flex justify-center items-center', 'w-full font-inter text-xs font-bold text-white')}
            >
              Responder
            </button>
          </div>
        </form>
        {message && <p className="text-white font-bold">{message}</p>}
      </div>
    </div>
  )
}
