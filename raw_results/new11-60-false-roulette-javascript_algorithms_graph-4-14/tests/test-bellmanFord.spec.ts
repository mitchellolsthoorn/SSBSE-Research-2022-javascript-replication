export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphXffsFwt = "JW8pARhgeP8yHlE310TBEXFvUUAZXBlB8j15cA3xpBGDA4jl20a8SUCPPychvcZ1yum0pwL4u2LmbpOdBWjcGbM";
		const _returnValue4TOR8M = "438LuJOfxuBCQmY7obgYG9oCRolv";
		const _arrayValueda68PwF = () => { return _returnValue4TOR8M };
		const _arrayValueEc9lQGp = "XppmNu4RroPygXawEPtPfv4dESz6YCBVyUWT1HMDfp1eFOGPUrEXWAbSrC9yvbGAJZLbTj5ol";
		const _arrayValueOM0U7xm = true;
		const _arrayValue7BU2MV = -4.500712109982025;
		const _returnValueTxv1rHL = [_arrayValueda68PwF, _arrayValueEc9lQGp, _arrayValueOM0U7xm, _arrayValue7BU2MV]
		const _startVertexvsz9MoM = () => { return _returnValueTxv1rHL };
		const _returnValuefQu8IXn = await bellmanFord(_graphXffsFwt, _startVertexvsz9MoM)
	});

	it('test for bellmanFord', async () => {
		const _graphyvJMiC = null;
		const _arrayValuebmPTIaH = null;
		const _arrayValueNzies6 = undefined;
		const _arrayValueJ467m6U = null;
		const _arrayValuel65cdaE = false;
		const _arrayValuej7hHhfq = "TteSOZQaNEL";
		const _arrayValue6hz7Iz = [_arrayValuel65cdaE, _arrayValuej7hHhfq]
		const _returnValueyBQLmG6 = [_arrayValuebmPTIaH, _arrayValueNzies6, _arrayValueJ467m6U, _arrayValue6hz7Iz]
		const _getKeyuWCtZuQ = () => { return _returnValueyBQLmG6 };
		const _startVertexLPcxSoY = {
			"getKey": _getKeyuWCtZuQ
	}
		const _returnValueqG5ej29 = await bellmanFord(_graphyvJMiC, _startVertexLPcxSoY)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedv9grCRL = false;
		const _graphCNqYkNu = new Graph(_isDirectedv9grCRL)
		const _returnValueTeBIto0 = await _graphCNqYkNu.getWeight()
		const _returnValueCYgeTA = await _graphCNqYkNu.reverse()
		const _returnValuejELE60n = undefined;
		const _getKeyv0fExp9 = () => { return _returnValuejELE60n };
		const _startVertexczhefD1 = {
			"getKey": _getKeyv0fExp9
	}
		const _endVertexZcy2lPL = "GJ2qkYoE6WFJjOixpuusA4NF00LXq2RDD3Q7U";
		const _returnValueqaJCCfE = await _graphCNqYkNu.findEdge(_startVertexczhefD1, _endVertexZcy2lPL)
		const _returnValuetBrOXG = true;
		const _getKeyhxlMnjf = () => { return _returnValuetBrOXG };
		const _startVertexNs0JP2n = {
			"getKey": _getKeyhxlMnjf
	}
		const _returnValueI1wvxWp = await bellmanFord(_graphCNqYkNu, _startVertexNs0JP2n)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedHC62dA = false;
		const _graphiAngXVx = new Graph(_isDirectedHC62dA)
		const _returnValueGmLs5c = true;
		const _getKeyvxFdZXv = () => { return _returnValueGmLs5c };
		const _startVertexxIV7dt = {
			"getKey": _getKeyvxFdZXv
	}
		const _endVertexWGF0D25 = null;
		const _returnValuelhmMmS = await _graphiAngXVx.findEdge(_startVertexxIV7dt, _endVertexWGF0D25)
		const _returnValueT9ClZka = false;
		const _getKeydcHpTJW = () => { return _returnValueT9ClZka };
		const _newVertexa7XNWOq = {
			"getKey": _getKeydcHpTJW
	}
		const _returnValueVsi454 = await _graphiAngXVx.addVertex(_newVertexa7XNWOq)
		const _returnValuenojl1Nw = undefined;
		const _returnValueg2YoGF = () => { return _returnValuenojl1Nw };
		const _getKeycv2NEzU = () => { return _returnValueg2YoGF };
		const _startVertexcMXWXfH = {
			"getKey": _getKeycv2NEzU
	}
		const _returnValueqcWQWcW = await bellmanFord(_graphiAngXVx, _startVertexcMXWXfH)
	});
})