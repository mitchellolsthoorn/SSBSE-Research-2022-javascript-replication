export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphzn8I1bx = null;
		const _returnValueYK02ACK = "7RInzT72H3m7HGQZOCFQaUYe0UFqx8dou7Z8uQqtSmOWz0aSknNHhyJqLP8fGsdwxTqeBig";
		const _getKeyNBuGGj9 = () => { return _returnValueYK02ACK };
		const _startVertexLn8Fi1h = {
			"getKey": _getKeyNBuGGj9
	}
		const _returnValuecsoU1te = await bellmanFord(_graphzn8I1bx, _startVertexLn8Fi1h)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedy2CoWUx = true;
		const _graphU8uH93k = new Graph(_isDirectedy2CoWUx)
		const _returnValuevIMSc2L = await _graphU8uH93k.getAllEdges()
		const _returnValueFJKcT0R = await _graphU8uH93k.getWeight()
		const _returnValuenpwimrc = -0.4615808255931224;
		const _getKeyZCvxpja = () => { return _returnValuenpwimrc };
		const _startVertexfLI1nK6 = {
			"getKey": _getKeyZCvxpja
	}
		const _returnValuePo6fEg = await bellmanFord(_graphU8uH93k, _startVertexfLI1nK6)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedTQlCnDl = true;
		const _graphd3BQeLx = new Graph(_isDirectedTQlCnDl)
		const _returnValuemBPTMC5 = await _graphd3BQeLx.getAllVertices()
		const _returnValueHitAlR9 = false;
		const _returnValueosv9sNw = () => { return _returnValueHitAlR9 };
		const _getKeyW24vwKr = () => { return _returnValueosv9sNw };
		const _newVertexMH6Bzql = {
			"getKey": _getKeyW24vwKr
	}
		const _returnValueOsIHvPE = await _graphd3BQeLx.addVertex(_newVertexMH6Bzql)
		const _returnValueo8gHKal = null;
		const _getKeyaF5NvS = () => { return _returnValueo8gHKal };
		const _startVertexdEexQWC = {
			"getKey": _getKeyaF5NvS
	}
		const _returnValueI5l7M5m = await bellmanFord(_graphd3BQeLx, _startVertexdEexQWC)
	});
})