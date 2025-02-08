import { useSearchParams } from 'react-router-dom'
import clsx from 'clsx'
import 'tailwindcss/tailwind.css'
import React, { useState } from 'react'
import { Navbar } from '../../components/Navbar'
import { Fire } from '@phosphor-icons/react'
import { quiz } from '../../data/quizData'

export default function Quiz() {
  const [message, setMessage] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [searchParams] = useSearchParams()
  const subject = searchParams.get('subject')
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredQuiz = quiz.filter((q) => q.disciplina === subject)
  const currentQuestion = filteredQuiz[currentIndex]

  const randomCorrectMessage = ['Parabéns!', 'Você acertou!', 'Muito bem!', 'Excelente!']
  const randomWrongMessage = ['Que pena!', 'Não foi dessa vez!', 'Tente novamente!', 'Errado!']

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedAnswer || !currentQuestion) return

    const isCorrect = selectedAnswer === currentQuestion.correta

    setMessage(
      isCorrect
        ? randomCorrectMessage[Math.floor(Math.random() * randomCorrectMessage.length)]
        : randomWrongMessage[Math.floor(Math.random() * randomWrongMessage.length)]
    )

    setTimeout(() => {
      if (isCorrect) {
        if (currentIndex < filteredQuiz.length - 1) {
          setCurrentIndex((prevIndex) => prevIndex + 1)
          setMessage('')
          setSelectedAnswer(null)
        } else {
          setMessage('Você completou o quiz!')
        }
      }
    }, 1500)
  };

  return (
    <div className="flex flex-col w-11/12 mx-auto gap-6 pt-16">
      <header className="flex justify-between">
        <div className="max-w-60">
          <h1 className="text-em-pink font-fredoka text-2xl font-medium">{currentQuestion?.disciplina}</h1>
          <h2 className="text-em-light-pink">{currentQuestion?.tema}</h2>
        </div>

        <div className="text-em-salmon flex items-center">
          <span>{filteredQuiz.length - currentIndex}</span>
          <Fire size={24} />
        </div>
      </header>

      <div className="block w-full h-em-1 bg-white/10" />
      <main>
        <div className="flex flex-col items-center pt-20 gap-9 w-11/12 max-w-80 mx-auto animate-fade-down ease-in">
          <div className="flex flex-col gap-6 w-full">
            {currentQuestion
              ? (
              <>
                <form className="w-full flex flex-col gap-9" onSubmit={handleQuizSubmit}>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="quiz" className="text-em-white font-inter text-xs font-bold">
                      {currentQuestion.pergunta}
                    </label>
                    {currentQuestion.respostas.map((resposta, index) => (
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
                        selectedAnswer
                          ? 'bg-em-green hover:bg-green-700'
                          : 'bg-gray-500 cursor-not-allowed'
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
                )
              : (
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
