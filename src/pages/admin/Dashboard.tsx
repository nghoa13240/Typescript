'use client'

//import { TProduct } from "@/interfaces/TProduct";
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
  return (
    <div className='overflow-x-auto'>
      <h2>Hello, Admin</h2>
      <Link className='btn btn-primary' to='/admin/add'>
        Add new Product
      </Link>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>TITLE</Table.HeadCell>
          <Table.HeadCell>DESC</Table.HeadCell>
          <Table.HeadCell>PRICE</Table.HeadCell>
          <Table.HeadCell>BRAND</Table.HeadCell>
          <Table.HeadCell>CATEGORY</Table.HeadCell>
          <Table.HeadCell>THUMBNAIL</Table.HeadCell>
          <Table.HeadCell>IMAGE</Table.HeadCell>
          <Table.HeadCell>
            <span className='sr-only'>Edit</span>
          </Table.HeadCell>
        </Table.Head>
        {products.map((e) => (
          <Table.Body className='divide-y'>
            <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell>{e.id}</Table.Cell>
              <Table.Cell className=' font-medium text-gray-900 dark:text-white'>{e.title}</Table.Cell>
              <Table.Cell>{e.description}</Table.Cell>
              <Table.Cell>{e.price}</Table.Cell>
              <Table.Cell>{e.brand}</Table.Cell>
              <Table.Cell>{e.category}</Table.Cell>
              <Table.Cell>{e.thumbnail}</Table.Cell>
              <Table.Cell>
                <img src={e.thumbnail} />
              </Table.Cell>
              <Table.Cell>
                <Link to={`/admin/edit/${e.id}`} className='btn btn-danger'>
                  Update
                </Link>{' '}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  )
}

export default Component
