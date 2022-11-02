export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _returnValuef7VLq6F = undefined;
		const _returnValuektWAYVI = () => { return _returnValuef7VLq6F };
		const _returnValuex7Ydrhl = () => { return _returnValuektWAYVI };
		const _getAllVerticesXvj7Xw6 = () => { return _returnValuex7Ydrhl };
		const _arrayValueP7ObtHy = undefined;
		const _arrayValueK29NB7 = null;
		const _arrayValueYzjMU98 = false;
		const _returnValueoyscwze = [_arrayValueP7ObtHy, _arrayValueK29NB7, _arrayValueYzjMU98]
		const _returnValuevhXBI2j = () => { return _returnValueoyscwze };
		const _getVertexByKeykUCWMNY = () => { return _returnValuevhXBI2j };
		const _returnValueZRoyJCn = undefined;
		const _getNeighborsKGdnK4a = () => { return _returnValueZRoyJCn };
		const _returnValueKb2QMu2 = "BNGCO";
		const _arrayValuegHWLmnF = () => { return _returnValueKb2QMu2 };
		const _returnValueA5eVaP7 = [_arrayValuegHWLmnF]
		const _findEdgeMLQKjh = () => { return _returnValueA5eVaP7 };
		const _graphiOAgVCn = {
			"getAllVertices": _getAllVerticesXvj7Xw6,
		"getVertexByKey": _getVertexByKeykUCWMNY,
		"getNeighbors": _getNeighborsKGdnK4a,
		"findEdge": _findEdgeMLQKjh
	}
		const _startVertexYuTToC = true;
		const _returnValuel4fPKJW = await bellmanFord(_graphiOAgVCn, _startVertexYuTToC)
	});

	it('test for bellmanFord', async () => {
		const _returnValueEcXd2rM = "RQS51HGEFQpKUh9tsE92vuJIRDuiftFeIxm5d0fCoHKxoavizhwfJpvpItDzfJA7JD2vELh4ICrWBuFMywXou9XxOim7IF";
		const _getAllVerticesyPohi0J = () => { return _returnValueEcXd2rM };
		const _returnValueivtYtb3 = "oejTSkkBSJu";
		const _getVertexByKeyE1DUOQr = () => { return _returnValueivtYtb3 };
		const _returnValueHELwVAD = null;
		const _getNeighborsQumGBgb = () => { return _returnValueHELwVAD };
		const _returnValueAyjiwuf = null;
		const _findEdgeuiYbkOS = () => { return _returnValueAyjiwuf };
		const _graphwoCX7o = {
			"getAllVertices": _getAllVerticesyPohi0J,
		"getVertexByKey": _getVertexByKeyE1DUOQr,
		"getNeighbors": _getNeighborsQumGBgb,
		"findEdge": _findEdgeuiYbkOS
	}
		const _returnValuesu5iJmg = 6.898788610546809;
		const _getKeyLeVrsTv = () => { return _returnValuesu5iJmg };
		const _startVertex4Q2v8T = {
			"getKey": _getKeyLeVrsTv
	}
		const _returnValueSJ1cc8K = await bellmanFord(_graphwoCX7o, _startVertex4Q2v8T)
	});

	it('test for bellmanFord', async () => {
		const _returnValueJGljjis = []
		const _getAllVerticesLNQijan = () => { return _returnValueJGljjis };
		const _arrayValueTDCLjTP = null;
		const _getVertexByKeyznMDGBg = [_arrayValueTDCLjTP]
		const _arrayValues8DbIJV = undefined;
		const _arrayValuenI1pA4E = {
		
	}
		const _returnValuexTCM2du = [_arrayValues8DbIJV, _arrayValuenI1pA4E]
		const _getNeighborsbeod8zG = () => { return _returnValuexTCM2du };
		const _returnValueg0lNpG = {
		
	}
		const _findEdgekpjlKhB = () => { return _returnValueg0lNpG };
		const _graphnsXJsge = {
			"getAllVertices": _getAllVerticesLNQijan,
		"getVertexByKey": _getVertexByKeyznMDGBg,
		"getNeighbors": _getNeighborsbeod8zG,
		"findEdge": _findEdgekpjlKhB
	}
		const _returnValueb5iRta = false;
		const _getKeyT0R72g7 = () => { return _returnValueb5iRta };
		const _startVertexltBigjJ = {
			"getKey": _getKeyT0R72g7
	}
		const _returnValueLM8asws = await bellmanFord(_graphnsXJsge, _startVertexltBigjJ)
	});
})