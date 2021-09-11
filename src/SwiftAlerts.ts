import {swiftAlert, SwiftAlert} from "./SwiftAlert";

/**
 * Plural version of SwiftAlert for handling multiple Alerts.
 */
export class SwiftAlerts<IDS extends string[] = string[]> {
    ids: string[];

    constructor(ids: IDS) {
        const alerts: SwiftAlert[] = [];
        ids.forEach((id) => alerts.push(swiftAlert(id)));
        this.ids = ids;
    }

    show(id: IDS[number], hideAfter?: number) {
        this.get(id).show(hideAfter);
        return this;
    }

    hide(id: IDS[number]) {
        this.get(id).hide();
        return this;
    }

    toggle(id: IDS[number]) {
        this.get(id).toggle();
        return this;
    }

    hideAll(...only: IDS[number][]) {
        (only.length ? only : this.ids).forEach((id) => swiftAlert(id).hide());
        return this;
    }

    showAll(...only: IDS[number][]) {
        (only.length ? only : this.ids).forEach((id) => swiftAlert(id).show());
        return this;
    }

    get(id: IDS[number]) {
        if (!this.ids.includes(id)) throw Error(`ID: Not included in alerts: ${id}`);
        return swiftAlert(id);
    }

    toObject() {
        let data: Record<string, SwiftAlert> = {};

        this.ids.forEach((id) => (data[id] = swiftAlert(id)));

        return data as Record<IDS[number], SwiftAlert>;
    }

    toArray() {
        let data: SwiftAlert[] = [];
        this.ids.forEach((id) => data.push(swiftAlert(id)));
        return data;
    }
}


/**
 * Plural version of swiftAlert() for handling multiple Alerts.
 */
export function swiftAlerts<IDS extends string[]>(...ids: IDS) {
    return new SwiftAlerts<IDS>(ids);
}