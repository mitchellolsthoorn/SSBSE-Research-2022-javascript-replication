export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphqZvV8wD = "GnsKfN3uvD9hIgLIDrSdWHKEwIYaXomNueyOXhZ6998bbzWrMXGQOo6LB";
		const _returnValueVTFy1G = {
		
	}
		const _returnValueZ9CCvj1 = () => { return _returnValueVTFy1G };
		const _arrayValuenV5aoNf = () => { return _returnValueZ9CCvj1 };
		const _startVertexhNkeP4E = [_arrayValuenV5aoNf]
		const _returnValueXFLnffU = await bellmanFord(_graphqZvV8wD, _startVertexhNkeP4E)
	});

	it('test for bellmanFord', async () => {
		const _arrayValueSvluIwi = {
		
	}
		const _returnValueOLgXxmL = [_arrayValueSvluIwi]
		const _graphop1swKR = () => { return _returnValueOLgXxmL };
		const _returnValueKbFgq8r = "4X8m3T5vmQc7";
		const _getKeyDxm9hb9 = () => { return _returnValueKbFgq8r };
		const _startVertexcNI8pz = {
			"getKey": _getKeyDxm9hb9
	}
		const _returnValuecESuzPv = await bellmanFord(_graphop1swKR, _startVertexcNI8pz)
	});

	it('test for bellmanFord', async () => {
		const _isDirected6Gsp7P = false;
		const _graphu4KCopv = new Graph(_isDirected6Gsp7P)
		const _returnValueZAo3p7T = {
		
	}
		const _getKeyU9dnI54 = () => { return _returnValueZAo3p7T };
		const _newVertexQtPBZWq = {
			"getKey": _getKeyU9dnI54
	}
		const _returnValuecM8TzOP = await _graphu4KCopv.addVertex(_newVertexQtPBZWq)
		const _vertexKeyeZYbaeK = true;
		const _returnValuedFhK5o = await _graphu4KCopv.getVertexByKey(_vertexKeyeZYbaeK)
		const _valuemKO6QUw = 5.8856888897425375;
		const _returnValueiGyFxnA = false;
		const _keyCallbackBuqtHxJ = () => { return _returnValueiGyFxnA };
		const _startVertexhRP54UC = new DisjointSetItem(_valuemKO6QUw, _keyCallbackBuqtHxJ)
		const _returnValueyEBNxYc = await _startVertexhRP54UC.isRoot()
		const _returnValueSQfS1x8 = await _startVertexhRP54UC.getChildren()
		const _returnValueyH5G4L9 = await _startVertexhRP54UC.getRank()
		const _returnValueXYUEETJ = await bellmanFord(_graphu4KCopv, _startVertexhRP54UC)
	});
})