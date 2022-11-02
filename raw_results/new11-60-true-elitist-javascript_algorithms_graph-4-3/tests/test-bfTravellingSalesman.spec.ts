export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValuemxFL3d = false;
		const _getAllVerticesS5ix25q = () => { return _returnValuemxFL3d };
		const _returnValuea4xtfK = 9.349558959190595;
		const _getAdjacencyMatrixzXbXv1h = () => { return _returnValuea4xtfK };
		const _returnValueOpP62or = undefined;
		const _getVerticesIndicesionKuOF = () => { return _returnValueOpP62or };
		const _graphHhE94ud = {
			"getAllVertices": _getAllVerticesS5ix25q,
		"getAdjacencyMatrix": _getAdjacencyMatrixzXbXv1h,
		"getVerticesIndices": _getVerticesIndicesionKuOF
	}
		const _returnValuexELFQ8 = await bfTravellingSalesman(_graphHhE94ud)
	});
})