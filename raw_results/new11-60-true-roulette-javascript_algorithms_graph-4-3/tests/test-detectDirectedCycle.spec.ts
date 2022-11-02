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
		const _returnValueDnQifuz = undefined;
		const _getAllVerticesDBBOFl = () => { return _returnValueDnQifuz };
		const _graphatG7ZRE = {
			"getAllVertices": _getAllVerticesDBBOFl
	}
		const _returnValuedoDbTiz = await detectDirectedCycle(_graphatG7ZRE)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedKCOU8d = true;
		const _graphA13bme = new Graph(_isDirectedKCOU8d)
		const _returnValueLUDH9xo = await _graphA13bme.reverse()
		const _returnValuebloZ2kF = await detectDirectedCycle(_graphA13bme)
	});

	it('test for detectDirectedCycle', async () => {
		const _isDirectedl8HYrPc = false;
		const _graphX5rDaR = new Graph(_isDirectedl8HYrPc)
		const _returnValueg9GCrW = await _graphX5rDaR.reverse()
		const _returnValuecFHDZ1q = await _graphX5rDaR.getAllVertices()
		const _valuecbup4R6 = -3.468424360522146;
		const _returnValueBCpjtJu = -3.3889499483639174;
		const _keyCallbackiaj3uFu = () => { return _returnValueBCpjtJu };
		const _newVertexvzEarOn = new DisjointSetItem(_valuecbup4R6, _keyCallbackiaj3uFu)
		const _returnValueNC8BRiS = await _newVertexvzEarOn.isRoot()
		const _returnValueFC5o59C = await _newVertexvzEarOn.getRank()
		const _returnValueknXECko = await _newVertexvzEarOn.isRoot()
		const _returnValueCKKatnp = await _newVertexvzEarOn.getChildren()
		const _returnValueadfisHt = await _graphX5rDaR.addVertex(_newVertexvzEarOn)
		const _returnValueNOouTWD = await detectDirectedCycle(_graphX5rDaR)
	});
})