import { Button } from "../button/Button";
import { TrashIcon } from "../icons/TrashIcon";
import { Modal } from "../modal/Modal";

interface ConfirmDeleteModalProps {
  onClose(): void;
  title: string;
  description?: string;
}

export function ConfirmDeleteModal({ onClose, title, description }: ConfirmDeleteModalProps) {
  return (
    <Modal
      open
      title="Excluir"
      onClose={onClose}
    >
      <div className="flex flex-col items-center text-center gap-6">
        <div className="w-[52px] h-[52px] rounded-full bg-red-50 flex items-center justify-center">
          <TrashIcon className="w-6 h-6 text-red-900" />
        </div>
        <p className="w-[180px] font-bold text-gray-800 tracking-[-0.5px]">
          {title}
        </p>
        {description && (
          <p className="tracking-[-0.5px] text-gray-800">
            Ao excluir a conta, também serão excluídos todos os registros de receita e despesas relacionados.
          </p>
        )}
      </div>

      <div className="mt-10 space-y-4">
        <Button
          className="w-full"
          variant="danger"
        >
          Sim, desejo excluir
        </Button>
        <Button
          className="w-full"
          variant="ghost"
          onClick={onClose}
        >
          Cancelar
        </Button>
      </div>
    </Modal>
  )
}
