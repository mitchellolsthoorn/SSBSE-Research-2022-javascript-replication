export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputW0FmSaQ = {
		
	}
		const _unitsTjV4cx4 = {
		
	}
		const _returnValuefJSDX0I = await isBefore(_inputW0FmSaQ, _unitsTjV4cx4)
	});

	it('test for isBefore', async () => {
		const _inputrUoZdlR = 5.641978658227583;
		const _unitsYOK5zPR = {
		
	}
		const _returnValueTeITQbD = await isBefore(_inputrUoZdlR, _unitsYOK5zPR)
	});
})