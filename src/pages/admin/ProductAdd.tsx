// ProductAdd.tsx
import { TProduct } from '@/interfaces/TProduct'
import { SubmitHandler, useForm } from 'react-hook-form'
import './ProductAdd.css'

type Props = {
  onAdd: (product: TProduct) => void
}

const ProductAdd: React.FC<Props> = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>()

  const onSubmit: SubmitHandler<TProduct> = (data) => {
    console.log(data)
    onAdd(data)
  }

  return (
    <div className='container mt-4'>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <div className='form-group'>
          <label htmlFor='title' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
            id='title'
            placeholder='Tiêu đề'
            {...register('title', { required: true })}
          />
          {errors.title && <div className='invalid-feedback'>Trường này là bắt buộc</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='price' className='form-label'>
            Price
          </label>
          <input
            type='number'
            className={`form-control ${errors.price ? 'is-invalid' : ''}`}
            id='price'
            placeholder='Giá'
            {...register('price', { required: true })}
          />
          {errors.price && <div className='invalid-feedback'>Trường này là bắt buộc</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input
            type='text'
            className='form-control'
            id='description'
            placeholder='Mô tả'
            {...register('description')}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Gửi
        </button>
      </form>
    </div>
  )
}

export default ProductAdd
