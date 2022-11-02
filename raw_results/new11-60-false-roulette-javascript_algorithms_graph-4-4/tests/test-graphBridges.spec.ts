export {}
import graphBridges from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bridges/graphBridges.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('graphBridges', () => {
	it('test for graphBridges', async () => {
		const _arrayValuelKORd4 = -2.1522668335751662;
		const _arrayValuetNMd70D = -0.4596736502303962;
		const _arrayValue2RfV7v = [_arrayValuelKORd4, _arrayValuetNMd70D]
		const _arrayValueCRmHJ0w = "pfy5LHRtCAudHxkeoBevfWxqcxnrEcz";
		const _returnValuefVvAg7k = [_arrayValue2RfV7v, _arrayValueCRmHJ0w]
		const _getAllVerticesbjOKZ69 = () => { return _returnValuefVvAg7k };
		const _returnValuercXuoR = false;
		const _findEdgeDInCYwn = () => { return _returnValuercXuoR };
		const _graphmJ2V44u = {
			"getAllVertices": _getAllVerticesbjOKZ69,
		"findEdge": _findEdgeDInCYwn
	}
		const _returnValuetbe2490 = await graphBridges(_graphmJ2V44u)
	});

	it('test for graphBridges', async () => {
		const _isDirectedjFh1YDE = true;
		const _graphUAydAdj = new Graph(_isDirectedjFh1YDE)
		const _returnValueZsIoML = await _graphUAydAdj.toString()
		const _returnValue2XlN10 = "DWePvNrqnbVSOyi37cr8mCRlcJ3nOoPs7mXg2xtP3oXHrDKfCpsZ92mfTYEQVA5yIzTrze486MPcTQqmoyVoAmFFRz";
		const _getKeyzE8hyJm = () => { return _returnValue2XlN10 };
		const _newVertexRVZmCdY = {
			"getKey": _getKeyzE8hyJm
	}
		const _returnValuenLviyo8 = await _graphUAydAdj.addVertex(_newVertexRVZmCdY)
		const _returnValueUVrMs8h = await _graphUAydAdj.getAllVertices()
		const _returnValueErUGsMS = await graphBridges(_graphUAydAdj)
	});
})