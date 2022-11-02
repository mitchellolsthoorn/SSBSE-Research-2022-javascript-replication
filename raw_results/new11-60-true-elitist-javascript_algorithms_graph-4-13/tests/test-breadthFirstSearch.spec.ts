export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueVC6JBqK = true;
		const _getNeighborszaRq2H = () => { return _returnValueVC6JBqK };
		const _graphkVGDfpe = {
			"getNeighbors": _getNeighborszaRq2H
	}
		const _startVertexLutdMzA = "FJ8RqpQ3mJbsSpyumiVWDuT2Fe5SgzujJnYw70P54DClSgSKqp0tAbM46lE8VTTjh3srt40skrFWT697TCj8EhbNkvFptW7J6tq";
		const _originalCallbacks1Kotnt = null;
		const _returnValued8O5NWi = await breadthFirstSearch(_graphkVGDfpe, _startVertexLutdMzA, _originalCallbacks1Kotnt)
	});

	it('test for breadthFirstSearch', async () => {
		const _getNeighborsu1zNbCD = -9.68577472213778;
		const _graphepxXk1N = {
			"getNeighbors": _getNeighborsu1zNbCD
	}
		const _startVertexOfkFfuf = false;
		const _originalCallbacksCWYxJST = undefined;
		const _returnValueoehGJi = await breadthFirstSearch(_graphepxXk1N, _startVertexOfkFfuf, _originalCallbacksCWYxJST)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueZyqz2Nr = false;
		const _graphWPv6tw = new GraphVertex(_valueZyqz2Nr)
		const _returnValuebGQpJZF = await _graphWPv6tw.getKey()
		const _arrayValueHz5edb = undefined;
		const _arrayValuef7qNo3f = 0.5347073161616009;
		const _arrayValuewjSoYBi = "ixw5jtvVJwc9vQcMMjDoDhUs4LgvuLE5RIXBRYLUrdNNJW7wwQfAo1pM3LNyeyuMJqo9x9krIih9f4Shzg6kdmBZy2bTG61";
		const _vertexYUcURm7 = [_arrayValueHz5edb, _arrayValuef7qNo3f, _arrayValuewjSoYBi]
		const _returnValueKB7xwo = await _graphWPv6tw.hasNeighbor(_vertexYUcURm7)
		const _startVertexyYc9UGV = {
		
	}
		const _arrayValue7IVz2J = -0.5679570484773127;
		const _arrayValuesqKZbeR = 4.862741011292357;
		const _originalCallbackszpnUJrM = [_arrayValue7IVz2J, _arrayValuesqKZbeR]
		const _returnValueVzfEVo7 = await breadthFirstSearch(_graphWPv6tw, _startVertexyYc9UGV, _originalCallbackszpnUJrM)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueqmtTnUv = "QhDLgaJJZbPwqIp5M";
		const _graphwypQPcH = new GraphVertex(_valueqmtTnUv)
		const _returnValueHAZ9J4B = await _graphwypQPcH.getEdges()
		const _vertexkAWWSvF = undefined;
		const _returnValueSReJKa4 = await _graphwypQPcH.findEdge(_vertexkAWWSvF)
		const _returnValueM93BHbQ = await _graphwypQPcH.getKey()
		const _edgeg3zCprT = "Bh6mJjeUJ59zCket";
		const _returnValuewRubxt1 = await _graphwypQPcH.addEdge(_edgeg3zCprT)
		const _returnValueVFMqGwe = await _graphwypQPcH.getKey()
		const _startVertexkCRPNAj = true;
		const _originalCallbacksiMiS5w = {
		
	}
		const _returnValueIh0H32u = await breadthFirstSearch(_graphwypQPcH, _startVertexkCRPNAj, _originalCallbacksiMiS5w)
	});
})