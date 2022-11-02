export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValueOhy9MZG = null;
		const _arrayValueXlShKOS = false;
		const _arrayValueiPnnh9e = null;
		const _objectOhP9ac6 = [_arrayValueOhy9MZG, _arrayValueXlShKOS, _arrayValueiPnnh9e]
		const _pathJoT6lu = {
		
	}
		const _returnValueSPbGf32 = await hasPath(_objectOhP9ac6, _pathJoT6lu)
	});

	it('test for hasPath', async () => {
		const _arrayValuealG0GDj = -0.5212566677220138;
		const _arrayValueuqdvUVg = null;
		const _arrayValuetkKg4io = {
		
	}
		const _objectHgVJm79 = [_arrayValuealG0GDj, _arrayValueuqdvUVg, _arrayValuetkKg4io]
		const _returnValueFO8Q2GU = -5.409232962863601;
		const _pathF3z2za = () => { return _returnValueFO8Q2GU };
		const _returnValueBZ6kmiD = await hasPath(_objectHgVJm79, _pathF3z2za)
	});

	it('test for hasPath', async () => {
		const _objectITwo5V4 = null;
		const _pathawMYAd = 1.7587271283674113;
		const _returnValueNyXJHF0 = await hasPath(_objectITwo5V4, _pathawMYAd)
	});

	it('test for hasPath', async () => {
		const _objectfthPD2A = "uMCvUTVmXUE28nihde6T9zRQaiPJ";
		const _pathVjYBA2P = "1";
		const _returnValuepIdBxOF = await hasPath(_objectfthPD2A, _pathVjYBA2P)
	});
})