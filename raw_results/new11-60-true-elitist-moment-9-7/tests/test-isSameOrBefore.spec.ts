export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _arrayValueQGHb5X = undefined;
		const _arrayValues7q62ur = {
		
	}
		const _arrayValueCqPMjOb = [_arrayValueQGHb5X, _arrayValues7q62ur]
		const _inputdkQNTTu = [_arrayValueCqPMjOb]
		const _returnValueBFKZn0K = 7.842325061195364;
		const _returnValueKTD0CoU = () => { return _returnValueBFKZn0K };
		const _unitsqxGrFKs = () => { return _returnValueKTD0CoU };
		const _returnValueKU3Ox1j = await isSameOrBefore(_inputdkQNTTu, _unitsqxGrFKs)
	});
})