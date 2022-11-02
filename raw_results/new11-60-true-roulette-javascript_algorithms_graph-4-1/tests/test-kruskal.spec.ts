export {}
import kruskal from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/kruskal/kruskal.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('kruskal', () => {
	it('test for kruskal', async () => {
		const _isDirectedtBDkhUq = undefined;
		const _returnValueJtNd3wO = null;
		const _getAllEdgesDKnHoqE = () => { return _returnValueJtNd3wO };
		const _returnValueMkw9iuv = undefined;
		const _getAllVerticesD6exojM = () => { return _returnValueMkw9iuv };
		const _graphvUkXH8G = {
			"isDirected": _isDirectedtBDkhUq,
		"getAllEdges": _getAllEdgesDKnHoqE,
		"getAllVertices": _getAllVerticesD6exojM
	}
		const _returnValueqhobnuF = await kruskal(_graphvUkXH8G)
	});

	it('test for kruskal', async () => {
		const _isDirectedHTh2hjH = -7.225520254572761;
		const _returnValuebwGx4rJ = null;
		const _getAllEdgesG0HUOqb = () => { return _returnValuebwGx4rJ };
		const _returnValueCL1DyK6 = null;
		const _getAllVerticesKFyCn4i = () => { return _returnValueCL1DyK6 };
		const _graph4dxFMa = {
			"isDirected": _isDirectedHTh2hjH,
		"getAllEdges": _getAllEdgesG0HUOqb,
		"getAllVertices": _getAllVerticesKFyCn4i
	}
		const _returnValueaNVwjP0 = await kruskal(_graph4dxFMa)
	});

	it('test for kruskal', async () => {
		const _isDirectedZnrNHx = undefined;
		const _arrayValueyvJfUxa = true;
		const _arrayValueF8SvwQD = "koBC9CMCqEHyy8jcCqXfOKMmNNCqBJuRcF4HffcLPfRHIqXpjmUaFakp47Wlm1lyg9OiQRtF3KAFdcxaaFXHvbrmDJ8I5W";
		const _arrayValueIAFlMi = true;
		const _arrayValueiJkWPLc = 2.158410998605218;
		const _arrayValuenee6pJV = [_arrayValueF8SvwQD, _arrayValueIAFlMi, _arrayValueiJkWPLc]
		const _returnValueFuq5l4n = [_arrayValueyvJfUxa, _arrayValuenee6pJV]
		const _getAllEdgesXmyf4vX = () => { return _returnValueFuq5l4n };
		const _returnValueRN8ikKF = null;
		const _getAllVerticesQDNXqiS = () => { return _returnValueRN8ikKF };
		const _graphWq8daAO = {
			"isDirected": _isDirectedZnrNHx,
		"getAllEdges": _getAllEdgesXmyf4vX,
		"getAllVertices": _getAllVerticesQDNXqiS
	}
		const _returnValueVEctEsL = await kruskal(_graphWq8daAO)
	});
})