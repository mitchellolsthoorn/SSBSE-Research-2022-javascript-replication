export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _arrayValuekvizgbl = null;
		const _returnValueXmHSIsF = [_arrayValuekvizgbl]
		const _isValide0wpl1z = () => { return _returnValueXmHSIsF };
		const _momvZ5hSal = {
			"isValid": _isValide0wpl1z
	}
		const _unitlEfzOXL = "VINInOyvhSr4f";
		const _returnValueIvbXJr2 = await get(_momvZ5hSal, _unitlEfzOXL)
	});
})