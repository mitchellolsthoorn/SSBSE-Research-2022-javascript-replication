export {}
import {format} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('format', () => {
	it('test for format', async () => {
		const _returnValuethW9pBb = "A7IZPjwoEKemyKnu6apvK2dX7PToIdaIWr4lEF";
		const _inputStringwrcLvfr = () => { return _returnValuethW9pBb };
		const _returnValueL64hDMq = await format(_inputStringwrcLvfr)
	});

	it('test for format', async () => {
		const _inputStringbulGFlI = false;
		const _returnValuezxHO9Sd = await format(_inputStringbulGFlI)
	});
})