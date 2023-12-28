import { useNavigate } from "react-router-dom"
import { useState } from 'react';

const TableItem = (props) =>
{
  const { images, title, description, id } = props
  const placeholderImageUrl =
    'https://img.freepik.com/premium-vector/no-image-vector-icon-no-photo-sign-isolated_118339-3177.jpg?size=626&ext=jpg&ga=GA1.1.1587386060.1703438607&semt=ais';
    const [imageError, setImageError] = useState(false);

  const navigation = useNavigate()
  const goDetails = () => {
    navigation(`/product-details/${id}`)
  }
  
  return <>

    <tr role="button" onClick={goDetails}>
      <th scope="row">{id}</th>
      <td>
      <img src={imageError ? placeholderImageUrl : images}
      alt="products" 
      style={{ width: "10vh", height: "10vh" }}
      onError={() => setImageError(true)}
      /> 
      </td>
      <td>{title}</td>
      <td className="d-none d-md-table-cell">{description.split(" ").slice(0, 5).join(" ")}...</td>
    </tr>
  </>
}
export default TableItem