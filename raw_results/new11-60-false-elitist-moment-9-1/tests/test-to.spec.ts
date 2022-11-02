export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueGUIu5pJ = undefined;
		const _isValidJb0MMno = () => { return _returnValueGUIu5pJ };
		const _timeLYoKCML = {
			"isValid": _isValidJb0MMno
	}
		const _withoutSuffixcU4bTJd = "KorIR1gKiv7l2eBLxeWozx42dUpn";
		const _returnValueKAi0NOE = await to(_timeLYoKCML, _withoutSuffixcU4bTJd)
	});
})