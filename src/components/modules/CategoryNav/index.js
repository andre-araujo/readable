import React from 'react';

function CategoryNav({
  categories
}) {
  return (
    <ul>
      {
        categories.map(category => (
          <li key={category.name}>
            {category.name}
          </li>
        ))
      }
    </ul>
  )
}

CategoryNav.defaultProps = {
  categories: []
}

export default CategoryNav;
