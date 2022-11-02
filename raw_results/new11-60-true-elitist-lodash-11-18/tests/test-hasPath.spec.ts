export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthDw9eYJ5 = "xC6KORd7kJsjv7fORWFeQoEinPaDCynDgScQbunMylc59nI6JxOX5eXQuSZ6ADWhdqncQ0";
		const _objectfJaqSJ3 = {
			"length": _lengthDw9eYJ5
	}
		const _pathGlGGYc = {
		
	}
		const _returnValueExornO7 = await hasPath(_objectfJaqSJ3, _pathGlGGYc)
	});

	it('test for hasPath', async () => {
		const _arrayValuej4EAWSh = 8.737949820524268;
		const _returnValueyfUivJ5 = undefined;
		const _arrayValueaNzdgf2 = () => { return _returnValueyfUivJ5 };
		const _lengthH1mSjNi = [_arrayValuej4EAWSh, _arrayValueaNzdgf2]
		const _objectr9C7axS = {
			"length": _lengthH1mSjNi
	}
		const _arrayValueDFMUGTn = -8.071921797533832;
		const _pathLjDMD4 = [_arrayValueDFMUGTn]
		const _returnValueCoxSk7H = await hasPath(_objectr9C7axS, _pathLjDMD4)
	});

	it('test for hasPath', async () => {
		const _objectdtgCBq = undefined;
		const _pathLQraObk = 8.18477900573443;
		const _returnValueD4vwT8O = await hasPath(_objectdtgCBq, _pathLQraObk)
	});
})