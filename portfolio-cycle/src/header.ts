import xs, { Stream } from 'xstream'
import { VNode, header, h1, h2 } from '@cycle/dom'

export default function Header(): Stream<VNode> {
    return xs.of(
        header('.main-header', {}, [
            // Profile picture
            // Contact information
            h1('.my-name', {}, 'Michal Vanko'),
            h2('.job-title', {}, 'Software developer')
        ])
    )
}