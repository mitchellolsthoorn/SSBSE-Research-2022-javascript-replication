export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValuebRLyJ9R = true;
		const _returnValueyCKcnCl = () => { return _returnValuebRLyJ9R };
		const _isValidyo98j9y = () => { return _returnValueyCKcnCl };
		const _timeeQUDMSu = {
			"isValid": _isValidyo98j9y
	}
		const _withoutSuffixYwIoSue = false;
		const _returnValueKAbUhvA = await to(_timeeQUDMSu, _withoutSuffixYwIoSue)
	});
})