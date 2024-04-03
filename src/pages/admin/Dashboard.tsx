'use client'

import { TProduct } from '@/interfaces/TProduct'
import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Component() {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const handleDelete = (productId: number) => {
    const confirmDelete = window.confirm('Bạn có chắc chắn muốn xóa sản phẩm không?')
    if (confirmDelete) {
      fetch(`http://localhost:3000/products/${productId}`, {
        method: 'DELETE'
      })
        .then((response) => response.json())
        .then((data) => {
          setProducts(products.filter((product) => product.id !== productId))
        })
        .catch((error) => console.error('Error deleting product:', error))
    }
  }
  return (
    <div className='overflow-x-auto'>
      <h2>Hello, Admin</h2>
      <Link className='btn btn-primary' to='/admin/add'>
        Add new Product
      </Link>
      <Table striped className='table'>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>TITLE</Table.HeadCell>
          <Table.HeadCell>DESCRIPTION</Table.HeadCell>
          <Table.HeadCell>PRICE</Table.HeadCell>
          <Table.HeadCell>THUMBNAIL</Table.HeadCell>
          <Table.HeadCell>IMAGE</Table.HeadCell>
          <Table.HeadCell>HÀNH ĐỘNG</Table.HeadCell>
        </Table.Head>
        {products.map((e, index) => (
          <Table.Body key={e.id} className={`bg-white ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell>{e.id}</Table.Cell>
              <Table.Cell className=' font-medium text-gray-900 dark:text-white'>{e.title}</Table.Cell>
              <Table.Cell>{e.description}</Table.Cell>
              <Table.Cell>{e.price}</Table.Cell>
              <Table.Cell>{e.thumbnail}</Table.Cell>
              <Table.Cell>
                <img src={e.thumbnail} />
              </Table.Cell>
              <Table.Cell>
                <div className='btn-container'>
                  <Link to={`/admin/edit/${e.id}`} className='btn btn-update'>
                    Update
                  </Link>{' '}
                  <button onClick={() => handleDelete(e.id)} className='btn btn-delete'>
                    Delete
                  </button>{' '}
                </div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  )
}

export default Component
