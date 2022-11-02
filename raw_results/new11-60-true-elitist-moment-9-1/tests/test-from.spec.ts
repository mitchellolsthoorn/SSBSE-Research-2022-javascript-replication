export {}
import {from} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/from.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('from', () => {
	it('test for from', async () => {
		const _returnValuevRv7BTF = undefined;
		const _returnValueJeQWbPu = () => { return _returnValuevRv7BTF };
		const _isValidus2Jc8V = () => { return _returnValueJeQWbPu };
		const _timea44xtSt = {
			"isValid": _isValidus2Jc8V
	}
		const _withoutSuffixfhexo0N = {
		
	}
		const _returnValueRD1b1Nx = await from(_timea44xtSt, _withoutSuffixfhexo0N)
	});
})