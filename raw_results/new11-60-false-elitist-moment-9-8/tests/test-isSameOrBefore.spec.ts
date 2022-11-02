export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _inputDY7lis = "Tqy84c9Kj4JbPH7JiuwA9vzaubFaJ7VNISz9UuKWB3C5ftS9TghG4DwH6NXVkAzNcYCgJTyxRU5uzgQlYr479RvlkzrY9ja";
		const _unitsJEi8kaa = undefined;
		const _returnValueqpCl20y = await isSameOrBefore(_inputDY7lis, _unitsJEi8kaa)
	});
})