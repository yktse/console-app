const validateName = (name) => {
  if (!name || typeof name !== 'string') {
    throw new Error(`Please enter valid name : string`);
  }
};

const validateSalary = (salary) => {
  if (!salary || isNaN(salary)) {
    throw new Error(`Please enter valid salary : number`);
  }

  if (salary < 0) {
    throw new Error(`Salary must be greater than 0.`);
  }
};

const validate = (name, salary) => {
  validateName(name);
  validateSalary(salary);
};

module.exports = { validate };
