import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

interface Category {
  id: string;
  name: string;
}

const Category = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [newCategory, setNewCategory] = useState('');
  
  const fetchCategories = async () => {
    try {
      const response = await axios.get<Category[]>('API_URL/categories');
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAdd = async () => {
    if (!newCategory) {
      alert("Category name cannot be empty");
      return;
    }

    try {
      await axios.post('API_URL/categories', { name: newCategory });
      setNewCategory(''); // Reset input after adding
      fetchCategories();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div>
      <TextField
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        placeholder="New Category"
      />
      <Button onClick={handleAdd}>Add Category</Button>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Category;