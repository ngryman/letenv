import { exec } from 'child_process'
import test from 'ava'
import lenv from '../'

test.beforeEach(t => {
  process.chdir(__dirname)
})

test('load .env', async t => {
  await lenv()
  t.is(process.env.NODE_ENV, 'test')
  t.is(process.env.WASABI, 'good')
})

test('do nothing if no .env file is present', async t => {
  process.chdir('..')
  try {
    await lenv()
  }
  catch (error) {
    t.is(error.message, 'ENOENT: no such file or directory, open \'.env\'')
  }
  process.chdir(__dirname)
})

test.cb('cli works', t => {
  exec('../cli.js', (err, stdout) => {
    t.is(err, null)
    t.end()
  })
})

test.cb('cli start process passed as argument', t => {
  exec('../cli.js fixtures/print_env.js WASABI', (err, stdout) => {
    t.is(err, null)
    t.is(stdout, 'good\n')
    t.end()
  })
})
