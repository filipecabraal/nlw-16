import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  handleCreateActivityModalOpen: () => void
}

export function CreateActivityModal({ handleCreateActivityModalOpen }: CreateActivityModalProps) {
  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
            <button type='button' onClick={handleCreateActivityModalOpen}>
              <X className='size-5 text-zinc-400' />
            </button>
          </div>

          <div className='space-y-7'>
            <p className='text-sm text-zinc-400'>
              Todos convidados podem visualizar as atividades.
            </p>
          </div>
        </div>

        <form onSubmit={() => { }} className='space-y-3'>
          <div className='h-14 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <Tag className='text-zinc-400 size-5' />
            <input
              type="text"
              name='title'
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className='h-14 flex-1 px-5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
              <Calendar className='text-zinc-400 size-5' />
              <input
                type="datetime-local"
                name='occurs_at'
                placeholder="Data e horário da atividade"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>
          </div>

          <Button
            type='submit'
            size="full"
          >
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  )
}