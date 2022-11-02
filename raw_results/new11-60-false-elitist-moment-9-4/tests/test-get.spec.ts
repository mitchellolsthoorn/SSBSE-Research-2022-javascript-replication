export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueduAC5ap = 9.275858306626787;
		const _isValidO9MAFt2 = () => { return _returnValueduAC5ap };
		const _momUFrCnir = {
			"isValid": _isValidO9MAFt2
	}
		const _unitPBtL4Vl = 1.531625472976497;
		const _returnValuet5TcFI = await get(_momUFrCnir, _unitPBtL4Vl)
	});
})