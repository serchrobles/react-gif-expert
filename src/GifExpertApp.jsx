import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [ categories, setCategories ] = useState([ 'One punch' ]);

  const onAddCategory = ( newCategory ) => {
    if( categories.includes( newCategory ) ) return;

    setCategories( [ newCategory, ...categories ] );
    // setCategories( cat => [...cat, newCategory] );
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory 
        // setCategories={setCategories} 
        onAddCategory={onAddCategory}
      />

      { 
        categories.map( category =>
          <GifGrid 
            category={category}
            key={category}
          />
        )
      }
    </>
  )
}