export {}
import {isBefore} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isBefore', () => {
	it('test for isBefore', async () => {
		const _inputx4VR7ky = false;
		const _unitsY2HjPmD = "C1wzV5aGDTS9fai9gMPQN6xW3";
		const _returnValueqZ4BEQr = await isBefore(_inputx4VR7ky, _unitsY2HjPmD)
	});
})