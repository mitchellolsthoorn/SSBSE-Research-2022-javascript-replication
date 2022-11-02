export {}
import floydWarshall from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/floyd-warshall/floydWarshall.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);
import Graph from "../../benchmark/large_projects/javascript-algorithms/src/data-structures/graph/Graph.js";

describe('floydWarshall', () => {
	it('test for floydWarshall', async () => {
		const _returnValuebRJnGYj = undefined;
		const _getAllVerticesDWkvKqz = () => { return _returnValuebRJnGYj };
		const _returnValueCR3rRBJ = "0ilVtzDi05N2mytgumt9XK5lNbAoCK9a6S5AWXZWLD7zDeFRSslMVPuh2bPbGMfdn4lAoILrd5";
		const _findEdgeJRmoh9 = () => { return _returnValueCR3rRBJ };
		const _graphLnPu5Gg = {
			"getAllVertices": _getAllVerticesDWkvKqz,
		"findEdge": _findEdgeJRmoh9
	}
		const _returnValuedMt1hNz = await floydWarshall(_graphLnPu5Gg)
	});

	it('test for floydWarshall', async () => {
		const _returnValuezgx8Ifb = 7.189325611958658;
		const _getAllVerticeshBENAGk = () => { return _returnValuezgx8Ifb };
		const _arrayValuebK7xz3T = 7.922259280187809;
		const _arrayValueVGTJXji = "gRot6cO5JPkMQuj0ULHqOAlisNYY41dmE21uU9LkAmxXtKBUlaf5jIDwppDSwItr3vVc8pji9dKBAzX4ajSQWPWYgL6";
		const _findEdgewM011V2 = [_arrayValuebK7xz3T, _arrayValueVGTJXji]
		const _graphpxzjkSx = {
			"getAllVertices": _getAllVerticeshBENAGk,
		"findEdge": _findEdgewM011V2
	}
		const _returnValueyJM83Q9 = await floydWarshall(_graphpxzjkSx)
	});

	it('test for floydWarshall', async () => {
		const _isDirectedHIW8ZpG = true;
		const _graphuq3fSKG = new Graph(_isDirectedHIW8ZpG)
		const _returnValuekYTOVym = await _graphuq3fSKG.toString()
		const _returnValuehgOrzl1 = "CXwzo8JIRmeJdjNyozGi2hmSanmFF4G8bnzBobY8E0n6InPED9s4t6l6jhyVQBye";
		const _getKeyb8gV3ZW = () => { return _returnValuehgOrzl1 };
		const _startVertexyExKiu7 = {
			"getKey": _getKeyb8gV3ZW
	}
		const _endVertexLWm5Q4X = null;
		const _returnValueU3w4Ew7 = await _graphuq3fSKG.findEdge(_startVertexyExKiu7, _endVertexLWm5Q4X)
		const _returnValuekMEE4Pe = null;
		const _getKey8jHe53 = () => { return _returnValuekMEE4Pe };
		const _startVertexTfwjEaU = {
			"getKey": _getKey8jHe53
	}
		const _arrayValuegjUXlPo = null;
		const _arrayValuelMfDEg8 = 7.382613075117028;
		const _arrayValueA3dso89 = -9.17482726526819;
		const _arrayValueqhd5VAe = [_arrayValueA3dso89]
		const _arrayValueflEPFkD = [_arrayValuelMfDEg8, _arrayValueqhd5VAe]
		const _endVertexfcrkEVP = [_arrayValuegjUXlPo, _arrayValueflEPFkD]
		const _returnValueD0O9HOj = await _graphuq3fSKG.findEdge(_startVertexTfwjEaU, _endVertexfcrkEVP)
		const _returnValueZt1GioC = await floydWarshall(_graphuq3fSKG)
	});

	it('test for floydWarshall', async () => {
		const _returnValueN81CJgE = null;
		const _arrayValuerJSjL3I = () => { return _returnValueN81CJgE };
		const _arrayValueh4kYoro = "qkCzIJjESRXF4QFp2p94bSubwbJaxAvVhs";
		const _arrayValuem5yi5EG = {
		
	}
		const _arrayValueVZO0wuE = [_arrayValueh4kYoro, _arrayValuem5yi5EG]
		const _returnValuenHe1z6p = [_arrayValuerJSjL3I, _arrayValueVZO0wuE]
		const _getAllVerticesHtT2ciC = () => { return _returnValuenHe1z6p };
		const _arrayValuemnb9LXO = undefined;
		const _arrayValueCT5UK8c = {
		
	}
		const _arrayValueChLTC59 = [_arrayValuemnb9LXO, _arrayValueCT5UK8c]
		const _arrayValuecYum1h9 = "NMHhxtkVEGJA4AMtEMyHAt62bBJHIS3aGTqc6to8";
		const _arrayValuenWBmNZp = 5.5888811984527145;
		const _arrayValueSqTUDN = false;
		const _arrayValuepKJfeuo = [_arrayValuenWBmNZp, _arrayValueSqTUDN]
		const _arrayValueSJTphsc = 0.9761489759031523;
		const _arrayValueoaXhKpU = [_arrayValueChLTC59, _arrayValuecYum1h9, _arrayValuepKJfeuo, _arrayValueSJTphsc]
		const _arrayValuemIbeClv = true;
		const _returnValue1Hp2hQ = [_arrayValueoaXhKpU, _arrayValuemIbeClv]
		const _returnValueJqz003t = () => { return _returnValue1Hp2hQ };
		const _findEdgeOaGd9NV = () => { return _returnValueJqz003t };
		const _graphNMYRcqG = {
			"getAllVertices": _getAllVerticesHtT2ciC,
		"findEdge": _findEdgeOaGd9NV
	}
		const _returnValueJYopMK = await floydWarshall(_graphNMYRcqG)
	});
})