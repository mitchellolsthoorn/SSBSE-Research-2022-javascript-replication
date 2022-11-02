export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _inputZihqG9d = "vnkUmIDNyAc6kUrxlDNwnf89";
		const _returnValuezwH49Dk = false;
		const _unitsqY7ce9D = () => { return _returnValuezwH49Dk };
		const _returnValueYVHMG1G = await isSameOrAfter(_inputZihqG9d, _unitsqY7ce9D)
	});
})