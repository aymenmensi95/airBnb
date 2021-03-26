import { useMemo, useState } from "react"

import './styles.scss'

const Input = ({id, className, rightIcon, value, onChange, type, ...props}) => {
  const [viewPassword, setViewPassword] = useState(false)


  const isPassword = useMemo(() => type === 'password', [type])

  return (
    <div  id={id || ''} className={`input ${className || ''}`}>
      {rightIcon && <img className={`input-left-icon ${className ? 'input-left-icon-' + className : ''}`} src={rightIcon} alt="input-left-icon" width="15px" />}
      <input id={`input-input${id ? '-' + id : ''}`} {...props} className={`${className ? 'input-input-' + className : ''} ${!!rightIcon ? 'with-icon' : ''}`} type={isPassword ? viewPassword ? 'text' : 'password' : type} value={value} onChange={e => onChange && onChange(e.target.value)} />
      {isPassword && <div className="password-btn btn sm" onClick={() => setViewPassword(prev => !prev)} >{viewPassword ? 'Hide' : 'Show'}</div>}
    </div>
  )
}

export default Input
