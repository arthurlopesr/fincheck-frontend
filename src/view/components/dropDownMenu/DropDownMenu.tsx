import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '../../../app/utils/cn';

export function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Root>
      {children}
    </RdxDropdownMenu.Root>
  )
}

export function DropdownMenuTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Trigger
      className='outline-none'
    >
      {children}
    </RdxDropdownMenu.Trigger>
  )
}

interface DropdownMenuContentProps {
  children: React.ReactNode,
  className?: string
}

export function DropdownMenuContent({ children, className }: DropdownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className={cn(
          'rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10);]',
          className
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  )
}

interface DropdownMenuItemProps {
  children: React.ReactNode
  className?: string
  onSelect?: () => void
}

export function DropdownMenuItem({ children, className, onSelect }: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        'outline-none min-h-[48px] flex items-center p-4 text-sm text-gray-800 data-[highlighted]:bg-gray-50 rounded-2xl transition-colors cursor-pointer',
        className
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  )
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
}
