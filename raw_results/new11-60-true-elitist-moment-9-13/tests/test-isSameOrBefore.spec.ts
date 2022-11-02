export {}
import {isSameOrBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrBefore', () => {
	it('test for isSameOrBefore', async () => {
		const _returnValueQJBHiM8 = 6.094586126200873;
		const _arrayValueP0ot5R = () => { return _returnValueQJBHiM8 };
		const _arrayValuevp6nf9Y = null;
		const _inputpOophEU = [_arrayValueP0ot5R, _arrayValuevp6nf9Y]
		const _unitsPMrEDiU = "xum0WNa3BeV333oquqEcT9ajDmMlwLtX2gsPTftz7UT9mnqbqWSrVjPWPSjFr1OhgY1VSfr52l6lJUHrOAiPTkAQvFA4hUBxs";
		const _returnValueoh9CxTb = await isSameOrBefore(_inputpOophEU, _unitsPMrEDiU)
	});
})