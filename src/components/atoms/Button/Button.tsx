import { css } from '../../../../styled-system/css'
export type ButtonProps = {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
  label: string
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'primary' : 'secondary'

  return (
    <button
      className={css({
        backgroundColor: mode,
        color: 'black',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        boxShadow: '0 0 20px 5px rgba(255, 234, 0, 0.8)' /* ネオン効果のための影 */,
        animation: 'neonGlow 1.5s infinite alternate',
        _hover: {
          opacity: 0.8,
        },
      })}
      {...props}
    >
      {label}
    </button>
  )
}
