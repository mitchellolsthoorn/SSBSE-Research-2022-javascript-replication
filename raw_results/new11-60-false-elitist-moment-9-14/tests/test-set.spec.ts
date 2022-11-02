export {}
import {set} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('set', () => {
	it('test for set', async () => {
		const _returnValueYjGvc0T = 5.654827324057068;
		const _yearC0XFfll = () => { return _returnValueYjGvc0T };
		const _momqlfdUud = {
			"year": _yearC0XFfll
	}
		const _unitNOfaLV = "L4baqdmBdAWMwCdrEG2fxDyI";
		const _valuei14bLoK = {
		
	}
		const _returnValueCSjoTnD = await set(_momqlfdUud, _unitNOfaLV, _valuei14bLoK)
	});
})