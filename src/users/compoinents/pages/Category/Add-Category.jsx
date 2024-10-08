import { useState } from 'react';
import { addNewCategory } from '../../../../redux/Category_Thunk';
import { useDispatch  } from 'react-redux'
import {  toast } from 'react-hot-toast';
import email from '../../../../redux/Get_email';

const AddCategory = ({ onClose }) => {
  let dispatch = useDispatch();
  const [expenseName, setExpenseName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseName.trim()) {
      dispatch(addNewCategory({
        name: expenseName }));
        toast.success("Thêm mới thành công !")
        onClose()
      setExpenseName('');}
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative w-[30%] mx-auto bg-white shadow-md rounded-md p-6">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-semibold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4">Thêm mới Danh mục</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="expenseName">
              Tên Chi Phí
            </label>
            <input
              type="text"
              id="expenseName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              placeholder="Nhập tên chi phí"
              required
            />
          </div>
          <div className="text-center">
            <button
            
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Thêm Chi Phí
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;
