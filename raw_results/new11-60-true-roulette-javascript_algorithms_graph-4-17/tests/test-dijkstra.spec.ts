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
		const _graphzZ3OlCO = "ETdd4GXYIoIhTrVMW8BDwc6F5ERfFUFONdyucYQCKKrCg3xpKsZxyamLBgvdqeJtcOX6bkP9KGGneUNjUwKmjPQlLlyVDd6";
		const _startVertexP8I2RfI = "8k2HZMWvF868cKzqpCrxQ3YWuQCH710Tb8mKNsU0mMHw4hJp3b5ibQiE6HFqks6IUrG62LAA2";
		const _returnValueFgyWNh2 = await dijkstra(_graphzZ3OlCO, _startVertexP8I2RfI)
	});

	it('test for dijkstra', async () => {
		const _isDirectedVyC2lPX = false;
		const _graphj2BNQ6a = new Graph(_isDirectedVyC2lPX)
		const _returnValueDarqiHO = await _graphj2BNQ6a.reverse()
		const _vertexKeyDLE3rLR = undefined;
		const _returnValuexThcb5J = await _graphj2BNQ6a.getVertexByKey(_vertexKeyDLE3rLR)
		const _valueHmVXOs5 = undefined;
		const _arrayValueIfnHsy7 = undefined;
		const _arrayValuek9EqRor = null;
		const _returnValueh9ZQYZ7 = [_arrayValueIfnHsy7, _arrayValuek9EqRor]
		const _keyCallbacklsNtBrl = () => { return _returnValueh9ZQYZ7 };
		const _startVertexEJzyNoZ = new DisjointSetItem(_valueHmVXOs5, _keyCallbacklsNtBrl)
		const _returnValueGunyfD = await _startVertexEJzyNoZ.getChildren()
		const _returnValuesNJUJ32 = await _startVertexEJzyNoZ.getRank()
		const _returnValueieCvCp3 = await _startVertexEJzyNoZ.getChildren()
		const _returnValueY5Js46p = await dijkstra(_graphj2BNQ6a, _startVertexEJzyNoZ)
	});

	it('test for dijkstra', async () => {
		const _isDirectedrZP4yub = false;
		const _graphgiggRHN = new Graph(_isDirectedrZP4yub)
		const _vertexKeygWOAbxd = "LjtfIssvKDSVrRrtpwG9vjtq";
		const _returnValuepEYj9Q5 = await _graphgiggRHN.getVertexByKey(_vertexKeygWOAbxd)
		const _vertexKeymmfk0YP = 6.979537144595895;
		const _returnValueFWz7hut = await _graphgiggRHN.getVertexByKey(_vertexKeymmfk0YP)
		const _returnValuegCDJUwc = await _graphgiggRHN.getAdjacencyMatrix()
		const _returnValuePAozfsG = await _graphgiggRHN.getWeight()
		const _arrayValueFBmgaw = true;
		const _arrayValueuyGTAb = "T43bZp9YNkSDcrhcHQb91y";
		const _arrayValueFSYvR2b = false;
		const _arrayValuezQqojfK = "pj2Jws4i1qkVKGBIm9GGwjn2si2ToRnxCaitCNqJxtC69DJ07Mq";
		const _arrayValueUSptMmq = false;
		const _returnValueKMigRKp = [_arrayValueFBmgaw, _arrayValueuyGTAb, _arrayValueFSYvR2b, _arrayValuezQqojfK, _arrayValueUSptMmq]
		const _valuewGGoC8Y = () => { return _returnValueKMigRKp };
		const _startVertexT15tSIO = new GraphVertex(_valuewGGoC8Y)
		const _vertexPznrqrd = -2.712621000143568;
		const _returnValuekeXqD7t = await _startVertexT15tSIO.hasNeighbor(_vertexPznrqrd)
		const _edgeDV51565 = false;
		const _returnValuexGe8mnD = await _startVertexT15tSIO.deleteEdge(_edgeDV51565)
		const _returnValuehH8oBpC = await dijkstra(_graphgiggRHN, _startVertexT15tSIO)
	});

	it('test for dijkstra', async () => {
		const _isDirectedEx8lsrE = true;
		const _graphXWrFj2z = new Graph(_isDirectedEx8lsrE)
		const _returnValueldmnwq7 = await _graphXWrFj2z.getVerticesIndices()
		const _returnValuetOUgPn = await _graphXWrFj2z.getAllVertices()
		const _returnValuecSwrDQH = await _graphXWrFj2z.getAllVertices()
		const _valueLK7a1dq = "5tptDHPaUOy5XbKgGcMey76VMflneqhFNzQieXbvrnRkQinhjBxoRD29HdSVbcgKxBWU6fU9b8";
		const _startVertexAHrPe1B = new GraphVertex(_valueLK7a1dq)
		const _returnValueBrULZXz = await _startVertexAHrPe1B.getKey()
		const _edgehYyT67 = -8.66357229050248;
		const _returnValueoxnDdzF = await _startVertexAHrPe1B.deleteEdge(_edgehYyT67)
		const _edgeLqPmLoc = true;
		const _returnValueVUFjJ1K = await _startVertexAHrPe1B.addEdge(_edgeLqPmLoc)
		const _vertexLGxcPfe = -4.387129116498255;
		const _returnValuevP1nqAZ = await _startVertexAHrPe1B.findEdge(_vertexLGxcPfe)
		const _returnValuehP1FCD = await dijkstra(_graphXWrFj2z, _startVertexAHrPe1B)
	});
})