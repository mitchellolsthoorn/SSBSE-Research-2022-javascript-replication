export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValuePMocQUi = undefined;
		const _objectu1iOoiL = () => { return _returnValuePMocQUi };
		const _pathPAklTo6 = {
		
	}
		const _returnValueAYBjuG8 = await hasPath(_objectu1iOoiL, _pathPAklTo6)
	});

	it('test for hasPath', async () => {
		const _lengthSG6yck6 = true;
		const _objectwDU80sZ = {
			"length": _lengthSG6yck6
	}
		const _pathCxZEraV = "IJhwaZ2EvW";
		const _returnValueeWukx4S = await hasPath(_objectwDU80sZ, _pathCxZEraV)
	});

	it('test for hasPath', async () => {
		const _objectraCU2Re = null;
		const _returnValueC7JpZh = null;
		const _pathYkyizf6 = () => { return _returnValueC7JpZh };
		const _returnValueA0v2rB8 = await hasPath(_objectraCU2Re, _pathYkyizf6)
	});

	it('test for hasPath', async () => {
		const _objectQ19Iz60 = "KrBR2HhhKlDsOiHVBD2hfEiAxIwzFXIPVgdAQukLue34KBes0vUKKvSwgYvLYy2D1";
		const _pathMZ63L9S = "61";
		const _returnValuest2omR8 = await hasPath(_objectQ19Iz60, _pathMZ63L9S)
	});
})