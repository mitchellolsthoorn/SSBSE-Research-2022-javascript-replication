export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputJjBeIqR = true;
		const _unitsXRz4m5I = 0.5498562260871598;
		const _returnValueoT9eXkW = await isSameOrAfter(_inputJjBeIqR, _unitsXRz4m5I)
	});
})