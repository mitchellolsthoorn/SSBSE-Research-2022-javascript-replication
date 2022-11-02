export {}
import bfTravellingSalesman from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/travelling-salesman/bfTravellingSalesman.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bfTravellingSalesman', () => {
	it('test for bfTravellingSalesman', async () => {
		const _returnValueFcj5ZMK = "DzCFvSymnaQHf3qrGGL79Ydvg8WWzD8KzS21zy7CEetFv2JDYWVEaUrosGBSeThuYemo8dv6BMo9svYcGJPWFlxLafafsH";
		const _arrayValueQhjy4K9 = () => { return _returnValueFcj5ZMK };
		const _arrayValueiHlbS8N = true;
		const _returnValueoqZ5RLf = [_arrayValueQhjy4K9, _arrayValueiHlbS8N]
		const _returnValuevQBeKeZ = () => { return _returnValueoqZ5RLf };
		const _graphetydLHG = () => { return _returnValuevQBeKeZ };
		const _returnValueD5qm0e7 = await bfTravellingSalesman(_graphetydLHG)
	});

	it('test for bfTravellingSalesman', async () => {
		const _returnValuesGIJTww = true;
		const _getAllVerticesdRMp2O = () => { return _returnValuesGIJTww };
		const _returnValueKFZk7Xi = true;
		const _getAdjacencyMatrixJfiG1Sf = () => { return _returnValueKFZk7Xi };
		const _arrayValueYlvb2b3 = true;
		const _arrayValueroa4Bqt = false;
		const _arrayValueDBc9eUw = null;
		const _returnValuehYDIVu = [_arrayValueYlvb2b3, _arrayValueroa4Bqt, _arrayValueDBc9eUw]
		const _getVerticesIndices2CZtrC = () => { return _returnValuehYDIVu };
		const _graphRS8tStt = {
			"getAllVertices": _getAllVerticesdRMp2O,
		"getAdjacencyMatrix": _getAdjacencyMatrixJfiG1Sf,
		"getVerticesIndices": _getVerticesIndices2CZtrC
	}
		const _returnValuevt0M7Ip = await bfTravellingSalesman(_graphRS8tStt)
	});

	it('test for bfTravellingSalesman', async () => {
		const _isDirectedEKP7QIk = false;
		const _graphQBOU0I5 = new Graph(_isDirectedEKP7QIk)
		const _returnValueJg9clyW = await _graphQBOU0I5.toString()
		const _valueCVDQDFu = "9oNGTbv6cKGlJBC1jiileyCHfRYfi4P1ARnp4CJM6vr8GDamBbLL";
		const _keyCallbackihSmBhx = false;
		const _newVertexP8b0rs = new DisjointSetItem(_valueCVDQDFu, _keyCallbackihSmBhx)
		const _returnValueL5H6za = await _newVertexP8b0rs.getChildren()
		const _returnValuehJjs9Wx = await _newVertexP8b0rs.getChildren()
		const _returnValueqXB2zrw = await _newVertexP8b0rs.getKey()
		const _returnValueCcDRS0l = await _graphQBOU0I5.addVertex(_newVertexP8b0rs)
		const _returnValueV1zqsBH = await bfTravellingSalesman(_graphQBOU0I5)
	});
})