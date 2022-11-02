export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputB8SiRmU = null;
		const _returnValueNbOHXt0 = undefined;
		const _unitsKYpo9CU = () => { return _returnValueNbOHXt0 };
		const _returnValueO7wWMtX = await isBefore(_inputB8SiRmU, _unitsKYpo9CU)
	});
})