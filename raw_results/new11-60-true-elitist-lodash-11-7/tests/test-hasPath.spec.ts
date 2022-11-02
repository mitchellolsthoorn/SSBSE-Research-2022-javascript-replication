export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _arrayValueHSz2oIF = -7.6475277971331295;
		const _arrayValueF012Ogo = null;
		const _lengthRkqHdgP = [_arrayValueHSz2oIF, _arrayValueF012Ogo]
		const _objectabhhely = {
			"length": _lengthRkqHdgP
	}
		const _pathOVX8HTh = {
		
	}
		const _returnValueClfnQEr = await hasPath(_objectabhhely, _pathOVX8HTh)
	});

	it('test for hasPath', async () => {
		const _lengthOVoktiO = true;
		const _objectBs97ima = {
			"length": _lengthOVoktiO
	}
		const _pathQulN3J = true;
		const _returnValueVnx2NPr = await hasPath(_objectBs97ima, _pathQulN3J)
	});

	it('test for hasPath', async () => {
		const _objectobf65Vx = null;
		const _returnValuen6pEKb = "zY1SoTmNy6XKgTM8jAQ7fVzJY9Eb7wu7SSqaVgtlPnFw8TEwlsLjuP926a7I6AC2";
		const _paths2kWRz = () => { return _returnValuen6pEKb };
		const _returnValueBxyzGIN = await hasPath(_objectobf65Vx, _paths2kWRz)
	});
})