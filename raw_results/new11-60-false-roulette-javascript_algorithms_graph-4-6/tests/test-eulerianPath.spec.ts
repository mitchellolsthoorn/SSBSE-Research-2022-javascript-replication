export {}
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _arrayValuek6XNjPl = "xcwHn7HNy9metrQgqxST1qHBe5Ukd5IIWR0eQBoq5ElXvK6MNUTPW";
		const _arrayValuemfcX6bt = -9.460883782181496;
		const _arrayValueXZ3GH9p = true;
		const _arrayValueE4Unbtc = undefined;
		const _value8GICYM = [_arrayValuek6XNjPl, _arrayValuemfcX6bt, _arrayValueXZ3GH9p, _arrayValueE4Unbtc]
		const _graphKlkPq3k = new GraphVertex(_value8GICYM)
		const _returnValueRn3uBmu = await _graphKlkPq3k.getNeighbors()
		const _vertexs8mNQQR = "G1CNNffpNxy1nHwhbaHVOwiABeeoVBGM5eF2we2yl3Q0Yto7kn6fACW5V";
		const _returnValueAYRGo0L = await _graphKlkPq3k.hasNeighbor(_vertexs8mNQQR)
		const _returnValuefYeR3As = await _graphKlkPq3k.getKey()
		const _returnValueDq52257 = await eulerianPath(_graphKlkPq3k)
	});

	it('test for eulerianPath', async () => {
		const _isDirectedgtuJyGX = false;
		const _graphtAsCYe = new Graph(_isDirectedgtuJyGX)
		const _vertexKeysSjv15 = null;
		const _returnValueM64HwuR = await _graphtAsCYe.getVertexByKey(_vertexKeysSjv15)
		const _returnValuet09R9ei = await _graphtAsCYe.reverse()
		const _returnValueUqdCsk = await _graphtAsCYe.getAdjacencyMatrix()
		const _returnValuelbjo80Y = await _graphtAsCYe.getAllVertices()
		const _returnValueu3H9Vnt = await eulerianPath(_graphtAsCYe)
	});
})