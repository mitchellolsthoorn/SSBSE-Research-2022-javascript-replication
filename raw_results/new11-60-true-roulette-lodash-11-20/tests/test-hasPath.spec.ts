export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _objectk8XvYP = "vKTaybYdv6EuKPi27ktBHRUkxhRyCjAbBKaR5n8gBTmOzVVUyUOIwupYbDkV2Tn9EbFruO84dNQDOttQO3x8";
		const _pathJ0JJ0hV = {
		
	}
		const _returnValueOCftCLF = await hasPath(_objectk8XvYP, _pathJ0JJ0hV)
	});

	it('test for hasPath', async () => {
		const _arrayValuerhqWN8 = 3.2460497745988945;
		const _arrayValueNbE7YLv = null;
		const _arrayValueheoEXa6 = "I2jXkY46tDHohFYRF7iGYQIXXuycCLJHHtmnPiPJYBrqVJrV5Qlz53oXjWGwm40xNJoCz";
		const _arrayValuegX9Q5Yt = [_arrayValueheoEXa6]
		const _arrayValueIGHbpO = 6.825315607621448;
		const _objectpogOTI1 = [_arrayValuerhqWN8, _arrayValueNbE7YLv, _arrayValuegX9Q5Yt, _arrayValueIGHbpO]
		const _pathjk6gHnN = "6QAAC2F8";
		const _returnValuesrXnW6 = await hasPath(_objectpogOTI1, _pathjk6gHnN)
	});

	it('test for hasPath', async () => {
		const _objectqYIPzu5 = null;
		const _arrayValueyzBkWIE = "mfxg5F3JiuYR7rOVQhaGzN5Dq3S3EmaQzS69A1d1GilnOSUNEVe2IUMTavqShqP6FyjSkJGd9p6pQ7qYkOdcrb";
		const _arrayValuedyhIyFo = [_arrayValueyzBkWIE]
		const _pathtTgn2Th = [_arrayValuedyhIyFo]
		const _returnValuezt8zvM = await hasPath(_objectqYIPzu5, _pathtTgn2Th)
	});
})