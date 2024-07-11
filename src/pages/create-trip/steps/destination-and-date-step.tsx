import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStep {
  isGuestsInputOpen: boolean
  handleGuestsInputOpen: () => void
}

export function DestinationAndDateStep({ isGuestsInputOpen, handleGuestsInputOpen }: DestinationAndDateStep) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center gap-3 shadow-shape">
      <div className='flex items-center gap-2 flex-1'>
        <MapPin className='size-5' />
        <input
          disabled={isGuestsInputOpen}
          type="text" placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1" />
      </div>

      <div className='flex items-center gap-2'>
        <Calendar className='size-5 text-zinc-400' />
        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none" />
      </div>

      <div className='w-px h-6 bg-zinc-800' />

      {isGuestsInputOpen ? (
        <Button
          variant="secondary"
          onClick={handleGuestsInputOpen}>
          Alterar Local/Data
          <Settings2 className='size-5' />
        </Button>
      ) : (
        <Button onClick={handleGuestsInputOpen}>
          Continuar
          <ArrowRight className='size-5' />
        </Button>
      )}

    </div>
  )
}