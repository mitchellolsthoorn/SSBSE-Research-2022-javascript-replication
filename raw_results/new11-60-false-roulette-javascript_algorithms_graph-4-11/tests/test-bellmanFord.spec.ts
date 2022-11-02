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
		const _returnValueiljO2D = undefined;
		const _getAllVerticesSxUoWI = () => { return _returnValueiljO2D };
		const _returnValueaSuY14p = null;
		const _getVertexByKeySQZMpUe = () => { return _returnValueaSuY14p };
		const _returnValuejy9Y1lr = -6.140800593470419;
		const _getNeighborsXcjsRRn = () => { return _returnValuejy9Y1lr };
		const _returnValuecAVvCM = "EjwNxmnFOLMlWyuIYv9g8WOISAB2byPrhg";
		const _findEdgekwuPPEN = () => { return _returnValuecAVvCM };
		const _graphggmC7Mg = {
			"getAllVertices": _getAllVerticesSxUoWI,
		"getVertexByKey": _getVertexByKeySQZMpUe,
		"getNeighbors": _getNeighborsXcjsRRn,
		"findEdge": _findEdgekwuPPEN
	}
		const _startVertex5WFkcY = "7MoR4UzTuZTxxI3pHFrf7z1LIFFP6ob2RJucNnVhUsSR5ilK2yqDXiXkM8USv3ricETp6DaRfioMItSEl1gwlAR";
		const _returnValueiXp6nfR = await bellmanFord(_graphggmC7Mg, _startVertex5WFkcY)
	});

	it('test for bellmanFord', async () => {
		const _graphOKQrFQP = "AxxOThwi1KhRBFU1Jc8SD32oZMpl9xOKDrlswYa9vx7HmeEyENCStA0M4rxPL0SxsZ1CTdQ7enOa6DCw8a";
		const _returnValueAyEOf6j = false;
		const _getKeyybcqWOo = () => { return _returnValueAyEOf6j };
		const _startVertexqU2gKAI = {
			"getKey": _getKeyybcqWOo
	}
		const _returnValued2zxC6 = await bellmanFord(_graphOKQrFQP, _startVertexqU2gKAI)
	});

	it('test for bellmanFord', async () => {
		const _isDirecteddXV9bD = true;
		const _graphzndJ8Ob = new Graph(_isDirecteddXV9bD)
		const _returnValueGjXI9p = await _graphzndJ8Ob.getAllEdges()
		const _returnValueAgUZvj3 = {
		
	}
		const _getKeyep4GogP = () => { return _returnValueAgUZvj3 };
		const _startVertexPQjPULl = {
			"getKey": _getKeyep4GogP
	}
		const _returnValueU7L4bLD = await bellmanFord(_graphzndJ8Ob, _startVertexPQjPULl)
	});

	it('test for bellmanFord', async () => {
		const _isDirectedg9p3iid = false;
		const _graphho0aCV = new Graph(_isDirectedg9p3iid)
		const _vertexKeyqjVNzRK = {
		
	}
		const _returnValuefAHlx4m = await _graphho0aCV.getVertexByKey(_vertexKeyqjVNzRK)
		const _returnValuekc6R3o8 = await _graphho0aCV.getAllVertices()
		const _vertexKeypqLJg9B = "RfBUa4urrwCN6IQ4q6bLqUvpBJzAtloz2V1d7ZieH5598z";
		const _returnValueoBdosoN = await _graphho0aCV.getVertexByKey(_vertexKeypqLJg9B)
		const _valuefL4V5nd = 8.521691213768147;
		const _returnValueT6EPvZE = {
		
	}
		const _keyCallbackRWZwiIi = () => { return _returnValueT6EPvZE };
		const _newVertexXjcHn9v = new DisjointSetItem(_valuefL4V5nd, _keyCallbackRWZwiIi)
		const _returnValueLMfNFbo = await _newVertexXjcHn9v.isRoot()
		const _returnValueDjjCzu8 = await _newVertexXjcHn9v.getKey()
		const _valueW4feHpH = true;
		const _returnValuenhoksiU = true;
		const _keyCallbackxl1TK3z = () => { return _returnValuenhoksiU };
		const _childItemFY16evg = new DisjointSetItem(_valueW4feHpH, _keyCallbackxl1TK3z)
		const _returnValuewGNnFp2 = await _childItemFY16evg.getChildren()
		const _returnValueRD3zrf = await _newVertexXjcHn9v.addChild(_childItemFY16evg)
		const _returnValueDQGxOjc = await _newVertexXjcHn9v.getRoot()
		const _returnValueTgMSQpv = await _graphho0aCV.addVertex(_newVertexXjcHn9v)
		const _returnValueiFHJjpP = "egahbL3cPousVEp";
		const _getKeymAr6u4s = () => { return _returnValueiFHJjpP };
		const _startVertexE43jGA5 = {
			"getKey": _getKeymAr6u4s
	}
		const _returnValueZ79F4V0 = await bellmanFord(_graphho0aCV, _startVertexE43jGA5)
	});
})