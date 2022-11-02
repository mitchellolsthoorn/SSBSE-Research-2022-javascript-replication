export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _graphnEy6Wxa = "rfXXHgwgCPAR2aObLlojXqAziUPMsw7wwS4By9CdHKjAR9OayipfX2ROFx8rCHXscoFlG7gLF6Z3vgWilwFf";
		const _returnValueJyxXCou = await eulerianPath(_graphnEy6Wxa)
	});

	it('test for eulerianPath', async () => {
		const _isDirecteduxxgSKq = 7.3609409180633065;
		const _graphnrcnvbi = new Graph(_isDirecteduxxgSKq)
		const _arrayValueDOgvXS = false;
		const _arrayValuezlqpr7B = 5.411874843027329;
		const _arrayValueqRVO7J = [_arrayValuezlqpr7B]
		const _vertexKeyBazrIX = [_arrayValueDOgvXS, _arrayValueqRVO7J]
		const _returnValueKaJ76Fx = await _graphnrcnvbi.getVertexByKey(_vertexKeyBazrIX)
		const _vertexKeyohkIR4L = -1.7930510002999256;
		const _returnValue3S59py = await _graphnrcnvbi.getVertexByKey(_vertexKeyohkIR4L)
		const _returnValueEPj11r3 = await eulerianPath(_graphnrcnvbi)
	});
})