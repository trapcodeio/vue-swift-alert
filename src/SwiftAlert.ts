import {reactive, Ref, ref} from "vue";

/**
 * Concept: Basically an alert
 */
const alerts: Record<string, SwiftAlert<any>> = {};

/**
 * A Class that represents a basic alert.
 * Extend for more functionalities.
 */
export class SwiftAlert<Meta extends Record<string, any> = Record<string, any>> {
    // Id of this alert
    id: string;

    // Visibility
    isVisible: Ref<boolean>;

    // Serves as a store for data related to this alert.
    meta: Meta & {message: string | undefined};

    /**
     * Provide id for alert.
     * @param id
     */
    constructor(id: string = "default") {
        // Set id
        this.id = id;

        // SetVisibility to ref.
        this.isVisible = ref(false);

        // Set Reactive Meta.
        this.meta = reactive({
            message: undefined
        }) as (Meta & {message: string | undefined});


    }

    /**
     * Hide.
     */
    hide() {
        this.isVisible.value = false;
        return this;
    }

    /**
     * Show.
     * @param hideAfter
     */
    show(hideAfter?: number) {
        console.log(`Show: ${this.id}`)

        this.isVisible.value = true;
        if (hideAfter) setTimeout(() => this.hide(), hideAfter);
        return this;
    }

    /**
     * Toggle Model
     */
    toggle() {
        this.isVisible.value = !this.isVisible.value;
        return this;
    }

    /**
     * Destroy, removes alerts from memory.
     */
    destroy(id: string) {
        delete alerts[id];
    }


    /**
     * Get/Set Message.
     * @param message
     */
    message(message?: string){
        if(message) this.meta.message = message;
        return this.meta.message;
    }
}


/**
 * Create new Swift Alert or return existing alert for ID provided..
 */
export function swiftAlert<Meta extends Record<string, any>>(id: string = "default") {
    // Return alert if exists already.
    if (alerts[id]) return alerts[id] as SwiftAlert<Meta>;

    // Initialize new alert and save to alerts memory variable.
    alerts[id] = new SwiftAlert<Meta>(id);

    // Return SwiftAlert Instance.
    return alerts[id] as SwiftAlert<Meta>;
}
