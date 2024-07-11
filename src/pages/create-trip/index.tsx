import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { InviteGuestsModal } from './invite-guests-modal'
import { ConfirmTripModal } from './confirm-trip-modal'
import { DestinationAndDateStep } from './steps/destination-and-date-step'
import { InviteGuestsStep } from './steps/invite-guests-step'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setGuestsInputOpen] = useState(false)
  const [isGuestsModalOpen, setGuestsModalOpen] = useState(false)
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false)

  const [emailsToInvite, setEmailsToInvite] = useState([
    'filipecabral@gmail.com',
    'teste123@gmail.com',
    'lalala@gmail.com'
  ])

  function handleGuestsInputOpen() {
    isGuestsInputOpen ? setGuestsInputOpen(false) : setGuestsInputOpen(true)
  }

  function handleGuestsModalOpen() {
    isGuestsModalOpen ? setGuestsModalOpen(false) : setGuestsModalOpen(true)
  }

  function handleConfirmModalOpen() {
    isConfirmModalOpen ? setConfirmModalOpen(false) : setConfirmModalOpen(true)
  }

  function addEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }

  function removeEmail(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate('/trips/123')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            handleGuestsInputOpen={handleGuestsInputOpen}
          />

          {isGuestsInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              handleConfirmModalOpen={handleConfirmModalOpen}
              handleGuestsModalOpen={handleGuestsModalOpen}
            />
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
          com nossos <a className="text-zinc-300 underline" href="#">termos de uso </a>
          e <a className="text-zinc-300 underline" href="#">políticas de privacidade</a>.
        </p>
      </div>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          addEmailToInvite={addEmailToInvite}
          emailsToInvite={emailsToInvite}
          handleGuestsModalOpen={handleGuestsModalOpen}
          removeEmail={removeEmail}
        />
      )}

      {isConfirmModalOpen && (
        <ConfirmTripModal
          createTrip={createTrip}
          handleConfirmModalOpen={handleConfirmModalOpen}
        />
      )}

    </div>
  )
}
