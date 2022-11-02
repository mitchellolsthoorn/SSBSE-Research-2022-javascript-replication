export {}
import {diff} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/diff.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('diff', () => {
	it('test for diff', async () => {
		const _inputJAF7yya = -8.679355322326813;
		const _returnValueqxf7WD = null;
		const _unitssSH2u18 = () => { return _returnValueqxf7WD };
		const _asFloatxtq3hyD = false;
		const _returnValueFBB2orL = await diff(_inputJAF7yya, _unitssSH2u18, _asFloatxtq3hyD)
	});
})