
/**
 * Counter
 */

import Component from '../base'
import template from './template.jade'


export default class Counter extends Component {

  constructor (options) {
    super(options.ref);

    this.value = options.initialValue || 0
    this.html = template({ value: this.value })
    this.$value = this.$el.querySelector('span.value')
  }

  add (value) {
    let newValue = +value || 1

    if (isNaN(newValue)) {
      throw new TypeError('value should be a number')
    }

    this.val += newValue
    return this
  }

  get val () {
    return this.value
  }

  set val (value) {
    this.$value.innerHTML = ++this.value
  }

}
