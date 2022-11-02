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
		const _arrayValueXk23gG0 = false;
		const _arrayValueToUMs3J = "2nivqENFklc9qOsgVDn5wuDjluRfNy6trGcQff4wGXZkpWkNIebGkcoX3pph";
		const _arrayValueuKiXy1S = false;
		const _arrayValuefpRIpqO = null;
		const _graphcgEB2jc = [_arrayValueXk23gG0, _arrayValueToUMs3J, _arrayValueuKiXy1S, _arrayValuefpRIpqO]
		const _startVertexNp2vLwl = "T3xijgxRevsy3RkCcMiBlcGcBmXbVReFK2DYWtCoNWFod2Kh1L4Ix7TprwECq3ws7RVlz";
		const _returnValueTYUjija = await bellmanFord(_graphcgEB2jc, _startVertexNp2vLwl)
	});

	it('test for bellmanFord', async () => {
		const _graphzFcdujp = "cznuAs14J7WtUpUfclswnWkpX45iN7QB5CGF1K277MKZNANXBRRPRegrRuOo29RsgLUhogKjH";
		const _returnValueM1A4bKK = null;
		const _getKeyvBAjp9z = () => { return _returnValueM1A4bKK };
		const _startVertexyVgae5l = {
			"getKey": _getKeyvBAjp9z
	}
		const _returnValuePRCZXY9 = await bellmanFord(_graphzFcdujp, _startVertexyVgae5l)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedC8y5BxH = true;
		const _graphCXyD268 = new Graph(_isDirectedC8y5BxH)
		const _returnValueiNbpivM = await _graphCXyD268.reverse()
		const _returnValueHgwB7Cf = await _graphCXyD268.getAllEdges()
		const _returnValuetuNPbJr = undefined;
		const _getKeyY8eLvy = () => { return _returnValuetuNPbJr };
		const _startVertexQB27R1 = {
			"getKey": _getKeyY8eLvy
	}
		const _returnValueYCCZubc = await bellmanFord(_graphCXyD268, _startVertexQB27R1)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedrAaPu0 = false;
		const _graphlpUwCaT = new Graph(_isDirectedrAaPu0)
		const _valueuruTvoa = null;
		const _returnValuevwvtyHk = -0.05251588890905268;
		const _keyCallbackPtwKKa1 = () => { return _returnValuevwvtyHk };
		const _newVertexbmjko0w = new DisjointSetItem(_valueuruTvoa, _keyCallbackPtwKKa1)
		const _arrayValue5yRapI = true;
		const _returnValuex4w5XzL = [_arrayValue5yRapI]
		const _addChildN3gJDJf = () => { return _returnValuex4w5XzL };
		const _parentItemH7DsPu6 = {
			"addChild": _addChildN3gJDJf
	}
		const _forceSettingParentChildjxVCMsq = false;
		const _returnValuexQtT5t0 = await _newVertexbmjko0w.setParent(_parentItemH7DsPu6, _forceSettingParentChildjxVCMsq)
		const _returnValueCfRi1uy = await _graphlpUwCaT.addVertex(_newVertexbmjko0w)
		const _returnValueEubp2rV = await _graphlpUwCaT.getAllVertices()
		const _returnValued7QCpoS = await _graphlpUwCaT.getAllVertices()
		const _returnValueCgQJeCE = null;
		const _getKeyMOm6xgF = () => { return _returnValueCgQJeCE };
		const _startVertexDQtikm = {
			"getKey": _getKeyMOm6xgF
	}
		const _returnValueoA1W4CY = await bellmanFord(_graphlpUwCaT, _startVertexDQtikm)
	});
})