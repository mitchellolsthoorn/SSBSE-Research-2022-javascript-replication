export {}
import {isAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isAfter', () => {
	it('test for isAfter', async () => {
		const _arrayValueyg0mM18 = null;
		const _arrayValuecViN6fO = undefined;
		const _inputoA441z = [_arrayValueyg0mM18, _arrayValuecViN6fO]
		const _unitsie5dNiS = null;
		const _returnValuea7yRDXC = await isAfter(_inputoA441z, _unitsie5dNiS)
	});

	it('test for isAfter', async () => {
		const _inputZrpsJWv = -9.320942251841794;
		const _unitsMqJfe0W = {
		
	}
		const _returnValueZJ48JR7 = await isAfter(_inputZrpsJWv, _unitsMqJfe0W)
	});
})