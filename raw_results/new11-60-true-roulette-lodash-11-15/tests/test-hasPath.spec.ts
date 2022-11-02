export {}
import hasPath from "../../.syntest/instrumented/benchmark/top10npm/lodash/hasPath.js";

describe('hasPath', () => {
	it('test for hasPath', async () => {
		const _returnValuexj6lNp = -3.223525779218419;
		const _objectrXBGCST = () => { return _returnValuexj6lNp };
		const _returnValueuxJ7aDn = "FA9KVlLrd4Rq";
		const _pathgKhdV1 = () => { return _returnValueuxJ7aDn };
		const _returnValuevp7CbM3 = await hasPath(_objectrXBGCST, _pathgKhdV1)
	});

	it('test for hasPath', async () => {
		const _objectygfyAyE = null;
		const _pathrWDVIFy = "NPArWut41ezS4YLWW0997nFkaifcBNIxwJUlln";
		const _returnValuelqCLrB = await hasPath(_objectygfyAyE, _pathrWDVIFy)
	});

	it('test for hasPath', async () => {
		const _objectjHHHUfs = "Me0A4QwWNptxoKzCbXrcXfT";
		const _pathIZbo5h = "5";
		const _returnValueXa1uy99 = await hasPath(_objectjHHHUfs, _pathIZbo5h)
	});
})