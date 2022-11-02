export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirecteddMsAwfp = "jzl7xUu6rJkq9G8wkdoo2ipw5bJ2YAu0gPkWJAb5Cc97tRo7nWx8arCHI8pHek13qmMTJI";
		const _returnValueMUgP0f = {
		
	}
		const _getAllEdgesDXmvuZK = () => { return _returnValueMUgP0f };
		const _arrayValueWmLykB9 = "vSYDesFPV8hj65bbJyzYi7SQEqI28NolAKmdxcFLBDsAr8dvNwTzAZ6G6bDJ53plsV";
		const _arrayValues4L4x0S = undefined;
		const _arrayValue3bv22A = {
		
	}
		const _returnValuerCVpykD = [_arrayValueWmLykB9, _arrayValues4L4x0S, _arrayValue3bv22A]
		const _getAllVerticescpq7sXW = () => { return _returnValuerCVpykD };
		const _graphEeZLYB7 = {
			"isDirected": _isDirecteddMsAwfp,
		"getAllEdges": _getAllEdgesDXmvuZK,
		"getAllVertices": _getAllVerticescpq7sXW
	}
		const _returnValueP68G0OQ = await kruskal(_graphEeZLYB7)
	});

	it('test for kruskal', async () => {
		const _isDirected6FubwS = null;
		const _arrayValueJosm64y = "mAmuu7s5KJfFV19iQrE8up5tiiRJKg2pYeCUDCesJ5qHddHEXQ3n8kYmcTVNWup6KzdWO8nbva4XeDXUq";
		const _returnValueiEUYVBH = [_arrayValueJosm64y]
		const _getAllEdgesTAxnxfs = () => { return _returnValueiEUYVBH };
		const _returnValueTiMF1b = undefined;
		const _getAllVerticest1WbxEW = () => { return _returnValueTiMF1b };
		const _graphfbIAjqZ = {
			"isDirected": _isDirected6FubwS,
		"getAllEdges": _getAllEdgesTAxnxfs,
		"getAllVertices": _getAllVerticest1WbxEW
	}
		const _returnValueSIfewr2 = await kruskal(_graphfbIAjqZ)
	});
})