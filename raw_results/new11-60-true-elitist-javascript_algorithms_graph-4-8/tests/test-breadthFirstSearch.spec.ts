export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValue9Uthp4 = true;
		const _getNeighborsTJJndbF = () => { return _returnValue9Uthp4 };
		const _graphwDO6yaH = {
			"getNeighbors": _getNeighborsTJJndbF
	}
		const _startVertexRy8J9oZ = -0.08382012927309823;
		const _originalCallbackssFVlJfh = 2.0892735031499896;
		const _returnValueM5yVoWR = await breadthFirstSearch(_graphwDO6yaH, _startVertexRy8J9oZ, _originalCallbackssFVlJfh)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueMOYlMci = "XWKQeAjwXHlOoP3HfYxj74y";
		const _arrayValuef1x1cSb = "ThtoPqoAGSpbgnLlqwLJcFOkxJBSm9wMD7y0hSJ2eQ8qB4acyD0j4mVcdNIWKjKnCnoSXuJOTX5";
		const _returnValueNJkN3XC = [_arrayValueMOYlMci, _arrayValuef1x1cSb]
		const _getNeighborsxdeai4G = () => { return _returnValueNJkN3XC };
		const _graphfxIhdhI = {
			"getNeighbors": _getNeighborsxdeai4G
	}
		const _startVertexhzzMun6 = null;
		const _originalCallbacksxOb0vA6 = undefined;
		const _returnValueGqtN3B5 = await breadthFirstSearch(_graphfxIhdhI, _startVertexhzzMun6, _originalCallbacksxOb0vA6)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueEJka2J9 = null;
		const _graphGRLgWwG = new GraphVertex(_valueEJka2J9)
		const _arrayValueuiS0DrH = null;
		const _returnValueefdIGcW = [_arrayValueuiS0DrH]
		const _edgelEafbkQ = () => { return _returnValueefdIGcW };
		const _returnValueoLAN5zt = await _graphGRLgWwG.deleteEdge(_edgelEafbkQ)
		const _returnValue18Bb4h = await _graphGRLgWwG.deleteAllEdges()
		const _startVertexyHjU2aH = true;
		const _arrayValueO1RAWEj = null;
		const _arrayValueuPGIMQM = [_arrayValueO1RAWEj]
		const _arrayValuej0XRsFH = null;
		const _arrayValueYuXdWY0 = "b9rIXG7IkBTAYgSGKjtI045lamO6pDqHLgVRa6ivvVQ7lK6EJRTcWj14mCBbF5Kv28Ye";
		const _arrayValueVBY8yPL = 8.79118107462051;
		const _returnValuee1f0Iyd = null;
		const _arrayValuep7MqGLh = () => { return _returnValuee1f0Iyd };
		const _originalCallbacksUm4d8qJ = [_arrayValueuPGIMQM, _arrayValuej0XRsFH, _arrayValueYuXdWY0, _arrayValueVBY8yPL, _arrayValuep7MqGLh]
		const _returnValuez6SmOPE = await breadthFirstSearch(_graphGRLgWwG, _startVertexyHjU2aH, _originalCallbacksUm4d8qJ)
	});
})