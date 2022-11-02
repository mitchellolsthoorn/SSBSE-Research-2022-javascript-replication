export {}
import {Moment} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/constructor.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Moment', () => {
	it('test for Moment', async () => {
		const _arrayValuej4z1Wsu = "ytQx4x2yljoR7ibrwUj0yQgWloHlm9RnBDFIL7DFkZOu4vIRU";
		const _returnValueYhCf0j4 = false;
		const _arrayValueYB5wUu7 = () => { return _returnValueYhCf0j4 };
		const _configc6rxguC = [_arrayValuej4z1Wsu, _arrayValueYB5wUu7]
		const _returnValuera2qNF = await Moment(_configc6rxguC)
	});
})