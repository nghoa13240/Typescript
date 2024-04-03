import React, { useState } from 'react'

type Props = {
  onDelete: () => void
}

const ProductDelete: React.FC<Props> = ({ onDelete }) => {
  const [confirmDelete, setConfirmDelete] = useState(false)

  const ConfirmDelete = () => {
    setConfirmDelete(!confirmDelete)
  }

  const handleDelete = () => {
    onDelete()
    ConfirmDelete()
  }

  return (
    <div>
      {confirmDelete ? (
        <div>
          <p>Bạn có chắc chắn muốn xóa sản phẩm không?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={ConfirmDelete}>No</button>
        </div>
      ) : (
        <button onClick={ConfirmDelete}>Delete</button>
      )}
    </div>
  )
}

export default ProductDelete
