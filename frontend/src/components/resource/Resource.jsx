import './Resource.css';

export const Resource = ({ ...resource }) => {
  return (
    <li className="titlesResource">
      <h2>{resource.title}</h2>
      <button>...</button>
    </li>
  )
}
