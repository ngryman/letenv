import test from 'ava'
import lenv from './'

test('load .env', async t => {
  await lenv()
  t.is(process.env.NODE_ENV, 'test')
  t.is(process.env.WASABI, 'good')
})

test('do nothing if no .env file is present', async t => {
  process.chdir('/tmp')
  await lenv()
})
