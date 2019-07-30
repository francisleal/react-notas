import React from 'react';

const FOLDER_OPEN = require('./fa-folder-open.svg');
const SAVE = require('./fa-save.svg');
const PEN = require('./fa-pen.svg');
const TRASH = require('./fa-trash.svg');
const LIST = require('./fa-list.svg');
const SPINNER = require('./fa-spinner.svg');


export const IconFolderOpen = props => {
    return <img alt='faFolderOpen' width={props.tamanho} style={{ verticalAlign: 'text-top' }} src={FOLDER_OPEN} />
}

export const IconSave = props => {
    return <img alt='faSave' width={props.tamanho} color={props.color} src={SAVE} />
}

export const IconPen = props => {
    return <img alt='faPen' width={props.tamanho} src={PEN} />
}

export const IconTrash = props => {
    return <img alt='faTrash' width={props.tamanho} src={TRASH} />
}

export const IconList = props => {
    return <img alt='faTrash' width={props.tamanho} src={LIST} />
}

export const IconSpinner = props => {
    return <img alt='faTrash' className="rotate" width={props.tamanho} src={SPINNER} />
}