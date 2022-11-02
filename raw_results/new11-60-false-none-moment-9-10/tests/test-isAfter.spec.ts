export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _inputnWWWPAZ = 2.8753567652527483;
		const _unitsbj116UI = "M9zqI0lNWeTNtMqoX4TKrRQfyxx1ROleBclTE6asyxDSGv";
		const _returnValueELzSui8 = await isAfter(_inputnWWWPAZ, _unitsbj116UI)
	});
})