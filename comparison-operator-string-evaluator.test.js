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


test('count words or alphabets in string', () => {
    expect(stringContainOneWordOrLetter('10 <= 20 <= 13')).toBe(0);
    expect(stringContainOneWordOrLetter('10 <= hello <= 13')).toBe(1);
    expect(stringContainOneWordOrLetter('10 <= hello this is <= 13')).toBe(3);
});

test('count numeric value in string', () => {
    expect(totalNumberOfDigitsInString('10 <= 20 <= 13')).toBe(3);
    expect(totalNumberOfDigitsInString('10 <= hello <= 13')).toBe(2);
    expect(totalNumberOfDigitsInString('hello this is <= ')).toBe(0);
});

test('check if string is a valid comparison expression with a variable', () => {
    let funct1 = totalNumberOfDigitsInString;
    let funct2 = stringContainOneWordOrLetter;

    expect(validateOperandString('a > 13', funct1, funct2)).toBe(true);
    expect(validateOperandString('1 <= a < 13', funct1, funct2)).toBe(true);
    expect(validateOperandString('10 <= 20 <= 13', funct1, funct2)).toBe(false);
    expect(validateOperandString('10 <= a >= 13', funct1, funct2)).toBe(true);
    expect(validateOperandString('10 <= hello <= 13', funct1, funct2)).toBe(true);
    expect(validateOperandString('hello this is <= ', funct1, funct2)).toBe(false);
});

test('check string expression for first operand', () => {
    expect(findFirstOperator('10 <= 20 <= 13')).toContain("<=");
    expect(findFirstOperator('10 <= hello <= 13')).toContain("<=");
    expect(findFirstOperator('10 < hello < 13')).toContain("<");
    expect(findFirstOperator('10 == 20 <= 13')).toContain("==");
    expect(findFirstOperator('10 >= hello <= 13')).toContain(">=");
    expect(findFirstOperator('10 < hello > 13')).toContain("<");
});

test('expression is valid', () => {
    expect(executeOperation('10 <= 20')).toBe(true);
    expect(executeOperation('10 <= hello')).toBe(false);
    expect(executeOperation('3 > 2')).toBe(true);
});

test('variable is change to input variable', () => {
    expect(standardizeVariable('10 < hello < 20', 'a')).toEqual('10 < a < 20');
    expect(standardizeVariable('10 <= hello', 'b')).toEqual('10 <= b');
    expect(standardizeVariable('3 > three', 'c')).toEqual('3 > c');
});

test('variable is substituted with value', () => {
    expect(substituteVariableValue('10 < hello < 20', 'hello', 12)).toEqual('10 < 12 < 20');
    expect(substituteVariableValue('10 <= hello', 'hello', 13)).toEqual('10 <= 13');
    expect(substituteVariableValue('3 > three', 'three', 14)).toEqual('3 > 14');
});

test('variable is substituted with value', () => {
    expect(comparisonType('10 < hello < 20')).toEqual({ length: 5, content: [ '10', '<', 'hello', '<', '20' ] });
    expect(comparisonType('10 <= hello')).toEqual({ length: 3, content: [ '10', '<=', 'hello'] });
    expect(comparisonType('3 > three')).toEqual({ length: 3, content: [ '3', '>', 'three'] });
});

test('is comparison expression valid with value', () => {
    expect(evaluteComparisonExpression('10 <= foo', 15)).toEqual(true);
    expect(evaluteComparisonExpression('10 > boo', 13)).toEqual(false);
    expect(evaluteComparisonExpression('10 == doo', 10)).toEqual(true);
    expect(evaluteComparisonExpression('10 <= foo <= 13', 12)).toEqual(true);
    expect(evaluteComparisonExpression('10 < boo < 15', 13)).toEqual(true);
    expect(evaluteComparisonExpression('10 < doo > 13', 13)).toEqual(false);
});