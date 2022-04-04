import { AppAction } from './../redux/actionTypes';
import { Dispatch } from "redux"

export interface PopupProps {
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    onClickButton?: (id: number) => Dispatch<AppAction>,
    children: React.ReactChildren | React.ReactNode
}