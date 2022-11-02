export {}
import {set} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('set', () => {
	it('test for set', async () => {
		const _arrayValuePtJnSSR = null;
		const _arrayValue4vCaeS = "JtmUeIRULXbqbK";
		const _returnValueU9G3OhV = [_arrayValuePtJnSSR, _arrayValue4vCaeS]
		const _yearzIDVyUM = () => { return _returnValueU9G3OhV };
		const _momMtN1Yum = {
			"year": _yearzIDVyUM
	}
		const _returnValueQWKT6h = -6.118398729547577;
		const _units7o5MVL = () => { return _returnValueQWKT6h };
		const _valuesx6PeC3 = {
		
	}
		const _returnValueUgHiSV = await set(_momMtN1Yum, _units7o5MVL, _valuesx6PeC3)
	});
})