import 'babel-polyfill' //This will be replaced based on your babel-env config

import { run } from '@cycle/run'
import { makeDOMDriver } from '@cycle/dom'
import onionify from 'cycle-onionify'

import { Component } from './interfaces'
import { App } from './app'

const main: Component = onionify(App)

const drivers: any = {
    DOM: makeDOMDriver('#app'),
}

run(main, drivers)
