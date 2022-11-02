export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _graphTsunSX4 = "bePB1toIS8m1H438iwX22h2V4BsqMAs29xABHwhB1JpLR6voKl5HYIrjp2DZWQiPyTD7JjloCE";
		const _returnValuevx46ev8 = -1.5013290665773393;
		const _startVertexuv5OD8L = () => { return _returnValuevx46ev8 };
		const _returnValueMtbjmsl = await bellmanFord(_graphTsunSX4, _startVertexuv5OD8L)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedKc4orX5 = false;
		const _graphgwKxrdH = new Graph(_isDirectedKc4orX5)
		const _returnValuewCTvhB7 = undefined;
		const _getKeyCLW0aBL = () => { return _returnValuewCTvhB7 };
		const _startVertexamhONh = {
			"getKey": _getKeyCLW0aBL
	}
		const _endVertex2noRdh = []
		const _returnValueREMIh4 = await _graphgwKxrdH.findEdge(_startVertexamhONh, _endVertex2noRdh)
		const _returnValueCAs1BIO = await _graphgwKxrdH.getVerticesIndices()
		const _returnValueEK8aTLD = null;
		const _arrayValueeBeLlMC = () => { return _returnValueEK8aTLD };
		const _arrayValueHRxc7te = "5hGuDd8ECSPyeLEczknAfafqtHIQVnKzRrO2qKRkDN42T6oDjZPDyfLMZ2IQ6R7KmngKy1DhE32";
		const _arrayValueVpgIJaB = -2.8282842476924888;
		const _returnValueh3G827 = [_arrayValueeBeLlMC, _arrayValueHRxc7te, _arrayValueVpgIJaB]
		const _getKeyRiOGjzg = () => { return _returnValueh3G827 };
		const _startVertexLqdKV4e = {
			"getKey": _getKeyRiOGjzg
	}
		const _returnValueooAwf48 = await bellmanFord(_graphgwKxrdH, _startVertexLqdKV4e)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedDo7wnus = false;
		const _graphNJFgLLV = new Graph(_isDirectedDo7wnus)
		const _returnValuek5d8AAL = await _graphNJFgLLV.toString()
		const _returnValueXocbIgO = "54wIzm8pjehGmVk4bwCreRQV93Lbm1Yu1f4fzkRgVYzUayZ3YZ";
		const _getKeyZA3IS6 = () => { return _returnValueXocbIgO };
		const _newVertexCLAU8g5 = {
			"getKey": _getKeyZA3IS6
	}
		const _returnValueiOjvExC = await _graphNJFgLLV.addVertex(_newVertexCLAU8g5)
		const _returnValuetpNZCOo = undefined;
		const _getKeya2XdZ3X = () => { return _returnValuetpNZCOo };
		const _startVertexsxVg5Aq = {
			"getKey": _getKeya2XdZ3X
	}
		const _returnValueKC8ScXD = await bellmanFord(_graphNJFgLLV, _startVertexsxVg5Aq)
	});
})