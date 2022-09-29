const countPositivesSumNegatives = (input) => {                                 
  if (!Array.isArray(input)) return [];                                         
  if (input.length === 0) return [];                                            
  const result = [0, 0];                                                        
  for (const number of input) {                                                 
    if (number > 0) result[0]++;                                                
    else if (number < 0) result[1] += number;                                   
  }                                                                             
  return result;                                                                
};
