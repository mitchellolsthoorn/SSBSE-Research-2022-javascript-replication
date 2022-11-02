export {}
import eulerianPath from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/eulerian-path/eulerianPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('eulerianPath', () => {
	it('test for eulerianPath', async () => {
		const _returnValueSZ1xXGj = null;
		const _getAllEdgesGBQjoPU = () => { return _returnValueSZ1xXGj };
		const _arrayValueysciOJR = 3.17867835782047;
		const _arrayValued8hImUu = -5.03052125427789;
		const _arrayValueSYrZ9gu = 0.7049182689192701;
		const _arrayValuedJ8SdO2 = false;
		const _arrayValuelLEaGyn = null;
		const _arrayValueW1ifAov = [_arrayValuedJ8SdO2, _arrayValuelLEaGyn]
		const _arrayValueU8PSzTg = [_arrayValued8hImUu, _arrayValueSYrZ9gu, _arrayValueW1ifAov]
		const _returnValueJzBYBF = [_arrayValueysciOJR, _arrayValueU8PSzTg]
		const _getAllVerticesCf1QL8S = () => { return _returnValueJzBYBF };
		const _returnValueVFG46BT = false;
		const _deleteEdgeziRAlo = () => { return _returnValueVFG46BT };
		const _graphtwFczx = {
			"getAllEdges": _getAllEdgesGBQjoPU,
		"getAllVertices": _getAllVerticesCf1QL8S,
		"deleteEdge": _deleteEdgeziRAlo
	}
		const _returnValuep2j36Rl = await eulerianPath(_graphtwFczx)
	});

	it('test for eulerianPath', async () => {
		const _returnValuebv7vwOl = []
		const _getAllEdgeseCNvemt = () => { return _returnValuebv7vwOl };
		const _returnValuep7QSQab = undefined;
		const _getAllVerticesitmMRGk = () => { return _returnValuep7QSQab };
		const _returnValueUEvfbKG = "OUxa020mHpEyVXxaefK3M5imMXOA5vBznTjytG2rpYyz3XN90R5o5dVET9z22z3N3A";
		const _deleteEdgeQISZlvp = () => { return _returnValueUEvfbKG };
		const _graphoGyerTu = {
			"getAllEdges": _getAllEdgeseCNvemt,
		"getAllVertices": _getAllVerticesitmMRGk,
		"deleteEdge": _deleteEdgeQISZlvp
	}
		const _returnValueNhy3e90 = await eulerianPath(_graphoGyerTu)
	});
})