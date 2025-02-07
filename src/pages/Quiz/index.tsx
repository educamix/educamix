import { useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import 'tailwindcss/tailwind.css'
import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Fire } from '@phosphor-icons/react'

export default function Quiz() {
  const [message, setMessage] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [searchParams] = useSearchParams()
  const subject = searchParams.get('subject')

  const quiz = [
    {
      disciplina: 'Matemática',
      tema: 'Frações',
      pergunta: 'Qual a soma de 1/2 + 1/3?',
      respostas: ['5/6', '1/2', '2/3', '7/12'],
      correta: '5/6',
    },
    {
      disciplina: 'Português',
      tema: 'Ortografia',
      pergunta: 'Qual é a forma correta: "excessão" ou "exceção"?',
      respostas: ['excessão', 'exceção'],
      correta: 'exceção',
    },
    {
      disciplina: 'História',
      tema: 'Segunda Guerra Mundial',
      pergunta: 'Em que ano terminou a Segunda Guerra Mundial?',
      respostas: ['1945', '1939', '1918', '1950'],
      correta: '1945',
    },
    {
      disciplina: 'Geografia',
      tema: 'Capitais',
      pergunta: 'Qual é a capital do Brasil?',
      respostas: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
      correta: 'Brasília',
    },
    {
      disciplina: 'Ciências',
      tema: 'Sistema Solar',
      pergunta: 'Qual é o maior planeta do Sistema Solar?',
      respostas: ['Terra', 'Marte', 'Júpiter', 'Saturno'],
      correta: 'Júpiter',
    },
  ]

  const filteredQuiz = quiz.find((q) => q.disciplina === subject)

  const randomCorrectMessage = ['Parabéns!', 'Você acertou!', 'Muito bem!', 'Excelente!']
  const randomWrongMessage = ['Que pena!', 'Não foi dessa vez!', 'Tente novamente!', 'Errado!']

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedAnswer || !filteredQuiz) return

    setMessage(
      selectedAnswer === filteredQuiz.correta
        ? randomCorrectMessage[Math.floor(Math.random() * randomCorrectMessage.length)]
        : randomWrongMessage[Math.floor(Math.random() * randomWrongMessage.length)]
    )
  }

  return (
    <div className="flex flex-col w-11/12 mx-auto gap-6 pt-16">
      <header className="flex justify-between">
        <div className="max-w-60">
          <h1 className="text-em-pink font-fredoka text-2xl font-medium">{filteredQuiz?.disciplina}</h1>
          <h2 className="text-em-light-pink">{filteredQuiz?.tema}</h2>
        </div>

        <div className="text-em-salmon flex items-center">
          <span>3</span>
          <Fire size={24} />
        </div>
      </header>

      <div className="block w-full h-em-1 bg-white/10" />
      <main>
        <div className="flex flex-col items-center pt-20 gap-9 w-11/12 max-w-80 mx-auto animate-fade-down ease-in">
          <div className="flex flex-col gap-6 w-full">
            {filteredQuiz ? (
              <>
                <form className="w-full flex flex-col gap-9" onSubmit={handleQuizSubmit}>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="quiz" className="text-em-white font-inter text-xs font-bold">
                      {filteredQuiz.pergunta}
                    </label>
                    {filteredQuiz.respostas.map((resposta, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          type="radio"
                          id={resposta}
                          name="quiz"
                          value={resposta}
                          className="h-4 w-4"
                          onChange={() => setSelectedAnswer(resposta)}
                        />
                        <label htmlFor={resposta} className="text-em-white font-inter text-xs font-bold">
                          {resposta}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3">
                    <button
                      type="submit"
                      disabled={!selectedAnswer}
                      className={clsx(
                        'rounded-md h-10 flex justify-center items-center w-full font-inter text-xs font-bold text-white transition-all',
                        selectedAnswer ? 'bg-em-green hover:bg-green-700' : 'bg-gray-500 cursor-not-allowed'
                      )}
                    >
                      Responder
                    </button>
                  </div>
                </form>
                {message && (
                  <p
                    className={clsx(
                      'mt-2 px-4 py-2 text-center text-sm font-bold shadow-md transition-all duration-300',
                      message.includes('Parabéns') ||
                      message.includes('Você acertou') ||
                      message.includes('Muito bem') ||
                      message.includes('Excelente')
                        ? 'bg-green-600 text-white'
                        : 'bg-red-600 text-white'
                    )}
                  >
                    {message}
                  </p>
                )}
              </>
            ) : (
              <h1 className="text-red-500 font-bold text-xl">
                Nenhuma pergunta encontrada para "{subject}"
              </h1>
            )}
          </div>
        </div>
      </main>
      <Navbar />
    </div>
  )
}
