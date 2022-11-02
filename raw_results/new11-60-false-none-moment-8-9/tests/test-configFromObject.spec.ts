export {}
import {configFromObject} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/create/from-object.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('configFromObject', () => {
	it('test for configFromObject', async () => {
		const _arrayValuecOpKUH6 = "bH3dF534XTbsdnGYEV5QWisG3NevsIm2lYB8sPPSkvS55UQxMN19kw6kMBTYChpEBQmxSiJbeXXtOSmzuVkUlsUxgIlZLkV";
		const _returnValuePWumLXB = true;
		const _returnValueDXNt9vA = () => { return _returnValuePWumLXB };
		const _arrayValueaFKhJ9m = () => { return _returnValueDXNt9vA };
		const _arrayValuev1Fmy6x = undefined;
		const _returnValueqG53FzT = true;
		const _arrayValueBAuHB6 = () => { return _returnValueqG53FzT };
		const _arrayValueTSMEhaK = [_arrayValuev1Fmy6x, _arrayValueBAuHB6]
		const _arrayValuedc14hf = undefined;
		const _config7pl7rs = [_arrayValuecOpKUH6, _arrayValueaFKhJ9m, _arrayValueTSMEhaK, _arrayValuedc14hf]
		const _returnValueVolK5Li = await configFromObject(_config7pl7rs)
	});
})