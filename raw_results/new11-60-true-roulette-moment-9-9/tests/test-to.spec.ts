export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValueBTwLNjZ = false;
		const _isValidUHHLdF = () => { return _returnValueBTwLNjZ };
		const _time60LR0y = {
			"isValid": _isValidUHHLdF
	}
		const _withoutSuffixRwiPRiG = true;
		const _returnValueM9NcA6Z = await to(_time60LR0y, _withoutSuffixRwiPRiG)
	});
})