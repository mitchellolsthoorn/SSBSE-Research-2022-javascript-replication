export {}
import articulationPoints from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/articulation-points/articulationPoints.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('articulationPoints', () => {
	it('test for articulationPoints', async () => {
		const _arrayValuelif2hsy = 1.004235411330825;
		const _arrayValueYJRA3i3 = -2.2969907106010066;
		const _arrayValueVROO8c = "5hsQlNYy1eiJ81RfXg6fdfcUXNMgoY5XqLfLOWfapOiohGQ3pFQ9SlBZ3wFtaaTfmp5C5VdlBC5sc7gi";
		const _arrayValueHrYhK8A = undefined;
		const _returnValueci4KxNw = [_arrayValuelif2hsy, _arrayValueYJRA3i3, _arrayValueVROO8c, _arrayValueHrYhK8A]
		const _graphv9pfkwp = () => { return _returnValueci4KxNw };
		const _returnValueqY6DVtE = await articulationPoints(_graphv9pfkwp)
	});

	it('test for articulationPoints', async () => {
		const _isDirectedYq2l5Ps = false;
		const _graphtpQBFu = new Graph(_isDirectedYq2l5Ps)
		const _returnValueg4ADUEZ = await _graphtpQBFu.getVerticesIndices()
		const _returnValueoz8vrX = await _graphtpQBFu.getWeight()
		const _arrayValueg4FDr1 = {
		
	}
		const _arrayValueUBepOH2 = "ltb9SlzEsTWSsbtujUEhhHHy1eKaagwlId8hkiNxqgWsIKNlwPAkgqMRSVe";
		const _valuee6zhuiY = [_arrayValueg4FDr1, _arrayValueUBepOH2]
		const _returnValueYtClvVP = null;
		const _returnValuesfEB28Y = () => { return _returnValueYtClvVP };
		const _keyCallbackGyoeru = () => { return _returnValuesfEB28Y };
		const _newVertexXuCWroN = new DisjointSetItem(_valuee6zhuiY, _keyCallbackGyoeru)
		const _returnValuePqu6VEa = await _newVertexXuCWroN.isRoot()
		const _returnValuenDcU4mL = await _newVertexXuCWroN.getRank()
		const _returnValuenogVAF4 = await _newVertexXuCWroN.getKey()
		const _returnValuevXHl6HL = await _graphtpQBFu.addVertex(_newVertexXuCWroN)
		const _returnValueOTYWop5 = await articulationPoints(_graphtpQBFu)
	});
})