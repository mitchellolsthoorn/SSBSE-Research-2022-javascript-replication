export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _graphcWzKUp = "I1vuHvkQ7rhwW5FTHH7RSdyyiR892";
		const _returnValueuNZcoqK = await prim(_graphcWzKUp)
	});

	it('test for prim', async () => {
		const _returnValueun0StMy = null;
		const _isDirectedeIvvXnE = () => { return _returnValueun0StMy };
		const _returnValuenxiOvFp = undefined;
		const _getAllVerticesnlW3z7L = () => { return _returnValuenxiOvFp };
		const _graphf9feBbJ = {
			"isDirected": _isDirectedeIvvXnE,
		"getAllVertices": _getAllVerticesnlW3z7L
	}
		const _returnValue6wvLns = await prim(_graphf9feBbJ)
	});

	it('test for prim', async () => {
		const _isDirectedL95T0b7 = false;
		const _graphvhcaeca = new Graph(_isDirectedL95T0b7)
		const _returnValueToDCzG0 = null;
		const _returnValuehFc91LW = () => { return _returnValueToDCzG0 };
		const _getKeyIASTnk1 = () => { return _returnValuehFc91LW };
		const _newVertexG3k5NRG = {
			"getKey": _getKeyIASTnk1
	}
		const _returnValueSxxctDy = await _graphvhcaeca.addVertex(_newVertexG3k5NRG)
		const _returnValueXf6jL3b = await prim(_graphvhcaeca)
	});

	it('test for prim', async () => {
		const _isDirected4JW3GU = false;
		const _graphbvf1jV2 = new Graph(_isDirected4JW3GU)
		const _valuerS5sEL = null;
		const _newVertexYegPKWc = new GraphVertex(_valuerS5sEL)
		const _returnValuefn00gr = await _newVertexYegPKWc.getDegree()
		const _returnValueFKlpCV = "9e5NabdIJQyBMPLdmMgcj7dCC9G8rVolkEiY1F9LgqxKYogEqTw9Xz2";
		const _callbackUk8dRIM = () => { return _returnValueFKlpCV };
		const _returnValuewX18on = await _newVertexYegPKWc.toString(_callbackUk8dRIM)
		const _returnValuehpdIbKT = await _graphbvf1jV2.addVertex(_newVertexYegPKWc)
		const _returnValueUVGP0d4 = await _graphbvf1jV2.getWeight()
		const _returnValuetGFOyCK = false;
		const _arrayValueWspsTnn = () => { return _returnValuetGFOyCK };
		const _arrayValueCEQVvtG = undefined;
		const _returnValueVY49pEu = [_arrayValueCEQVvtG]
		const _arrayValueGQAP60Z = () => { return _returnValueVY49pEu };
		const _arrayValuepFtv0dm = "m8cQB9tEVCuy0m5zxvxGIrcWPlI4mHFyqZFJshxdsTdCy6AexyoGNUYXWv0xfAmuQerAmGCVnxvQXiuR6W8HXCeNg1Ord";
		const _arrayValueJs0YgDt = null;
		const _returnValuel2EMfP5 = [_arrayValueWspsTnn, _arrayValueGQAP60Z, _arrayValuepFtv0dm, _arrayValueJs0YgDt]
		const _arrayValuejYgMHQ = () => { return _returnValuel2EMfP5 };
		const _arrayValueDjsfVXn = true;
		const _arrayValuemzHlfLG = null;
		const _vertexKeyb1sZJ34 = [_arrayValuejYgMHQ, _arrayValueDjsfVXn, _arrayValuemzHlfLG]
		const _returnValueqkjr7fx = await _graphbvf1jV2.getVertexByKey(_vertexKeyb1sZJ34)
		const _returnValueZLk01wN = await _graphbvf1jV2.getWeight()
		const _returnValuePfozcz = await prim(_graphbvf1jV2)
	});
})