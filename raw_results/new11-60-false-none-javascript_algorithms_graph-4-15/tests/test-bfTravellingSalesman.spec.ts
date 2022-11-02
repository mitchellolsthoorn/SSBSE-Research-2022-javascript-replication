export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _arrayValueO2p06o = undefined;
		const _returnValueBzn9ZnF = "LvFRBX1I4VtdfMNKPdc";
		const _arrayValuezoWRzkA = () => { return _returnValueBzn9ZnF };
		const _returnValueo1sLfUq = undefined;
		const _arrayValueF8E7BzN = () => { return _returnValueo1sLfUq };
		const _arrayValuejWCVvgB = {
		
	}
		const _graphMKHALMK = [_arrayValueO2p06o, _arrayValuezoWRzkA, _arrayValueF8E7BzN, _arrayValuejWCVvgB]
		const _returnValueqoa4Jsj = await bfTravellingSalesman(_graphMKHALMK)
	});
})