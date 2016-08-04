
/**
 * Component
 */

export default class Component {

  constructor (ref) {
    this.$el = document.querySelector(ref)

    if (!this.$el) {
      throw new Error('options.el must be an existing DOM element reference')
    }
  }

  set html (html) {
    this.$el.innerHTML = html
  }

}
