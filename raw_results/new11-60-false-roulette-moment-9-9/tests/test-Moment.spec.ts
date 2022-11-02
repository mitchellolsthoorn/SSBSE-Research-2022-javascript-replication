export {}
import {Moment} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/constructor.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Moment', () => {
	it('test for Moment', async () => {
		const _returnValue0FAL7M = true;
		const _configcUTm0TY = () => { return _returnValue0FAL7M };
		const _returnValuek30yoh6 = await Moment(_configcUTm0TY)
	});
})