import React from 'react'
import CustomInput from '../components/CustomInput'

const AddBrand = () => {
  return (
    <div>
        <h3 className='mb-4 title'>Add Brand</h3>
        <form action="">
            <CustomInput
                type="text"
                label="Add Blog Category Title"
            />
            <button
            type="submit"
            className="btn btn-success border-0 rounded-2 my-5 "
          >
            Add
          </button>
        </form>
    </div>
  )
}

export default AddBrand