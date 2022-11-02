export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueLDXEihf = {
		
	}
		const _getNeighborsZB0LdXU = () => { return _returnValueLDXEihf };
		const _grapho2nxKm6 = {
			"getNeighbors": _getNeighborsZB0LdXU
	}
		const _startVertexoQ1iyF3 = true;
		const _originalCallbacksr4g8NEY = {
		
	}
		const _returnValuexMyrx62 = await breadthFirstSearch(_grapho2nxKm6, _startVertexoQ1iyF3, _originalCallbacksr4g8NEY)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValuePXTmPsY = []
		const _returnValuesm8Sswv = () => { return _returnValuePXTmPsY };
		const _arrayValueoo4y6a = () => { return _returnValuesm8Sswv };
		const _arrayValuebPTSND1 = 9.444574150887423;
		const _arrayValueQR5q9Iq = -6.66234125790405;
		const _returnValueiv9xavC = [_arrayValueoo4y6a, _arrayValuebPTSND1, _arrayValueQR5q9Iq]
		const _getNeighborszKvc80I = () => { return _returnValueiv9xavC };
		const _graphV9P5M1M = {
			"getNeighbors": _getNeighborszKvc80I
	}
		const _startVertexzp5XR8 = null;
		const _arrayValueUpjAa6b = undefined;
		const _arrayValuenqpedz = undefined;
		const _arrayValueFz4mPLl = null;
		const _originalCallbacksatWTOZ2 = [_arrayValueUpjAa6b, _arrayValuenqpedz, _arrayValueFz4mPLl]
		const _returnValues2frgUj = await breadthFirstSearch(_graphV9P5M1M, _startVertexzp5XR8, _originalCallbacksatWTOZ2)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueUJPR18 = "vu81hCD8KHbclKeDOLxuLzIFXuOe9AmFHd6jrukNc70QQp";
		const _graphtHs0Phs = new GraphVertex(_valueUJPR18)
		const _returnValueCdNtjD3 = await _graphtHs0Phs.getEdges()
		const _vertexL3cbSAa = -8.511918512201964;
		const _returnValuetE0bLhs = await _graphtHs0Phs.hasNeighbor(_vertexL3cbSAa)
		const _edgeqSMYggi = null;
		const _returnValueqSkvzNC = await _graphtHs0Phs.deleteEdge(_edgeqSMYggi)
		const _returnValuetWdkEtD = await _graphtHs0Phs.getKey()
		const _startVertexnNdAxgk = null;
		const _arrayValuePJglfb5 = undefined;
		const _originalCallbacksPkG1tIu = [_arrayValuePJglfb5]
		const _returnValuemFBVf48 = await breadthFirstSearch(_graphtHs0Phs, _startVertexnNdAxgk, _originalCallbacksPkG1tIu)
	});
})