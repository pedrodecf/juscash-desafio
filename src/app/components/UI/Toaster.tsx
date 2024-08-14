"use client"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {

  return (
    <Sonner
      toastOptions={{ classNames: {
        toast: 'bg-white shadow-lg text-gray-800',
        title: 'font-bold',
        description: 'text-gray-500',
      },
        actionButtonStyle: { backgroundColor: '#22c55e' },
      }}
      {...props}
    />
  )
}

export { Toaster }
