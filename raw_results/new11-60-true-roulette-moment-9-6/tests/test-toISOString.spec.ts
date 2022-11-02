export {}
import {toISOString} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/format.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('toISOString', () => {
	it('test for toISOString', async () => {
		const _returnValueFwJJDHB = "4f3EkV85Mmrj8UluYAi2fMvi5wsdG0I4vfCsUIPzQ";
		const _keepOffsetrx3MA9i = () => { return _returnValueFwJJDHB };
		const _returnValueUGYkYzl = await toISOString(_keepOffsetrx3MA9i)
	});
})