import NavPhone from './NavPhone'
import '../styles/page.css'
import { Children } from '../models/global.models'

function Page({ children } : Children) {
  return (
    <div className='page'>
        <NavPhone />
        <div className="page-content">
          {children}
        </div>
    </div>
  )
}

export default Page