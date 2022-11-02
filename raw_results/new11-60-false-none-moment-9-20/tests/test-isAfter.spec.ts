export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _returnValueHx4P9e = true;
		const _inputnhHELaz = () => { return _returnValueHx4P9e };
		const _unitsarkQu4 = "tfbdPVM7AikO0xWb2Ga4vJufiSTATCLk4YehnWsq14C";
		const _returnValueCz09ptg = await isAfter(_inputnhHELaz, _unitsarkQu4)
	});
})