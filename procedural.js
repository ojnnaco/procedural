// you are demanded to write an algorithm that fulfill the following:

// Name: Dot product
// Description:
// Write a procedure, called dot_product which calculates in the variable ps, the dot(scalar) product of v1 and v2 (v1 and v2 are vectors of IR)
// Write an algorithm which determines, for n pairs of given vectors, whether two vectors of given IR are orthogonal, by calling the procedure defined in the previous question. The dot product of two orthogonal vectors is zero.
// Modify the previous algorithm if you use a dot_product function instead of a procedure.

// Instructions
// While creating your algorithm, you should:

// Use array for presenting the vector.
// Use nested loop (a loop inside another)
// Use different types of passing parameters

//Question 1

function dotProduct(v1, v2) {
  for (let i = 0; i < v1.length; i++) {
    let ps = v1[i] * v2[i] + v1[i + 1] * v2[i + 1];

    return ps;
  }
}

console.log(dotProduct([3, 4], [2, 3]));

//Question 2

function orthoTest(v1, v2) {
  if (dotProduct(v1, v2) === 0) {
    return `it is orthogonal`;
  } else {
    return `it is not orthogonal`;
  }
}

console.log(orthoTest([3, 4], [2, 3]));
