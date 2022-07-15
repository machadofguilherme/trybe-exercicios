let valueTmp = 1;

const getFatorial = (number) => {
  for (let i = 1; i <= number; i += 1) {
    valueTmp = valueTmp * i;
  }
  console.log(valueTmp);
};

getFatorial(4);
