export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValuewmM6UrU = "LyK4Pf2VmqPYuxbEVl3ASUC56H0kk7SdLkm9ZEgfhkyzOwEUit6a7JDplqFml5slUi3vqAkodmGIXOacfTVtsO";
		const _getAllVerticesrU196vF = () => { return _returnValuewmM6UrU };
		const _graphEvldPVa = {
			"getAllVertices": _getAllVerticesrU196vF
	}
		const _returnValueiJ0EkZv = await articulationPoints(_graphEvldPVa)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedd86orjW = false;
		const _graphtlpPYc = new Graph(_isDirectedd86orjW)
		const _arrayValuej66Xuzz = "J6NGU6GZnLvQDiCShSufolkj2oI9pzdLeEIQcLmRfNUPW";
		const _arrayValueaSZrEL = true;
		const _arrayValuevq3jgI9 = false;
		const _returnValueY4Y87x3 = [_arrayValuej66Xuzz, _arrayValueaSZrEL, _arrayValuevq3jgI9]
		const _getKeyMI4lQSq = () => { return _returnValueY4Y87x3 };
		const _newVertexrnrxLUb = {
			"getKey": _getKeyMI4lQSq
	}
		const _returnValueYWstPUV = await _graphtlpPYc.addVertex(_newVertexrnrxLUb)
		const _returnValueafPgK6X = {
		
	}
		const _getKeyeJDEzr5 = () => { return _returnValueafPgK6X };
		const _newVertexYSJ9Xnp = {
			"getKey": _getKeyeJDEzr5
	}
		const _returnValueJex6Gp5 = await _graphtlpPYc.addVertex(_newVertexYSJ9Xnp)
		const _returnValueVjUuAU1 = await articulationPoints(_graphtlpPYc)
	});
})