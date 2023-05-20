import { reactive } from "vue";

/**
 * A Class that represents a basic alert.
 * Extend for more functionalities.
 */
export default class SwiftAlert<
  Meta extends Record<string, any> = Record<string, any>
> {
  // Id of this alert
  id: string;

  // Visibility
  isVisible: boolean;

  // Serves as a store for data related to this alert.
  meta: Meta & { message: string | undefined };

  /**
   * Provide id for alert.
   * @param id
   */
  constructor(id: string = "default") {
    // Set id
    this.id = id;

    // SetVisibility to ref.
    this.isVisible = false;

    // Set Reactive Meta.
    this.meta = {
      message: undefined,
    } as Meta & { message: string | undefined };
  }

  /**
   * Hide.
   */
  hide() {
    this.isVisible = false;
    return this;
  }

  /**
   * Show.
   * @param hideAfter
   */
  show(hideAfter?: number) {
    this.isVisible = true;
    if (hideAfter) setTimeout(() => this.hide(), hideAfter);
    return this;
  }

  /**
   * Toggle Model
   */
  toggle() {
    this.isVisible = !this.isVisible;
    return this;
  }

  /**
   * Get/Set Message.
   * @param message
   */
  message(message?: string) {
    if (message) this.meta.message = message;
    return this.meta.message;
  }
}
