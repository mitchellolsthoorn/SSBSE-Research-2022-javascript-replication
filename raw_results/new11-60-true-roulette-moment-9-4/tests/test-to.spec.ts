export {}
import {to} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/to.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('to', () => {
	it('test for to', async () => {
		const _returnValuedaUuGxi = null;
		const __isUTCcM2z8Nr = () => { return _returnValuedaUuGxi };
		const _returnValuew8kcbY = "eJKuNWwEpAfcznKO8kOqkrSQlkpOLlCe3DbdrCnUsT60payaw";
		const _isValidZAwXTWG = () => { return _returnValuew8kcbY };
		const _timea9t2ecB = {
			"_isUTC": __isUTCcM2z8Nr,
		"isValid": _isValidZAwXTWG
	}
		const _withoutSuffixxbGAiEP = "BloE6OxCocvqwSejoNqhT58PZt0FuP6C1EAunp";
		const _returnValueqhMSqzG = await to(_timea9t2ecB, _withoutSuffixxbGAiEP)
	});
})