export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _returnValuessBXl4 = {
		
	}
		const _arrayValueixVv1HV = () => { return _returnValuessBXl4 };
		const _arrayValueXWroNOj = 2.054570223962406;
		const _isDirectedzIhkGuw = [_arrayValueixVv1HV, _arrayValueXWroNOj]
		const _arrayValueyzrKcw4 = {
		
	}
		const _arrayValuedP1cTgy = true;
		const _arrayValueugbGomL = null;
		const _arrayValueN450IHi = [_arrayValueyzrKcw4, _arrayValuedP1cTgy, _arrayValueugbGomL]
		const _arrayValueMNLZ1XM = null;
		const _getAllEdgestSy0WWz = [_arrayValueN450IHi, _arrayValueMNLZ1XM]
		const _arrayValuetnNEJf9 = "IjwoplUe4muZuYursTltBC7g";
		const _arrayValueLDzsA2y = undefined;
		const _arrayValueYWpFYNi = {
		
	}
		const _returnValueTvphDFC = [_arrayValuetnNEJf9, _arrayValueLDzsA2y, _arrayValueYWpFYNi]
		const _getAllVerticesdtjXNy3 = () => { return _returnValueTvphDFC };
		const _graphkEFs4Gc = {
			"isDirected": _isDirectedzIhkGuw,
		"getAllEdges": _getAllEdgestSy0WWz,
		"getAllVertices": _getAllVerticesdtjXNy3
	}
		const _returnValue0Z7zgG = await kruskal(_graphkEFs4Gc)
	});

	it('test for kruskal', async () => {
		const _isDirectedRjauhP1 = null;
		const _arrayValueXrxo8Pt = true;
		const _arrayValue18Ys77 = {
		
	}
		const _arrayValueO6aCZ84 = "sk3oAHj3ulGLhR";
		const _arrayValuefuYqEfu = [_arrayValue18Ys77, _arrayValueO6aCZ84]
		const _returnValueU8hVb6 = [_arrayValueXrxo8Pt, _arrayValuefuYqEfu]
		const _getAllEdgesQN1HoWT = () => { return _returnValueU8hVb6 };
		const _returnValuecRAljHG = true;
		const _getAllVerticesMzC9JGg = () => { return _returnValuecRAljHG };
		const _graphMaUjzJY = {
			"isDirected": _isDirectedRjauhP1,
		"getAllEdges": _getAllEdgesQN1HoWT,
		"getAllVertices": _getAllVerticesMzC9JGg
	}
		const _returnValueDuJ0cwg = await kruskal(_graphMaUjzJY)
	});
})