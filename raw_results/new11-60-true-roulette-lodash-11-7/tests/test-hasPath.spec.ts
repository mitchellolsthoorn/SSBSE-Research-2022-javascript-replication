export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValueuaK6Rlp = {
		
	}
		const _objectI5H2aJ3 = () => { return _returnValueuaK6Rlp };
		const _pathPXiplY5 = {
		
	}
		const _returnValueq8B16P = await hasPath(_objectI5H2aJ3, _pathPXiplY5)
	});

	it('test for hasPath', async () => {
		const _object1czTod = null;
		const _pathLvY7Lbz = "oCIiSyjXxogIPlqucXkOiG1DmZMSBklYKDYab7FuApwoMxbIyTep3zTn2uQr7FhNvHf4V1y";
		const _returnValuefZ0kblK = await hasPath(_object1czTod, _pathLvY7Lbz)
	});

	it('test for hasPath', async () => {
		const _objectVIAWLok = {
		
	}
		const _returnValuekdHnUH = null;
		const _pathE1YU1m = () => { return _returnValuekdHnUH };
		const _returnValueQtUDrV = await hasPath(_objectVIAWLok, _pathE1YU1m)
	});
})