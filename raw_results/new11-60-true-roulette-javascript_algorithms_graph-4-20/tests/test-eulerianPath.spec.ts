export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueHsDyOED = null;
		const _getAllEdgesMSyfkcE = () => { return _returnValueHsDyOED };
		const _arrayValueUcVN00f = 4.107263324713774;
		const _arrayValueNJ3sN3h = undefined;
		const _arrayValuejQlMYFh = null;
		const _arrayValuexWdCKCi = -9.654945605188452;
		const _arrayValueySk8Vk3 = [_arrayValuexWdCKCi]
		const _returnValueVSqvGRr = [_arrayValueUcVN00f, _arrayValueNJ3sN3h, _arrayValuejQlMYFh, _arrayValueySk8Vk3]
		const _getAllVerticeskYhHWwd = () => { return _returnValueVSqvGRr };
		const _returnValuetZmvjLK = false;
		const _deleteEdgebkJNYk4 = () => { return _returnValuetZmvjLK };
		const _graphfTPVqlk = {
			"getAllEdges": _getAllEdgesMSyfkcE,
		"getAllVertices": _getAllVerticeskYhHWwd,
		"deleteEdge": _deleteEdgebkJNYk4
	}
		const _returnValuebTUMeHA = await eulerianPath(_graphfTPVqlk)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedC6PTQsz = null;
		const _graphZBEjaY = new Graph(_isDirectedC6PTQsz)
		const _vertexKeywumrN4T = 2.1563462873511163;
		const _returnValueS8BlKc = await _graphZBEjaY.getVertexByKey(_vertexKeywumrN4T)
		const _returnValueIphWmg = await _graphZBEjaY.getWeight()
		const _returnValueYkj4Pj = await eulerianPath(_graphZBEjaY)
	});

	it('test for eulerianPath', async () => {
		const _isDirected5GoIY3 = false;
		const _graphF8I6Y53 = new Graph(_isDirected5GoIY3)
		const _returnValueE2fgBpI = await _graphF8I6Y53.getAllVertices()
		const _returnValueCcCnbbc = await _graphF8I6Y53.getWeight()
		const _returnValuej9AIZmP = await _graphF8I6Y53.getAllVertices()
		const _arrayValueyMDKsa8 = {
		
	}
		const _arrayValuemJdOkSo = {
		
	}
		const _valuesseQF21 = [_arrayValueyMDKsa8, _arrayValuemJdOkSo]
		const _newVertexRbGcz0F = new GraphVertex(_valuesseQF21)
		const _edgeFNMMLpP = "HBFoiV4LBAT";
		const _returnValueAQ09ZsQ = await _newVertexRbGcz0F.addEdge(_edgeFNMMLpP)
		const _returnValueNP29Oe9 = await _newVertexRbGcz0F.getNeighbors()
		const _vertexL90VHrN = 7.9018217923873735;
		const _returnValueP04dBzp = await _newVertexRbGcz0F.findEdge(_vertexL90VHrN)
		const _returnValuemKx7TZa = await _newVertexRbGcz0F.getNeighbors()
		const _returnValuealvhWAl = await _graphF8I6Y53.addVertex(_newVertexRbGcz0F)
		const _returnValueWhxW7sS = await eulerianPath(_graphF8I6Y53)
	});
})