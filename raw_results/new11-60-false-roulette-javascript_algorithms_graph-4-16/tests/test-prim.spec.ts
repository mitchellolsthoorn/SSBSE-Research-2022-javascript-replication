export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _returnValueKzEHi77 = -7.98961987699079;
		const _arrayValueGJrqYXf = () => { return _returnValueKzEHi77 };
		const _arrayValuex7kmh3G = "OW7KMYz7bzYK0WmQXzKr4bsx1RrFcB44iWLeo6kP05p6vhsJ6UbVcOlnbi1f3cKLlWzHrDt4hYMnEKsuKcLgOQTjTFZE3VvqKG";
		const _arrayValuePd4hVLg = [_arrayValuex7kmh3G]
		const _returnValueF1WePRm = [_arrayValueGJrqYXf, _arrayValuePd4hVLg]
		const _graphb230SnM = () => { return _returnValueF1WePRm };
		const _returnValuekukEqzB = await prim(_graphb230SnM)
	});

	it('test for prim', async () => {
		const _returnValuejfGCeWi = -4.904062175464688;
		const _isDirectedRIB1gju = () => { return _returnValuejfGCeWi };
		const _returnValueJxkZei0 = null;
		const _getAllVerticesnVanxDL = () => { return _returnValueJxkZei0 };
		const _graphPlk2PX = {
			"isDirected": _isDirectedRIB1gju,
		"getAllVertices": _getAllVerticesnVanxDL
	}
		const _returnValueWcJrCB9 = await prim(_graphPlk2PX)
	});

	it('test for prim', async () => {
		const _isDirectedUJhbQ1Y = false;
		const _graphhys9H3G = new Graph(_isDirectedUJhbQ1Y)
		const _returnValueRpsQuiV = undefined;
		const _returnValueuitUNwi = () => { return _returnValueRpsQuiV };
		const _getKeyVLJU3v9 = () => { return _returnValueuitUNwi };
		const _newVertexsVvAjRD = {
			"getKey": _getKeyVLJU3v9
	}
		const _returnValueQkAOSKm = await _graphhys9H3G.addVertex(_newVertexsVvAjRD)
		const _returnValueM66PT5p = await _graphhys9H3G.getVerticesIndices()
		const _returnValueuiA04sw = await prim(_graphhys9H3G)
	});
})