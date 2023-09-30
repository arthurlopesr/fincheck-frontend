import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '../../../app/utils/cn';
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  title: string;
  rightAction?: React.ReactNode;
}

export function Modal({ open, children, title, rightAction }: ModalProps) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm',
            'data-[state=open]:animate-overlay-show',
          )}
        />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] p-6 space-y-10 bg-white rounded-xl shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)] w-full max-w-[400px] outline-none',
            'data-[state=open]:animate-content-show',
          )}
        >
          <header className="flex items-center justify-between text-gray-800">
            <button
              className='w-12 h-12 '
            >
              <Cross2Icon className='w-6 h-6'/>
            </button>

            <span className='text-lg tracking-[-1px] font-bold'>
              {title}
            </span>

            <div className='w-12 h-12 flex items-center justify-center'>
              {rightAction}
            </div>
          </header>

          <div>
            {children}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
