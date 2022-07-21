const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let compare;
let total = 0;

const totalScore = (correct, students) => {
  for (let i = 0; i < correct.length; i += 1) {
    compare = correct[i];
    for (let i2 = 0; i2 < students.length; i2 += 1) {
      if (compare === students[i2]) {
        total += 1;
      } else if (compare !== students[i2]) {
        total -= 1;
      } else {
        total = Number(total);
      }
    }
  }
  console.log(total);
}

totalScore(RIGHT_ANSWERS, STUDENT_ANSWERS);