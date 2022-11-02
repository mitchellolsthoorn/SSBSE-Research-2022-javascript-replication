export {}
import bellmanFord from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/bellman-ford/bellmanFord.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";

describe('bellmanFord', () => {
	it('test for bellmanFord', async () => {
		const _arrayValuedfxPFYV = {
		
	}
		const _returnValuenaqTqMJ = [_arrayValuedfxPFYV]
		const _getAllVerticeskP7sgIG = () => { return _returnValuenaqTqMJ };
		const _returnValueTLSzwF = true;
		const _getVertexByKeytxlG7Jw = () => { return _returnValueTLSzwF };
		const _getNeighborsMBYZP4n = -3.3094963591604643;
		const _returnValueRexUvUd = undefined;
		const _findEdgeUh6pkbq = () => { return _returnValueRexUvUd };
		const _graphyIpCjv = {
			"getAllVertices": _getAllVerticeskP7sgIG,
		"getVertexByKey": _getVertexByKeytxlG7Jw,
		"getNeighbors": _getNeighborsMBYZP4n,
		"findEdge": _findEdgeUh6pkbq
	}
		const _returnValueXjawHrt = null;
		const _getKeyP4k38PI = () => { return _returnValueXjawHrt };
		const _startVertexFDXdUgy = {
			"getKey": _getKeyP4k38PI
	}
		const _returnValuePvFVCld = await bellmanFord(_graphyIpCjv, _startVertexFDXdUgy)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedSiLMS0S = false;
		const _graphL1dLhI9 = new Graph(_isDirectedSiLMS0S)
		const _returnValuesSgBA2S = await _graphL1dLhI9.getAdjacencyMatrix()
		const _returnValuev2okZ9u = await _graphL1dLhI9.getWeight()
		const _returnValueFwWlCgM = await _graphL1dLhI9.reverse()
		const _returnValuecSTie1 = await _graphL1dLhI9.getWeight()
		const _returnValuevCAiD5b = false;
		const _getKeyFETfBQt = () => { return _returnValuevCAiD5b };
		const _newVertexzNNJLM7 = {
			"getKey": _getKeyFETfBQt
	}
		const _returnValueJTWtpv8 = await _graphL1dLhI9.addVertex(_newVertexzNNJLM7)
		const _returnValueacXxO7 = 3.3922082815470045;
		const _getKeymlvEuf0 = () => { return _returnValueacXxO7 };
		const _startVertexuJLJgwK = {
			"getKey": _getKeymlvEuf0
	}
		const _returnValuenP46Mwd = await bellmanFord(_graphL1dLhI9, _startVertexuJLJgwK)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedOsHAya = true;
		const _graphtDD3j4 = new Graph(_isDirectedOsHAya)
		const _arrayValuebRgW8IG = undefined;
		const _arrayValueUk42YZM = true;
		const _arrayValuenhLJvAP = false;
		const _arrayValueDZcFxzN = "l9qdytm";
		const _arrayValuelQ5tvce = null;
		const _arrayValueBfOaIqn = [_arrayValuenhLJvAP, _arrayValueDZcFxzN, _arrayValuelQ5tvce]
		const _valuehXLqiWl = [_arrayValuebRgW8IG, _arrayValueUk42YZM, _arrayValueBfOaIqn]
		const _returnValueBCRL4As = undefined;
		const _keyCallbacktEIE55q = () => { return _returnValueBCRL4As };
		const _newVertexbRkG1Tg = new DisjointSetItem(_valuehXLqiWl, _keyCallbacktEIE55q)
		const _returnValueaD3UVjy = await _newVertexbRkG1Tg.getKey()
		const _returnValueZHX9kCe = await _graphtDD3j4.addVertex(_newVertexbRkG1Tg)
		const _valueQjjZUhc = false;
		const _returnValue423pVh = {
		
	}
		const _keyCallbackkoPQUVc = () => { return _returnValue423pVh };
		const _newVertexa2QZdoH = new DisjointSetItem(_valueQjjZUhc, _keyCallbackkoPQUVc)
		const _returnValueOv3a9FU = await _newVertexa2QZdoH.getKey()
		const _returnValuetqVtCqp = await _newVertexa2QZdoH.isRoot()
		const _returnValueJj7Mbk = null;
		const _valuevJkXjEN = () => { return _returnValueJj7Mbk };
		const _returnValueKNfN5jj = {
		
	}
		const _keyCallbackO5isXu0 = () => { return _returnValueKNfN5jj };
		const _parentItemt07QwuU = new DisjointSetItem(_valuevJkXjEN, _keyCallbackO5isXu0)
		const _returnValuel5nfT1N = await _parentItemt07QwuU.getRoot()
		const _arrayValuedk9JSc = 6.516518575843666;
		const _forceSettingParentChildMj7rtTX = [_arrayValuedk9JSc]
		const _returnValueUMukJOe = await _newVertexa2QZdoH.setParent(_parentItemt07QwuU, _forceSettingParentChildMj7rtTX)
		const _returnValuen0jBAvs = await _newVertexa2QZdoH.isRoot()
		const _returnValueFQFh8oF = await _graphtDD3j4.addVertex(_newVertexa2QZdoH)
		const _valuekLuROuA = "VOIlvMd8khGf";
		const _returnValueSZbUWF4 = 9.568268751136092;
		const _keyCallbackPv7gZP2 = () => { return _returnValueSZbUWF4 };
		const _startVertexTYx1Qg8 = new DisjointSetItem(_valuekLuROuA, _keyCallbackPv7gZP2)
		const _returnValuerXPkwXz = await _startVertexTYx1Qg8.getRank()
		const _returnValueCNBa3sV = await bellmanFord(_graphtDD3j4, _startVertexTYx1Qg8)
	});
})