export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputEqqjSkX = "DmbIjgmZRcIaxgTWzQixpAcFWz7koZtXLju3434GlJQHkfsZFYeKlQGY5nSV4HmhF";
		const _unitsZR2veNN = "XzrFwYzI3jXiKjeqQjaHm9EKbnI3YFd8htdJSWPPlcILdAmQq8Q8pygauZnzNnK";
		const _returnValueMMW03vw = await isBefore(_inputEqqjSkX, _unitsZR2veNN)
	});

	it('test for isBefore', async () => {
		const _returnValuexW1WcYd = undefined;
		const _inputG5OV8Kl = () => { return _returnValuexW1WcYd };
		const _unitsYjg8Igi = {
		
	}
		const _returnValueqiFSbaw = await isBefore(_inputG5OV8Kl, _unitsYjg8Igi)
	});
})