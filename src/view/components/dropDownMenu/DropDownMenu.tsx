import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';

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

export function DropdownMenuContent({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        className='rounded-2xl p-2 bg-white space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10);]'
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  )
}


export function DropdownMenuItem({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Item
      className='outline-none min-h-[48px] flex items-center p-4 text-sm text-gray-800 hover:bg-gray-50 rounded-2xl transition-colors'
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
