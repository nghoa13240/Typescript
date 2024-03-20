'use client'

import { TProduct } from '@/interfaces/TProduct'
import { Table } from 'flowbite-react'
import { useEffect, useState } from 'react'

function Component() {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    fetch(`http://localhost:3000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])
  return (
    <div className='overflow-x-auto'>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>TITLE</Table.HeadCell>
          <Table.HeadCell>DESC</Table.HeadCell>
          <Table.HeadCell>PRICE</Table.HeadCell>
          <Table.HeadCell>DISCOUNTPERCENTAGE</Table.HeadCell>
          <Table.HeadCell>RATING</Table.HeadCell>
          <Table.HeadCell>STOCK</Table.HeadCell>
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
              <Table.Cell>{e.discountPercentage}</Table.Cell>
              <Table.Cell>{e.rating}</Table.Cell>
              <Table.Cell>{e.stock}</Table.Cell>
              <Table.Cell>{e.brand}</Table.Cell>
              <Table.Cell>{e.category}</Table.Cell>
              <Table.Cell>{e.thumbnail}</Table.Cell>
              <Table.Cell>
                <img src={e.thumbnail} />
              </Table.Cell>
              <Table.Cell>
                <a href='#' className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'>
                  Edit
                </a>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  )
}

export default Component
