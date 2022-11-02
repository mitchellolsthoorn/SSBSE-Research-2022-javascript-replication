export {}
import breadthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/breadth-first-search/breadthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import GraphVertex from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/GraphVertex.js";

describe('breadthFirstSearch', () => {
	it('test for breadthFirstSearch', async () => {
		const _returnValueVdneDDE = -8.004445355180769;
		const _getNeighborsS5YgZe7 = () => { return _returnValueVdneDDE };
		const _graphBfaNQtr = {
			"getNeighbors": _getNeighborsS5YgZe7
	}
		const _arrayValuexD39Nj = -7.043552064502972;
		const _arrayValuestR6Sup = -1.9981674974153503;
		const _returnValueZg4wmx3 = [_arrayValuexD39Nj, _arrayValuestR6Sup]
		const _startVertexlonBXtp = () => { return _returnValueZg4wmx3 };
		const _originalCallbackslVaYlLl = null;
		const _returnValueg6Emj5f = await breadthFirstSearch(_graphBfaNQtr, _startVertexlonBXtp, _originalCallbackslVaYlLl)
	});

	it('test for breadthFirstSearch', async () => {
		const _returnValueyMxXdv1 = true;
		const _getNeighborsIk8D34i = () => { return _returnValueyMxXdv1 };
		const _graphZ9LqJK9 = {
			"getNeighbors": _getNeighborsIk8D34i
	}
		const _startVertexz6cA2We = null;
		const _arrayValueAebm8RD = null;
		const _arrayValueKUNFcO8 = undefined;
		const _arrayValueXvwOSr8 = undefined;
		const _originalCallbacksO8m7lyi = [_arrayValueAebm8RD, _arrayValueKUNFcO8, _arrayValueXvwOSr8]
		const _returnValueqtMscyM = await breadthFirstSearch(_graphZ9LqJK9, _startVertexz6cA2We, _originalCallbacksO8m7lyi)
	});

	it('test for breadthFirstSearch', async () => {
		const _arrayValueX4XYlx = true;
		const _arrayValuewMZ2vvN = 3.9630011637185003;
		const _arrayValuet8CtyXv = "TWwNFoe2I6";
		const _returnValuejlT4Hkq = [_arrayValueX4XYlx, _arrayValuewMZ2vvN, _arrayValuet8CtyXv]
		const _getNeighborsrIQC4ly = () => { return _returnValuejlT4Hkq };
		const _graphQWckyzU = {
			"getNeighbors": _getNeighborsrIQC4ly
	}
		const _startVertexkvEopsv = undefined;
		const _originalCallbacksH2advR = undefined;
		const _returnValueeI5UFR = await breadthFirstSearch(_graphQWckyzU, _startVertexkvEopsv, _originalCallbacksH2advR)
	});

	it('test for breadthFirstSearch', async () => {
		const _valueVVLKpnp = "Yk24G859o2s7WdMa37UxeSgwS7ixjkMeKbPPP3v4dtlEl9r";
		const _graphYlk6P4t = new GraphVertex(_valueVVLKpnp)
		const _returnValueuIE8UCM = await _graphYlk6P4t.getNeighbors()
		const _returnValueZ7DSl8r = null;
		const _callbackyKD4ZFE = () => { return _returnValueZ7DSl8r };
		const _returnValuex7LWYlZ = await _graphYlk6P4t.toString(_callbackyKD4ZFE)
		const _returnValueloyr7xE = await _graphYlk6P4t.getKey()
		const _returnValueAbJYh8I = await _graphYlk6P4t.getNeighbors()
		const _returnValuenBHDl5Z = await _graphYlk6P4t.getKey()
		const _startVertexRsZIKo = "zAVqVcgZH";
		const _originalCallbacksXQPaDsY = []
		const _returnValueSOCnjaT = await breadthFirstSearch(_graphYlk6P4t, _startVertexRsZIKo, _originalCallbacksXQPaDsY)
	});
})