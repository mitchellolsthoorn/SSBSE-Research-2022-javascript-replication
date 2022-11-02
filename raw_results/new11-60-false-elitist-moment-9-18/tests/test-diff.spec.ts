export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputNoTM45 = null;
		const _unitsIkktmww = {
		
	}
		const _returnValueD35brL6 = -1.2826847363143088;
		const _asFloatkkAux8J = () => { return _returnValueD35brL6 };
		const _returnValueWBzDBCI = await diff(_inputNoTM45, _unitsIkktmww, _asFloatkkAux8J)
	});
})