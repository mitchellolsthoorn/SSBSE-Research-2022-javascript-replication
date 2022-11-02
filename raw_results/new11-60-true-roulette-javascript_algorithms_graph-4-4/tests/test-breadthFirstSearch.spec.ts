export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _graphMMlO5Ny = []
		const _startVertexQRw1qEf = false;
		const _originalCallbacksCC3L04o = null;
		const _returnValuekQGjCct = await breadthFirstSearch(_graphMMlO5Ny, _startVertexQRw1qEf, _originalCallbacksCC3L04o)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueaH59o38 = undefined;
		const _graphna7nFvU = () => { return _returnValueaH59o38 };
		const _arrayValuetd8o1hD = null;
		const _arrayValueKEAULnq = null;
		const _arrayValueCZqdniA = [_arrayValueKEAULnq]
		const _arrayValuelJwJUCK = true;
		const _arrayValueF85DLl7 = null;
		const _arrayValuema9htfw = undefined;
		const _startVertexVPJ5sxp = [_arrayValuetd8o1hD, _arrayValueCZqdniA, _arrayValuelJwJUCK, _arrayValueF85DLl7, _arrayValuema9htfw]
		const _arrayValueuPpymyF = "T3riEFkkgoLCcdV8pe2AOaPN656PB5MgkKdodAoKVQqbSIYWfRnFN3wfA7";
		const _originalCallbackseHFZCTW = [_arrayValueuPpymyF]
		const _returnValueQNvheXc = await breadthFirstSearch(_graphna7nFvU, _startVertexVPJ5sxp, _originalCallbackseHFZCTW)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuekNTcruo = "B4kJYlJPBwKW6IhBLwFH8EEDY2Szp9Wy4umkO";
		const _graphL0QFxO1 = new GraphVertex(_valuekNTcruo)
		const _returnValueWQLy1N1 = false;
		const _vertexaNZ0uE9 = () => { return _returnValueWQLy1N1 };
		const _returnValuej8LQ5VW = await _graphL0QFxO1.hasNeighbor(_vertexaNZ0uE9)
		const _returnValuextByg1Y = await _graphL0QFxO1.getDegree()
		const _returnValueSx9hivi = await _graphL0QFxO1.getNeighbors()
		const _startVertexe6LzZjM = true;
		const _arrayValuettexOZK = 3.424144186121856;
		const _arrayValueraAhxg2 = false;
		const _originalCallbacksUAopea = [_arrayValuettexOZK, _arrayValueraAhxg2]
		const _returnValueE9CBWY = await breadthFirstSearch(_graphL0QFxO1, _startVertexe6LzZjM, _originalCallbacksUAopea)
	});

	it('test for breadthFirstSearch', async () => {
		const _valuehyZgtOk = 2.595758210206718;
		const _graphwbxAVp9 = new GraphVertex(_valuehyZgtOk)
		const _vertexGjjSEX1 = true;
		const _returnValueiltzYry = await _graphwbxAVp9.hasNeighbor(_vertexGjjSEX1)
		const _edgedXh8f1T = "KdLncJI4DBI1UEuoCi";
		const _returnValuedLcsEt = await _graphwbxAVp9.addEdge(_edgedXh8f1T)
		const _vertexSgXzb3u = true;
		const _returnValueo2bHN3 = await _graphwbxAVp9.hasNeighbor(_vertexSgXzb3u)
		const _startVertexHCnagEB = "mzvDmVxaCSuOlQQt3CO3hPMfPnmFzIpdBqXbhf6gbwiftAvVA3PRRb";
		const _originalCallbacksbiA8sU8 = []
		const _returnValueP6OkpTG = await breadthFirstSearch(_graphwbxAVp9, _startVertexHCnagEB, _originalCallbacksbiA8sU8)
	});
})