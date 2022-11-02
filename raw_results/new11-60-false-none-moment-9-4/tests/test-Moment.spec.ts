export {}
import {Moment} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/constructor.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Moment', () => {
	it('test for Moment', async () => {
		const _returnValueMG6uJOL = true;
		const _returnValueh8hNsM = () => { return _returnValueMG6uJOL };
		const _configSPvbrgF = () => { return _returnValueh8hNsM };
		const _returnValuevP9TyO7 = await Moment(_configSPvbrgF)
	});
})