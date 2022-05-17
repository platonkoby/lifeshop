import NavPhone from './NavPhone'
import '../styles/page.css'
import { Children } from '../models/global.models'
import { PageProps } from '../models/page.models'

function Page({ children, page } : PageProps) {
  return (
    <div className='page'>
        <NavPhone page={page} />
        <div className="page-content">
          {children}
        </div>
    </div>
  )
}

export default Page