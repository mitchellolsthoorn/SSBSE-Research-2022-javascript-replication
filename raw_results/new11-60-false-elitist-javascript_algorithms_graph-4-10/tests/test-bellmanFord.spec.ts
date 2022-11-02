export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValueMTltEnb = null;
		const _graphnPnFsHK = () => { return _returnValueMTltEnb };
		const _returnValuewDpccb = true;
		const _getKeyRgAZ9Q3 = () => { return _returnValuewDpccb };
		const _startVertexEDHXd27 = {
			"getKey": _getKeyRgAZ9Q3
	}
		const _returnValue9Sj527 = await bellmanFord(_graphnPnFsHK, _startVertexEDHXd27)
	});

	it('test for bellmanFord', async () => {
		const _returnValuedUgngop = []
		const _getAllVerticesHxMnzu = () => { return _returnValuedUgngop };
		const _returnValueNKTt1yz = "SwYZSeV3bhvSTCbMqCM41aKXyYeDcB1mjc7YtF85DKmO526hmwLhk8Jd8RW5BkaDp";
		const _getVertexByKeyX7JoDeB = () => { return _returnValueNKTt1yz };
		const _getNeighborsoHLRsUj = "xwu7K9Cpv1C1cC3Vr9jGSkAenGmjg3lCfJqpCUyO8KlxCLJT1LKEua";
		const _arrayValuedo4YnFX = "aETJuTHEcwOqrAOwYLslRDRKHyzg5Z9EhkEYrxaOEzs3OIK0Tp1wlG0Y68EEilQCCO2";
		const _arrayValuet2dmDKX = {
		
	}
		const _arrayValuepRoGo86 = null;
		const _returnValueUgBU7iY = [_arrayValuedo4YnFX, _arrayValuet2dmDKX, _arrayValuepRoGo86]
		const _findEdgerOe4A9O = () => { return _returnValueUgBU7iY };
		const _graphHZCDzjA = {
			"getAllVertices": _getAllVerticesHxMnzu,
		"getVertexByKey": _getVertexByKeyX7JoDeB,
		"getNeighbors": _getNeighborsoHLRsUj,
		"findEdge": _findEdgerOe4A9O
	}
		const _returnValueRNst9LB = -4.451895420232904;
		const _getKeyS2hkatB = () => { return _returnValueRNst9LB };
		const _startVertexnfFiZz4 = {
			"getKey": _getKeyS2hkatB
	}
		const _returnValueOhxND72 = await bellmanFord(_graphHZCDzjA, _startVertexnfFiZz4)
	});
})