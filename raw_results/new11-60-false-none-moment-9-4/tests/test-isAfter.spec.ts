export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _inputk9YvTil = "t9S7Rzju45MEBLNOrJ5DOyVuipkiAcz01hTzBH7jGk3q6R1JBKmCP6DVTWxDWveRxOEH5WJ8LyPqDREciD8IF7u";
		const _arrayValueps0Smpl = null;
		const _unitszXLsrQ2 = [_arrayValueps0Smpl]
		const _returnValueVYKzott = await isAfter(_inputk9YvTil, _unitszXLsrQ2)
	});

	it('test for isAfter', async () => {
		const _inputaCOKA49 = false;
		const _unitsNprrCLf = undefined;
		const _returnValueEt717wI = await isAfter(_inputaCOKA49, _unitsNprrCLf)
	});
})