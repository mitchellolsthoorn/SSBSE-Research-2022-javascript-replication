export {}
import detectDirectedCycle from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/detect-cycle/detectDirectedCycle.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('detectDirectedCycle', () => {
	it('test for detectDirectedCycle', async () => {
		const _arrayValueBU4x81L = 3.287930199198584;
		const _arrayValueT35sYxO = {
		
	}
		const _arrayValueDnXFooo = undefined;
		const _arrayValuey4dVwFq = null;
		const _returnValuemrqx3NO = [_arrayValuey4dVwFq]
		const _arrayValuenEN21Co = () => { return _returnValuemrqx3NO };
		const _arrayValuefyl1whn = "wT5gjnRYKgOyyMdGWFIAGiNpH9lwWa";
		const _arrayValuelwEanEm = [_arrayValueT35sYxO, _arrayValueDnXFooo, _arrayValuenEN21Co, _arrayValuefyl1whn]
		const _arrayValueqlMYvp = true;
		const _arrayValuehcE3Wgb = undefined;
		const _arrayValuedBV9hzg = {
		
	}
		const _arrayValue6Cy6uX = {
		
	}
		const _arrayValueXuQd04F = [_arrayValuehcE3Wgb, _arrayValuedBV9hzg, _arrayValue6Cy6uX]
		const _graphyacp3GC = [_arrayValueBU4x81L, _arrayValuelwEanEm, _arrayValueqlMYvp, _arrayValueXuQd04F]
		const _returnValueqRrCg3m = await detectDirectedCycle(_graphyacp3GC)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedp1Xy0nQ = false;
		const _graphx2NFLgK = new Graph(_isDirectedp1Xy0nQ)
		const _arrayValueR62h79l = "SACRzVeg4MbIaVcX86Msrj";
		const _arrayValueigfDb0b = -8.139452585446048;
		const _arrayValueoV2vsbr = 7.4490663603364595;
		const _vertexKey1XlXU5 = [_arrayValueR62h79l, _arrayValueigfDb0b, _arrayValueoV2vsbr]
		const _returnValuewfy1kBA = await _graphx2NFLgK.getVertexByKey(_vertexKey1XlXU5)
		const _returnValueJiVGSIL = await _graphx2NFLgK.getAllVertices()
		const _returnValueLLDR1m1 = await detectDirectedCycle(_graphx2NFLgK)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedmayJyLE = false;
		const _graphmARLRZU = new Graph(_isDirectedmayJyLE)
		const _returnValue9AXd8K = await _graphmARLRZU.getWeight()
		const _valueOxCCeXn = true;
		const _returnValueZwZRtdt = 2.5509718052412786;
		const _keyCallbackeiKKJtY = () => { return _returnValueZwZRtdt };
		const _newVertexdh6ZKA = new DisjointSetItem(_valueOxCCeXn, _keyCallbackeiKKJtY)
		const _returnValueEy5jpP = await _newVertexdh6ZKA.isRoot()
		const _returnValuekxQHzF2 = await _newVertexdh6ZKA.getChildren()
		const _returnValueSD4FfW6 = await _graphmARLRZU.addVertex(_newVertexdh6ZKA)
		const _returnValuedW69Tu2 = await detectDirectedCycle(_graphmARLRZU)
	});
})