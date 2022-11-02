export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _inputLAfQtvk = "KhzBfJfqp8ImAvfTLCLgAsl9DfFN27q5gtwWWzwAN8cHaYDP9kig4YVnFcaEaXb1cfUdOcOETwi6oIJtLoGfY";
		const _returnValueHqhPLQ7 = true;
		const _unitsjnlY5nZ = () => { return _returnValueHqhPLQ7 };
		const _returnValuenFiFNVF = await isAfter(_inputLAfQtvk, _unitsjnlY5nZ)
	});

	it('test for isAfter', async () => {
		const _inputvF00l1E = null;
		const _unitsZp0KU0g = -4.756968802889684;
		const _returnValueGr5flXi = await isAfter(_inputvF00l1E, _unitsZp0KU0g)
	});
})