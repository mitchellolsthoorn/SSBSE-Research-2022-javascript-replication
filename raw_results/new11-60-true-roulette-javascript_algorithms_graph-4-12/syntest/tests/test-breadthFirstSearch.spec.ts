export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _arrayValuebceSLyY = false;
		const _graphIiiq4zZ = [_arrayValuebceSLyY]
		const _startVertexUqRESOl = "vw6WbxmAKGXt6BlqZOt3ptMraPXegRA1S4EA6xLut";
		const _arrayValueRHsYpLf = null;
		const _originalCallbacksZ8Cmh1p = [_arrayValueRHsYpLf]
		const _returnValueVjlCEX5 = await breadthFirstSearch(_graphIiiq4zZ, _startVertexUqRESOl, _originalCallbacksZ8Cmh1p)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueZZ0yGJI = undefined;
		const _arrayValueKopMi6 = 1.5530669349029917;
		const _returnValuepI1ZtY = [_arrayValueZZ0yGJI, _arrayValueKopMi6]
		const _getNeighborssbrF3FY = () => { return _returnValuepI1ZtY };
		const _graphflmOFnO = {
			"getNeighbors": _getNeighborssbrF3FY
	}
		const _arrayValuegPXHWDR = -6.667336301689785;
		const _startVertexAfT28fh = [_arrayValuegPXHWDR]
		const _originalCallbackssMnK6xY = undefined;
		const _returnValueXohG8jH = await breadthFirstSearch(_graphflmOFnO, _startVertexAfT28fh, _originalCallbackssMnK6xY)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueHEINCc = "3gmxraA5lCbKqXHKeR76";
		const _graphY7XhHoM = new GraphVertex(_valueHEINCc)
		const _returnValuerrKu4hz = undefined;
		const _callbacknCGUbYu = () => { return _returnValuerrKu4hz };
		const _returnValueaK9OLA = await _graphY7XhHoM.toString(_callbacknCGUbYu)
		const _returnValuejK63Epd = await _graphY7XhHoM.getKey()
		const _arrayValueyhKoYpd = true;
		const _vertexNn8kZd = [_arrayValueyhKoYpd]
		const _returnValueBKCUPyS = await _graphY7XhHoM.hasNeighbor(_vertexNn8kZd)
		const _requiredEdgeteI0ysG = null;
		const _returnValuedZ5Tp3c = await _graphY7XhHoM.hasEdge(_requiredEdgeteI0ysG)
		const _vertexxkhfdVG = undefined;
		const _returnValueME1NlX = await _graphY7XhHoM.findEdge(_vertexxkhfdVG)
		const _startVertexqKmSeNd = -5.772213856653696;
		const _returnValueW2lfBTd = undefined;
		const _originalCallbacksE6tKslj = () => { return _returnValueW2lfBTd };
		const _returnValueoM1FqIX = await breadthFirstSearch(_graphY7XhHoM, _startVertexqKmSeNd, _originalCallbacksE6tKslj)
	});
})