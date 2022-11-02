export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValue6qIeYK = null;
		const _arrayValueGMTXc8c = null;
		const _arrayValueRSkTIVU = {
		
	}
		const _returnValueIM20nK = [_arrayValue6qIeYK, _arrayValueGMTXc8c, _arrayValueRSkTIVU]
		const _medLS0wi = () => { return _returnValueIM20nK };
		const _returnValuedBAF7JU = await isValid(_medLS0wi)
	});
})