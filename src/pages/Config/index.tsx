import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'
import { getUser, updateUser } from '../../services/user.service'
import LoadingComponent from '../../components/LoadingComponent'
import { Navbar } from '../../components/Navbar'

export default function UserProfile() {
  const user = getUser()
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !newPassword || !confirmNewPassword) {
      alert('Preencha todos os campos')
      return
    }
    if (newPassword !== confirmNewPassword) {
      alert('As senhas não coincidem')
      return
    }
    setIsLoading(true)
    try {
      await updateUser({ id: user._id, userData: { name, email, password: newPassword, role: user.role } })
      alert('Perfil atualizado com sucesso')
    } catch (err) {
      console.error('Erro ao atualizar perfil', err)
    } finally {
      setIsLoading(false)
    }
  }

  if (isLoading) return <LoadingComponent />

  return (
    <div className="flex flex-col w-11/12 mx-auto gap-6 pt-16">
      <header className="flex justify-between">
        <div className="max-w-60">
          <h1 className="text-em-pink font-fredoka text-2xl font-medium">Configuração de Perfil</h1>
        </div>
      </header>

      <div className="block w-full h-em-1 bg-white/10" />
      <main>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-em-pink">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-em-pink">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-em-pink">Nova Senha</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-em-pink">Confirme a Nova Senha</label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
            Atualizar Perfil
          </button>
        </form>
      </main>
      <Navbar />
    </div>
  )
}
