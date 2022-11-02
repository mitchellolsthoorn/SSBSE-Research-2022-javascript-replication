export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _lengthJMLxDr5 = null;
		const _objectcBdmGPs = {
			"length": _lengthJMLxDr5
	}
		const _pathT7yP2lC = {
		
	}
		const _returnValue8fGETD = await hasPath(_objectcBdmGPs, _pathT7yP2lC)
	});

	it('test for hasPath', async () => {
		const _lengthlBIlOAK = null;
		const _objectPDWT6Hi = {
			"length": _lengthlBIlOAK
	}
		const _pathMXBDwdU = "bas6DhbAT3SIrxEORpf9pNJd99AsbXDf5OYLdND6zdTnjDkhg";
		const _returnValuebMAR934 = await hasPath(_objectPDWT6Hi, _pathMXBDwdU)
	});

	it('test for hasPath', async () => {
		const _objectI0oFxGb = undefined;
		const _pathict7m29 = "glca3RwQvoIciR1lNa2Z1CHcQJfxFfqfzy7mYyfMYLssN9UgAqus1ceFXq8tNcxjUYYlgUWxm9W76EE";
		const _returnValueuYOchut = await hasPath(_objectI0oFxGb, _pathict7m29)
	});
})