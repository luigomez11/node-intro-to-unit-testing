const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should return fizz, buzz or fizz-buzz depending on the number', function(){
		const numberInput = [
			{num: 15, expected: 'fizz-buzz'},
			{num: 5, expected: 'buzz'},
			{num: 3, expected: 'fizz'}
		];

		numberInput.forEach(function(input){
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});

	it('should return an error if input is not a number', function(){
		const nonNumber = ['hello', true,'number'];

		nonNumber.forEach(function(input){
			expect(function(){
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});