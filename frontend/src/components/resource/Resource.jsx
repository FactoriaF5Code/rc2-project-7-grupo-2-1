import './Resource.css';
import { EditIcon } from '../../assets/EditIcon'

export const Resource = ({ ...resource }) => {
  return (
    <>
    <li className="titlesResource">
      <h2>{resource.title}</h2>
      <button className='editIcon'>
        <EditIcon />
      </button>
    </li>
    <hr></hr>
    </>
  )
}
