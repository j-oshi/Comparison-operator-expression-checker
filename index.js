import { 
    evaluteComparisonExpression 
} from "./comparison-operator-string-evaluator.js";

console.log(evaluteComparisonExpression('10 <= ytytfytfytg <= 13', 13));
console.log(evaluteComparisonExpression('10 == ytytfytf <= 700', 13));
console.log(evaluteComparisonExpression('10 < ytytfytf <= 700', 13));