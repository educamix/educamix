import { Fire } from '@phosphor-icons/react'
import 'tailwindcss/tailwind.css'
import { SubjectCard } from '../../components/SubjectCard'
import { Navbar } from '../../components/Navbar'

export default function Home() {
  return (
    <div className="flex flex-col w-11/12 mx-auto gap-6 pt-16">
      <header className="flex justify-between">
        <div className="max-w-60">
          <h1 className="text-em-pink font-fredoka text-2xl font-medium">
            Bem vindo de volta Gabriel!
          </h1>
          <h2 className="text-em-light-pink">
            Pronto para alguns desafios?
          </h2>
        </div>

        <div className="text-em-salmon flex items-center">
          <span>3</span>
          <Fire size={24} />
        </div>
      </header>

      <div className="block w-full h-em-1 bg-white/10" />

      <main className="flex flex-col gap-5">
        <p className="text-white/80">
          O que quer estudar hoje?
        </p>

        <div className="grid grid-cols-2 gap-4 justify-between">
          <SubjectCard key="Matemática" label="Matemática" linkTo="/quiz?subject=Matemática" />
          <SubjectCard key="Português" label="Português" linkTo="/quiz?subject=Português" />
          <SubjectCard key="História" label="História" linkTo="/quiz?subject=História" />
          <SubjectCard key="Geografia" label="Geografia" linkTo="/quiz?subject=Geografia" />
          <SubjectCard key="Ciências" label="Ciências" linkTo="/quiz?subject=Ciências" />
        </div>
      </main>

      <Navbar />
    </div>
  )
}
