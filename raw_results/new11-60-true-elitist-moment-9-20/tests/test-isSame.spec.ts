export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _inputcw34oaS = "JrLTPcLz37xqLRs16VtJcNWAHQhq3w4KF7lMOk1wNUSxZy1pOHcqVIiZyesW";
		const _unitsy7hPgXy = {
		
	}
		const _returnValueDfxHOGD = await isSame(_inputcw34oaS, _unitsy7hPgXy)
	});

	it('test for isSame', async () => {
		const _input7UdAMt = -7.923359456447929;
		const _unitsIrHBCNy = {
		
	}
		const _returnValueFZAO4od = await isSame(_input7UdAMt, _unitsIrHBCNy)
	});
})