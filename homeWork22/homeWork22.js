function exponentiate(number, degree) {
    if (degree === 0) {
      return 1;
    } else {
      return number * exponentiate(number, degree - 1);
    }
  }

  console.log(exponentiate(3, 3));