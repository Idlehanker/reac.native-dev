/**
 * @flow
 */
type Item = {
    id: number,
    key: string, 
    value: string,
}

type SectionItem = {
    key: string, 
    data: Array<String>
}

export type {
    Item,
    SectionItem
}