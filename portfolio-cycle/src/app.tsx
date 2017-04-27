import xs, { Stream } from 'xstream'
import { VNode, DOMSource } from '@cycle/dom'
import Header from './header'
import { Sources, Sinks, Reducer } from './interfaces'

export function App(sources: Sources): Sinks {
    const action$: Stream<Reducer> = intent(sources.DOM)
    const vdom$: Stream<VNode> = view(sources.onion.state$)

    return {
        DOM: vdom$,
        onion: action$
    }
}

function intent(DOM: DOMSource): Stream<Reducer> {
    const init$: Stream<Reducer> = xs.of(() => ({ count: 0 }))

    const add$: Stream<Reducer> = DOM.select('.add').events('click')
        .mapTo(state => ({ ...state, count: state.count + 1 }))

    const subtract$: Stream<Reducer> = DOM.select('.subtract').events('click')
        .mapTo(state => ({ ...state, count: state.count - 1 }))
    return xs.merge(init$, add$, subtract$)
}

function view(state$: Stream<any>): Stream<VNode> {
    const header$ = Header()
    return header$
}
