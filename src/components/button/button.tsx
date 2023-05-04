import React from 'react'

import { cx } from '../../utils'

// ------------------------------
// Prop types
// ------------------------------
export type ButtonProps = {
  impact?: 'bold' | 'light' | 'none'
  size?: 'small' | 'medium' | 'large'
  shape?: 'square' | 'rounded' | 'pill'
  tone?: 'default' | 'danger' | 'success'
}

// ------------------------------
// Tailwind Classes lookup directory
// ------------------------------
const baseClasses =
  'font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50'

const impactClasses: Record<
  NonNullable<ButtonProps['tone']>,
  Record<NonNullable<ButtonProps['impact']>, string>
> = {
  default: {
    bold: 'bg-primary-500 text-white shadow-md hover:bg-primary-600 focus-visible:ring-primary-500',
    light: 'bg-primary-100 text-primary-700 hover:bg-primary-200 focus-visible:ring-primary-500',
    none: 'bg-transparent text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-500',
  },
  danger: {
    bold: 'bg-red-500 text-white shadow-md hover:bg-red-600 focus-visible:ring-red-500',
    light: 'bg-red-100 text-red-700 hover:bg-red-200 focus-visible:ring-red-500',
    none: 'bg-transparent text-red-700 hover:bg-red-50 focus-visible:ring-red-500',
  },
  success: {
    bold: 'bg-green-500 text-white shadow-md hover:bg-green-600 focus-visible:ring-green-500',
    light: 'bg-green-100 text-green-700 hover:bg-green-200 focus-visible:ring-green-500',
    none: 'bg-transparent text-green-700 hover:bg-green-50 focus-visible:ring-green-500',
  },
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-5 py-2 text-base',
  large: 'px-7 py-2.5 text-lg',
}

const shapeClasses: Record<NonNullable<ButtonProps['shape']>, string> = {
  square: 'rounded-none',
  rounded: 'rounded',
  pill: 'rounded-full',
}

// ------------------------------
// Component definition (with default variants)
// ------------------------------
export const Button = ({
  size = 'medium',
  impact = 'bold',
  shape = 'rounded',
  tone = 'default',
  ...restProps
}: ButtonProps & React.ComponentProps<'button'>) => {
  return (
    <button
      {...restProps}
      className={cx(
        baseClasses,
        impactClasses[tone][impact],
        sizeClasses[size],
        shapeClasses[shape]
      )}
    />
  )
}
