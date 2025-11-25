function countCategories(categories) {
  return categories.reduce(function (result, category) {
    if (result[category]) {
      result[category]++;      
    } else {
      result[category] = 1;    
    }
    return result;
  }, {});
}
