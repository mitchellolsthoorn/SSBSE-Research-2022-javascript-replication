export {}
import {isSameOrAfter} from "../../.syntest/instrumented/benchmark/top10npm/moment/src/lib/moment/compare.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('isSameOrAfter', () => {
	it('test for isSameOrAfter', async () => {
		const _arrayValuerva4QPw = "Nvjt5HVXEycN0fGzCABaFwdFD45EhR2HURIzjrlx3eYgHm9HxLiiN7Rq1mf";
		const _arrayValuebfzpUI9 = undefined;
		const _input9Ln3YQ = [_arrayValuerva4QPw, _arrayValuebfzpUI9]
		const _unitstcJ6dBt = "OSAOR86immvYYUuTPPJMvzTtAr";
		const _returnValuekyzlFPX = await isSameOrAfter(_input9Ln3YQ, _unitstcJ6dBt)
	});
})