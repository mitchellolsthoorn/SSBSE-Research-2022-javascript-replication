export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphEF3ZXWR = undefined;
		const _returnValueWCpe4o = undefined;
		const _getKeyySZN7u5 = () => { return _returnValueWCpe4o };
		const _startVertexvsZwn4d = {
			"getKey": _getKeyySZN7u5
	}
		const _returnValueBsIis4u = await bellmanFord(_graphEF3ZXWR, _startVertexvsZwn4d)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedgts0w8i = false;
		const _graphYz8Rwiw = new Graph(_isDirectedgts0w8i)
		const _arrayValueibpI2hF = "7eBxUaNU9hjlVNtxAyg";
		const _vertexKeyE4sGbbX = [_arrayValueibpI2hF]
		const _returnValueFJaTlM = await _graphYz8Rwiw.getVertexByKey(_vertexKeyE4sGbbX)
		const _returnValuez8DFUT = await _graphYz8Rwiw.getVerticesIndices()
		const _returnValueg1XrwBU = await _graphYz8Rwiw.getAdjacencyMatrix()
		const _returnValuezPRCt7m = await _graphYz8Rwiw.getWeight()
		const _returnValued4gpgXY = -3.310467296520681;
		const _getKeyoCREMAC = () => { return _returnValued4gpgXY };
		const _startVertexhRQMaIv = {
			"getKey": _getKeyoCREMAC
	}
		const _returnValuelyudB43 = await bellmanFord(_graphYz8Rwiw, _startVertexhRQMaIv)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedggIoQJ8 = false;
		const _graphvDk7eiB = new Graph(_isDirectedggIoQJ8)
		const _returnValuezRhM9t = "1hCizsqkO";
		const _getKeypVCQxKp = () => { return _returnValuezRhM9t };
		const _newVertexUSPzu9n = {
			"getKey": _getKeypVCQxKp
	}
		const _returnValueUUoWqaR = await _graphvDk7eiB.addVertex(_newVertexUSPzu9n)
		const _returnValueWvvrPmT = await _graphvDk7eiB.getAllEdges()
		const _returnValueZQBfe8 = await _graphvDk7eiB.reverse()
		const _arrayValueqLEyI9i = "xVLFwmLTtVE9A4vcgBIg4D4SzXigsUEHfn1wROIr3blO4tM37PVCEX0B6hgpG3inLvhv5fK8B9sZHCJqNSkZNP";
		const _arrayValueuuUZLLC = [_arrayValueqLEyI9i]
		const _arrayValues9fLEZv = {
		
	}
		const _arrayValueDBQrhF0 = undefined;
		const _arrayValues6zSsNP = [_arrayValues9fLEZv, _arrayValueDBQrhF0]
		const _arrayValueJeacrQp = "9tbI1vwayfkkxghFRh2gw6w8uP9BNGUPSxJLQoejk4Cb0LVrM1A1ct597A8PABkXWszf2rNrRSgMhDJfob3lVYxfdorKKeEUk9";
		const _returnValueD1vXGaE = [_arrayValueuuUZLLC, _arrayValues6zSsNP, _arrayValueJeacrQp]
		const _getKeymULQ5Nz = () => { return _returnValueD1vXGaE };
		const _startVertexbtvkLbv = {
			"getKey": _getKeymULQ5Nz
	}
		const _returnValuePWCpwr = await bellmanFord(_graphvDk7eiB, _startVertexbtvkLbv)
	});
})