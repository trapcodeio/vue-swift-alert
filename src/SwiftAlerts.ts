import SwiftAlert from "./SwiftAlert";
import {swiftAlert} from "../index";

/**
 * Plural version of SwiftAlert for handling multiple Alerts.
 */
export default class SwiftAlerts<IDS extends string[] = string[]> {
    ids: string[];
    alerts: Map<string, SwiftAlert>;

    /**
     * Initialize SwiftAlerts.
     * Set ids and alerts map.
     * @param ids
     */
    constructor(ids: IDS) {
        this.ids = ids;
        this.alerts = new Map();

        for (const id of ids) {
            this.alerts.set(id, swiftAlert(id));
        }
    }

    /**
     * Shows the alert corresponding to the given ID.
     *
     * @param {IDS[number]} id - The identifier of the alert to be shown.
     * @param {number} [hideAfter] - Optional duration in milliseconds after which the alert should be hidden.
     * @return {this} The current instance for method chaining.
     */
    show(id: IDS[number], hideAfter?: number) {
        this.get(id).show(hideAfter);
        return this;
    }

    /**
     * Hides the element corresponding to the given ID.
     *
     * @param {string} id - The identifier of the element to be hidden.
     * @return {this} The current instance for method chaining.
     */
    hide(id: IDS[number]) {
        this.get(id).hide();
        return this;
    }

    /**
     * Toggles the visibility of the element corresponding to the given ID.
     *
     * @param {string} id - The identifier of the element to be toggled.
     * @return {this} The current instance for method chaining.
     */
    toggle(id: IDS[number]) {
        this.get(id).toggle();
        return this;
    }

    /**
     * Hides the elements associated with the specified IDs. If no IDs are provided,
     * hides all elements managed by this instance.
     *
     * @param {...string[]} only - An optional array of IDs. If specified,
     *                                   only the elements corresponding to these IDs
     *                                   will be hidden. If not provided, all elements
     *                                   are hidden.
     * @return {this} The current instance, to allow method chaining.
     */
    hideAll(...only: IDS[number][]) {
        for (const id of only.length ? only : this.ids) {
            this.get(id).hide();
        }

        return this;
    }

    /**
     * Shows the elements associated with the specified IDs. If no IDs are provided,
     * shows all elements managed by this instance.
     *
     * @param {...string[]} only - An optional array of IDs. If specified,
     *                                   only the elements corresponding to these IDs
     *                                   will be shown. If not provided, all elements
     *                                   are shown.
     * @return {this} The current instance, to allow method chaining.
     */
    showAll(...only: IDS[number][]) {
        for (const id of only.length ? only : this.ids) {
            this.get(id).show();
        }
        return this;
    }

    /**
     * Retrieves an alert by its identifier.
     *
     * @param {string} id - The identifier of the alert to retrieve. Must be included in the list of valid IDs.
     * @return {SwiftAlert} The alert associated with the provided identifier.
     * @throws {Error} If the provided ID is not included in the list of alerts.
     */
    get(id: IDS[number]) {
        if (!this.ids.includes(id)) throw Error(`ID: Not included in alerts: ${id}`);
        return this.alerts.get(id) as SwiftAlert;
    }

    /**
     * Converts the current instance data into an object mapping IDs to SwiftAlert instances.
     *
     * @return {Record<IDS[number], SwiftAlert>} An object where keys are IDs from the current instance and values are corresponding SwiftAlert instances.
     */
    toObject() {
        let data: Record<string, SwiftAlert> = {};

        for (const id of this.ids) {
            data[id] = swiftAlert(id);
        }

        return data as Record<IDS[number], SwiftAlert>;
    }

    /**
     * Converts the internal collection of IDs into an array of SwiftAlert objects.
     * Retrieves each SwiftAlert object corresponding to the stored IDs and
     * compiles them into a single array.
     *
     * @return {SwiftAlert[]} An array containing SwiftAlert objects.
     */
    toArray() {
        let data: SwiftAlert[] = [];
        for (const id of this.ids) {
            data.push(swiftAlert(id));
        }
        return data;
    }
}