export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedhWyO1za = undefined;
		const _returnValueCkdNSJE = {
		
	}
		const _getAllVerticesJVpoisq = () => { return _returnValueCkdNSJE };
		const _graphORD65Dh = {
			"isDirected": _isDirectedhWyO1za,
		"getAllVertices": _getAllVerticesJVpoisq
	}
		const _returnValuekt6HxnB = await prim(_graphORD65Dh)
	});

	it('test for prim', async () => {
		const _isDirectedeueVEir = 6.686263036577639;
		const _arrayValueriDkS0W = undefined;
		const _arrayValuebsnSVbO = "BftqFPpFIVIP";
		const _arrayValueh7acXIl = "uyosOQY3eg4wJAerwM8n5l88Vf4402hpPL5wO3uXaFFLNr6kKflAzfr11DlH7ews3PExunwjCOKFEwSS29goqRhNq2Y";
		const _arrayValuePx1AnIH = 2.001902198014932;
		const _arrayValueqw7ISJt = -0.9056593390951218;
		const _arrayValueDfAC4sG = [_arrayValueqw7ISJt]
		const _arrayValuekSi3jsX = [_arrayValueDfAC4sG]
		const _arrayValuey85en0x = false;
		const _arrayValueoo83bpE = undefined;
		const _arrayValueZdP1E8h = [_arrayValuekSi3jsX, _arrayValuey85en0x, _arrayValueoo83bpE]
		const _arrayValueedKR8k = undefined;
		const _arrayValueyaDVEL6 = [_arrayValueh7acXIl, _arrayValuePx1AnIH, _arrayValueZdP1E8h, _arrayValueedKR8k]
		const _arrayValueDYZ9pFT = undefined;
		const _arrayValuenZPM0AU = false;
		const _arrayValueJtnm3qw = [_arrayValuebsnSVbO, _arrayValueyaDVEL6, _arrayValueDYZ9pFT, _arrayValuenZPM0AU]
		const _arrayValueo66Kzm6 = [_arrayValueriDkS0W, _arrayValueJtnm3qw]
		const _arrayValueaO2fj86 = -4.396076765912163;
		const _arrayValueuX5Xuhn = "oQLloGAzkWYOJRrnNMz3OCf7qUS9Xc8haPlxWDisKOGR1iM9vHLQRtBmdM6C1ECcindlley4oXAYyqOEyahsWHZKl9kucb5m";
		const _returnValueGxbD3BU = [_arrayValueo66Kzm6, _arrayValueaO2fj86, _arrayValueuX5Xuhn]
		const _getAllVerticeseRrtwDz = () => { return _returnValueGxbD3BU };
		const _graphVI0tkSa = {
			"isDirected": _isDirectedeueVEir,
		"getAllVertices": _getAllVerticeseRrtwDz
	}
		const _returnValueFcXlrXa = await prim(_graphVI0tkSa)
	});

	it('test for prim', async () => {
		const _isDirectedVrpKX4 = false;
		const _graphgONzjUf = new Graph(_isDirectedVrpKX4)
		const _returnValuecwQt46E = -2.2138100839639225;
		const _getKeym8ng1d8 = () => { return _returnValuecwQt46E };
		const _newVertexcCY6lQD = {
			"getKey": _getKeym8ng1d8
	}
		const _returnValueoeAouaS = await _graphgONzjUf.addVertex(_newVertexcCY6lQD)
		const _returnValuec4ksENk = await _graphgONzjUf.toString()
		const _returnValues0tPKu4 = await prim(_graphgONzjUf)
	});
})