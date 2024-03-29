import React from "react";
import { ItemInterface } from "../../../models/items/Item.interface";


type Props = {
    testId: string;
    model: ItemInterface;
    onItemSelect: (item: ItemInterface) => void; 
}

export class ItemComponent extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }

    get cssClass() {
        let css = 'item';
        if (this.props.model?.selected) {
            css += ' selected';
        }
        return css.trim();
    }

    handleItemClick = (item: ItemInterface) => {
        this.props.onItemSelect(item);
    }

    render(): React.ReactNode {
        const {model} = this.props;

        const testId = this.props.testId || 'not-set';

        return (
            <li data-testId ={testId} className={this.cssClass} onClick={() => this.handleItemClick(model)}>

                <div className="selected-indicator">*</div>
                <div className="name">{model.name}</div>
            </li>
        )
    }
}