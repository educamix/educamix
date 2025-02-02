import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import 'tailwindcss/tailwind.css'
import React, { useState } from 'react'

interface DropdownProps {
  selectedSubject: string;
  onSelect: (subject: string) => void;
  subjects: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ selectedSubject, onSelect, subjects }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="flex flex-col gap-1 relative">
      <button
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {selectedSubject}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {subjects.map((subject) => (
              <li key={subject}>
                <button
                  onClick={() => {
                    onSelect(subject)
                    setIsOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-2 ${
                    selectedSubject === subject
                      ? 'bg-blue-100 dark:bg-blue-600 dark:text-white'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  }`}
                >
                  {subject}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
};

export default function Quiz() {
  const navigate = useNavigate()
  const [selectedSubject, setSelectedSubject] = useState('Matemática')

  const handleSelectSubject = (subject: string) => setSelectedSubject(subject)

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  };

  return (
    <div
      className={clsx(
        'flex flex-col items-center pt-20 gap-9 w-11/12 max-w-80 mx-auto',
        'animate-fade-down ease-in',
      )}
    >
      <div className="flex flex-col gap-16 w-full">
        <Dropdown selectedSubject={selectedSubject} onSelect={handleSelectSubject} />

        <form className="w-full flex flex-col gap-9" onSubmit={handleQuizSubmit}>
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
