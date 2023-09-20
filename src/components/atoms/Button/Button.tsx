import { css } from '../../../../styled-system/css'
export type ButtonProps = {
  primary?: boolean
  neon?: boolean
  size?: 'small' | 'medium' | 'large'
  label?: string
  onClick?: () => void
}

export const Button = ({ primary, neon, label, ...props }: ButtonProps) => {
  // console.log(neon)

  return (
    <button
      className={css({
        backgroundColor: primary ? 'primary' : 'secondary',
        color: 'black',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'all 0.3s ease',
        boxShadow: neon
          ? '0 0 20px 5px rgba(255, 234, 0, 0.8)'
          : '' /* ネオン効果のための影 */,
        animation: neon ? 'neonGlow 1.5s infinite alternate' : '',
        _hover: {
          opacity: 0.8,
        },
      })}
      onClick={props.onClick}
      {...props}
    >
      {label}
    </button>
  )
}
