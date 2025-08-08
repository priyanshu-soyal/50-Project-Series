import './Single.css'
import Sidebar from '../../Components/SideBar/Sidebar'
import SinglePost from '../../Components/SinglePost/SinglePost'
export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
