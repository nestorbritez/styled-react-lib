import type { HTMLAttributes, Ref } from 'react'
import { forwardRef } from 'react'
import tw from 'tailwind-styled-components'

const TwElement = tw.button`rounded bg-purple-600 px-4 py-2`

type ButtonType<T> = T extends { href: string }
  ? HTMLAnchorElement
  : HTMLButtonElement

type ButtonProps<T extends HTMLElement> = HTMLAttributes<T> & {
  disabled?: boolean
  href?: string
}

const Button = forwardRef<
  ButtonType<HTMLButtonElement & HTMLAnchorElement>,
  ButtonProps<HTMLButtonElement & HTMLAnchorElement>
>((props, ref) => {
  const asElement = (props as { href?: string }).href ? 'a' : 'button'

  return (
    <TwElement
      {...props}
      $as={asElement}
      ref={ref as Ref<ButtonType<ButtonProps<HTMLElement>>>}
    />
  )
})

export default Button
