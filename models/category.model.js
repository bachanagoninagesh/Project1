// models/category.model.js
const Category = (sequelize, DataTypes) => {
    return sequelize.define('category', {
      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  };
  
  export default Category;
  