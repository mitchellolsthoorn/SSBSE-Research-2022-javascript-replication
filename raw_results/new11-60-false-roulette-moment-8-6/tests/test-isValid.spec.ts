export {}
import {isValid} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/valid.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isValid', () => {
	it('test for isValid', async () => {
		const _arrayValueLgttz8v = true;
		const _returnValuepYSFA4 = null;
		const _arrayValueWwYB8Lm = () => { return _returnValuepYSFA4 };
		const _mZibz3z = [_arrayValueLgttz8v, _arrayValueWwYB8Lm]
		const _returnValuep5hvMLz = await isValid(_mZibz3z)
	});
})