export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _inputHt8yyBJ = 4.44929964093992;
		const _unitsvayFgnh = "QGp5ruDdODPqfX391ft6geJe8kxi8Y4tqKvzhaYxEziCvCnsq93Bz8";
		const _returnValueXpaIiTa = await isAfter(_inputHt8yyBJ, _unitsvayFgnh)
	});
})