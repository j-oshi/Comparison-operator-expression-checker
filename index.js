import { 
    stringContainOneWordOrLetter,
    totalNumberOfDigitsInString,
    validateOperandString,
    findFirstOperator,
    executeOperation,
    standardizeVariable,
    substituteVariableValue,
    comparisonType,
    evaluteComparisonExpression 
} from "./comparison-operator-string-evaluator.js";

console.log(findFirstOperator('10 <= ytytfytfytg >= 13'));
console.log(comparisonType('10 <= 20 <= 13'));
console.log(executeOperation('10 <= 13'));
console.log(evaluteComparisonExpression('10 <= ytytfytfytg <= 13', 13));
console.log(evaluteComparisonExpression('10 == ytytfytf <= 700', 13));
console.log(evaluteComparisonExpression('10 < ytytfytf <= 700', 13));