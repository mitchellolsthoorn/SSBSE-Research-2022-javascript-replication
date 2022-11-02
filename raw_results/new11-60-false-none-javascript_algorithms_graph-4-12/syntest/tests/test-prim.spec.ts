export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValueeJZKZhO = 3.1955814517534336;
		const _graphFTKorpf = () => { return _returnValueeJZKZhO };
		const _returnValueO61xhSK = await prim(_graphFTKorpf)
	});
})