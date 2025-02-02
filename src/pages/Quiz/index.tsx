import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import 'tailwindcss/tailwind.css'
import React, { useState } from 'react'

export default function Quiz() {
  const navigate = useNavigate()

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div
      className={clsx(
        'flex flex-col items-center pt-20 gap-9 w-11/12 max-w-80 mx-auto',
        'animate-fade-down ease-in',
      )}
    >
      <div className="flex flex-col gap-16 w-full">
        <div className="flex flex-col gap-1 relative">

          <h1
            className={clsx(
              'text-em-pink font-fredoka text-xl font-medium text-center',
            )}
          >
            Quiz
          </h1>
        </div>

        <div className="flex flex-col gap-9">
          <p className="text-center text-em-dark font-inter text-sm">
            Matemática
          </p>
        </div>

        <form
          className="w-full flex flex-col gap-9"
          onSubmit={handleQuizSubmit}
        >
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className={clsx(
                'rounded-md bg-em-green h-10 flex justify-center items-center',
                'w-full font-inter text-xs font-bold text-white',
              )}
            >
              Responder
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
