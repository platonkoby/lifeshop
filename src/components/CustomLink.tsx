import { Link } from 'react-router-dom'
import { CustomLinkProps } from '../models/custom.link.models'
import '../styles/custom-link.css'

function CustomLink({ to, children } : CustomLinkProps ) {
  return (
    <Link to={to} className='link'>
        {children}
    </Link>
  )
}

export default CustomLink