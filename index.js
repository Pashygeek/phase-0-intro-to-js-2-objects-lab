let employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value) {
    employee[streetAddress] = '12 Broadway';
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
