export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedXZ6hIKv = null;
		const _returnValueomh0snJ = 9.366771622316602;
		const _getAllVerticesbENyzSp = () => { return _returnValueomh0snJ };
		const _graphZmXWeHx = {
			"isDirected": _isDirectedXZ6hIKv,
		"getAllVertices": _getAllVerticesbENyzSp
	}
		const _returnValueE6tfP4H = await prim(_graphZmXWeHx)
	});

	it('test for prim', async () => {
		const _isDirectedmOTOSnQ = "8D4TCtV7mw9XdSgU12Wpfy5sikvUbu7FnGfP1JvBsl84Sv824ETjtsNTbYY8";
		const _returnValueRKntZqe = -9.71713504504001;
		const _returnValueFoo4zKP = () => { return _returnValueRKntZqe };
		const _getAllVerticesNKpm9gH = () => { return _returnValueFoo4zKP };
		const _graphAGnT7OY = {
			"isDirected": _isDirectedmOTOSnQ,
		"getAllVertices": _getAllVerticesNKpm9gH
	}
		const _returnValueoXg0d87 = await prim(_graphAGnT7OY)
	});

	it('test for prim', async () => {
		const _isDirectedWcpHQbr = false;
		const _graphHqPp8X = new Graph(_isDirectedWcpHQbr)
		const _returnValueXjG81CH = undefined;
		const _returnValuepAGDOA = () => { return _returnValueXjG81CH };
		const _getKeytoD5RgU = () => { return _returnValuepAGDOA };
		const _newVertexLX8MWac = {
			"getKey": _getKeytoD5RgU
	}
		const _returnValued5AzAZt = await _graphHqPp8X.addVertex(_newVertexLX8MWac)
		const _returnValuecdFouJ = await _graphHqPp8X.toString()
		const _returnValueBNx26LD = await _graphHqPp8X.getAllVertices()
		const _returnValued9esc2K = await prim(_graphHqPp8X)
	});
})