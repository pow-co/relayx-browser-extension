import { beforeEach }from 'vitest'

beforeEach(async () => {
    global.storageMock = { ENTROPY: '0000000000000000000000000000000000000000000000000000000000000000' } // not ideal: global storageMock requires jest tests to be '--runInBand'
});