import {Tabs} from './Tabs'

export default {
    title: 'UI/Tabs',
    component: Tabs,
    argTypes: { onClick: { action: 'clicked' } },
}

export const Default = (args) =>  {
    return <div>Hello World</div>
}