export {}
import depthFirstSearch from "../../.syntest/instrumented/benchmark/large_projects/javascript-algorithms/src/algorithms/graph/depth-first-search/depthFirstSearch.js";
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('depthFirstSearch', () => {
	it('test for depthFirstSearch', async () => {
		const _arrayValueL6VH4f7 = true;
		const _arrayValueCktCsUN = "wgKDyeVLUT0SUIRx6V6bWkVJxdu2pFuimxV2pUWlzkZf635vleYtIBpDQUX7WYjIS6P";
		const _arrayValueqEuhXoG = [_arrayValueL6VH4f7, _arrayValueCktCsUN]
		const _arrayValueZeMZdk4 = null;
		const _arrayValueccaFmhb = undefined;
		const _graphP8onxC1 = [_arrayValueqEuhXoG, _arrayValueZeMZdk4, _arrayValueccaFmhb]
		const _startVertex2wEoND = "iWs7ytTig2nKxTKedpkJIKb7";
		const _callbacksIneHwas = 7.763635575828726;
		const _returnValueNJRoDn = await depthFirstSearch(_graphP8onxC1, _startVertex2wEoND, _callbacksIneHwas)
	});

	it('test for depthFirstSearch', async () => {
		const _graphGmLDQZ = null;
		const _startVertexyU5f7C = -3.3133757665524346;
		const _returnValueKngWCi5 = true;
		const _returnValueSlbSqm2 = () => { return _returnValueKngWCi5 };
		const _returnValueIH5mbNq = () => { return _returnValueSlbSqm2 };
		const _callbacksX2YOebx = () => { return _returnValueIH5mbNq };
		const _returnValueC9f4XsL = await depthFirstSearch(_graphGmLDQZ, _startVertexyU5f7C, _callbacksX2YOebx)
	});
})