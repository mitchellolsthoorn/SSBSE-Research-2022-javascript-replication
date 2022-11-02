export {}
import prim from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/prim/prim.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('prim', () => {
	it('test for prim', async () => {
		const _isDirectedxGjQC5h = undefined;
		const _returnValuePXUUpvv = null;
		const _getAllVerticesbb1g9tp = () => { return _returnValuePXUUpvv };
		const _graphbLZlanv = {
			"isDirected": _isDirectedxGjQC5h,
		"getAllVertices": _getAllVerticesbb1g9tp
	}
		const _returnValueF6ekTzG = await prim(_graphbLZlanv)
	});

	it('test for prim', async () => {
		const _arrayValuedfjmhpN = "dezN2m8lArhoQUEG7R46V9FcowU5dbBvz8Cs1MbgQ2JAsoRvpq";
		const _isDirectedQt7ZvKI = [_arrayValuedfjmhpN]
		const _arrayValueBoPDfPc = "ERGn1TWYNMgcTSXx9Wd6pXSCp9cAK4SLSPfasDYvqNmOuNPXh3wWlfCQyZcEN1WaCeE2TuLP9c1v";
		const _arrayValuesEYVgDK = "pmvaepce44kqWK9Oy";
		const _arrayValuerukxYh = null;
		const _arrayValueb19s4bZ = -8.471023576391442;
		const _returnValueWA410Fa = [_arrayValueBoPDfPc, _arrayValuesEYVgDK, _arrayValuerukxYh, _arrayValueb19s4bZ]
		const _getAllVertices7Mn8Cn = () => { return _returnValueWA410Fa };
		const _graphwIcYUoc = {
			"isDirected": _isDirectedQt7ZvKI,
		"getAllVertices": _getAllVertices7Mn8Cn
	}
		const _returnValuexxijY9 = await prim(_graphwIcYUoc)
	});

	it('test for prim', async () => {
		const _isDirectedApmwips = false;
		const _graphHwHODyh = new Graph(_isDirectedApmwips)
		const _returnValueZH94Mmu = await _graphHwHODyh.getWeight()
		const _value5FRG49 = null;
		const _returnValuexcsP87j = "VswmE8s3xSmKWjCeiTqkWlX9XjdLX1HSOhqNENUNeaehwVDO9oUTI";
		const _keyCallbackoLoPxeZ = () => { return _returnValuexcsP87j };
		const _newVertexiU9zotz = new DisjointSetItem(_value5FRG49, _keyCallbackoLoPxeZ)
		const _returnValueFJIPNVA = await _newVertexiU9zotz.getChildren()
		const _returnValuenY0r8ue = await _newVertexiU9zotz.getRank()
		const _returnValueLHedxm = await _newVertexiU9zotz.getChildren()
		const _returnValueZegrUue = await _graphHwHODyh.addVertex(_newVertexiU9zotz)
		const _returnValueWpWu2Ty = await _graphHwHODyh.getWeight()
		const _returnValueeprihY7 = await _graphHwHODyh.reverse()
		const _returnValueNyjm6ZL = await prim(_graphHwHODyh)
	});
})