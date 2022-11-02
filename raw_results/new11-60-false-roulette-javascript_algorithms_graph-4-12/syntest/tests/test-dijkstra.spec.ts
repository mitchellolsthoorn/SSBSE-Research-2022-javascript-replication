export {}
import dijkstra from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/dijkstra/dijkstra.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";
import DisjointSetItem from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/disjoint-set/DisjointSetItem.js";
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('dijkstra', () => {
	it('test for dijkstra', async () => {
		const _graphNpsunfQ = "omaejfibhTKR3Qaqss";
		const _returnValueqpisHDg = null;
		const _startVertexxmbDuI = () => { return _returnValueqpisHDg };
		const _returnValueU9Ts0yT = await dijkstra(_graphNpsunfQ, _startVertexxmbDuI)
	});

	it('test for dijkstra', async () => {
		const _isDirectedp7QdY01 = false;
		const _graphuIYxyi = new Graph(_isDirectedp7QdY01)
		const _returnValuetIBOTg7 = await _graphuIYxyi.getAdjacencyMatrix()
		const _returnValuezzIee3I = await _graphuIYxyi.getAdjacencyMatrix()
		const _returnValueZxdx9dx = null;
		const _arrayValueygbUAUb = () => { return _returnValueZxdx9dx };
		const _arrayValue42T99R = true;
		const _arrayValuebZ620pt = -0.998673393716409;
		const _arrayValuer7N1DZg = "YtIKCDLu4X1oFSNUJ";
		const _arrayValueOV577r0 = [_arrayValue42T99R, _arrayValuebZ620pt, _arrayValuer7N1DZg]
		const _arrayValuetq5YTaM = [_arrayValueygbUAUb, _arrayValueOV577r0]
		const _arrayValuehBkHkUw = "jWXM9Ns7p8jlNKhvdj3dm6lKm75hX8EX7EB0aFuLYbGR5EgUGRjwhzHAglaYDoSlVyEqqV";
		const _valueHYSxITi = [_arrayValuetq5YTaM, _arrayValuehBkHkUw]
		const _arrayValuegAb4tTb = 3.5975840647485278;
		const _arrayValueMB0xTnJ = undefined;
		const _arrayValuenPWcMS = [_arrayValuegAb4tTb, _arrayValueMB0xTnJ]
		const _arrayValueIKihJrH = undefined;
		const _arrayValuevAnD0PX = null;
		const _arrayValuelfl65i4 = false;
		const _arrayValueFyjUZV = [_arrayValueIKihJrH, _arrayValuevAnD0PX, _arrayValuelfl65i4]
		const _arrayValuewp9rHhR = "mM2dY7pSl4OwDL6S27kda7Noc14";
		const _returnValueckjOkj = true;
		const _arrayValuehFdb8qY = () => { return _returnValueckjOkj };
		const _arrayValueyUaePU9 = [_arrayValueFyjUZV, _arrayValuewp9rHhR, _arrayValuehFdb8qY]
		const _arrayValueO4nyUSm = 0.05834044233343505;
		const _returnValueA7scgb = [_arrayValuenPWcMS, _arrayValueyUaePU9, _arrayValueO4nyUSm]
		const _keyCallbackp8DpKVd = () => { return _returnValueA7scgb };
		const _startVertexfuEBNVT = new DisjointSetItem(_valueHYSxITi, _keyCallbackp8DpKVd)
		const _returnValuegfpPjWZ = await _startVertexfuEBNVT.getChildren()
		const _returnValueJFmU3hC = await _startVertexfuEBNVT.getRank()
		const _returnValueifZO93W = await _startVertexfuEBNVT.isRoot()
		const _returnValueXLvfFY2 = await _startVertexfuEBNVT.getKey()
		const _endVertexHzoaLX = "VCnozW7OCzJbF5xsaw15aKQOIhMvterMSCfdtCWRDo3ueto98KTi2vrIsdmVMgCCtyNo5eHoDY1Lhi";
		const _returnValueC14x9DJ = await _graphuIYxyi.findEdge(_startVertexfuEBNVT, _endVertexHzoaLX)
		const _arrayValueHiHbyIT = "btiDvgcRNc3BVdnylz1QMbLa5VbeNnDK9SAn6pFUUIU64K7HmgrvjpIWymU0lwEdil72c3vMd84RO6uqXPMEmOhZV";
		const _valueTTSl1A8 = [_arrayValueHiHbyIT]
		const _returnValueidhawm = -4.135587275348439;
		const _keyCallbackQnmiHnA = () => { return _returnValueidhawm };
		const _startVertexk03WtB5 = new DisjointSetItem(_valueTTSl1A8, _keyCallbackQnmiHnA)
		const _returnValueHczk6gq = await _startVertexk03WtB5.getKey()
		const _returnValueR2ccth3 = await _startVertexk03WtB5.getRoot()
		const _returnValueLPdpb1I = await _startVertexk03WtB5.getChildren()
		const _returnValueh1tnhGP = await _startVertexk03WtB5.getRoot()
		const _returnValuefh452LF = await dijkstra(_graphuIYxyi, _startVertexk03WtB5)
	});

	it('test for dijkstra', async () => {
		const _isDirectedTJgtaWp = true;
		const _graphT58k228 = new Graph(_isDirectedTJgtaWp)
		const _returnValueavEtVxk = await _graphT58k228.toString()
		const _valuevvPTmNX = "W0qAD";
		const _startVertexEMBiP7X = new GraphVertex(_valuevvPTmNX)
		const _returnValueEzmMUJA = await _startVertexEMBiP7X.getEdges()
		const _returnValueWW8XyCm = null;
		const _arrayValueKQYrQyV = () => { return _returnValueWW8XyCm };
		const _arrayValuevgDaIrP = undefined;
		const _returnValuePBVuWWv = [_arrayValueKQYrQyV, _arrayValuevgDaIrP]
		const _callbackAkP8jiD = () => { return _returnValuePBVuWWv };
		const _returnValueQZZpNmj = await _startVertexEMBiP7X.toString(_callbackAkP8jiD)
		const _edgeCccwZhe = true;
		const _returnValueqFo9uNX = await _startVertexEMBiP7X.deleteEdge(_edgeCccwZhe)
		const _vertexVUwBaif = null;
		const _returnValuefoIZghz = await _startVertexEMBiP7X.hasNeighbor(_vertexVUwBaif)
		const _returnValuemOxiL4 = {
		
	}
		const _callbackSDMeSVY = () => { return _returnValuemOxiL4 };
		const _returnValueQHcERXQ = await _startVertexEMBiP7X.toString(_callbackSDMeSVY)
		const _returnValueLmupiPj = await dijkstra(_graphT58k228, _startVertexEMBiP7X)
	});
})