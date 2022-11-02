export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _returnValue6eepjU = undefined;
		const _graphBtNmHN = () => { return _returnValue6eepjU };
		const _returnValueX72oiT3 = await articulationPoints(_graphBtNmHN)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedmcyRNO = true;
		const _graphFkpC4N7 = new Graph(_isDirectedmcyRNO)
		const _returnValueXQ3i5DM = await _graphFkpC4N7.toString()
		const _returnValueUQHKlFG = undefined;
		const _returnValuejTqF4P8 = () => { return _returnValueUQHKlFG };
		const _getKeyFPLXtw = () => { return _returnValuejTqF4P8 };
		const _newVertexz21NBMC = {
			"getKey": _getKeyFPLXtw
	}
		const _returnValueJkXbkZ2 = await _graphFkpC4N7.addVertex(_newVertexz21NBMC)
		const _returnValuerLuFLsk = await articulationPoints(_graphFkpC4N7)
	});
})