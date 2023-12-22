import React from 'react'
import CustomInput from '../components/CustomInput'

const AddBlogCategory = () => {
  return (
    <div>
        <h3 className='mb-4 title'>Add Blog Category</h3>
        <form action="">
            <CustomInput
                type="text"
                label="Add Category Title"
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

export default AddBlogCategory