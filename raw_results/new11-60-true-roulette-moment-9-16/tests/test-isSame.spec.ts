export {}
import {isSame} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSame', () => {
	it('test for isSame', async () => {
		const _returnValueIzd7nrL = "zSA76DRtzWBc6rCwiEStHYNctm2gxp1F1zk3zWnuElWbBSDLdYa8eNEYo5bxI6fcI6uRKwuJjbJnS8nwerY";
		const _inputA0NAp57 = () => { return _returnValueIzd7nrL };
		const _unitsPIsWQYm = {
		
	}
		const _returnValueEnvi0VC = await isSame(_inputA0NAp57, _unitsPIsWQYm)
	});
})