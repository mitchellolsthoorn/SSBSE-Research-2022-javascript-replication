export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValuep7qLnkw = -5.992538512852902;
		const _returnValueps92FAq = true;
		const _arrayValuer1zwJgp = () => { return _returnValueps92FAq };
		const _arrayValuein73o22 = "xvwQh";
		const _graphp15yPF = [_arrayValuep7qLnkw, _arrayValuer1zwJgp, _arrayValuein73o22]
		const _returnValueqOGZiMh = await articulationPoints(_graphp15yPF)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedeW72sI = 2.0524830899471453;
		const _graphX74gtFO = new Graph(_isDirectedeW72sI)
		const _returnValueP27o5Rn = true;
		const _getKeyKASx1uj = () => { return _returnValueP27o5Rn };
		const _newVertexv6yiOyL = {
			"getKey": _getKeyKASx1uj
	}
		const _returnValueAEhdRge = await _graphX74gtFO.addVertex(_newVertexv6yiOyL)
		const _returnValuegm0fPth = await _graphX74gtFO.getAllEdges()
		const _returnValuedelPisk = await articulationPoints(_graphX74gtFO)
	});
})