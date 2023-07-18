import React from 'react'

interface ButtonProps {
  link: string
  children: React.ReactNode;
  ButtonStyle: string
}

const Button: React.FC<ButtonProps> = ({link, ButtonStyle ,children}) => {
  const handleClick = () => {
    window.open(link, "_blank")
  }

  return (
    <button onClick={handleClick} className={ButtonStyle}>{children}</button>
  )
}

export default Button