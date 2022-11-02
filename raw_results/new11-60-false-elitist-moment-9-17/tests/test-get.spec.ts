export {}
import {get} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/get-set.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('get', () => {
	it('test for get', async () => {
		const _returnValueeT1Z7HO = "HfXsjxPJJJgjpTtowr3UCaXK5OJPppEuY5G1DBOusuKbI1G5tjGIH";
		const _returnValueX55Pdgc = () => { return _returnValueeT1Z7HO };
		const _isValid0PM8FX = () => { return _returnValueX55Pdgc };
		const _momAc3YhJL = {
			"isValid": _isValid0PM8FX
	}
		const _unitnSMo4AP = 5.386365528584223;
		const _returnValuel9y07ki = await get(_momAc3YhJL, _unitnSMo4AP)
	});
})