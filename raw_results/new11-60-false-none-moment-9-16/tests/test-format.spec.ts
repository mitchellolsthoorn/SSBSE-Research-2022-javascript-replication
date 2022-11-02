export {}
import {format} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('format', () => {
	it('test for format', async () => {
		const _inputStringE3xKKty = null;
		const _returnValuem5dbkKB = await format(_inputStringE3xKKty)
	});

	it('test for format', async () => {
		const _returnValue6CL2rS = undefined;
		const _inputStringFspnB1I = () => { return _returnValue6CL2rS };
		const _returnValueDhl6NvX = await format(_inputStringFspnB1I)
	});
})