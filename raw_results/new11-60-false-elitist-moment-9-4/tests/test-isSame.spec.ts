export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _input5hRuBb = undefined;
		const _returnValueGscmWiu = "Kj0o5jk8hszxGSuOY";
		const _unitsglJDvif = () => { return _returnValueGscmWiu };
		const _returnValuen28fccW = await isSame(_input5hRuBb, _unitsglJDvif)
	});

	it('test for isSame', async () => {
		const _returnValueLhjKdi = undefined;
		const _inputEwf3L5b = () => { return _returnValueLhjKdi };
		const _unitsXO5E5kl = {
		
	}
		const _returnValueUCOz9PS = await isSame(_inputEwf3L5b, _unitsXO5E5kl)
	});
})