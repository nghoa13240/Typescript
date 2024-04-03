import instance from '@/apis'
import { TProduct } from '@/interfaces/TProduct'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//import './ProductDetail.css' // Import CSS file

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    }
    getProduct()
  }, [])

  return (
    <div className='product-detail'>
      <h2>Chi tiết sản phẩm</h2>
      <table>
        <tbody>
          <tr>
            <th>Title:</th>
            <td>{product?.title}</td>
          </tr>
          <tr>
            <th>Thumbnail:</th>
            <td>
              <img src={product?.thumbnail} alt={product?.title} />
            </td>
          </tr>
          <tr>
            <th>Price:</th>
            <td>{product?.price}</td>
          </tr>
          <tr>
            <th>Description:</th>
            <td>{product?.description}</td>
          </tr>
          <tr>
            <th>Stock:</th>
            <td>{product?.stock}</td>
          </tr>
          <tr>
            <th>Rating:</th>
            <td>{product?.rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductDetail
