export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValueiavIiGA = null;
		const _arrayValueTAvJUqb = () => { return _returnValueiavIiGA };
		const _arrayValuedDK3AnJ = -7.985223775566196;
		const _grapht41VLSu = [_arrayValueTAvJUqb, _arrayValuedDK3AnJ]
		const _returnValueEmkr2JW = await articulationPoints(_grapht41VLSu)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedsFMgRsG = true;
		const _graphvbuwrAx = new Graph(_isDirectedsFMgRsG)
		const _returnValuegR9eQSU = await _graphvbuwrAx.getAllEdges()
		const _returnValueiXbg0jQ = null;
		const _getKeyToZy3p3 = () => { return _returnValueiXbg0jQ };
		const _newVertexczsu47q = {
			"getKey": _getKeyToZy3p3
	}
		const _returnValuerlZF25 = await _graphvbuwrAx.addVertex(_newVertexczsu47q)
		const _returnValueAP3jYEz = await _graphvbuwrAx.getWeight()
		const _vertexKeyhbvgxuA = -5.558519481114254;
		const _returnValueQBA9Ywd = await _graphvbuwrAx.getVertexByKey(_vertexKeyhbvgxuA)
		const _returnValuexwjxnMp = await _graphvbuwrAx.getWeight()
		const _returnValueiw2GTVn = await articulationPoints(_graphvbuwrAx)
	});
})