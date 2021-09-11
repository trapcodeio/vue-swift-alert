import {swiftAlert, SwiftAlert} from "./SwiftAlert";

/**
 * Plural version of SwiftAlert for handling multiple Alerts.
 */
export class SwiftAlerts {
    ids: string[];

    constructor(ids: string[]) {
        const alerts: SwiftAlert[] = [];
        ids.forEach((id) => alerts.push(swiftAlert(id)));
        this.ids = ids;
    }

    show(id: string, hideAfter?: number) {
        this.get(id).show(hideAfter);
        return this;
    }

    hide(id: string) {
        this.get(id).hide();
        return this;
    }

    toggle(id: string) {
        this.get(id).toggle();
        return this;
    }

    hideAll(...only: string[]) {
        (only.length ? only : this.ids).forEach((id) => swiftAlert(id).hide());
        return this;
    }

    showAll(...only: string[]) {
        (only.length ? only : this.ids).forEach((id) => swiftAlert(id).show());
        return this;
    }

    get(id: string) {
        if (!this.ids.includes(id)) throw Error(`ID: Not included in alerts: ${id}`);
        return swiftAlert(id);
    }

    toObject() {
        let data: Record<string, SwiftAlert> = {};
        this.ids.forEach((id) => (data[id] = swiftAlert(id)));
        return data;
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
export function swiftAlerts(...ids: string[]) {
    return new SwiftAlerts(ids);
}